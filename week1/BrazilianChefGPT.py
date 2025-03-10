# from openai import OpenAI
# client = OpenAI()


import os
from openai import OpenAI
client = OpenAI(
    api_key=os.environ["OPENAI_API_KEY"]
)


# Sets the chatbot’s personality as a Brazilian grandma who is warm and experienced in traditional Brazilian cooking.
# Encourages the AI to use friendly phrases (e.g., "Meu anjo", "Ah, que delícia!") and family-centered storytelling.
# Defines its expertise in traditional Brazilian cuisine.
messages = [
    {
        "role": "system",
        "content": (
            "You are an old and loving Brazilian grandma who loves to cook classic Brazilian dishes. "
            "You specialize in traditional recipes like feijoada, moqueca, pão de queijo, and brigadeiro, always bringing warmth and family traditions into your cooking. "
            "You share your knowledge with love and care, using phrases like 'Meu anjo' and 'Ah, que delícia!' "
            "Your stories are full of memories from family gatherings, with traditions passed down through generations. "
            "You offer thoughtful advice to make each dish perfect, focusing on traditional techniques and comforting flavors."
        ),
    }
]

# Define the grandma's expertise in responding to three specific types of user inputs
# Three specific response types:
# Ingredient-based suggestions → AI suggests Brazilian dishes based on given ingredients.
# Recipe requests → AI provides detailed step-by-step recipes.
# Recipe critiques → AI gives gentle feedback with tips for improvement.
# Ensures the AI only responds to relevant cooking-related inputs.
messages.append(
    {
        "role": "system",
        "content": (
            "Respond to three specific types of user inputs with particular expertise:\n\n"
            "1. **Ingredient-based dish suggestions**: If a user provides a set of ingredients, suggest the names of a few classic dishes they could make, especially using Brazilian ingredients like black beans, cassava, or tropical fruits. "
            "Your goal is to offer comforting and traditional options, without providing full recipes. Include flavor tips if relevant.\n\n"
            "2. **Recipe requests for specific dishes**: If the user asks for a recipe for a specific classic dish, provide a detailed, step-by-step recipe. "
            "Focus on Brazilian cooking techniques and traditional methods to make the recipe feel warm and inviting. "
            "For Brazilian classics, include background stories or family traditions to enrich the experience.\n\n"
            "3. **Recipe critiques and improvement suggestions**: If the user provides a recipe they've tried, offer gentle and constructive critique. "
            "Suggest tips for improvement, such as adjusting seasonings, cooking times, or ingredient pairings, while staying true to Brazilian cuisine.\n\n"
            "In all responses, interact warmly, like a grandmother guiding you in the kitchen, helping each user feel the joy of traditional Brazilian cooking. "
            "If the user's input doesn't match these scenarios, kindly decline and ask for a valid request."
        ),
    }
)

# Receiving User Input
dish = input("Enter ingredients, a dish name, or a recipe for critique:\n")
# Prompts the user to enter either:
# A list of ingredients (for dish suggestions),
# A dish name (for a full recipe),
# A recipe critique request (to improve an existing recipe).

# Identifying the Type of User Input
ingredient_keywords = [",", " and ", " with "]
recipe_keywords = ["recipe", "method", "steps", "instructions"]
critique_keywords = ["improve", "fix", "feedback", "critique", "enhance"]

# Defines keyword lists to categorize user input:
# ingredient_keywords → Used to detect ingredient lists.
# recipe_keywords → Used to identify recipe requests.
# critique_keywords → Used to detect requests for recipe feedback.



# Case 1: Ingredient-based suggestion
# Checks if the input contains ingredient-related keywords.
# If true, adds a user message asking for dish suggestions.
if any(keyword in dish.lower() for keyword in ingredient_keywords):
    messages.append({
        "role": "user",
        "content": f"I have {dish}. What classic dishes could I make with these ingredients?"
    })
    
# Case 2: Recipe critique
# Checks if the input contains critique-related keywords.
# If true, adds a user message requesting feedback.
elif any(keyword in dish.lower() for keyword in critique_keywords):
    messages.append({
        "role": "user",
        "content": f"I tried this recipe for {dish}. Could you give me some tips to improve it?"
    })
    
# Case 3: Specific dish recipe request
# Checks if the input is a recipe request.
# If true, asks the AI for a full step-by-step recipe.
elif any(keyword in dish.lower() for keyword in recipe_keywords):
    messages.append({
        "role": "user",
        "content": f"Suggest me a detailed recipe and preparation steps for making {dish}."
    })

# If the input doesn’t match any category, it displays an error message and suggests valid formats.
else:
    print("\n🚨 Invalid input! Please enter either:\n"
          "- A list of ingredients (e.g., 'chicken, rice, onions')\n"
          "- A dish name (e.g., 'feijoada recipe')\n"
          "- A recipe critique request (e.g., 'I made feijoada, how can I improve it?')\n")



# Calls the OpenAI API with the selected GPT-4o model.
# Uses stream=True to receive responses in real-time.

model = "gpt-4o"

stream = client.chat.completions.create(
    model=model,
    messages=messages,
    stream=True,
)

# Displaying the AI Response
# Iterates over the response stream and prints it as it arrives.
# Saves the response in collected_messages for context retention.

collected_messages = []
for chunk in stream:
    chunk_message = chunk.choices[0].delta.content or ""
    print(chunk_message, end="")
    collected_messages.append(chunk_message)

# Store the response in the message history
# Adds the AI’s response to the conversation history to maintain context.
messages.append({"role": "system", "content": "".join(collected_messages)})

# Loop to continue interacting with the user
# Creates an infinite loop where the user can keep interacting with the AI.
# Each new question updates the conversation history.
# The AI remembers past interactions, creating a dynamic and engaging conversation.
while True:
    print("\n")
    user_input = input("Ask grandma another question (ingredients, recipe, critique):\n")
    messages.append({"role": "user", "content": user_input})
    
    # Call the API to generate a response based on the new input
    stream = client.chat.completions.create(
        model=model,
        messages=messages,
        stream=True,
    )
    
    collected_messages = []
    for chunk in stream:
        chunk_message = chunk.choices[0].delta.content or ""
        print(chunk_message, end="")
        collected_messages.append(chunk_message)

    messages.append({"role": "system", "content": "".join(collected_messages)})

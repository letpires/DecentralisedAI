import os
from openai import OpenAI

# Ensure API key is set
api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    raise ValueError("API key is missing. Please set the OPENAI_API_KEY environment variable.")

# Initialize OpenAI client
client = OpenAI(api_key=api_key)

# Initialize conversation history
messages = [
    {
        "role": "system",
        "content": "You are an ex italian researcher in AI and Decentralized Finance from Puglia in Italy, now you'te ritared and work as chef and helps people"
                   "by suggesting detailed recipes for dishes they want to cook. You can also provide tips and tricks. You love use methapor linked to AI and blockchain for the recipes"
                   "for cooking and food preparation."
    },
    {
        "role": "system",
        "content": "Your client can ask three different request: a. Ingredient-based dish suggestions."
                    "b. Recipe requests for specific dishes. c. Recipe critiques and improvement suggestions "
                    "If the user's initial input doesn't match these scenarios, politely decline and prompt for a valid request."
                    "For ingredient inputs: Suggest only dish names without full recipes."
                    "For dish name inputs: Provide a detailed recipe."
                    "For recipe inputs: Offer a constructive critique with suggested improvements."
    }
]

# Get user input
dish = input("Buongiorno! How Can I help you? I'm specialized in Ingredient-based dish suggestions, Recipe requests for specific dishes and Recipe critiques and improvement suggestions  :\n")
messages.append({"role": "user", "content": f"Suggest me a detailed recipe for {dish}"})

# Request OpenAI response
model = "gpt-4o-mini"
stream = client.chat.completions.create(model=model, messages=messages, stream=True)

# Collect and print response in real-time
collected_messages = []
for chunk in stream:
    chunk_message = chunk.choices[0].delta.content or ""
    print(chunk_message, end="")
    collected_messages.append(chunk_message)

# Store assistant response
messages.append({"role": "assistant", "content": "".join(collected_messages)})

# Start conversation loop
while True:
    print("\n")
    user_input = input("You: ")

    # Exit condition
    if user_input.lower() == "exit":
        print("Goodbye!")
        break

    # Append user message
    messages.append({"role": "user", "content": user_input})

    # Request response
    stream = client.chat.completions.create(model=model, messages=messages, stream=True)

    collected_messages = []
    for chunk in stream:
        chunk_message = chunk.choices[0].delta.content or ""
        print(chunk_message, end="")
        collected_messages.append(chunk_message)

    # Store assistant response
    messages.append({"role": "assistant", "content": "".join(collected_messages)})

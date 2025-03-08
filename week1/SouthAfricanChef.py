
from openai import OpenAI
import os
import random
from importlib import import_module

# South African Chef Implementation
CHEF_NAME = "South African Chef"
CHEF_PROMPT = (
    """
    You are an experienced chef from South Africa that helps people by suggesting detailed recipes for dishes they want to cook. 
    Providing detailed recipes for traditional South African meals and offering expert cooking tips.
    Your responses are engaging, precise, clear, and full of culinary wisdom."

    Your client is going to ask for a recipe about a specific dish. 
    If you do not recognize the dish, you should not try to generate a recipe for it. 
    Do not answer a recipe if you do not understand the name of the dish. 
    If you know the dish, you must answer directly with a detailed recipe for it. 
    If you don't know the dish, you should answer that you don't know the dish and end the conversation.
    """
)

def get_random_chef():
    chef_modules = ["south_african_chef", "italian_chef", "brazilian_grandma"]  # Add more chef module names here
    selected_chef = random.choice(chef_modules)
    return CHEF_NAME, CHEF_PROMPT  # Hardcoded but aybe we can import others into here, or use some other joint module


def multicultural_chef_assistant():
    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    messages = []
    
    while True:
        user_input = input("How can I assist you with your cooking today? (Type 'exit' to quit)\n")
        if user_input.lower() == "exit":
            print("Goodbye! Enjoy the meal boss!")
            break
        
        chef_name, chef_prompt = get_random_chef()
        messages.append({"role": "system", "content": chef_prompt})
        messages.append({"role": "user", "content": user_input})
        
        model = "gpt-4o-mini"
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            stream=True,
        )
        
        print(f"\n Chef responding is --> {chef_name}:")
        collected_messages = []
        for chunk in response:
            chunk_message = chunk.choices[0].delta.content or ""
            print(chunk_message, end="")
            collected_messages.append(chunk_message)
        
        messages.append({"role": "system", "content": "".join(collected_messages)})

if __name__ == "__main__":
    multicultural_chef_assistant()

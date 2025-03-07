# Cultural Chef GPT 👩‍🍳

A chatbot that simulates a cultural chef specialized in traditional cuisine! This implementation features a Brazilian grandmother, but you can adapt it to any culture by modifying the system prompts in the code.

## Features

The chef can:
- Suggest dishes based on available ingredients
- Provide detailed recipes for traditional dishes
- Offer tips to improve your cooking

## Prerequisites

- Python 3.x
- OpenAI API key

## Setup

1. Navigate to the project folder:
```bash
cd week1
```

2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

3. Set up your OpenAI API key:

```bash
export OPENAI_API_KEY="your-api-key-here"
```

Replace "your-api-key-here" with your actual OpenAI API key.

## How to Use

Run the Python script:

```bash
python BrazilianChefGPT.py
```

You can interact with the chef in three ways:

1. **Ingredient-based dish suggestions**: List ingredients you have available
2. **Request specific recipes**: Ask for a recipe of a traditional dish
3. **Ask for cooking tips**: Share a recipe to receive improvement suggestions

## Example Interactions

- "I have black beans, sausage, and bacon"
- "How do I make cheese bread?"
- "Can you help me improve my stew?"

## Customization

To create your own cultural chef:

1. Modify the system prompts in the code to match your desired chef's personality and cuisine
2. Update the keywords and recipe suggestions to match the cultural context
3. Rename the script to match your implementation (e.g., ItalianChefGPT.py, MexicanChefGPT.py)

# Cultural Chef GPT 👩‍🍳

A chatbot that simulates different cultural chefs, each specializing in a unique traditional cuisine! This implementation includes multiple chef personalities, such as a Brazilian grandmother, an Italian pasta master, and an Indian spice expert, but you can easily customize it to fit any culture by modifying the system prompts in the code.


## 1. Features

The chef can:
- Suggest dishes based on available ingredients
- Provide detailed recipes for traditional dishes
- Offer tips to improve your cooking

## 2. Available AI Chef Personalities

Currently, this project includes the following AI chefs:

**1. Brazilian Grandma 👵🇧🇷** - Warm, nostalgic, and affectionate, sharing classic Brazilian home-cooked meals.

**2. Italian Chef 👨‍🍳🇮🇹** - A former AI and Decentralized Finance researcher from Puglia, now a retired chef who blends his passion for cooking with metaphors from AI and blockchain, offering detailed recipes, cooking tips, and tech-inspired culinary wisdom.

**3. South African Chef 👨‍🍳🇿🇦** - An experienced chef from South Africa who helps people by suggesting detailed recipes for dishes they want to cook. Specializing in traditional South African cuisine, this chef provides expert cooking tips and engaging, precise, and clear guidance to bring authentic flavors to your table.

However, you can create new AI chefs by modifying the prompts! Examples of future chefs could include:
- 🍣 Japanese Sushi Master – Expert in precise techniques and seafood handling.
- 🌮 Mexican Street Food Vendor – Specializing in tacos, salsas, and traditional spices.
- 🥐 French Pastry Chef – Focused on precision and elegance in baking.

You can easily customize the chatbot's personality and knowledge by adjusting the system prompt.




## 🔬 3. Experimentation Process

The experiment tested how different AI chef personalities respond to various cooking-related prompts.

### 📌 Workflow

- Step 1: Suggestion of a dish
    - A group member provided ingredients, and the Italian Chef suggested a dish.
- Step 2: Recipe request
    - Another member asked for a detailed recipe using the Brazilian Grandma.
- Step 3: Recipe critique
    - A third member requested cooking tips from the South African Chef AI.


## 💬 4. Experiment

### 1️⃣ Dish Suggestion
**User Input:**
"I have the follow ingredients pasta, broccoli rabe, oil and garlic, what dish do you suggest?"

**Italian Chef AI Response:**

`With your delightful ingredients of pasta, broccoli rabe, oil, and garlic, I suggest preparing a classic dish called "Orecchiette con Cime di Rapa," which is a traditional pasta dish from Puglia that perfectly showcases the earthy flavor of broccoli rabe.`

---
### 2️⃣ Recipe Request
**User Input:**
"Suggest me a detailed recipe for Orecchiette with Turnip Greens"

**Brazilian Grandma Response:**
`Ah, meu anjo, while orecchiette with turnip greens, or "orecchiette con cime di rapa," is a delicious Italian dish, I must stay within my expertise in Brazilian cuisine. However, I'd love to offer you a heartwarming recipe for a Brazilian classic instead. How about trying a delightful feijoada? It's a comforting black bean and pork stew that warms the heart and is perfect for family gatherings. Let me know if you’d like the detailed recipe and steps to make this traditional Brazilian dish!`

---
### 3️⃣ Recipe Critique
User Input:
"I made feijoada. How can I improve it?"

Indian Chef AI Response:
"To make it even richer, try slow-cooking the meat longer and adding a hint of cumin and black pepper!"

---
### 📊 5. Comparative Analysis
The experiment demonstrated how different AI personalities can influence the interaction and response style in culinary tasks:

| Step               | AI Personality         | Style of Response                        |
|--------------------|----------------------|------------------------------------------|
| **Dish Suggestion** | 🇧🇷 Brazilian Grandma | Warm, nostalgic, and affectionate       |
| **Recipe Request** | 🇮🇹 Italian Chef      | Technical, structured, and traditional  |
| **Recipe Critique** | 🇿🇦 South African  Chef      | Creative, experimental, and spice-oriented |



Overall, the AI personalities effectively tailored their responses to match the cultural and culinary context of each task, enhancing the user experience by providing not just recipes, but also cultural insights and personal touches.



## Setup & Execution 

### Prerequisites

- Python 3.x
- OpenAI API key

### Setup

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

### How to Use

Run the Python script:

```bash
python BrazilianChefGPT.py
```

You can interact with the chef in three ways:

1. **Ingredient-based dish suggestions**: List ingredients you have available
2. **Request specific recipes**: Ask for a recipe of a traditional dish
3. **Ask for cooking tips**: Share a recipe to receive improvement suggestions

### Example Interactions

- "I have black beans, sausage, and bacon"
- "How do I make cheese bread?"
- "Can you help me improve my stew?"

### Customization

To create your own cultural chef:

1. Modify the system prompts in the code to match your desired chef's personality and cuisine
2. Update the keywords and recipe suggestions to match the cultural context
3. Rename the script to match your implementation (e.g., ItalianChefGPT.py, MexicanChefGPT.py)

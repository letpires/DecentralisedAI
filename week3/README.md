# Story-Telling App

## Project Description

This project is a story-telling application where users can create, edit, and delete characters. The application generates stories using user-created characters and provides a summary of each character's role in the story. The project also includes testing different models for story generation and comparing their outputs.

## Tasks


1. **Implement a table of characters that users can create for the story**
   - Users should be able to add, edit, and delete characters.
   - Each new character should have a name, description, and personality.

2. **Customize the prompt to generate a story using user-created characters, if any**
   - Modify the prompt sent to the story generation model to include user-created characters.

3. **Implement a summary of each character's role in the story after the full text has been generated**
4. **[TO DO] Test different models for story generation and compare their outputs**
   - Evaluate how well the models "remember" user-created characters.
   - Experiment with different **context window** sizes across models to observe their impact on output.
   - Test models of varying sizes and observe how this influences the output.
     - Use models compatible with your device, focusing on the experiment rather than overall story quality.


## Using Local Models for Story Generation

To use models running locally for story generation, follow these steps:

1. **Execute the text-webui generation**

   Start the text-webui generation by running the following command:
   ```sh
   ./start.macos

2. Activate the flags in session API and OpenAI. Ensure that the necessary flags are activated in both the session API and OpenAI configurations.

3. Load the model: Load the desired model by specifying its name. For example, to load the HuggingFaceTB_SmolLM2-1.7B-Instruct model, configure it accordingly.

4. Run the page: Finally, run the page on your local server:

   ```npm run dev```

Then, open your browser and navigate to http://localhost:3000 to see the page in action.



## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/letpires/DecentralisedAI/tree/main/week3

2. Install the required dependencies:

```
npm install
# or
yarn install
```

3. Create a .env.local file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```
npm run dev
# or
yarn dev
```

5. Open http://localhost:3000 with your browser to see the result.

## Demo

Here's a demonstration of the story-telling application in action:

![Story-Telling App Demo](test.gif)

The demo shows the application's interface and how users can interact with it to create characters and generate stories.
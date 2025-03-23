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


## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/story-telling-app.git
   cd story-telling-app

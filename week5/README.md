# 🤖 AI Joke Generator

A modern web application that leverages OpenAI's GPT models to generate personalized, AI-powered jokes. Built with Next.js, TypeScript, and Tailwind CSS, this application offers an interactive and engaging way to create humor tailored to your preferences.

The app not only generates jokes but also employs AI to evaluate the quality, appropriateness, and humor level of each generated joke. With its intuitive interface, users can fine-tune parameters like topic, tone, and creativity level to craft the perfect joke for any occasion.

## ✨ Features

- 🎭 **Customizable Joke Generation**: Generate unique jokes with customizable parameters
  - Topic selection (work, people, animals, food, television, etc.)
  - Tone selection (witty, sarcastic, silly, dark, goofy)
  - Joke type (pun, knock-knock, story)
  - Temperature control for creativity level
- 🎯 **AI Joke Evaluation**: Automatic assessment of generated jokes for:
  - Humor level
  - Appropriateness
  - Potential offensiveness
- 💫 **Real-time Generation**: Instant joke generation and display on the same page
- 🎨 **Modern UI**: Clean and intuitive user interface

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 18 or higher)
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 Usage

### 🎛️ Configure Joke Parameters

1. **Select Topic**
   - Choose from a variety of topics in the dropdown menu
   - Options include work, people, animals, food, television, and more

2. **Choose Tone**
   - Select the desired tone for your joke
   - Available options: witty, sarcastic, silly, dark, goofy

3. **Pick Joke Type**
   - Choose from different joke formats
   - Types include: pun, knock-knock, story

4. **Adjust Creativity**
   - Use the temperature slider to control the AI's creativity level
   - Lower values (0.1-0.5): More predictable, conventional jokes
   - Higher values (0.6-1.0): More creative, unexpected results

### 🎯 Generate and View Jokes

1. **Generate New Joke**
   - Click the "Generate Joke" button
   - Wait briefly while the AI creates and evaluates the joke
   - The generated joke will appear on your screen

2. **View Evaluation Results**
   - See automatic assessment of:
     - Humor rating
     - Appropriateness level
     - Potential offensive content

## 🏗️ Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── api/           # API routes
│   └── page.tsx       # Main page
├── public/            # Static files
└── styles/           # CSS styles
```

## 🛠️ Technologies Used

- [Next.js 15.2](https://nextjs.org/)
- [React 19](https://react.dev/)
- [OpenAI API](https://openai.com/api/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

// ... existing license ...


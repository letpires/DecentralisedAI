# AI Story Generator

A modern web application that uses AI to extract characters from texts and generate creative stories, powered by LlamaIndex and OpenAI. The project implements a RAG (Retrieval-Augmented Generation) pipeline to enhance character extraction and story generation with contextual understanding.

## Features

### 1. Character Extraction
- Upload `.txt` files containing stories or texts
- Automatic text analysis using GPT-4 to extract:
  - Character names
  - Physical description and role in the story
  - Personality traits and characteristics

### 2. Story Generation
- Literary genre selection:
  - Fantasy
  - Mystery
  - Romance
  - Sci-Fi

- Narrative tone selection:
  - Happy
  - Sad
  - Sarcastic
  - Funny

- Generation of customized stories that:
  - Naturally incorporate all extracted characters
  - Follow the selected genre and tone
  - Stay true to character descriptions and personalities
  - Have a clear beginning, middle, and end
  - Contain between 500-1000 words

## Technologies Used

- **Frontend:**
  - Next.js 14 (App Router)
  - React with TypeScript
  - Tailwind CSS for styling
  - Responsive and modern interface

- **Backend:**
  - Next.js API Routes
  - LlamaIndex for document processing and RAG pipeline
  - OpenAI GPT-4 for text processing and story generation
  - File and JSON handling

## How to Use

1. **Extract Characters:**
   - Upload a text file containing your story
   - Click "Extract Characters" to analyze the text
   - View extracted characters in an organized table

2. **Generate New Story:**
   - Select a literary genre
   - Choose the narrative tone
   - Click "Generate Story"
   - The new story will be displayed with title and formatted content

## Project Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Access `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── extract-characters/
│   │   └── generate-story/
│   └── page.tsx
├── components/
│   ├── CharacterExtractor.tsx
│   ├── CharacterTable.tsx
│   └── StoryDisplay.tsx
└── ...
```

## LlamaIndex Integration

This project leverages LlamaIndex's powerful features:
- Document processing and text chunking for efficient content analysis
- Advanced RAG (Retrieval-Augmented Generation) pipeline that:
  - Processes and indexes uploaded text documents
  - Retrieves relevant character information and context
  - Augments the AI's generation capabilities with retrieved information
  - Ensures accurate character extraction and consistent story generation
- Efficient text analysis and information retrieval using vector embeddings
- Seamless integration with OpenAI's GPT models for enhanced text generation

## How It Works

1. **Document Processing:**
   - Text documents are processed and chunked using LlamaIndex
   - Content is analyzed and indexed for efficient retrieval

2. **RAG Pipeline:**
   - Character information is extracted using contextual understanding
   - Retrieved information is used to augment story generation
   - The pipeline ensures consistency between original text and generated stories

3. **Story Generation:**
   - Uses retrieved character information to maintain authenticity
   - Combines RAG results with selected genre and tone
   - Generates coherent stories that stay true to original characters

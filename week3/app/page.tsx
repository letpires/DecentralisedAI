"use client";

import { useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, append, isLoading } = useChat();

  const models = [
    { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Fast and efficient" },
    { id: "gpt-4", name: "GPT-4", description: "More capable and detailed" },
    { id: "claude-3-opus-20240229", name: "Claude 3 Opus", description: "Advanced reasoning" },
    { id: "claude-3-sonnet-20240229", name: "Claude 3 Sonnet", description: "Balanced performance" },
  ];

  const genres = [
    { emoji: "🧙", value: "Fantasy" },
    { emoji: "🕵️", value: "Mystery" },
    { emoji: "💑", value: "Romance" },
    { emoji: "🚀", value: "Sci-Fi" },
  ];

  const tones = [
    { emoji: "😊", value: "Happy" },
    { emoji: "😢", value: "Sad" },
    { emoji: "😏", value: "Sarcastic" },
    { emoji: "😂", value: "Funny" },
  ];

  const [state, setState] = useState({
    genre: "",
    tone: "",
    selectedModel: "gpt-3.5-turbo",
  });

  const [characters, setCharacters] = useState<
    { id: number; name: string; description: string; personality: string }[]
  >([]);

  const [comparisonResults, setComparisonResults] = useState<{
    [key: string]: {
      story: string;
      characterSummary: string;
      timestamp: Date;
    };
  }>({});

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const addCharacter = () => {
    setCharacters([
      ...characters,
      {
        id: Date.now(),
        name: "",
        description: "",
        personality: "",
      },
    ]);
  };

  const updateCharacter = (id: number, key: string, value: string) => {
    setCharacters(characters.map((c) => (c.id === id ? { ...c, [key]: value } : c)));
  };

  const removeCharacter = (id: number) => {
    setCharacters(characters.filter((c) => c.id !== id));
  };

  const generateStory = async () => {
    const characterDetails = characters
      .map(
        (c) =>
          `Name: ${c.name}, Description: ${c.description}, Personality: ${c.personality}`
      )
      .join("\n");

    const prompt = `Generate a ${state.genre} story in a ${state.tone} tone${
      characterDetails
        ? ` with the following characters:\n${characterDetails}`
        : ""
    }.\n\nAfter the story, please provide a detailed "Character Summary" section that includes:\n1. Each character's role in the plot\n2. Their character development throughout the story\n3. Their relationships with other characters\n4. Their impact on the story's outcome`;

    const response = await append({ 
      role: "user", 
      content: prompt,
      options: {
        model: state.selectedModel
      }
    });

    if (response) {
      const content = response.content;
      const [story, characterSummary] = content.split("Character Summary");
      
      setComparisonResults(prev => ({
        ...prev,
        [state.selectedModel]: {
          story: story.trim(),
          characterSummary: characterSummary?.trim() || "",
          timestamp: new Date()
        }
      }));
    }
  };

  return (
    <main className="mx-auto w-full p-24 flex flex-col">
      <div className="p4 m-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-white">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Story Telling App</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Customize the story by selecting the genre, tone, and characters.
            </p>
          </div>

          {/* Model Selection */}
          <div className="w-[400px] space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-white">Select Model</h3>
            <select
              name="selectedModel"
              value={state.selectedModel}
              onChange={handleChange}
              className="w-full p-2 bg-gray-600 text-white rounded"
            >
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name} - {model.description}
                </option>
              ))}
            </select>
          </div>

          {/* Genre */}
          <div className="w-[400px] space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-white">Genre</h3>
            <div className="flex flex-col space-y-2">
              {genres.map(({ value, emoji }) => (
                <label
                  key={value}
                  htmlFor={value}
                  className="p-2 bg-gray-600 bg-opacity-50 rounded-lg flex items-center space-x-2 text-white"
                >
                  <input
                    id={value}
                    type="radio"
                    value={value}
                    name="genre"
                    onChange={handleChange}
                  />
                  <span>{`${emoji} ${value}`}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tones */}
          <div className="w-[400px] space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-white">Tones</h3>
            <div className="flex flex-col space-y-2">
              {tones.map(({ value, emoji }) => (
                <label
                  key={value}
                  htmlFor={value}
                  className="p-2 bg-gray-600 bg-opacity-50 rounded-lg flex items-center space-x-2 text-white"
                >
                  <input
                    id={value}
                    type="radio"
                    name="tone"
                    value={value}
                    onChange={handleChange}
                  />
                  <span>{`${emoji} ${value}`}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Characters */}
          <div className="w-[400px] space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-white">Characters</h3>

            {characters.map((char) => (
              <div
                key={char.id}
                className="p-4 bg-gray-800 rounded space-y-2 text-white"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 rounded bg-gray-900 text-white"
                  value={char.name}
                  onChange={(e) => updateCharacter(char.id, "name", e.target.value)}
                />
                <textarea
                  placeholder="Description"
                  className="w-full p-2 rounded bg-gray-900 text-white"
                  value={char.description}
                  onChange={(e) =>
                    updateCharacter(char.id, "description", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Personality"
                  className="w-full p-2 rounded bg-gray-900 text-white"
                  value={char.personality}
                  onChange={(e) =>
                    updateCharacter(char.id, "personality", e.target.value)
                  }
                />
                <button
                  onClick={() => removeCharacter(char.id)}
                  className="text-red-400 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              onClick={addCharacter}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
            >
              + Add Character
            </button>
          </div>

          {/* Generate Button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={isLoading || !state.genre || !state.tone}
            onClick={generateStory}
          >
            Generate Story
          </button>

          {/* Results Display */}
          <div className="flex flex-col space-y-6">
            {Object.entries(comparisonResults).map(([modelId, result]) => (
              <div key={modelId} className="flex flex-col space-y-4">
                <div className="bg-opacity-25 bg-gray-700 rounded-lg p-6 w-[600px] text-white">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">
                      {models.find(m => m.id === modelId)?.name} - The Story
                    </h3>
                    <span className="text-sm text-gray-400">
                      {result.timestamp.toLocaleString()}
                    </span>
                  </div>
                  <div className="prose prose-invert">
                    {result.story}
                  </div>
                </div>

                <div className="bg-opacity-25 bg-gray-800 rounded-lg p-6 w-[600px] text-white">
                  <h3 className="text-xl font-semibold mb-4">Character Summary</h3>
                  <div className="prose prose-invert">
                    {result.characterSummary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

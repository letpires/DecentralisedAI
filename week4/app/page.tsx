'use client';

import { useState } from 'react';
import { CharacterExtractor } from '@/components/CharacterExtractor';
import { CharacterTable } from '@/components/CharacterTable';
import { StoryDisplay } from '@/components/StoryDisplay';

interface Character {
  name: string;
  description: string;
  personality: string;
}

interface Story {
  title: string;
  content: string;
}

export default function Home() {
  const [fileContent, setFileContent] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<string>('');
  const [story, setStory] = useState<Story | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const genres = ['Fantasy', 'Mystery', 'Romance', 'Sci-Fi'];
  const tones = ['Happy', 'Sad', 'Sarcastic', 'Funny'];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const text = await file.text();
      setFileContent(text);
      setCharacters([]); // Reset characters when new file is uploaded
      setStory(null); // Reset story when new file is uploaded
    }
  };

  const generateStory = async () => {
    if (characters.length === 0) {
      setError('Please extract characters first');
      return;
    }

    if (!selectedGenre || !selectedTone) {
      setError('Please select both genre and tone');
      return;
    }

    setError(null);
    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          characters,
          genre: selectedGenre,
          tone: selectedTone,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate story');
      }

      const data = await response.json();
      setStory(data.story);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate story');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Character Extractor & Story Generator</h1>
      
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Text File
        </label>
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      {fileContent && (
        <CharacterExtractor
          content={fileContent}
          onCharactersExtracted={setCharacters}
        />
      )}

      {characters.length > 0 && (
        <>
          <CharacterTable characters={characters} />
          
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Select Genre</h3>
                <div className="space-y-2">
                  {genres.map((genre) => (
                    <label key={genre} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="genre"
                        value={genre}
                        checked={selectedGenre === genre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        className="text-blue-600"
                      />
                      <span>{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Select Tone</h3>
                <div className="space-y-2">
                  {tones.map((tone) => (
                    <label key={tone} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="tone"
                        value={tone}
                        checked={selectedTone === tone}
                        onChange={(e) => setSelectedTone(e.target.value)}
                        className="text-blue-600"
                      />
                      <span>{tone}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={generateStory}
              disabled={isGenerating}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-300"
            >
              {isGenerating ? 'Generating Story...' : 'Generate Story'}
            </button>

            {error && (
              <div className="text-red-600">
                {error}
              </div>
            )}
          </div>
        </>
      )}

      <StoryDisplay story={story} />
    </main>
  );
}

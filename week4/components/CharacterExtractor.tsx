'use client';

import { useState } from 'react';

interface Character {
  name: string;
  description: string;
  personality: string;
}

interface CharacterExtractorProps {
  content: string;
  onCharactersExtracted: (characters: Character[]) => void;
}

export function CharacterExtractor({ content, onCharactersExtracted }: CharacterExtractorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const extractCharacters = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Sending request with content length:', content.length);
      const response = await fetch('/api/extract-characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error('Failed to extract characters');
      }

      const data = await response.json();
      console.log('Received data:', data);
      
      if (!data.characters || !Array.isArray(data.characters)) {
        throw new Error('Invalid response format');
      }

      onCharactersExtracted(data.characters);
    } catch (err) {
      console.error('Error in extractCharacters:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={extractCharacters}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isLoading ? 'Extracting...' : 'Extract Characters'}
      </button>

      {error && (
        <div className="text-red-600">
          {error}
        </div>
      )}
    </div>
  );
} 
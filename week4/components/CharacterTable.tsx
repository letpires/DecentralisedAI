'use client';

import { useEffect } from 'react';

interface Character {
  name: string;
  description: string;
  personality: string;
}

interface CharacterTableProps {
  characters: Character[];
}

export function CharacterTable({ characters }: CharacterTableProps) {
  useEffect(() => {
    console.log('CharacterTable received characters:', characters);
  }, [characters]);

  if (!characters || characters.length === 0) {
    return (
      <div className="mt-8">
        <p className="text-gray-500">No characters found in the text.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Extracted Characters</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Personality
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {characters.map((character, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {character.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {character.description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {character.personality}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 
'use client';

import { useState, ChangeEvent, useEffect } from 'react';

export default function JokeGenerator() {
  const [topic, setTopic] = useState('work');
  const [tone, setTone] = useState('witty');
  const [type, setType] = useState('pun');
  const [temperature, setTemperature] = useState(0.7);
  const [joke, setJoke] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const topics = ['work', 'people', 'animals', 'food', 'television'];
  const tones = ['witty', 'sarcastic', 'silly', 'dark', 'goofy'];
  const types = ['pun', 'knock-knock', 'story'];

  // Initialize dark mode from local storage or system preference
  useEffect(() => {
    // Check local storage first
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // Otherwise check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply theme whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  async function generateJoke() {
    try {
      setIsLoading(true);
      setError('');
      setJoke('');
      setEvaluation('');

      const response = await fetch('/api/generate-joke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, type, temperature })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate joke');
      }

      setJoke(data.joke);
      setEvaluation(data.evaluation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate joke');
    } finally {
      setIsLoading(false);
    }
  }

  function handleDarkModeChange(e: ChangeEvent<HTMLInputElement>) {
    setDarkMode(e.target.value === 'dark');
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
      {/* Dark mode toggle with radio buttons */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            id="light-mode"
            name="theme"
            value="light"
            checked={!darkMode}
            onChange={handleDarkModeChange}
            className="cursor-pointer"
          />
          <label htmlFor="light-mode" className="text-sm cursor-pointer">Light</label>
        </div>
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            id="dark-mode"
            name="theme"
            value="dark"
            checked={darkMode}
            onChange={handleDarkModeChange}
            className="cursor-pointer"
          />
          <label htmlFor="dark-mode" className="text-sm cursor-pointer">Dark</label>
        </div>
      </div>

      <div className={`p-6 max-w-lg mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
        } rounded-lg shadow-lg mt-16`}>
        <h1 className="text-2xl font-bold mb-4">AI Joke Generator</h1>
        <div className="mb-4">
          <label className="block mb-1">Topic:</label>
          <select
            value={topic}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setTopic(e.target.value)}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            disabled={isLoading}
          >
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Tone:</label>
          <select
            value={tone}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setTone(e.target.value)}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            disabled={isLoading}
          >
            {tones.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Type:</label>
          <select
            value={type}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            disabled={isLoading}
          >
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Creativity (Temperature): {temperature}</label>
          <input
            type="range"
            value={temperature}
            min={0}
            max={1}
            step={0.1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTemperature(Number(e.target.value))}
            className={`w-full ${darkMode ? 'accent-blue-500' : 'accent-blue-600'}`}
            disabled={isLoading}
          />
        </div>
        <button
          onClick={generateJoke}
          className={`w-full px-4 py-2 rounded-lg transition-colors ${isLoading
              ? 'bg-blue-300 cursor-not-allowed'
              : darkMode
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Joke'}
        </button>

        {error && (
          <div className={`mt-4 p-4 border rounded-lg ${darkMode ? 'bg-red-900 border-red-800 text-red-100' : 'bg-red-100 border-red-400 text-red-700'
            }`}>
            {error}
          </div>
        )}

        {joke && (
          <div className={`mt-4 p-4 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
            }`}>
            <p className="text-lg font-semibold">{joke}</p>
            <small className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Evaluation: {evaluation}</small>
          </div>
        )}
      </div>
    </div>
  );
}
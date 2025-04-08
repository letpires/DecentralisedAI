'use client';

import { useState, ChangeEvent } from 'react';
import { useTokenContext } from '../context/TokenContext';

export default function JokeGenerator() {
  const [topic, setTopic] = useState('work');
  const [tone, setTone] = useState('witty');
  const [type, setType] = useState('pun');
  const [temperature, setTemperature] = useState(0.7);
  const [joke, setJoke] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { balance, jokePrice } = useTokenContext();

  const topics = ['work', 'people', 'animals', 'food', 'television'];
  const tones = ['witty', 'sarcastic', 'silly', 'dark', 'goofy'];
  const types = ['pun', 'knock-knock', 'story'];

  // Check if user has enough tokens
  const hasEnoughTokens = Number(balance) >= Number(jokePrice);

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

  return (
    <div className={`p-6 max-w-lg mx-auto border rounded-lg ${!hasEnoughTokens ? 'opacity-50 pointer-events-none' : ''}`}>
      <h1 className="text-2xl font-bold mb-4">AI Joke Generator</h1>
      
      {!hasEnoughTokens && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p>You need at least {jokePrice} JOKE tokens to generate a joke. Please purchase tokens above.</p>
        </div>
      )}
      
      <div className="mb-4">
        <label>Topic:</label>
        <select 
          value={topic} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setTopic(e.target.value)}
          className="w-full p-2 border rounded"
          disabled={isLoading || !hasEnoughTokens}
        >
          {topics.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label>Tone:</label>
        <select 
          value={tone} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setTone(e.target.value)}
          className="w-full p-2 border rounded"
          disabled={isLoading || !hasEnoughTokens}
        >
          {tones.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label>Type:</label>
        <select 
          value={type} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
          className="w-full p-2 border rounded"
          disabled={isLoading || !hasEnoughTokens}
        >
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label>Creativity (Temperature):</label>
        <input 
          type="range" 
          value={temperature} 
          min={0} 
          max={1} 
          step={0.1} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTemperature(Number(e.target.value))}
          className="w-full"
          disabled={isLoading || !hasEnoughTokens}
        />
      </div>
      <button
        onClick={generateJoke}
        disabled={isLoading || !hasEnoughTokens}
        className={`w-full p-2 rounded ${isLoading || !hasEnoughTokens ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
      >
        {isLoading ? 'Generating...' : 'Generate Joke'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {joke && (
        <div className="mt-4 bg-gray-100 p-4 border rounded-lg">
          <p className="text-lg font-semibold">{joke}</p>
          <small className="text-gray-600">Evaluation: {evaluation}</small>
        </div>
      )}
    </div>
  );
}

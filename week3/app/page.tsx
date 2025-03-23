// "use client";

// import { useState } from "react";
// import { useChat } from "ai/react";

// export default function Chat() {
//   const { messages, append, isLoading } = useChat();
//   const genres = [
//     { emoji: "🧙", value: "Fantasy" },
//     { emoji: "🕵️", value: "Mystery" },
//     { emoji: "💑", value: "Romance" },
//     { emoji: "🚀", value: "Sci-Fi" },
//   ];
//   const tones = [
//     { emoji: "😊", value: "Happy" },
//     { emoji: "😢", value: "Sad" },
//     { emoji: "😏", value: "Sarcastic" },
//     { emoji: "😂", value: "Funny" },
//   ];

//   const [state, setState] = useState({
//     genre: "",
//     tone: "",
//   });

//   const handleChange = ({
//     target: { name, value },
//   }: React.ChangeEvent<HTMLInputElement>) => {
//     setState({
//       ...state,
//       [name]: value,
//     });
//   };

//   return (
//     <main className="mx-auto w-full p-24 flex flex-col">
//       <div className="p4 m-4">
//         <div className="flex flex-col items-center justify-center space-y-8 text-white">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">Story Telling App</h2>
//             <p className="text-zinc-500 dark:text-zinc-400">
//               Customize the story by selecting the genre and tone.
//             </p>
//           </div>

//           <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
//             <h3 className="text-xl font-semibold">Genre</h3>

//             <div className="flex flex-wrap justify-center">
//               {genres.map(({ value, emoji }) => (
//                 <div
//                   key={value}
//                   className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
//                 >
//                   <input
//                     id={value}
//                     type="radio"
//                     value={value}
//                     name="genre"
//                     onChange={handleChange}
//                   />
//                   <label className="ml-2" htmlFor={value}>
//                     {`${emoji} ${value}`}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
//             <h3 className="text-xl font-semibold">Tones</h3>

//             <div className="flex flex-wrap justify-center">
//               {tones.map(({ value, emoji }) => (
//                 <div
//                   key={value}
//                   className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
//                 >
//                   <input
//                     id={value}
//                     type="radio"
//                     name="tone"
//                     value={value}
//                     onChange={handleChange}
//                   />
//                   <label className="ml-2" htmlFor={value}>
//                     {`${emoji} ${value}`}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
//             disabled={isLoading || !state.genre || !state.tone}
//             onClick={() =>
//               append({
//                 role: "user",
//                 content: `Generate a ${state.genre} story in a ${state.tone} tone`,
//               })
//             }
//           >
//             Generate Story
//           </button>

//           <div
//             hidden={
//               messages.length === 0 ||
//               messages[messages.length - 1]?.content.startsWith("Generate")
//             }
//             className="bg-opacity-25 bg-gray-700 rounded-lg p-4"
//           >
//             {messages[messages.length - 1]?.content}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, append, isLoading } = useChat();

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
  });

  const [characters, setCharacters] = useState<
    { id: number; name: string; description: string; personality: string }[]
  >([]);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
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

          {/* Container central com blocos */}
          <div className="flex flex-col items-center space-y-6">
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
          </div>

          {/* Botão de Gerar História */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={isLoading || !state.genre || !state.tone}
            onClick={() => {
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
              }.\n\nAfter the story, please add a summary of each character's role in the plot.`;

              append({ role: "user", content: prompt });
            }}
          >
            Generate Story
          </button>

          {/* Resultado da História */}
          <div
            hidden={
              messages.length === 0 ||
              messages[messages.length - 1]?.content.startsWith("Generate")
            }
            className="bg-opacity-25 bg-gray-700 rounded-lg p-4 w-[600px] mt-4 text-white"
          >
            {messages[messages.length - 1]?.content}
          </div>
        </div>
      </div>
    </main>
  );
}

interface Story {
  title: string;
  content: string;
}

interface StoryDisplayProps {
  story: Story | null;
}

export function StoryDisplay({ story }: StoryDisplayProps) {
  if (!story) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{story.title}</h2>
      <div className="prose prose-lg max-w-none">
        {story.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
} 
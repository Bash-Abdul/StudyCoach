export default function SuggestedTopics() {
    // Replace with real suggestions from backend later
    const topics = ["Time Management", "Active Recall", "Spaced Repetition"];
  
    return (
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Suggested Study Topics</h2>
        <ul className="list-disc pl-5">
          {topics.map((topic, idx) => (
            <li key={idx} className="text-gray-700">{topic}</li>
          ))}
        </ul>
      </div>
    )
  }
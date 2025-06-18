export default function Quiz() {
    // Replace with real quiz data from backend later
    const questions = [
      { q: "What is the main topic of the notes?", a: "" },
      { q: "List two key points.", a: "" },
      { q: "What is one thing you found challenging?", a: "" },
      { q: "Summarize the conclusion.", a: "" },
      { q: "Suggest a related topic to study.", a: "" },
    ];
  
    return (
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Auto-Generated Quiz</h2>
        <form>
          {questions.map((item, idx) => (
            <div key={idx} className="mb-4">
              <label className="block font-medium mb-1">{item.q}</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
          ))}
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Submit Quiz
          </button>
        </form>
      </div>
    )
  }
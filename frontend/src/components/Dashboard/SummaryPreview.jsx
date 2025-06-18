export default function SummaryPreview() {
    // Replace with real summary from backend later
    const summary = "Your uploaded notes will be summarized here using AI.";
  
    return (
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary Preview</h2>
        <p className="text-gray-700">{summary}</p>
      </div>
    )
  }
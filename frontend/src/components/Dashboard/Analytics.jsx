export default function Analytics() {
    // Replace with real analytics from backend later
    const quizzesTaken = 3;
    const avgScore = 80;
  
    return (
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Analytics</h2>
        <div className="flex justify-between">
          <div>
            <div className="text-2xl font-bold">{quizzesTaken}</div>
            <div className="text-gray-600">Quizzes Taken</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{avgScore}%</div>
            <div className="text-gray-600">Average Score</div>
          </div>
        </div>
      </div>
    )
  }
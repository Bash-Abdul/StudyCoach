import UploadNotes from './UploadNotes'
import SummaryPreview from './SummaryPreview'
import Quiz from './Quiz'
import Analytics from './Analytics'
import SuggestedTopics from './SuggestedTopics'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-blue-700">Smart-Coach Dashboard</h1>
        <button className="mt-2 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <UploadNotes />
          <SummaryPreview />
        </div>
        <div>
          <Quiz />
          <Analytics />
          <SuggestedTopics />
        </div>
      </div>
    </div>
  )
}
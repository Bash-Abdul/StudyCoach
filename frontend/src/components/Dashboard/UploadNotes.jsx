import { FiUpload } from "react-icons/fi";

export default function UploadNotes() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <FiUpload className="text-blue-500" /> Upload Study Notes
      </h2>
      <form>
        <input
          type="file"
          accept=".pdf,.txt"
          className="mb-2 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
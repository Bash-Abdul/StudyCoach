import UploadNotes from './UploadNotes'
import SummaryPreview from './SummaryPreview'
import Quiz from './Quiz'
import Analytics from './Analytics'
import SuggestedTopics from './SuggestedTopics'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import Link from 'next/link'

export default function Dashboard() {
  return (

    <div className=''>



      {/* UPLOAD NOTES */}
      <div className='w-full h-72 bg-[#1E293B] rounded-md py-6 px-5 border border-[#334155] flex flex-col gap-y-2'>
        <p className='text-lg font-semibold'>Upload Your Notes</p>
        <div className='w-full h-full border-[#334155] border-3 border-dashed hover:border-[#6366F1] cursor-pointer flex flex-col items-center justify-center gap-y-4'>
          <div className='flex flex-col gap-y-1 items-center justify-center'>
            <FaCloudArrowUp className='w-8 h-8 text-[#CBD5E1]' />
            {/* <FaCloudUploadAlt  /> */}
            <span className='text-[#CBD5E1]'>Drag and drop your files here</span>
          </div>
          <span className='text-sm text-[#94A3B8]'>Supports PDF, TXT, DOCX files</span>
          <button
            className="bg-[#6366F1] text-white cursor-pointer text-sm px-5 py-2 rounded-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>



      {/*   INFO DISPLAY */}
      <div className='my-6 grid grid-cols-4 gap-x-4'>

        <div className='flex items-center gap-2 bg-[#1E293B] py-4 px-6 rounded-md border border-[#334155]'>
          <div className='w-15 h-15 shadow-lg flex justify-center items-center'>
            <FaFileAlt className='text-[#0EA5E9] w-7 h-7' />
          </div>
          <div className='flex flex-col gap-y-3'>
            <span className='text-[#CBD5E1] text-sm'>Total summaries</span>
            <span className='text-2xl text-white'>24</span>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-[#1E293B] py-4 px-6 rounded-md border border-[#334155]'>
          <div className='w-15 h-15 shadow-lg flex justify-center items-center'>
            <FaFileAlt className='text-[#0EA5E9] w-7 h-7' />
          </div>
          <div className='flex flex-col gap-y-3'>
            <span className='text-[#CBD5E1] text-sm'>Quizzes Taken</span>
            <span className='text-2xl text-white'>18</span>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-[#1E293B] py-4 px-6 rounded-md border border-[#334155]'>
          <div className='w-15 h-15 shadow-lg flex justify-center items-center'>
            <FaFileAlt className='text-[#0EA5E9] w-7 h-7' />
          </div>
          <div className='flex flex-col gap-y-3'>
            <span className='text-[#CBD5E1] text-sm'>Average Score</span>
            <span className='text-2xl text-white'>87%</span>
          </div>
        </div>

        <div className='flex items-center gap-2 bg-[#1E293B] py-4 px-6 rounded-md border border-[#334155]'>
          <div className='w-15 h-15 shadow-xl flex justify-center items-center'>
            <FaFileAlt className='text-[#0EA5E9] w-7 h-7' />
          </div>
          <div className='flex flex-col gap-y-3'>
            <span className='text-[#CBD5E1] text-sm'>Study Hours</span>
            <span className='text-2xl text-white'>42h</span>
          </div>
        </div>

      </div>




      {/* RECENT ACTIVITY PART */}
      <div className='grid grid-cols-2 gap-x-5'>

        <div className='bg-[#1E293B] py-6 px-4 flex flex-col gap-y-6 rounded-md border border-[#334155]'>
          <div className='flex items-center justify-between'>
            <p className='text-lg'>Recent Summaries</p>
            <Link href={'/summaries'}>
            <span className='text-[#6366F1]'>View All</span>
            </Link>
          </div>

          <div className='flex flex-col gap-y-4'>

            <div className='py-5 px-4 flex flex-col gap-y-3 w-full border-[#334155] border rounded-lg'>
              <h3>Machine Learning Basics</h3>
              <p className='text-sm text-[#CBD5E1]'>Introduction to supervised and unsupervised learning algorithms...</p>
              <div className='flex items-center justify-between'>
                <span className='text-xs text-[#94A3B8]'>2 hours ago</span>
                <span className='text-[#6366F1] text-sm'>Expand</span>
              </div>
            </div>

            <div className='py-5 px-4 flex flex-col gap-y-3 w-full border-[#334155] border rounded-md'>
              <h3>Machine Learning Basics</h3>
              <p className='text-sm text-[#CBD5E1]'>Introduction to supervised and unsupervised learning algorithms...</p>
              <div className='flex items-center justify-between'>
                <span className='text-xs text-[#94A3B8]'>2 hours ago</span>
                <span className='text-[#6366F1] text-sm'>Expand</span>
              </div>
            </div>

          </div>
        </div>


        <div className='bg-[#1E293B] py-6 px-4 flex flex-col gap-y-6 rounded-lg border border-[#334155]'>
          <div className='flex items-center justify-between'>
            <p className='text-lg'>Recent Quizzes</p>
            <span className='text-[#6366F1]'>View All</span>
          </div>

          <div className='flex flex-col gap-y-4'>

            <div className='py-5 px-4 flex flex-col gap-y-3 w-full border-[#334155] border rounded-md'>
              <div className='flex items-center justify-between'>
                <h3>Javascript Fundamentals</h3>
                <span className='px-3 py-2 text-xs shadow-2xl rounded-full text-[#22C55E] '>Completed</span>
              </div>
              <p className='text-sm text-[#CBD5E1]'>Score: 92% | 10 questions</p>
              <div className='flex items-start'>
                <span className='text-[#6366F1] text-sm'>View Result</span>
              </div>
            </div>

            <div className='py-5 px-4 flex flex-col gap-y-3 w-full border-[#334155] border rounded-md'>
            <div className='flex items-center justify-between'>
                <h3>Javascript Fundamentals</h3>
                <span className='px-3 py-2 text-xs shadow-2xl rounded-full text-[#0EA5E9] '>New</span>
              </div>
              <p className='text-sm text-[#CBD5E1]'>8 questions | Estimated 15 min</p>
              <div className='flex items-start'>
                <span className='bg-[#6366F1] px-3 py-2 text-white rounded-lg text-sm font-semibold'>Start Quiz</span>
              </div>
            </div>

          </div>
        </div>
      </div>



      {/* Suggested Topics */}
      <div className='mt-6 bg-[#1E293B] py-6 px-4 border border-[#334155] flex flex-col gap-y-5 rounded-lg'>
        <h3 className='text-xl'>AI Suggested Topics</h3>

        <div className='grid grid-cols-3 gap-x-4 rounded-lg'>

          <div className='py-4 px-4 border border-[#334155] flex flex-col gap-y-2 rounded-lg'>
            <div className='flex items-center gap-x-3'>
              <FaCode className='w-5 h-5 text-[#6366F1]' />
              <span className='text-lg'>Advanced Javascript</span>
            </div>
            <p className='text-sm text-[#CBD5E1]'>Based on your react studies</p>
          </div>

          <div className='py-4 px-4 border border-[#334155] flex flex-col gap-y-2 rounded-lg'>
            <div className='flex items-center gap-x-3'>
              <FaDatabase className='w-5 h-5 text-[#6366F1]' />
              <span className='text-lg'>Database Design</span>
            </div>
            <p className='text-sm text-[#CBD5E1]'>Complement your backend</p>
          </div>

          <div className='py-4 px-4 border border-[#334155] flex flex-col gap-y-2 rounded-lg'>
            <div className='flex items-center gap-x-3'>
              <FaRobot className='w-5 h-5 text-[#6366F1]' />
              <span className='text-lg'>AI Ethics</span>
            </div>
            <p className='text-sm text-[#CBD5E1]'>Expand your ML understanding</p>
          </div>

        </div>
        
      </div>






    </div>
    // <div className="min-h-screen bg-gray-50 p-4">
    //   <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
    //     <h1 className="text-3xl font-bold text-blue-700">Smart-Coach Dashboard</h1>
    //     <button className="mt-2 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
    //   </header>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <div>
    //       <UploadNotes />
    //       <SummaryPreview />
    //     </div>
    //     <div>
    //       <Quiz />
    //       <Analytics />
    //       <SuggestedTopics />
    //     </div>
    //   </div>
    // </div>
  )
}
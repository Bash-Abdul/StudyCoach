// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
//     >
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/pages/index.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-white relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div> */}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Adjusted to fit within 100vh */}
      <div className="relative mt-20 h-[90vh] flex items-center justify-center">

        {/* Gradient Background Layer
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] opacity-[20%]"></div> */}

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-200 to-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-200 to-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200 to-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          {/* <div className="absolute -bottom-60 -right-60 w-60 h-60 bg-gradient-to-br from-gray-200 to-slate-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div> */}
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-slate-300 to-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="absolute top-70 right-60 w-50 h-50 bg-gradient-to-br from-slate-300 to-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
          <div className="text-center flex flex-col gap-y-10">

            {/* Main Heading */}
            <div className="">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Study Smarter with <br /> <span className="text-[#6366F1]">AI-Powered</span> Learning
              </h1>
              {/* <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div> */}
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Your intelligent study companion. Upload notes, get AI-powered summaries,
              auto-generated quizzes, and personalized study recommendations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* <Link
                href="/dashboard"
                className="bg-[#6366F1] text-white cursor-pointer px-8 py-4 rounded-sm font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link> */}

              <Link
                href="/dashboard"
                className="bg-[#6366F1] border-2 border-gray-700/30 text-white cursor-pointer px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm hover:border-black flex items-center justify-center gap-x-3"
              >
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/auth"
                className="border-2 border-gray-700/30 text-gray-700 px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm hover:border-black"
              >
                Sign Up Free
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Free to Start</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Everything you need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Powerful AI-driven features designed to make studying more effective and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-gray-700/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-13 h-13 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-xl">📂</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Smart Note Uploads</h3>
              <p className="text-gray-500 leading-relaxed">
                Upload PDF's, images, or text files. Our AI instantly processes and organizes your study materials for optimal learning.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-gray-700/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-13 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">AI Summaries</h3>
              <p className="text-gray-500 leading-relaxed">
                Get concise, intelligent summaries of your notes that highlight key concepts and important information.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-gray-700/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-13 h-13 bg-gradient-to-br from-pink-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-xl">❔</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Custom Quizzes</h3>
              <p className="text-gray-500 leading-relaxed">
                Practice with AI generated quizzes tailored to your study materials. Test your knowledge and identify weak areas
              </p>
            </div>


            {/* FEATURE 4 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-gray-700/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-13 h-13 bg-gradient-to-br from-pink-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Progress Tracking</h3>
              <p className="text-gray-500 leading-relaxed">
                Monitor your learning journey with detailed analytics and progress reports to stay motivated.
              </p>
            </div>


            {/* FEATURE 5 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-gray-700/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-13 h-13 bg-gradient-to-br from-pink-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Smart Insights</h3>
              <p className="text-gray-500 leading-relaxed">
                Receive personalized study recommendations and insights based on your learning patterns and performance
              </p>
            </div>


            {/* FEATURE 6 */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-gray-700/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-13 h-13 bg-gradient-to-br from-pink-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Study Anywhere</h3>
              <p className="text-gray-500 leading-relaxed">
                Access your study materials and quizzes from any device. Study on-the-go with our responsive design.
              </p>
            </div>

          </div>
        </div>
      </div>


      {/* Other section */}
      <div className="relative py-24 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] ">
        <div className="flex items-center justify-center flex-col text-center gap-y-4">

          <div className="">
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Start Learning Smarter Today
            </h1>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div> */}
          </div>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who are already studying more effectively with AI-powered tools
          </p>

          <div>
            <Link href={'/auth'}>
              <button className="text-[#6366F1] px-7 cursor-pointer py-4 rounded-sm bg-white font-semibold">
                Sign Up Free
              </button>
            </Link>
          </div>



        </div>
      </div>


      {/*   FOOTER */}
      <Footer/>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div >
  );
}
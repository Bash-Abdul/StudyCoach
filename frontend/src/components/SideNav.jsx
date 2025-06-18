// import Link from "next/link";
// import { useRouter } from "next/router";
// import { FaBrain } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
// import { FaFile } from "react-icons/fa";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa";

// const navItems = [
//   { name: "Dashboard", href: "/dashboard", icon: <FaHome />},
//   // { name: "Upload Notes", href: "/dashboard#upload" },
//   { name: "Summaries", href: "/dashboard#summary", icon: <FaFile /> },
//   { name: "Quizzes", href: "/dashboard#quiz", icon:<FaRegQuestionCircle /> },
//   { name: "Analytics", href: "/dashboard#analytics", icon: <FaChartLine /> },
//   { name: "Settings", href: "/dashboard#suggestions" },
// ];

// export default function SideNav() {
//   const router = useRouter();
//   return (
//     <aside className="h-screen w-64 bg-[#1E293B] border-r border-gray-800 flex flex-col py-8 px-4 fixed gap-y-10">
//       {/* <div className="mb-10">
//         <span className="text-2xl font-bold text-white tracking-wide">Smart-Coach</span>
//       </div> */}

//       {/* LOGO */}
//       <Link href="/" className="flex items-center space-x-2">
//         <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
//           {/* <span className="text-white font-bold text-lg"></span> */}
//           <FaBrain />
//         </div>
//         <span className="text-2xl font-bold text-white">
//           StudyCoach
//         </span>
//       </Link>

//       <nav className="flex-1">
//         <ul className="space-y-2">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <Link
//                 href={item.href}
//                 className={`block px-4 py-2 rounded-lg font-medium transition ${router.asPath === item.href
//                     ? "bg-[#6366F1] text-white"
//                     : "text-gray-400 hover:bg-[#6366F1] hover:text-white"
//                   }`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       {/* <button className="mt-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
//         Logout
//       </button> */}
//     </aside>
//   );
// }

import Link from "next/link";
import { useRouter } from "next/router";
import { FaBrain, FaHome, FaFile, FaRegQuestionCircle, FaChartLine } from "react-icons/fa";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
  { name: "Summaries", href: "/summaries", icon: <FaFile /> },
  { name: "Quizzes", href: "/dashboard#quiz", icon: <FaRegQuestionCircle /> },
  { name: "Analytics", href: "/dashboard#analytics", icon: <FaChartLine /> },
  { name: "Settings", href: "/dashboard#suggestions", icon: <FaBrain /> }, // Just a placeholder icon
];

export default function SideNav() {
  const router = useRouter();
  return (
    <aside className="h-screen w-64 bg-[#1E293B] border-r border-[#334155] flex flex-col px-6 fixed gap-y-5">
      {/* LOGO */}
      <Link href="/" className="flex items-center space-x-3 py-5">
        <div className="w-8 h-8 bg-[#6366F1] rounded-md flex items-center justify-center shadow-lg text-white">
          <FaBrain />
        </div>
        <span className="text-xl font-bold text-white">Study Coach</span>
      </Link>

      {/* NAV ITEMS */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-x-3 px-4 py-2 rounded-lg transition font-semibold ${
                  router.asPath === item.href
                    ? "bg-[#6366F1] text-white"
                    : "text-gray-400 hover:bg-[#6366F1] hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

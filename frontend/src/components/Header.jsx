// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header

import { FaStar } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import witcher from '../assets/witcher.png'
import Image from 'next/image';
import guy from '../assets/guy.jpg'

export default function Header({title}) {
  return (
    <header className="w-full py-4 bg-[#1E293B] flex items-center justify-between px-6 border-b border-[#334155] sticky top-0 z-20">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-white">Dashboard</h1>

      {/* Right section */}
      <div className="flex items-center gap-x-5">
      <FaMoon className="w-5 h-5 text-gray-600"/>
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
      <Image src={guy} alt="user icon image" fill className="object-cover rounded-full" />
      </div>
      </div>
    </header>
  );
}

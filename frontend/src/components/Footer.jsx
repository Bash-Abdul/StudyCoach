// import React from 'react'
// import Link from 'next/link'
// import { FaBrain } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className='bg-[#0F172A]'>
//             <div className='max-w-7xl mx-auto'>
//                 <div className='py-10'>
//                     <div>
//                     <Link href="/" className="flex items-center space-x-2">
//                         <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
//                             {/* <span className="text-white font-bold text-lg"></span> */}
//                             <FaBrain />
//                         </div>
//                         <span className="text-2xl font-bold text-gray-900">
//                             StudyCoach
//                         </span>
//                     </Link>


//                     <p>
//                         Empowering students with AI-driven learning tools for academic success.
//                     </p>
//                     </div>

//                     <div>
//                         <h3>Product</h3>

//                         <ul>
//                             <li>Features</li>
//                             <li>Pricing</li>
//                             <li>API</li>
//                             <li>Integrations</li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h3>Company</h3>

//                         <ul>
//                             <li>About</li>
//                             <li>Blog</li>
//                             <li>Careers</li>
//                             <li>Contact</li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h3>Legal</h3>

//                         <ul>
//                             <li>Terms of service</li>
//                             <li>Privacy Policy</li>
//                             <p>Cookies Policy</p>
//                         </ul>
//                     </div>
//                 </div>

//                 <hr className=''/>
//                 <div className='py-10 flex items-center justify-between text-gray-400'>
//                     <span className='text-lg'>c 2025 StudyCoach. All rights reserved.</span>
//                     <div className='flex items-center gap-x-1'>
//                         <span>
//                         😊</span> <span>
//                         🤖</span> <span>💪🏼</span><span>
//                         📂</span> <span>
//                         📈
//                         </span>
//                     </div>
//                 </div>
//             </div>

//         </footer>
//     )
// }

// export default Footer

import React from 'react';
import Link from 'next/link';
import { FaBrain } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Branding */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
                <FaBrain className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold text-white">StudyCoach</span>
            </Link>
            <p className="text-sm">
              Empowering students with AI-driven learning tools for academic success.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Product</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">API</Link></li>
              <li><Link href="#">Integrations</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-400 gap-4">
          <span>&copy; 2025 StudyCoach. All rights reserved.</span>
          <div className="flex space-x-2 text-lg">
            <span>😊</span>
            <span>🤖</span>
            <span>💪🏼</span>
            <span>📂</span>
            <span>📈</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

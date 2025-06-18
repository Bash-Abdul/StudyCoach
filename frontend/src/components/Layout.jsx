// import Navbar from "./Navbar";

// export default function Layout({ children }) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       <Navbar />
//       <main className="max-w-6xl mx-auto py-8 px-4">{children}</main>
//     </div>
//   );
// }

import Header from "./Header";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      <SideNav />
      <main className="flex-1 ml-64 bg-[#0F172A] min-h-screen">
        <Header/>
        <div className="px-6 py-4">
        {children}
        </div>
      </main>
    </div>
  );
}
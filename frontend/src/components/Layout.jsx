// import Navbar from "./Navbar";

// export default function Layout({ children }) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       <Navbar />
//       <main className="max-w-6xl mx-auto py-8 px-4">{children}</main>
//     </div>
//   );
// }

import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <SideNav />
      <main className="flex-1 ml-64 p-8 bg-black min-h-screen">
        {children}
      </main>
    </div>
  );
}
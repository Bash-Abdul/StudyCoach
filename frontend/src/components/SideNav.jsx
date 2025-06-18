import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Upload Notes", href: "/dashboard#upload" },
  { name: "Summary", href: "/dashboard#summary" },
  { name: "Quiz", href: "/dashboard#quiz" },
  { name: "Analytics", href: "/dashboard#analytics" },
  { name: "Suggestions", href: "/dashboard#suggestions" },
];

export default function SideNav() {
  const router = useRouter();
  return (
    <aside className="h-screen w-64 bg-black border-r border-gray-800 flex flex-col py-8 px-4 fixed">
      <div className="mb-10">
        <span className="text-2xl font-bold text-white tracking-wide">Smart-Coach</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block px-4 py-2 rounded-lg font-medium transition ${
                  router.asPath === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="mt-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
        Logout
      </button>
    </aside>
  );
}
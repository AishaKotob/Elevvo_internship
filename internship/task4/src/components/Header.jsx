import { FaFeatherAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaFeatherAlt className="text-xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Aisha Kotob — Blog
          </h1>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a className="hover:underline" href="#">Home</a>
          <a className="hover:underline" href="#">About</a>
          <a className="hover:underline" href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-blue-100/25 backdrop-blur-xl shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-blue-700 tracking-wide">
          <Link href="/">Jack Zemke</Link>
        </div>
        <div className="flex gap-6 text-sm text-blue-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <a
            href="https://www.linkedin.com/in/jack-zemke/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center"
            >
            <FaLinkedin className="w-5 h-5" />
          </a>
          {/* <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link> */}
        </div>
      </div>
    </nav>
  );
}
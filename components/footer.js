import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 mt-24">
      <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/jack-zemke/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-[var(--accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/jackzemke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="mailto:jzemke@tulane.edu"
            className="text-stone-400 hover:text-[var(--accent)] transition-colors"
            aria-label="Email"
          >
            <HiOutlineMail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-stone-400">
          &copy; {new Date().getFullYear()} Jack Zemke
        </p>
      </div>
    </footer>
  );
}

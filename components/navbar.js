import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[var(--bg)]/90 backdrop-blur-sm border-b border-stone-200/60">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight text-stone-900">
          Jack Zemke
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                router.pathname === href
                  ? 'text-[var(--accent)] font-medium'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <span className="w-px h-4 bg-stone-200" />
          <a
            href="https://www.linkedin.com/in/jack-zemke/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-900 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/jackzemke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-stone-600 hover:text-stone-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200/60 bg-[var(--bg)]/95 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm py-1 transition-colors ${
                  router.pathname === href
                    ? 'text-[var(--accent)] font-medium'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-4 pt-2 border-t border-stone-200/40">
              <a
                href="https://www.linkedin.com/in/jack-zemke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/jackzemke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

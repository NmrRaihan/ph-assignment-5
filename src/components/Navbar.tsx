import { useState } from 'react'
import logoText from '../assets/logo-text.png'
import hamburgerIcon from '../assets/hamburger.png'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact'] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <img src={hamburgerIcon} alt="Menu" className="h-4 w-5" />
        </button>

        <a href="#home" className="flex items-center">
          <img src={logoText} alt="Dev Stack" className="h-8 w-auto object-contain" />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={i === 0 ? 'font-semibold text-pink-500' : 'transition hover:text-ink'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden text-sm font-semibold text-ink transition hover:opacity-70 sm:inline-block">
            Sign In
          </button>
          <button className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

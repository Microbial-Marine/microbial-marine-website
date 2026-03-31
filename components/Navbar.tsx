"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/sequencing", label: "Sequencing" },
  { href: "/consulting", label: "Consulting" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-dark.png"
            alt="Microbial Marine"
            width={200}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-teal transition-colors font-medium tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="text-sm font-semibold border border-teal text-teal px-5 py-2 rounded-full hover:bg-teal hover:text-ocean transition-colors"
          >
            Shop Products
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/70 hover:text-teal transition-colors font-medium tracking-wide uppercase"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-ocean-mid border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-teal transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="text-sm font-semibold border border-teal text-teal px-5 py-2 rounded-full text-center hover:bg-teal hover:text-ocean transition-colors"
            onClick={() => setOpen(false)}
          >
            Shop Products
          </Link>
          <Link
            href="/contact"
            className="text-white/70 hover:text-teal transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

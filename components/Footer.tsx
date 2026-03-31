import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ocean border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/">
          <Image
            src="/logo-dark.png"
            alt="Microbial Marine"
            width={160}
            height={40}
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <Link href="/" className="hover:text-teal transition-colors">Home</Link>
          <Link href="/team" className="hover:text-teal transition-colors">Team</Link>
          <Link href="/sequencing" className="hover:text-teal transition-colors">Sequencing</Link>
          <Link href="/consulting" className="hover:text-teal transition-colors">Consulting</Link>
          <Link href="/products" className="hover:text-teal transition-colors">Shop Products</Link>
          <Link href="/contact" className="hover:text-teal transition-colors">Contact</Link>
        </nav>

        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Microbial Marine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { AFFILIATE_LINK } from "@/lib/niches";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Gradient top bar */}
      <div className="navbar-gradient" />

      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#nichos"
            className="text-[14px] font-500 text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
          >
            Soluções
          </Link>
          <a
            href="#comparativo"
            className="text-[14px] font-500 text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
          >
            Comparativo
          </a>
          <a
            href="#faq"
            className="text-[14px] font-500 text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
          >
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full border border-[var(--border)] bg-white/60 px-4 py-2 text-[13px] font-500 text-[var(--text-secondary)] backdrop-blur-sm transition-all hover:border-[var(--border-hover)] hover:text-[var(--text)] sm:inline-flex"
          >
            Entrar
          </a>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-5 py-2 text-[13px] font-600 text-white shadow-sm transition-all hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-md"
          >
            Teste grátis
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

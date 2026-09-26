import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function BlogShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <div className="pointer-events-none fixed inset-0">
        <Image
          src="/gimbalabs_with_background_context.jpg"
          alt="Gimbalabs Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="border-b border-white/20 bg-black/30 backdrop-blur-sm">
          <nav
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white hover:text-amber-100"
            >
              Gimbalabs<span className="text-amber-200">.</span>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-white underline-offset-4 hover:text-amber-100 hover:underline"
            >
              Blog
            </Link>
          </nav>
        </header>
        {children}
        <footer className="mt-auto border-t border-white/20 bg-black/30 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-white/80 sm:px-8">
            <span>© Gimbalabs</span>
            <Link
              href="/"
              className="font-semibold text-white underline-offset-4 hover:text-amber-100 hover:underline"
            >
              Back to home
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

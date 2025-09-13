import Head from "next/head";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Twitter } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gimbalabs Season 6</title>
        <meta name="description" content="Welcome to Gimbalabs Season 6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen">
        <Image
          src="/gimbalabs_with_background_context.jpg"
          alt="Gimbalabs Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex min-h-screen items-center justify-center md:justify-end">
          <div className="w-full px-4 md:w-1/2 md:pr-8 lg:pr-16">
            <h1 className="text-center text-6xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-7xl md:text-right md:text-8xl">
              Gimbalabs Season 6
            </h1>
            <div className="mt-8 flex justify-center md:justify-end">
              <div className="flex flex-col gap-6">
                <div className="rounded-lg bg-black/30 backdrop-blur-sm p-4">
                  <p className="text-center text-xl font-semibold text-white md:text-right">
                    Launching September 18 • 14:30 UTC
                  </p>
                  <p className="text-center text-xl text-white mt-4 md:text-right">
                    Join Open Spaces weekly
                  </p>
                  <p className="text-center text-xl font-light text-white/95 mt-2 md:text-right">
                    Community Governance Sessions
                  </p>
                </div>
                <Button size="lg" 
                  className="w-full bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                  onClick={() => window.open('https://us06web.zoom.us/meeting/register/-RJdfipITwuUDtXDxUmBtw', '_blank', 'noopener,noreferrer')}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex gap-6">
            <a
              href="https://x.com/gimbalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://discord.gg/aYFF2UzDXS"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Discord"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

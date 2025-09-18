import Head from "next/head";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

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
                <div className="rounded-lg bg-black/30 p-4 backdrop-blur-sm">
                  <p className="text-center text-xl font-semibold text-white md:text-right">
                    Launching September 18 • 14:30 UTC
                  </p>
                  <p className="mt-4 text-center text-xl text-white md:text-right">
                    Join Open Spaces weekly
                  </p>
                  <p className="mt-2 text-center text-xl font-light text-white/95 md:text-right">
                    Community Governance Sessions
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-white px-8 py-6 text-lg font-semibold text-black hover:bg-white/90"
                  onClick={() =>
                    window.open(
                      "https://us06web.zoom.us/meeting/register/-RJdfipITwuUDtXDxUmBtw",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex gap-6">
            <a
              href="https://teamup.com/ksby8g73om81ffxs8s"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Calendar"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </a>
            <a
              href="https://plutuspbl.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Plutus PBL"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72L5.18 9L12 5.28L18.82 9zM17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </a>
            <a
              href="https://app.andamio.io/course"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Andamio Course"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
            <Link
              href="/dandelion"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Dandelion APIs"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7a3 3 0 0 1 3 3c0 1-2 3.5-3 3.5S9 6 9 5a3 3 0 0 1 3-3zm7 7a3 3 0 0 1 3 3c0 1-2.5 3-3.5 3S16 13 16 12a3 3 0 0 1 3-3zm0 7c1 0 3.5 2 3.5 3a3 3 0 0 1-3 3c-1 0-3-2-3-3s1.5-3 2.5-3zM12 19c1 0 3 2.5 3 3.5a3 3 0 0 1-3 3 3 3 0 0 1-3-3c0-1 2-3.5 3-3.5zM5 16c1 0 2.5 1.5 2.5 2.5s-2 3-3 3a3 3 0 0 1-3-3c0-1 2.5-3 3.5-3zm0-7c.5 0 3 2 3 3s-2.5 3-3.5 3a3 3 0 0 1-3-3 3 3 0 0 1 3-3z" />
              </svg>
            </Link>
            <a
              href="https://www.youtube.com/c/gimbalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="YouTube"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://github.com/gimbalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="GitHub"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://gimbalabs.notion.site/ff0d7c3cd1634a42bf554693c7da408c"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Notion"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/BvwrpTCcre"
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
            <a
              href="https://x.com/gimbalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="X"
            >
              <X className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

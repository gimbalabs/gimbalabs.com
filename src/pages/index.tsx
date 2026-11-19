import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const communityLinkClassName =
  "group relative rounded-full border border-[#00dcc8]/25 bg-[#080f2d]/70 p-[11px] text-[#00dcc8] backdrop-blur-sm transition-colors hover:border-[#00dcc8]/65 hover:bg-[#00dcc8]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00dcc8]";

const communityTooltipClassName =
  "pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 rounded-md border border-[#00dcc8]/30 bg-[#080f2d] px-3 py-2 text-sm whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gimbalabs Season 7</title>
        <meta
          name="description"
          content="Welcome to Gimbalabs Season 7. Learn, build, and explore sustainable solutions with our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#030b2e]">
        <section
          className="relative min-h-screen"
          aria-labelledby="season-title"
        >
          <Image
            src="/gimbalabs_with_background_context.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="relative z-10 flex min-h-screen items-center justify-center pt-16 pb-44 md:justify-end md:pt-20 md:pb-36">
            <div className="flex h-full w-full flex-col items-center justify-center px-4 md:w-1/2 md:pr-8 lg:pr-16">
              <h1
                id="season-title"
                className="text-center text-6xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-7xl md:text-[clamp(3rem,6.25vw,6rem)]"
              >
                <span className="block">Gimbalabs</span>
                <span className="block">Season 7</span>
              </h1>
              <div className="mt-8 flex w-full flex-col items-center">
                <div className="w-full max-w-xl rounded-lg bg-black/30 px-6 py-6 backdrop-blur-sm sm:px-8">
                  <h2 className="text-left text-xl font-semibold text-white sm:text-2xl">
                    Get involved
                  </h2>
                  <ul className="mt-3 flex flex-col items-start gap-2 text-base text-white sm:text-lg">
                    <li>
                      <Link
                        href="/sustainability-hackathon-interest"
                        className="inline-flex items-center gap-2 rounded-md border border-amber-300/80 bg-amber-300/10 px-3 py-2 text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex w-6 shrink-0 justify-center"
                        >
                          🌱
                        </span>
                        <span>Sustainability Hackathon interest form</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/brand-kit"
                        className="inline-flex items-center gap-2 rounded-md border border-amber-300/80 bg-amber-300/10 px-3 py-2 text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex w-6 shrink-0 justify-center"
                        >
                          🎨
                        </span>
                        <span>Gimbalabs Brand Kit &amp; Design System</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-5 border-t border-white/30 pt-4">
                    <h2 className="text-left text-xl font-semibold text-white sm:text-2xl">
                      Recent events
                    </h2>
                    <ul className="mt-3 flex flex-col items-start gap-2 text-base text-white sm:text-lg">
                      <li>
                        <Link
                          href="/piece-of-pie-yearbook"
                          className="inline-flex items-center gap-2 rounded-md border border-white/35 bg-white/10 px-3 py-1.5 transition hover:border-white/60 hover:bg-white/20 hover:underline"
                        >
                          <span
                            aria-hidden="true"
                            className="inline-flex w-6 shrink-0 justify-center"
                          >
                            🥧
                          </span>
                          <span>Piece of Pie Hackathon Builder Highlights</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/bounties-platform"
                          className="inline-flex items-center gap-2 rounded-md border border-white/35 bg-white/10 px-3 py-1.5 transition hover:border-white/60 hover:bg-white/20 hover:underline"
                        >
                          <span
                            aria-hidden="true"
                            className="inline-flex w-6 shrink-0 justify-center"
                          >
                            💰
                          </span>
                          <span>Cardano Bounties Platform</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 border-t border-white/30 pt-4">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-base font-semibold text-white transition hover:bg-white/15 hover:underline"
                    >
                      Read the Gimbalabs blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="absolute inset-x-0 bottom-8 z-10 px-4"
            aria-label="Gimbalabs community links"
          >
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 sm:gap-6">
              <Link
                href="/calendar"
                className={communityLinkClassName}
                aria-label="Calendar"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3.5" y="5" width="17" height="16" rx="2" />
                  <path d="M7.5 3v4m9-4v4M3.5 10h17M8 14h2m4 0h2m-8 3h2" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  Calendar
                </span>
              </Link>
              <a
                href="https://plutuspbl.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={communityLinkClassName}
                aria-label="Plutus PBL"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m2 8 10-5 10 5-10 5L2 8Z" />
                  <path d="M6 10v7c0 3 12 3 12 0v-7m4-2v7" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  Plutus PBL
                </span>
              </a>
              <a
                href="https://app.andamio.io/course"
                target="_blank"
                rel="noopener noreferrer"
                className={communityLinkClassName}
                aria-label="Andamio Course"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 2.5H5a1.5 1.5 0 0 0-1.5 1.5v16A1.5 1.5 0 0 0 5 21.5h14a1.5 1.5 0 0 0 1.5-1.5V9L14 2.5Z" />
                  <path d="M14 2.5V9h6.5M8.5 12.5 6 15l2.5 2.5m7-5L18 15l-2.5 2.5m-2.5-6-2 7" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  Andamio Course
                </span>
              </a>
              <Link
                href="/dandelion"
                className={communityLinkClassName}
                aria-label="Dandelion APIs"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 9V4.5m2.6 6 3.9-2.25m-3.9 5.25 3.9 2.25M12 15v4.5m-2.6-6-3.9 2.25m3.9-5.25L5.5 8.25" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="2.75" r="1.75" />
                  <circle cx="20" cy="7.4" r="1.75" />
                  <circle cx="20" cy="16.6" r="1.75" />
                  <circle cx="12" cy="21.25" r="1.75" />
                  <circle cx="4" cy="16.6" r="1.75" />
                  <circle cx="4" cy="7.4" r="1.75" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  Dandelion APIs
                </span>
              </Link>
              <a
                href="https://www.youtube.com/c/gimbalabs"
                target="_blank"
                rel="noopener noreferrer"
                className={communityLinkClassName}
                aria-label="YouTube"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2.5" y="5" width="19" height="14" rx="4" />
                  <path d="m10 8.5 5.5 3.5-5.5 3.5v-7Z" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  YouTube
                </span>
              </a>
              <a
                href="https://github.com/gimbalabs"
                target="_blank"
                rel="noopener noreferrer"
                className={communityLinkClassName}
                aria-label="GitHub"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 6.5v11m0-3.5h7a4 4 0 0 0 4-4V8.5" />
                  <circle cx="6.5" cy="4" r="2.5" />
                  <circle cx="6.5" cy="20" r="2.5" />
                  <circle cx="17.5" cy="6" r="2.5" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  GitHub
                </span>
              </a>
              <a
                href="https://gimbalabs.notion.site/ff0d7c3cd1634a42bf554693c7da408c"
                target="_blank"
                rel="noopener noreferrer"
                className={communityLinkClassName}
                aria-label="Notion"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
                  <path d="M7 17h3m4-10h3M8.5 17V7l7 10V7M7 7h1.5m7 10H17" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  Notion
                </span>
              </a>
              <a
                href="https://discord.gg/BvwrpTCcre"
                target="_blank"
                rel="noopener noreferrer"
                className={communityLinkClassName}
                aria-label="Discord"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.5 5.5 8 4a16 16 0 0 0-4 1.5C2 9 1 13 1.5 17a15 15 0 0 0 5 2.5L8 17m7.5-11.5L16 4a16 16 0 0 1 4 1.5c2 3.5 3 7.5 2.5 11.5a15 15 0 0 1-5 2.5L16 17" />
                  <path d="M8.5 5.5a18 18 0 0 1 7 0M6 15.5c4 2 8 2 12 0" />
                  <circle cx="8" cy="11.5" r="1" />
                  <circle cx="16" cy="11.5" r="1" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  Discord
                </span>
              </a>
              <a
                href="https://x.com/gimbalabs"
                target="_blank"
                rel="noopener noreferrer"
                className={communityLinkClassName}
                aria-label="X"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.85"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 3h4.5L20 21h-4.5L4 3ZM20 3l-6.5 7.5M10.5 14 4 21" />
                </svg>
                <span aria-hidden="true" className={communityTooltipClassName}>
                  X
                </span>
              </a>
            </div>
          </nav>
        </section>
        <section
          className="border-t border-white/15 px-6 py-12 text-white sm:px-10 sm:py-16"
          aria-labelledby="public-benefit-title"
        >
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2
              id="public-benefit-title"
              className="text-2xl font-semibold sm:text-3xl"
            >
              Gimbalabs Public Benefit
            </h2>
            <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-8">
              Gimbalabs LLC promotes public benefit by advancing education,
              technological innovation, and community sustainability through
              open and replicable learning and experimentation programs;
              developing and sharing open-source knowledge, tools, and
              resources; and supporting individuals, communities, and
              mission-driven projects in building practical technical capacity
              and sustainable solutions.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

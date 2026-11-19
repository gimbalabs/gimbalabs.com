import Head from "next/head";
import Link from "next/link";

export default function BrandKitPage() {
  return (
    <>
      <Head>
        <title>Gimbalabs Brand Kit &amp; Design System</title>
        <meta
          name="description"
          content="Connect with the Gimbalabs brand kit and design system team in the #brand-kit channel on Gimbalabs Discord."
        />
      </Head>
      <main className="min-h-screen bg-[#030b2e] px-6 py-12 text-white sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex rounded-md px-3 py-2 text-base text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00dcc8]"
          >
            Back to Gimbalabs
          </Link>
          <h1 className="mt-12 text-3xl font-bold tracking-tight sm:text-5xl">
            Gimbalabs Brand Kit &amp; Design System
          </h1>
          <section
            className="mt-10 max-w-3xl rounded-2xl border border-[#00dcc8]/25 bg-white/[0.03] p-6 sm:p-10"
            aria-labelledby="brand-kit-channel-title"
          >
            <p className="text-sm font-medium tracking-widest text-white/60 uppercase">
              Gimbalabs Discord · Current Projects
            </p>
            <h2
              id="brand-kit-channel-title"
              className="mt-3 flex items-center gap-3 text-3xl font-bold"
            >
              <svg
                className="h-8 w-8 text-[#00dcc8]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.85"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M10 3 6 21M18 3l-4 18M4 9h17M3 15h17" />
              </svg>
              brand-kit
            </h2>
            <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg sm:leading-8">
              For the Gimbalabs brand kit and design system, reach out to{" "}
              <strong className="font-semibold text-[#00dcc8]">@Newman5</strong>{" "}
              or{" "}
              <strong className="font-semibold text-[#00dcc8]">
                @Adebisi Jethro
              </strong>{" "}
              in the{" "}
              <strong className="font-semibold text-white">#brand-kit</strong>{" "}
              channel.
            </p>
            <a
              href="https://discord.gg/cnWjbz3u2r"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-[#00dcc8] px-5 py-3 text-base font-semibold text-[#030b2e] transition hover:bg-[#55f0de] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00dcc8]"
            >
              <svg
                className="h-6 w-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.85"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8.5 5.5 8 4a16 16 0 0 0-4 1.5C2 9 1 13 1.5 17a15 15 0 0 0 5 2.5L8 17m7.5-11.5L16 4a16 16 0 0 1 4 1.5c2 3.5 3 7.5 2.5 11.5a15 15 0 0 1-5 2.5L16 17" />
                <path d="M8.5 5.5a18 18 0 0 1 7 0M6 15.5c4 2 8 2 12 0" />
                <circle cx="8" cy="11.5" r="1" />
                <circle cx="16" cy="11.5" r="1" />
              </svg>
              Join Gimbalabs Discord
            </a>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
              Join the server and complete verification, then find #brand-kit
              under Current Projects.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

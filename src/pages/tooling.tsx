import Head from "next/head";
import Link from "next/link";

export default function ToolingPage() {
  return (
    <>
      <Head>
        <title>Cardano Community Feedback Tooling | Gimbalabs</title>
        <meta
          name="description"
          content="Join the Gimbalabs Discord to learn about Cardano Community Feedback Tooling."
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-white/70">
            Get Involved
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Cardano Community Feedback Tooling
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Join the Gimbalabs Discord to learn more about this project and
            reach out to James Dunseith {" "}
            <span className="font-semibold text-white">@jamesdunseith</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="https://discord.gg/XPxhyjWZUb"
              className="inline-flex rounded-md bg-white px-4 py-2 font-medium text-slate-950 transition hover:bg-white/90"
            >
              Join Gimbalabs Discord
            </Link>
            <Link
              href="/"
              className="inline-flex rounded-md border border-white/40 bg-white/10 px-4 py-2 font-medium transition hover:bg-white/20"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

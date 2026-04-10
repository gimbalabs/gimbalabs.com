import Head from "next/head";
import Link from "next/link";

export default function BountiesPlatformPage() {
  return (
    <>
      <Head>
        <title>Cardano Bounties Platform | Gimbalabs</title>
        <meta
          name="description"
          content="Placeholder page for Cardano Bounties Platform."
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-white/70">
            Coming Soon
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Cardano Bounties Platform
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            This is a placeholder page. Will soon be updated with how to participate in this project.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-md border border-white/40 bg-white/10 px-4 py-2 font-medium transition hover:bg-white/20"
          >
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}

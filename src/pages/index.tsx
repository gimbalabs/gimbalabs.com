import Head from "next/head";
import Image from "next/image";
import { Button } from "~/components/ui/button";

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
                <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Dandelion() {
  return (
    <>
      <Head>
        <title>The Calendar - Gimbalabs</title>
        <meta
          name="description"
          content="The Gimbalabs Calendar of events - including Open Spaces and Live Coding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen">
        <Image
          src="/gimbalabs_with_background_context.jpg"
          alt="Gimbalabs Background"
          fill
          className="object-cover"
          priority
          quality={25}
        />
        <Link
          href="/"
          className="absolute top-8 left-1/2 z-20 block -translate-x-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Home"
        >
          <svg
            className="h-8 w-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>
        <div className="relative z-10 flex min-h-screen items-center justify-center md:justify-end">
          <div className="w-full px-4 md:pr-8 lg:pr-16">
            <h1 className="text-center text-6xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-7xl md:text-right md:text-8xl">
              Calendar
            </h1>
            <div className="mt-8 flex justify-center md:justify-end">
              {/* calendar iFrame */}
              <div style={{ width: "100%", height: "80vh" }}>
                <iframe
                  src="https://teamup.com/ksby8g73om81ffxs8s?view=w&disableSidepanel=1&showHeader=0&showProfileAndInfo=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        </div>
        
      </main>

      
    </>
  );
}

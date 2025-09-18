import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Dandelion() {
  return (
    <>
      <Head>
        <title>Dandelion APIs - Gimbalabs</title>
        <meta
          name="description"
          content="Developer tools to get you integrated into the Cardano blockchain, fast."
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
          <div className="w-full px-4 md:w-1/2 md:pr-8 lg:pr-16">
            <h1 className="text-center text-6xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-7xl md:text-right md:text-8xl">
              Dandelion APIs
            </h1>
            <div className="mt-8 flex justify-center md:justify-end">
              <div className="flex flex-col gap-6">
                <div className="rounded-lg bg-black/30 p-6 backdrop-blur-sm">
                  <div className="mt-6">
                    <p className="text-center text-4xl font-bold text-white/90 md:text-right">
                      01
                    </p>
                    <p className="mt-4 text-center text-xl font-semibold text-white md:text-right">
                      Run your Cardano infrastructure
                    </p>
                    <p className="mt-4 text-center text-base text-white/80 md:text-right">
                      Check out the latest Dandelion Lite on GitHub
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row">
                  <Button
                    size="lg"
                    className="flex-1 bg-white px-6 py-6 text-base font-semibold text-black hover:bg-white/90 sm:text-lg"
                    href="https://dandelion.link/"
                  >
                    Dandelion.Link
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 bg-white px-6 py-6 text-base font-semibold text-black hover:bg-white/90 sm:text-lg"
                    href="https://github.com/GameChangerFinance/dandelion-lite"
                  >
                    Dandelion Lite
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            document
              .getElementById("details-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-8 left-1/2 z-20 block -translate-x-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Scroll to details"
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </main>

      <section id="details-section" className="relative bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="mb-16 text-center">
            <pre className="mb-8 font-mono text-xs text-green-400 sm:text-sm md:text-base">
              {`___  ____ __ _ ___  ____ _    _ ____ __ _
|__> |--| | \\| |__> |=== |___ | [__] | \\|
                                   lite`}
            </pre>
            <h2 className="mb-4 text-5xl font-bold">
              🚀 Join the Dandelion Network!
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Join as a DNO (Dandelion Node Operator) to help students and
              developers build with ease and help us decentralize Cardano dapps
              and services further
            </p>
          </div>

          <div className="mb-16 grid gap-12 md:grid-cols-2">
            <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">What is Dandelion?</h3>
              <p className="mb-4 text-gray-300">
                <strong>Dandelion</strong> is a community-supported project led
                by GimbaLabs and operated by La PEACEpool Cardano repsist₳nce.
                Every Cardano API available. From bottom to top, from testnet to
                mainnet.
              </p>
              <p className="text-gray-300">
                <strong>Dandelion Lite</strong> is a convenient way of deploying
                your own local Cardano Node and a set of Dandelion APIs. It uses
                docker-compose, podman and handy scripts to ease setup.
              </p>
            </div>

            <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Become a Node Operator
              </h3>
              <p className="mb-4 text-gray-300">
                DNOs will be incentivized in the future. We are actively working
                on modular, client-side revenue channels and alternative
                compensation methods for your efforts.
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                onClick={() =>
                  window.open(
                    "https://github.com/GameChangerFinance/gamechanger.wallet/blob/main/catalyst/FUND13.md",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                ❤️ Support on Catalyst
              </Button>
            </div>
          </div>

          <div className="mb-16 rounded-lg bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-3xl font-bold">Components</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "cardano-node-ogmios",
                  desc: "Cardano node + Ogmios bridge",
                },
                {
                  name: "cardano-db-sync",
                  desc: "Blockchain data to PostgreSQL",
                },
                { name: "haproxy", desc: "High-performance traffic proxy" },
                { name: "postgres", desc: "PostgreSQL database" },
                { name: "koios", desc: "RESTful API for Cardano" },
                { name: "blockfrost", desc: "RESTful API using ryo images" },
                { name: "cardano-graphql", desc: "Official GraphQL API" },
                { name: "cardano-token-registry", desc: "Token Registry API" },
                { name: "cardano-submit-api", desc: "Transaction Submit API" },
                {
                  name: "dandelion-postgrest",
                  desc: "PostGREST API for queries",
                },
                { name: "cardano-sql", desc: "PostgreSQL-over-HTTP gateway" },
                { name: "manifest", desc: "JSON info for Dandelion Network" },
              ].map((item) => (
                <div key={item.name} className="rounded bg-black/30 p-3">
                  <div className="font-mono text-sm text-green-400">
                    {item.name}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">Hardware Requirements</h3>
              <p className="mb-3 text-sm text-gray-400">
                For concurrent Mainnet + Preproduction Testnet:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 128GB RAM (DDR4 ECC RAM)</li>
                <li>• 2TB M2 NVME for storage</li>
                <li>• Dual Intel Xeon E5 2680 v4</li>
              </ul>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-sm text-gray-400">
                  Volume sizes (10/10/2024):
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Mainnet: ~724 GB | Preprod: ~29 GB
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">Software Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Ubuntu Server 24.04 (normal install)</li>
                <li>• Docker Compose</li>
                <li>• Podman</li>
                <li>• OpenSSH server</li>
              </ul>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-sm text-gray-400">
                  Backup sizes (compressed):
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Mainnet: ~250 GB | Preprod: ~9.3 GB
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold">Quick Deploy</h3>
            <div className="overflow-x-auto rounded bg-black/50 p-4 font-mono text-sm">
              <div className="text-green-400"># Clone and setup</div>
              <div>
                $ git clone
                https://github.com/GameChangerFinance/dandelion-lite.git
              </div>
              <div>$ cd dandelion-lite</div>
              <div>$ ./scripts/dandoman.sh --podman-install</div>
              <div className="mt-2 text-green-400"># Configure and run</div>
              <div>$ ./scripts/dandoman.sh</div>
              <div>$ docker compose up -d</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

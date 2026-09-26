import Head from "next/head";
import Link from "next/link";

import { BlogShell } from "~/components/blog/BlogShell";
import { posts } from "~/data/blog";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog | Gimbalabs</title>
        <meta
          name="description"
          content="Perspectives and lessons from the Gimbalabs community on learning, building, experimentation, and sustainability."
        />
        <link rel="canonical" href="https://gimbalabs.com/blog" />
        <meta property="og:title" content="Blog | Gimbalabs" />
        <meta
          property="og:description"
          content="Perspectives and lessons from the Gimbalabs community."
        />
        <meta property="og:url" content="https://gimbalabs.com/blog" />
      </Head>
      <BlogShell>
        <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.18em] text-amber-200 uppercase">
              Gimbalabs blog
            </p>
            <h1 className="mt-5 text-5xl leading-tight font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl">
              Ideas from the work.
            </h1>
          </div>
          <div className="mt-10 rounded-2xl bg-[#f8f7f2] px-6 py-8 text-slate-900 sm:px-10 sm:py-10">
            <p className="max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              Perspectives on learning by building, testing ideas in the open,
              and making useful work sustainable.
            </p>
            <div className="mt-10 border-t border-slate-900/15 pt-6">
              <h2 className="text-sm font-bold tracking-[0.16em] text-slate-500 uppercase">
                Latest stories
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="flex flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-sm transition hover:border-amber-700/40 hover:shadow-md"
                  >
                    <p className="px-8 pt-8 text-sm font-semibold text-amber-800 sm:px-10 sm:pt-10">
                      Perspective · {post.author}
                    </p>
                    <h3 className="mt-5 px-8 text-3xl font-bold tracking-tight sm:px-10">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-amber-800"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-4 flex-1 px-8 leading-7 text-slate-600 sm:px-10">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-8 inline-flex w-fit items-center gap-2 px-8 pb-8 font-semibold text-amber-800 underline-offset-4 hover:underline sm:px-10 sm:pb-10"
                    >
                      Read the article <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </main>
      </BlogShell>
    </>
  );
}

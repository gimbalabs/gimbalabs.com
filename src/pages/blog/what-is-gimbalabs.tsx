import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { BlogShell } from "~/components/blog/BlogShell";
import { posts } from "~/data/blog";

const post = posts[0];

const paragraph = "mt-5 leading-8 text-slate-800";
const heading =
  "mt-14 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl";

export default function WhatIsGimbalabs() {
  return (
    <>
      <Head>
        <title>What Is Gimbalabs? | From Learning to Sustainability</title>
        <meta name="description" content={post.description} />
        <link
          rel="canonical"
          href="https://gimbalabs.com/blog/what-is-gimbalabs"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="What Is Gimbalabs? | From Learning to Sustainability"
        />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:url"
          content="https://gimbalabs.com/blog/what-is-gimbalabs"
        />
        <meta
          name="twitter:title"
          content="What Is Gimbalabs? | From Learning to Sustainability"
        />
        <meta name="twitter:description" content={post.description} />
      </Head>
      <BlogShell>
        <main className="mx-auto max-w-6xl px-6 pt-10 sm:px-8 sm:pt-14">
          <Link
            href="/blog"
            className="text-sm font-semibold text-amber-200 underline-offset-4 hover:text-amber-100 hover:underline"
          >
            ← All articles
          </Link>
          <article className="mx-auto mt-8 max-w-3xl rounded-2xl bg-[#f8f7f2] px-6 py-2 pb-10 text-slate-900 sm:px-10">
            <header className="border-b border-slate-900/15 pt-12 pb-10 sm:pt-16">
              <p className="text-sm font-bold tracking-[0.18em] text-amber-800 uppercase">
                Perspective
              </p>
              <h1 className="mt-5 text-5xl leading-tight font-bold tracking-tight text-slate-900 sm:text-6xl">
                What Is Gimbalabs?
              </h1>
              <p className="mt-7 text-lg text-slate-600">By {post.author}</p>
            </header>

            <div className="pt-8 text-lg sm:text-xl">
              <p className={paragraph}>
                Gimbalabs started as a place to learn Cardano by building.
              </p>
              <p className={paragraph}>
                Years later, the harder question is no longer just{" "}
                <strong>how do we help people learn?</strong>
              </p>
              <p className={paragraph}>It is:</p>
              <p className={paragraph}>
                <strong>
                  How do we help people move from learning, to building
                  something useful, to making that work sustainable?
                </strong>
              </p>
              <figure className="mt-8">
                <Image
                  src="/blog/learning-becomes-meaningful.png"
                  alt="Hand-drawn sketch of three steps: a person reading labeled Learning, the same person building a box labeled Building something useful, and a finished box with a plant and coin jar labeled Achieve sustainability."
                  width={1280}
                  height={720}
                  className="h-auto w-full rounded-md"
                />
                <figcaption className="mt-3 text-base leading-7 text-slate-600">
                  Learning becomes meaningful when it turns into building
                  something useful and achieving sustainability.
                </figcaption>
              </figure>
              <p className={paragraph}>
                And if we discover approaches that work, can we make them
                reusable for other communities and ecosystems?
              </p>
              <p className={paragraph}>
                That is increasingly how I think about Gimbalabs.
              </p>

              <h2 className={heading}>From Learning to Experimentation</h2>
              <p className={paragraph}>
                Gimbalabs began as a Cardano education initiative built around
                learning through participation.
              </p>
              <p className={paragraph}>
                Instead of only teaching concepts, people could work on
                projects, explore tools, solve problems, and learn alongside
                others.
              </p>
              <p className={paragraph}>But building creates new problems.</p>
              <p className={paragraph}>
                A person can learn a technology without knowing what to build.
              </p>
              <p className={paragraph}>
                A team can build something without knowing whether anyone needs
                it.
              </p>
              <p className={paragraph}>
                A project can receive funding without knowing how it survives
                when the funding ends.
              </p>
              <p className={paragraph}>
                A community can introduce governance without knowing how to
                actually make decisions together.
              </p>
              <p className={paragraph}>
                So Gimbalabs gradually became a place not just for learning, but
                for{" "}
                <strong>experimenting with these problems in practice</strong>.
              </p>
              <p className={paragraph}>
                Today those experiments can take different forms:
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-7 leading-8 text-slate-800">
                <li>educational programs;</li>
                <li>open-source projects;</li>
                <li>hackathons;</li>
                <li>governance systems;</li>
                <li>community initiatives;</li>
                <li>technical tools;</li>
                <li>sustainability experiments;</li>
                <li>and potentially products or services.</li>
              </ul>
              <p className={paragraph}>
                The point is not that every experiment succeeds.
              </p>
              <p className={paragraph}>
                The point is that we learn something useful from doing it.
              </p>

              <h2 className={heading}>
                The Experiment Should Produce Evidence
              </h2>
              <p className={paragraph}>
                I think a useful Gimbalabs experiment should eventually let us
                answer a few basic questions:
              </p>
              <div className="mt-6 space-y-3 border-l-4 border-amber-700 pl-6 leading-8 font-bold text-slate-900">
                <p>What did we try?</p>
                <p>What happened?</p>
                <p>What worked?</p>
                <p>What didn&apos;t?</p>
                <p>What would we change next time?</p>
                <p>Can somebody else use what we learned?</p>
              </div>
              <figure className="mt-8">
                <Image
                  src="/blog/experiment-evidence.png"
                  alt="Hand-drawn notebook checklist titled Evidence, with questions about what was tried, what happened, what worked, what did not, what comes next, and whether others can reuse it."
                  width={1152}
                  height={864}
                  className="mx-auto h-auto w-full max-w-xl rounded-md"
                />
                <figcaption className="mt-3 text-base leading-7 text-slate-600">
                  An experiment is useful when it leaves evidence someone else
                  can use.
                </figcaption>
              </figure>
              <p className={paragraph}>
                If an experiment works, it might become a repeatable program,
                process, tool, or implementation.
              </p>
              <p className={paragraph}>
                If it fails, it can still be valuable if we understand why.
              </p>
              <p className={paragraph}>
                We don&apos;t want to simply run activities and move on.
              </p>
              <p className={paragraph}>We want to accumulate knowledge.</p>

              <h2 className={heading}>Sustainability Is the Hard Part</h2>
              <p className={paragraph}>
                This is the problem I am most interested in right now.
              </p>
              <p className={paragraph}>
                There are many ways to help people start projects.
              </p>
              <p className={paragraph}>Grants can fund them.</p>
              <p className={paragraph}>Hackathons can launch them.</p>
              <p className={paragraph}>Education programs can teach them.</p>
              <p className={paragraph}>Communities can support them.</p>
              <p className={paragraph}>But what happens six months later?</p>
              <p className={paragraph}>Can the project continue?</p>
              <p className={paragraph}>
                Can the people doing the work support themselves?
              </p>
              <p className={paragraph}>
                Is somebody willing to pay for the value being created?
              </p>
              <p className={paragraph}>
                Can the project survive without continuously finding another
                grant?
              </p>
              <p className={paragraph}>
                I think Gimbalabs can become a place where we deliberately
                experiment with that transition:
              </p>
              <p className="mt-6 rounded-lg border border-amber-700/30 bg-amber-50 px-6 py-6 text-xl leading-8 font-bold text-slate-900 sm:text-2xl">
                learning → building → usefulness → sustainability
              </p>
              <p className={paragraph}>
                Not every project needs to become a traditional company.
              </p>
              <p className={paragraph}>Some may survive through services.</p>
              <p className={paragraph}>Some through products.</p>
              <p className={paragraph}>
                Some through sponsorships, grants, open-source funding,
                ecosystem support, or combinations of these.
              </p>
              <p className={paragraph}>
                We don&apos;t need to decide the answer in advance.
              </p>
              <p className={paragraph}>
                We can test different approaches and document what happens.
              </p>

              <h2 className={heading}>A Home for Experiments</h2>
              <p className={paragraph}>This leads to the larger idea.</p>
              <p className={paragraph}>
                I increasingly see Gimbalabs as a{" "}
                <strong>home for experiments</strong>.
              </p>
              <figure className="mt-8">
                <Image
                  src="/blog/home-for-experiments.png"
                  alt="Hand-drawn workshop labeled Gimbalabs, connected to sketches of a class, a tool, a hackathon, people talking, and a seedling. Notes travel from the workshop to two other buildings."
                  width={1280}
                  height={720}
                  className="h-auto w-full rounded-md"
                />
                <figcaption className="mt-3 text-base leading-7 text-slate-600">
                  One home can hold many kinds of experiments, and the notes
                  can travel to other communities.
                </figcaption>
              </figure>
              <p className={paragraph}>
                One experiment might help people learn.
              </p>
              <p className={paragraph}>
                Another might help early projects find users.
              </p>
              <p className={paragraph}>
                Another might test a governance process.
              </p>
              <p className={paragraph}>
                Another might create open-source infrastructure.
              </p>
              <p className={paragraph}>
                Another might discover a program that an ecosystem or foundation
                wants to run elsewhere.
              </p>
              <p className={paragraph}>Some experiments may fail.</p>
              <p className={paragraph}>Some may create public knowledge.</p>
              <p className={paragraph}>Some may eventually generate revenue.</p>
              <p className={paragraph}>
                Taken together, they create something more valuable: a growing
                body of tested approaches.
              </p>
              <p className={paragraph}>
                Over time, Gimbalabs could be able to say:
              </p>
              <p className="mt-6 border-l-4 border-amber-700 pl-6 leading-8 font-bold text-slate-900">
                We tried this. Here is what happened. Here is the evidence. Here
                is what we learned. If it is useful to you, build on it.
              </p>
              <p className={paragraph}>
                That is much more interesting to me than pretending we already
                know the answers.
              </p>

              <h2 className={heading}>Why This Could Matter Beyond Cardano</h2>
              <p className={paragraph}>Gimbalabs is rooted in Cardano.</p>
              <p className={paragraph}>
                But the problems we are exploring are not uniquely Cardano
                problems.
              </p>
              <p className={paragraph}>
                Other ecosystems, foundations, communities, and institutions are
                also trying to figure out:
              </p>
              <div className="mt-5 space-y-3 leading-8 text-slate-800">
                <p>How do we create effective learning environments?</p>
                <p>How do we turn learners into builders?</p>
                <p>How do we help early projects become useful?</p>
                <p>How do we help useful work survive?</p>
                <p>
                  How do we fund experimentation without funding endless
                  activity?
                </p>
                <p>
                  How do we capture what we learn so others don&apos;t need to
                  start from zero?
                </p>
              </div>
              <p className={paragraph}>
                Cardano can be where we run many of these experiments.
              </p>
              <p className={paragraph}>
                The knowledge does not have to stay there.
              </p>

              <h2 className={heading}>So, What Is Gimbalabs?</h2>
              <p className={paragraph}>My answer today would be:</p>
              <p className="mt-6 border-l-4 border-amber-700 pl-6 leading-8 font-bold text-slate-900">
                Gimbalabs is a place where people learn by building, experiment
                with difficult ecosystem problems, and turn what we learn into
                knowledge, tools, processes, and programs that others can reuse.
              </p>
              <p className={paragraph}>
                And increasingly, I think sustainability should sit at the
                center of that work.
              </p>
              <p className={paragraph}>But this is my perspective.</p>
              <p className={paragraph}>
                Gimbalabs has been shaped by many people over several years, and
                I don&apos;t want one person&apos;s interpretation to become the
                definitive version of its story.
              </p>
              <p className={paragraph}>
                I would especially like <strong>Newman, Seb, James</strong>, and
                other long-term contributors to add their own perspectives.
              </p>
              <p className={paragraph}>Where do we agree?</p>
              <p className={paragraph}>Where do we disagree?</p>
              <p className={paragraph}>What parts of Gimbalabs am I missing?</p>
              <p className={paragraph}>What should it become?</p>
              <p className={paragraph}>
                I think those different perspectives are worth documenting too.
              </p>
              <p className={paragraph}>
                Because Gimbalabs itself is still an experiment.
              </p>
              <p className={paragraph}>
                And that is probably how it should be.
              </p>
            </div>
            <div className="mt-16 border-t border-slate-900/15 pt-8">
              <Link
                href="/blog"
                className="font-semibold text-amber-800 underline-offset-4 hover:underline"
              >
                ← More from the blog
              </Link>
            </div>
          </article>
        </main>
      </BlogShell>
    </>
  );
}

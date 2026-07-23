import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import { YEARBOOK_BASE_PATH } from "~/data/piece-of-pie-yearbook";
import { yearbookCss } from "./yearbookCss";

export function YearbookLayout({
  children,
  title,
  description = "Explore the builders and final projects of the 2026 Piece of Pie Hackathon.",
  mainClassName,
}: {
  children: ReactNode;
  title: string;
  description?: string;
  mainClassName?: string;
}) {
  return (
    <div className="yb-root">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="yb-site-header">
        <Link className="yb-wordmark" href={YEARBOOK_BASE_PATH}>
          Piece of Pie <span>2026</span>
        </Link>
        <nav aria-label="Yearbook navigation">
          <Link href={`${YEARBOOK_BASE_PATH}/#categories`}>Categories</Link>
          <Link href={`${YEARBOOK_BASE_PATH}/projects`}>All Projects</Link>
          <Link href={`${YEARBOOK_BASE_PATH}/about`}>About</Link>
        </nav>
      </header>
      <main className={mainClassName}>{children}</main>
      <style jsx global>
        {yearbookCss}
      </style>
    </div>
  );
}

export function YearbookFooter({ children }: { children: ReactNode }) {
  return <footer className="yb-site-footer">{children}</footer>;
}

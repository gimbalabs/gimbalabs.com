import Link from "next/link";
import {
  YearbookFooter,
  YearbookLayout,
} from "~/components/piece-of-pie-yearbook/YearbookLayout";
import { YEARBOOK_BASE_PATH } from "~/data/piece-of-pie-yearbook";

export default function AboutPage() {
  return (
    <YearbookLayout title="About — Piece of Pie Yearbook">
      <article className="yb-about-page">
        <p className="yb-eyebrow">About the hackathon</p>
        <h1>
          Build in public.
          <br />
          Qualify through consistency.
        </h1>
        <div className="yb-about-grid">
          <div>
            <p>
              Piece of Pie is a twelve-week, participation-driven hackathon by
              Gimbalabs. Builders shared visible progress, maintained public
              repositories, and closed the season with verifiable final work.
            </p>
            <p>
              The “Built on Cardano” label highlights projects that shipped on
              Cardano; the remaining projects qualified through the non-Cardano
              builder track.
            </p>
          </div>
          <aside>
            <dl>
              <div>
                <dt>Qualified projects</dt>
                <dd>21</dd>
              </div>
              <div>
                <dt>Built on Cardano</dt>
                <dd>14</dd>
              </div>
              <div>
                <dt>Build period</dt>
                <dd>12 weeks</dd>
              </div>
            </dl>
          </aside>
        </div>
        <div className="yb-about-links">
          <Link href="/piece-of-pie">Official Piece of Pie page →</Link>
          <a
            href="https://github.com/gimbalabs/Piece-of-Pie-Hackathon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official handbook repository ↗
          </a>
        </div>
      </article>
      <YearbookFooter>
        <Link href={`${YEARBOOK_BASE_PATH}/#categories`}>← Category index</Link>
        <Link href={`${YEARBOOK_BASE_PATH}/print`}>Printable edition →</Link>
      </YearbookFooter>
    </YearbookLayout>
  );
}

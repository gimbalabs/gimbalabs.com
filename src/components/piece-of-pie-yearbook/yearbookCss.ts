export const yearbookCss = String.raw`
  .yb-root {
    --yb-paper: #fffaf2;
    --yb-paper-deep: #c8e3d1;
    --yb-ink: #413443;
    --yb-tomato: #e8a5ad;
    --yb-olive: #6fb89a;
    --yb-gold: #f0ca62;
    --yb-blue: #7495e5;
    --yb-accent-ink: #875264;
    --yb-rule: rgba(65, 52, 67, 0.28);
    --yb-font-display: "Courier New", "Nimbus Mono PS", Courier, monospace;
    --yb-font-sans: Futura, "Avenir Next", "Century Gothic", Arial, sans-serif;
    background: var(--yb-paper);
    color: var(--yb-ink);
    font-family: var(--yb-font-sans);
    font-size: 16px;
    line-height: 1.55;
    min-height: 100vh;
  }

  .yb-root, .yb-root * { box-sizing: border-box; }
  .yb-root a { color: inherit; }
  .yb-root button { font: inherit; }
  .yb-root main { min-height: calc(100vh - 5rem); }

  .yb-site-header {
    align-items: center;
    border-bottom: 1px solid var(--yb-ink);
    display: flex;
    justify-content: space-between;
    margin: 0 3rem;
    padding: 1.25rem 0;
  }

  .yb-wordmark {
    font-family: var(--yb-font-display);
    font-size: 1.15rem;
    font-weight: 700;
    text-decoration: none;
  }

  .yb-wordmark span {
    border-left: 1px solid var(--yb-ink);
    font-family: var(--yb-font-sans);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    margin-left: 0.7rem;
    padding-left: 0.7rem;
  }

  .yb-site-header nav { display: flex; gap: 1.75rem; }
  .yb-site-header nav a {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
  }
  .yb-site-header nav a:hover { color: var(--yb-accent-ink); }

  .yb-eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    margin: 0 0 1rem;
    text-transform: uppercase;
  }

  .yb-hero {
    --yb-blue: #5d82e5;
    --yb-gold: #e9b92f;
    --yb-ink: #302333;
    background: var(--yb-blue);
    border: 2px solid var(--yb-ink);
    box-shadow: 10px 10px 0 var(--yb-tomato);
    color: var(--yb-ink);
    margin: 2.25rem 3rem 0;
    overflow: hidden;
    padding: clamp(2rem, 5vw, 4.5rem);
    position: relative;
  }

  .yb-hero::after {
    align-items: center;
    background: var(--yb-tomato);
    border-radius: 50%;
    box-shadow: 0 0 0 4px var(--yb-ink), 0 0 0 6px var(--yb-paper);
    content: "21";
    display: flex;
    font-family: var(--yb-font-display);
    font-size: 1.8rem;
    font-weight: 700;
    height: 5rem;
    justify-content: center;
    position: absolute;
    right: clamp(2rem, 5vw, 5rem);
    top: clamp(2rem, 5vw, 4rem);
    transform: rotate(8deg);
    width: 5rem;
  }

  .yb-hero h1 {
    font-family: var(--yb-font-display);
    font-size: clamp(4rem, 9.5vw, 9rem);
    font-weight: 700;
    letter-spacing: -0.09em;
    line-height: 0.78;
    margin: 0;
    max-width: 90%;
    text-transform: uppercase;
  }

  .yb-hero h1 em {
    background: var(--yb-gold);
    color: var(--yb-ink);
    display: inline-block;
    font-style: normal;
    letter-spacing: -0.11em;
    margin-top: 0.12em;
    padding: 0.08em 0.14em 0.12em 0.08em;
    transform: rotate(-1.5deg);
  }

  .yb-hero > .yb-eyebrow {
    background: var(--yb-gold);
    border: 1px solid var(--yb-ink);
    display: inline-block;
    margin-bottom: clamp(3rem, 7vw, 6rem);
    padding: 0.45rem 0.65rem;
    transform: rotate(-1deg);
  }

  .yb-hero-footer {
    align-items: end;
    border-top: 1px solid var(--yb-ink);
    display: flex;
    justify-content: space-between;
    margin-top: 3.4rem;
    padding-top: 1.25rem;
  }
  .yb-hero-footer p {
    font-family: var(--yb-font-display);
    font-size: 1.3rem;
    margin: 0;
    max-width: 34rem;
  }
  .yb-hero-footer span {
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .yb-index-section, .yb-listing-section {
    margin: 0 3rem;
    padding: 4.5rem 0 5rem;
  }

  .yb-section-heading {
    align-items: end;
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr minmax(18rem, 28rem);
    margin-bottom: 2.25rem;
  }

  .yb-section-heading h2,
  .yb-page-intro h1,
  .yb-about-page h1 {
    font-family: var(--yb-font-display);
    font-size: clamp(2.6rem, 5vw, 5.5rem);
    font-weight: 400;
    letter-spacing: -0.045em;
    line-height: 0.95;
    margin: 0;
  }
  .yb-section-heading > p { margin: 0; }

  .yb-filter-row {
    align-items: center;
    border-bottom: 1px solid var(--yb-ink);
    border-top: 1px solid var(--yb-ink);
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    padding: 0.9rem 0;
  }

  .yb-filter-row > span {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .yb-filter-controls { display: flex; flex-wrap: wrap; gap: 0.55rem; }
  .yb-filter-controls button {
    background: transparent;
    border: 1px solid var(--yb-ink);
    border-radius: 999px;
    color: var(--yb-ink);
    cursor: pointer;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 0.55rem 0.85rem;
    text-transform: uppercase;
  }
  .yb-filter-controls button:hover,
  .yb-filter-controls button.is-active {
    background: var(--yb-ink);
    color: var(--yb-paper);
  }
  .yb-filter-controls button:focus-visible {
    outline: 3px solid var(--yb-accent-ink);
    outline-offset: 3px;
  }

  .yb-category-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .yb-category-card {
    border: 1px solid var(--yb-ink);
    display: flex;
    flex-direction: column;
    min-height: 20rem;
    padding: 1.35rem;
    text-decoration: none;
    transition: background 180ms ease, color 180ms ease, transform 180ms ease;
  }
  .yb-category-card:hover, .yb-category-card:focus-visible {
    color: var(--yb-ink);
    transform: translateY(-3px);
  }
  .yb-category-card:focus-visible {
    outline: 4px solid var(--yb-ink);
    outline-offset: 3px;
  }
  .yb-category-tone-1:hover, .yb-category-tone-1:focus-visible { background: var(--yb-tomato); }
  .yb-category-tone-2:hover, .yb-category-tone-2:focus-visible { background: var(--yb-olive); }
  .yb-category-tone-3:hover, .yb-category-tone-3:focus-visible { background: var(--yb-blue); }
  .yb-category-number { font-family: var(--yb-font-display); font-style: italic; }
  .yb-category-card h2 {
    font-family: var(--yb-font-display);
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1;
    margin: 3.8rem 0 0.85rem;
  }
  .yb-category-card p { font-size: 0.9rem; margin: 0; max-width: 24rem; }
  .yb-category-count {
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-top: auto;
    padding-top: 1rem;
    text-transform: uppercase;
  }

  .yb-site-footer {
    align-items: center;
    background: var(--yb-ink);
    color: var(--yb-paper);
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 3rem;
  }
  .yb-site-footer a { font-size: 0.85rem; font-weight: 700; }
  .yb-site-footer p {
    font-family: var(--yb-font-display);
    font-size: 1.25rem;
    margin: 0;
  }

  .yb-page-intro {
    border-bottom: 1px solid var(--yb-ink);
    margin: 0 3rem;
    padding: 4.5rem 0 2.6rem;
  }
  .yb-page-intro > p:last-child {
    font-family: var(--yb-font-display);
    font-size: 1.25rem;
    margin: 1.5rem 0 0;
    max-width: 42rem;
  }
  .yb-category-intro > a {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }
  .yb-compact-filter { margin-bottom: 2rem; }

  .yb-project-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .yb-project-card {
    border: 1px solid var(--yb-ink);
    min-width: 0;
    transition: background 180ms ease, color 180ms ease, transform 180ms ease;
  }
  .yb-project-card-link { display: block; height: 100%; text-decoration: none; }
  .yb-project-card-art, .yb-profile-art {
    align-items: center;
    border-bottom: 1px solid var(--yb-ink);
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .yb-project-card-art { aspect-ratio: 16 / 9; }
  .yb-project-card-art img, .yb-profile-art img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: top;
    width: 100%;
  }
  .yb-project-card-art span, .yb-profile-art span {
    color: var(--yb-ink);
    font-family: var(--yb-font-display);
    font-size: clamp(3rem, 7vw, 6rem);
    font-style: italic;
  }
  .yb-project-card-body {
    display: flex;
    flex-direction: column;
    min-height: 19rem;
    padding: 1.25rem;
  }
  .yb-project-card-meta {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
  }
  .yb-project-card-meta > span:first-child {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .yb-cardano-badge {
    background: var(--yb-blue);
    border-radius: 999px;
    color: var(--yb-ink);
    display: inline-block;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    padding: 0.35rem 0.55rem;
    text-transform: uppercase;
  }
  .yb-project-card h2 {
    font-family: var(--yb-font-display);
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
    margin: 2rem 0 0.8rem;
  }
  .yb-project-card p { font-size: 0.92rem; margin: 0; }
  .yb-project-builder {
    border-top: 1px solid var(--yb-rule);
    font-size: 0.75rem;
    font-weight: 700;
    margin-top: auto;
    padding-top: 1rem;
  }
  .yb-project-card:hover,
  .yb-project-card:has(.yb-project-card-link:focus-visible) {
    color: var(--yb-ink);
    transform: translateY(-3px);
  }
  .yb-project-card:nth-child(3n + 1):hover,
  .yb-project-card:nth-child(3n + 1):has(.yb-project-card-link:focus-visible) { background: var(--yb-tomato); }
  .yb-project-card:nth-child(3n + 2):hover,
  .yb-project-card:nth-child(3n + 2):has(.yb-project-card-link:focus-visible) { background: var(--yb-olive); }
  .yb-project-card:nth-child(3n):hover,
  .yb-project-card:nth-child(3n):has(.yb-project-card-link:focus-visible) { background: var(--yb-blue); }
  .yb-project-card-link:focus-visible {
    outline: 4px solid var(--yb-ink);
    outline-offset: 3px;
  }

  .yb-project-profile { margin: 0 3rem; padding: 3rem 0 5rem; }
  .yb-profile-art {
    aspect-ratio: 18 / 7;
    border: 1px solid var(--yb-ink);
  }
  .yb-profile-heading {
    border-bottom: 1px solid var(--yb-ink);
    padding: 2rem 0 3rem;
  }
  .yb-profile-heading > a {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-right: 0.75rem;
    text-transform: uppercase;
  }
  .yb-profile-heading h1 {
    font-family: var(--yb-font-display);
    font-size: clamp(3.8rem, 9vw, 8rem);
    font-weight: 400;
    letter-spacing: -0.055em;
    line-height: 0.86;
    margin: 3rem 0 1.5rem;
  }
  .yb-profile-heading > p {
    font-family: var(--yb-font-display);
    font-size: clamp(1.2rem, 2.2vw, 1.75rem);
    margin: 0;
    max-width: 60rem;
  }
  .yb-profile-grid {
    display: grid;
    gap: 4rem;
    grid-template-columns: 2fr 1fr;
    padding: 3rem 0;
  }
  .yb-profile-grid h2 {
    font-family: var(--yb-font-display);
    font-size: 2.3rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 0 0 1rem;
  }
  .yb-profile-grid section > p:last-child { max-width: 38rem; }
  .yb-tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .yb-tag-list li {
    border: 1px solid var(--yb-ink);
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.4rem 0.7rem;
  }
  .yb-project-links {
    border-bottom: 1px solid var(--yb-ink);
    border-top: 1px solid var(--yb-ink);
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .yb-project-links a {
    align-items: center;
    border-right: 1px solid var(--yb-ink);
    display: flex;
    font-size: 0.78rem;
    font-weight: 700;
    justify-content: center;
    min-height: 5rem;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
  }
  .yb-project-links a:last-child { border-right: 0; }
  .yb-project-links a:hover,
  .yb-project-links .yb-primary-link {
    background: var(--yb-tomato);
    color: var(--yb-ink);
  }
  .yb-about-page { margin: 0 3rem; padding: 5rem 0; }
  .yb-about-grid {
    border-top: 1px solid var(--yb-ink);
    display: grid;
    gap: 4rem;
    grid-template-columns: 2fr 1fr;
    margin-top: 3rem;
    padding-top: 3rem;
  }
  .yb-about-grid > div {
    font-family: var(--yb-font-display);
    font-size: 1.4rem;
    max-width: 48rem;
  }
  .yb-about-grid dl { margin: 0; }
  .yb-about-grid dl div {
    border-bottom: 1px solid var(--yb-ink);
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .yb-about-grid dt {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .yb-about-grid dd {
    font-family: var(--yb-font-display);
    font-size: 1.5rem;
    margin: 0;
  }
  .yb-about-links { display: flex; gap: 1rem; margin-top: 3rem; }
  .yb-about-links a {
    border: 1px solid var(--yb-ink);
    font-size: 0.78rem;
    font-weight: 700;
    padding: 1rem;
    text-transform: uppercase;
  }

  .yb-print-toolbar {
    align-items: center;
    background: var(--yb-ink);
    color: var(--yb-paper);
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
  }
  .yb-print-toolbar a { font-weight: 700; }
  .yb-print-button {
    background: var(--yb-tomato);
    border: 0;
    color: var(--yb-ink);
    cursor: pointer;
    font-weight: 700;
    padding: 0.8rem 1rem;
  }
  .yb-print-cover, .yb-print-index, .yb-print-category {
    margin: 0 auto;
    max-width: 920px;
    padding: 5rem 3rem;
  }
  .yb-print-cover {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 780px;
  }
  .yb-print-cover h1 {
    font-family: var(--yb-font-display);
    font-size: 7rem;
    font-weight: 400;
    letter-spacing: -0.06em;
    line-height: 0.82;
    margin: 0;
  }
  .yb-print-cover h1 em { color: var(--yb-accent-ink); font-weight: 400; }
  .yb-print-cover > div {
    border-top: 1px solid var(--yb-ink);
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    text-transform: uppercase;
  }
  .yb-print-index { border-top: 1px solid var(--yb-ink); }
  .yb-print-index h2, .yb-print-category h2 {
    font-family: var(--yb-font-display);
    font-size: 4rem;
    font-weight: 400;
    line-height: 1;
    margin: 0 0 2rem;
  }
  .yb-print-index ol { list-style: none; margin: 0; padding: 0; }
  .yb-print-index li {
    border-bottom: 1px solid var(--yb-ink);
    display: flex;
    font-family: var(--yb-font-display);
    font-size: 1.4rem;
    justify-content: space-between;
    padding: 0.85rem 0;
  }
  .yb-print-category > header {
    border-bottom: 2px solid var(--yb-ink);
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }
  .yb-print-project {
    border-bottom: 1px solid var(--yb-ink);
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 11rem 1fr;
    padding: 1.5rem 0;
  }
  .yb-print-project-art {
    align-items: center;
    aspect-ratio: 1;
    background: var(--yb-paper-deep);
    display: flex;
    justify-content: center;
  }
  .yb-print-project-art span {
    color: var(--yb-accent-ink);
    font-family: var(--yb-font-display);
    font-size: 3rem;
    font-style: italic;
  }
  .yb-print-project h3 {
    font-family: var(--yb-font-display);
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0.5rem 0;
  }
  .yb-print-project p { margin: 0.4rem 0; }
  .yb-print-builders { font-weight: 700; }
  .yb-print-url { font-size: 0.68rem; overflow-wrap: anywhere; }

  @media (max-width: 900px) {
    .yb-category-grid, .yb-project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .yb-project-links { grid-template-columns: repeat(2, 1fr); }
    .yb-project-links a:nth-child(2) { border-right: 0; }
    .yb-project-links a { border-bottom: 1px solid var(--yb-ink); }
  }

  @media (max-width: 680px) {
    .yb-site-header { align-items: flex-start; margin: 0 1.25rem; }
    .yb-site-header nav { flex-direction: column; gap: 0.35rem; text-align: right; }
    .yb-hero, .yb-index-section, .yb-listing-section, .yb-page-intro,
    .yb-project-profile, .yb-about-page {
      margin-left: 1.25rem;
      margin-right: 1.25rem;
    }
    .yb-hero {
      box-shadow: 6px 6px 0 var(--yb-tomato);
      margin-top: 1.25rem;
      padding: 2rem 1rem 1.5rem;
    }
    .yb-hero::after {
      font-size: 1.1rem;
      height: 3.25rem;
      right: 1.25rem;
      top: 1.25rem;
      width: 3.25rem;
    }
    .yb-hero h1 { max-width: 100%; }
    .yb-hero > .yb-eyebrow {
      margin-bottom: 3.5rem;
      max-width: calc(100% - 4.5rem);
    }
    .yb-hero-footer, .yb-filter-row {
      align-items: flex-start;
      flex-direction: column;
      gap: 1.25rem;
    }
    .yb-section-heading, .yb-profile-grid, .yb-about-grid { grid-template-columns: 1fr; }
    .yb-category-grid, .yb-project-grid { grid-template-columns: 1fr; }
    .yb-category-card { min-height: 17rem; }
    .yb-project-links { grid-template-columns: 1fr; }
    .yb-project-links a { border-right: 0; }
    .yb-site-footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem 1.25rem;
    }
    .yb-about-links { flex-direction: column; }
    .yb-print-cover h1 { font-size: 4.5rem; }
    .yb-print-project { grid-template-columns: 1fr; }
    .yb-print-project-art { max-width: 11rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .yb-root * { scroll-behavior: auto !important; transition: none !important; }
  }

  @media print {
    @page { margin: 0.55in; size: letter portrait; }
    .yb-root { background: #fff; color: #111; font-size: 10pt; }
    .yb-no-print { display: none !important; }
    .yb-print-cover, .yb-print-index, .yb-print-category {
      margin: 0;
      max-width: none;
      padding: 0;
    }
    .yb-print-cover { break-after: page; min-height: 9.2in; }
    .yb-print-index { break-after: page; min-height: 9.2in; padding-top: 0.2in; }
    .yb-print-category { break-before: page; }
    .yb-print-project {
      break-inside: avoid;
      grid-template-columns: 1.45in 1fr;
      padding: 0.16in 0;
    }
    .yb-print-category h2 { font-size: 34pt; }
    .yb-cardano-badge {
      background: #7495e5 !important;
      color: #413443 !important;
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
    .yb-root a { text-decoration: none; }
  }
`;

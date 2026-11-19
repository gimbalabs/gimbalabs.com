// Approved Enough registration styles, scoped to this route.
export const enoughCss = String.raw`
@font-face {
  font-family: Enough;
  src: url("/fonts/Enough.woff2") format("woff2");
  font-display: swap;
}

.enough-interest {
  color-scheme: light;
  --board: #D9C9A6;
  --paper: #F3EEE0;
  --ink: #1C1A14;
  --ink-2: #4B473C;
  --pen: #2336FF;
  --on-pen: #F3EEE0;
  --hover-ink: var(--ink);
  --hover-mint: #245547;
  --hover-peach: #75463B;
  --hover-periwinkle: #384F7A;
  --hover-lilac: #61456F;
  /* Muted pencil colors for the decorative background only. */
  --mark-sage: #4F825A;
  --mark-clay: #B56A4E;
  --mark-slate: #577CB1;
  --mark-ochre: #B78E32;
  --line: 2px;
  --cell: 8px;
  --cut: 16px;
  --font-display: Enough, ui-monospace, Menlo, Consolas, monospace;
  --font-body: system-ui, -apple-system, "Segoe UI", sans-serif;
}

@media (prefers-color-scheme: dark) {
  .enough-interest {
    color-scheme: dark;
    --board: #16140F;
    --paper: #221F18;
    --ink: #EDE5D0;
    --ink-2: #B5AC96;
    --pen: #8A9AFF;
    --on-pen: #16140F;
    --hover-ink: #FFFFFF;
    --hover-mint: #BCE3D2;
    --hover-peach: #F1CABB;
    --hover-periwinkle: #CCD7F4;
    --hover-lilac: #DECBE9;
    --mark-sage: #8CBA78;
    --mark-clay: #D48B6D;
    --mark-slate: #7FA6DC;
    --mark-ochre: #D3B35E;
  }
}

.enough-interest, .enough-interest * { box-sizing: border-box; }
.enough-interest { margin: 0; background: var(--board); color: var(--ink); font: 18px/1.5 var(--font-body); }
.enough-interest h1, .enough-interest h2, .enough-interest h3, .enough-interest p, .enough-interest figure, .enough-interest dl, .enough-interest dd { margin: 0; }
.enough-interest a { color: var(--ink); text-underline-offset: 4px; text-decoration-thickness: var(--line); cursor: pointer; }
.enough-interest a:hover { text-decoration-color: var(--pen); }
.enough-interest :focus-visible { outline: 3px solid var(--pen); outline-offset: 3px; }
.enough-interest .text-backing {
  background: var(--text-surface, var(--board));
  padding: 4px 8px;
  margin: -4px -8px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transition: text-shadow 160ms ease;
}
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-glow-color="sage"] { --glow-color: var(--mark-sage); }
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-glow-color="clay"] { --glow-color: var(--mark-clay); }
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-glow-color="slate"] { --glow-color: var(--mark-slate); }
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-glow-color="ochre"] { --glow-color: var(--mark-ochre); }
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-text-color="mint"] { --hover-ink: var(--hover-mint); }
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-text-color="peach"] { --hover-ink: var(--hover-peach); }
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-text-color="periwinkle"] { --hover-ink: var(--hover-periwinkle); }
.enough-interest :is(.text-backing, .pict, .brand-logo)[data-text-color="lilac"] { --hover-ink: var(--hover-lilac); }
.enough-interest .text-backing.is-glowing {
  color: var(--hover-ink);
  -webkit-text-stroke: .5px var(--text-surface, var(--board));
  paint-order: stroke fill;
  text-shadow: 0 0 12px color-mix(in srgb, var(--glow-color) 35%, transparent);
}
.enough-interest .number { font-family: var(--font-display); font-weight: 400; }
@media (prefers-reduced-motion: reduce) {
  .enough-interest .text-backing { transition: none; }
}

.enough-interest .board-marks { position: fixed; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
.enough-interest .sheet { position: relative; z-index: 1; max-width: 1248px; padding-inline: 32px; margin: auto; }
.enough-interest .masthead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 80px;
  border-bottom: var(--line) solid var(--ink);
}
.enough-interest .brand { display: flex; align-items: center; gap: 16px; background: var(--board); }
.enough-interest .brand-logo {
  display: block;
  flex: none;
  width: 160px;
  height: 48px;
  overflow: visible;
  cursor: default;
  transition: filter 160ms ease;
}
.enough-interest .jump, .enough-interest .label-text {
  font: 14px/1.4 var(--font-display);
  letter-spacing: .1em;
  text-transform: uppercase;
}
.enough-interest .jump { padding-block: 16px; white-space: nowrap; }

.enough-interest .spread {
  display: grid;
  align-items: start;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  grid-template-areas: "intro interest" "sustainability sustainability" "cohort cohort";
  gap: 40px;
  padding-block: 40px 56px;
}
.enough-interest .intro { grid-area: intro; }
.enough-interest h1, .enough-interest h2, .enough-interest h3 {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: .02em;
  text-transform: uppercase;
}
.enough-interest h1 { font-size: clamp(34px, 5.65vw, 76px); line-height: 1; margin-block: 0 24px; }
.enough-interest h2 { font-size: clamp(26px, 3.2vw, 40px); line-height: 1.1; }
.enough-interest .lead { max-width: 40ch; font-size: clamp(22px, 2.1vw, 28px); line-height: 1.35; }
.enough-interest .intro-copy { margin-top: 16px; max-width: 54ch; }
.enough-interest .eligibility { margin-top: 24px; max-width: 59ch; font-size: 16px; }
.enough-interest .eligibility strong { display: block; margin-bottom: var(--cell); font-size: 20px; line-height: 1.3; letter-spacing: .06em; }

.enough-interest .cut {
  --behind: var(--board);
  position: relative;
  border: var(--line) solid var(--ink);
}
.enough-interest .cut::after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--line));
  right: calc(-1 * var(--line));
  width: calc(var(--cut) + var(--line));
  height: calc(var(--cut) + var(--line));
  background: linear-gradient(to bottom left, var(--behind) calc(50% - 1px),
    var(--ink) calc(50% - 1px), var(--ink) calc(50% + 1px), transparent calc(50% + 1px));
  pointer-events: none;
}
.enough-interest .paper { --text-surface: var(--paper); background: var(--paper); padding: 24px; }
.enough-interest .paper .cut { --behind: var(--paper); }
.enough-interest .interest { grid-area: interest; scroll-margin-top: 24px; }
/* Card hover reuses the accent palette as a flat paper tint, without a halo. */
.enough-interest .interest {
  --card-surface: var(--paper);
  --text-surface: var(--card-surface);
  background: var(--card-surface);
  box-shadow: none;
  filter: none;
  transition: background-color 160ms ease;
}
.enough-interest .interest .cut { --behind: var(--card-surface); }
.enough-interest .interest[data-card-color="sage"] { --card-accent: var(--mark-sage); }
.enough-interest .interest[data-card-color="clay"] { --card-accent: var(--mark-clay); }
.enough-interest .interest[data-card-color="slate"] { --card-accent: var(--mark-slate); }
.enough-interest .interest[data-card-color="ochre"] { --card-accent: var(--mark-ochre); }
@media (hover: hover) and (pointer: fine) {
  .enough-interest .interest.is-color-hover { --card-surface: color-mix(in srgb, var(--card-accent) 18%, var(--paper)); }
}
@media (prefers-reduced-motion: reduce) {
  .enough-interest .interest { transition: none; }
}

.enough-interest .interest h2 { margin-bottom: var(--cell); }
.enough-interest .interest > p { margin-bottom: 24px; }
.enough-interest .field { display: grid; gap: var(--cell); margin-bottom: 24px; }
.enough-interest .field-box input, .enough-interest .field-box textarea {
  display: block;
  width: 100%;
  min-height: 52px;
  padding: 12px 16px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--ink);
  font: 18px/1.4 var(--font-body);
}
.enough-interest .field-box textarea { resize: vertical; }
.enough-interest .field-box:focus-within { outline: 3px solid var(--pen); outline-offset: 3px; }
.enough-interest .field-box :focus-visible { outline: none; }
.enough-interest .hint { font-size: 15px; color: var(--ink-2); }
.enough-interest .primary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  min-height: 56px;
  padding: 8px 24px;
  background: var(--pen);
  color: var(--on-pen);
  font: 20px/1.2 var(--font-display);
  letter-spacing: .04em;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
}
.enough-interest .primary:hover { background: var(--ink); color: var(--paper); }
.enough-interest #interest-note { margin-top: 16px; }
.enough-interest .form-status { margin-bottom: 24px; padding: 16px; border: var(--line) solid var(--ink); }
.enough-interest .form-status p + p { margin-top: var(--cell); }
.enough-interest .form-status + form { margin-top: 16px; }

.enough-interest .pictograms { position: absolute; overflow: hidden; }
.enough-interest .pict {
  display: block;
  width: 48px;
  height: 48px;
  flex: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linejoin: miter;
  stroke-linecap: square;
  stroke-miterlimit: 4;
  overflow: visible;
  cursor: default;
  transition: filter 160ms ease;
}
.enough-interest .pict-edge { stroke: var(--text-surface, var(--board)); stroke-width: 6; opacity: 0; }
.enough-interest .pict.is-glowing, .enough-interest .brand-logo.is-glowing { color: var(--hover-ink); filter: drop-shadow(0 0 6px color-mix(in srgb, var(--glow-color) 35%, transparent)); }
.enough-interest .pict.is-glowing .pict-edge { opacity: 1; }
.enough-interest .brand-logo.is-glowing path { stroke: var(--board); stroke-width: 2.5; paint-order: stroke fill; }
@media (prefers-reduced-motion: reduce) {
  .enough-interest .pict, .enough-interest .brand-logo { transition: none; }
}
.enough-interest .sustainability {
  grid-area: sustainability;
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: 40px;
  min-width: 0;
  padding-top: 32px;
  border-top: var(--line) solid var(--ink);
}
.enough-interest .sustainability h2 { font-size: clamp(28px, 3.2vw, 40px); }
.enough-interest .goal-definition { margin-top: 16px; max-width: 42ch; font-size: 20px; }
.enough-interest .goal-visual { min-width: 0; }
.enough-interest .threshold-drawing {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 24px;
  align-items: start;
}
.enough-interest .threshold-label { grid-column: 2; justify-self: end; margin-bottom: 16px; font-size: 16px; letter-spacing: .04em; text-align: right; }
.enough-interest .threshold-rule {
  grid-column: 1 / -1;
  grid-row: 2;
  position: relative;
  z-index: 1;
  border-top: var(--line) solid var(--ink);
}
.enough-interest .threshold-rule::after {
  content: "";
  position: absolute;
  top: -5px;
  right: 0;
  width: var(--cell);
  height: var(--cell);
  background: var(--ink);
}
.enough-interest .support-column {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: flex-end;
  min-height: 192px;
}
.enough-interest .support-column p { font: clamp(16px, 1.7vw, 20px)/1.3 var(--font-display); text-transform: uppercase; letter-spacing: .04em; }
.enough-interest .goal-visual figcaption { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 16px; margin-top: 24px; font-size: 16px; }
.enough-interest .goal-visual figcaption > :last-child { color: var(--ink-2); }
.enough-interest .reward { margin-top: 32px; }
.enough-interest .reward h3 { margin-bottom: 16px; font-size: 24px; line-height: 1.2; }

.enough-interest .cohort { grid-area: cohort; min-width: 0; }
.enough-interest .cohort-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px 40px;
  border-top: var(--line) solid var(--ink);
  padding-top: 24px;
}
.enough-interest .cohort-heading h2 { font-size: clamp(26px, 2.6vw, 32px); }
.enough-interest .cohort-heading p { max-width: 45ch; font-size: 16px; color: var(--ink-2); }
.enough-interest .rhythm { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; margin-top: 32px; }
.enough-interest .rhythm > div { border-top: var(--line) solid var(--ink); padding-top: 24px; }
.enough-interest .rhythm dt { display: grid; gap: 16px; font: 24px/1.2 var(--font-display); letter-spacing: .02em; text-transform: uppercase; }
.enough-interest .rhythm dd { margin-top: 16px; font-size: 16px; color: var(--ink-2); }

@media (max-width: 1040px) {
  .enough-interest .sustainability { grid-template-columns: minmax(0, 1fr); gap: 32px; }
  .enough-interest .goal-visual { width: 100%; max-width: 608px; }
}

.enough-interest .footer { border-top: var(--line) solid var(--ink); padding-block: 24px; font-size: 14px; }

@media (max-width: 840px) {
  .enough-interest .sheet { padding-inline: 24px; }
  .enough-interest .spread {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "intro" "sustainability" "interest" "cohort";
    gap: 32px;
    padding-block: 32px 40px;
  }
  .enough-interest h1 { font-size: clamp(34px, 8.4vw, 64px); }
  .enough-interest .cohort-heading { display: grid; gap: 16px; }
  .enough-interest .rhythm { gap: 24px; }
  .enough-interest .rhythm dt { font-size: 20px; }
}
@media (max-width: 600px) {
  .enough-interest .rhythm { grid-template-columns: minmax(0, 1fr); gap: 24px; }
  .enough-interest .rhythm dt { grid-template-columns: 48px minmax(0, 1fr); align-items: center; gap: 16px; font-size: 22px; }
  .enough-interest .rhythm dd { margin-top: var(--cell); margin-left: 64px; }
}
@media (max-width: 480px) {
  .enough-interest .sheet { padding-inline: 16px; }
  .enough-interest .masthead { min-height: 64px; gap: var(--cell); }
  .enough-interest .brand { gap: var(--cell); }
  .enough-interest .brand-logo { width: 128px; height: 40px; }
  .enough-interest .paper { padding: 16px; }
  .enough-interest .threshold-drawing { column-gap: 16px; }
}

/* Integration rules: isolate the event identity from the host site's resets. */
.enough-interest { position: relative; isolation: isolate; min-height: 100vh; }
.enough-interest a { text-decoration-line: underline; }
.enough-interest .footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px 24px; }
.enough-interest .interest { min-width: 0; }
.enough-interest .field-error { font-weight: 600; }
.enough-interest .field-box:has([aria-invalid="true"]), .enough-interest .form-status[data-state="error"] { border-style: dashed; }
.enough-interest .primary:disabled { background: var(--pen); color: var(--on-pen); opacity: .65; cursor: wait; }
@media (max-width: 320px) {
  .enough-interest .masthead { flex-wrap: wrap; padding-block: 8px; }
  .enough-interest .jump { margin-left: auto; padding-block: 8px; }
  .enough-interest h1 { font-size: clamp(28px, 10vw, 34px); }
}
`;

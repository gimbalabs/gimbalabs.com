import { useState } from 'react';
import Head from 'next/head';

const css = `
  :root {
    --bg: #fffbf0;
    --text: #1a1a1a;
    --card-bg: #ffffff;
    --border: #000000;
    --shadow: #000000;
    
    /* Vibrant Fun Colors */
    --pie-orange: #ff6b35;
    --crust-yellow: #f7c548;
    --filling-pink: #f4acb7;
    --whipped-cream: #ffffff;
    --berry-blue: #2f97c1;
    --matcha-green: #70d6ff;
    --cherry-red: #ff4d6d;
  }

  * { 
    box-sizing: border-box; 
  }
  
  html { 
    scroll-behavior: smooth; 
  }

  body {
    margin: 0;
    font-family: 'Fredoka', sans-serif;
    color: var(--text);
    background-color: var(--bg);
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(247, 197, 72, 0.15) 0%, transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 25%);
    line-height: 1.4;
    overflow-x: hidden;
  }

  a { 
    color: inherit; 
    text-decoration: none;
  }

  .wrap {
    width: min(1160px, 92%);
    margin: 0 auto;
  }

  /* --- TOPBAR --- */
  .topbar {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .brand-mark {
    width: 50px;
    height: 50px;
    border: 3px solid var(--border);
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--crust-yellow);
    font-size: 24px;
    box-shadow: 4px 4px 0px var(--shadow);
    animation: spin 10s linear infinite;
  }
  
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }

  .nav {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .nav a, .btn {
    border: 3px solid var(--border);
    border-radius: 12px;
    padding: 10px 20px;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    background: var(--whipped-cream);
    box-shadow: 4px 4px 0px var(--shadow);
    transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }

  .nav a:hover, .btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--shadow);
  }

  .nav a:active, .btn:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--shadow);
  }

  .btn-primary {
    background: var(--pie-orange);
    color: white;
  }

  .btn-secondary {
    background: var(--crust-yellow);
    color: var(--text);
  }

  /* --- HERO --- */
  header {
    padding: 20px 0;
  }

  .hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 30px;
    align-items: stretch;
  }

  .panel {
    background: var(--card-bg);
    border: 3px solid var(--border);
    border-radius: 24px;
    box-shadow: 8px 8px 0px var(--shadow);
    padding: 30px;
    position: relative;
  }

  .hero-copy {
    background-color: var(--whipped-cream);
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: var(--filling-pink);
    color: var(--text);
    border: 2px solid var(--border);
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 20px;
    box-shadow: 3px 3px 0px var(--shadow);
  }

  h1 {
    margin: 0 0 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1;
    letter-spacing: -1px;
  }

  .lead {
    margin: 0;
    font-size: 1.2rem;
    color: #4a4a4a;
    max-width: 62ch;
  }

  .hero-actions {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .hero-side {
    background-color: var(--matcha-green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    overflow: hidden;
  }

  .sticker {
    position: absolute;
    top: 16px;
    right: 16px;
    transform: rotate(12deg);
    background: #ffeb3b;
    border: 2px solid var(--border);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: .9rem;
    font-weight: 700;
    box-shadow: 4px 4px 0px var(--shadow);
    animation: float 3s ease-in-out infinite alternate;
  }

  @keyframes float {
    0% { transform: rotate(12deg) translateY(0px); }
    100% { transform: rotate(15deg) translateY(-5px); }
  }

  .mini-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 10px;
  }

  .mini {
    background: white;
    border: 2px solid var(--border);
    border-radius: 12px;
    padding: 12px;
    box-shadow: 3px 3px 0px var(--shadow);
  }

  .mini strong {
    display: block;
    margin-bottom: 4px;
    font-size: 0.9rem;
    color: var(--pie-orange);
    font-family: 'Space Grotesk', sans-serif;
  }

  /* --- MAIN & SECTIONS --- */
  main {
    padding-bottom: 60px;
  }

  .section {
    margin-top: 40px;
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .section-title {
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.5rem;
    text-shadow: 3px 3px 0px var(--crust-yellow);
  }

  .section-sub {
    margin: 4px 0 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #555;
  }

  .priority-pill {
    background: var(--cherry-red);
    border: 2px solid var(--border);
    color: white;
    padding: 8px 16px;
    border-radius: 999px;
    font-weight: 700;
    white-space: nowrap;
    box-shadow: 4px 4px 0px var(--shadow);
    transform: rotate(-2deg);
  }

  .availability-pill {
    display: grid;
    gap: 4px;
    width: min(390px, 38vw);
    padding: 12px 24px;
    border: 4px solid var(--border);
    border-radius: 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(0.8rem, 1.4vw, 0.95rem);
    line-height: 1.15;
    text-align: center;
    white-space: normal;
    box-shadow: 7px 7px 0px var(--shadow);
    animation: availabilityBlink 1.15s steps(2, end) infinite;
  }

  .availability-pill strong,
  .availability-pill span {
    display: block;
  }

  .availability-pill span {
    font-size: 0.88em;
  }

  @keyframes availabilityBlink {
    0%, 48% {
      background: var(--cherry-red);
      box-shadow: 7px 7px 0px var(--shadow), 0 0 0 4px rgba(255, 77, 109, 0.3);
      transform: rotate(-2deg) scale(1.04);
    }

    49%, 100% {
      background: var(--pie-orange);
      box-shadow: 7px 7px 0px var(--shadow);
      transform: rotate(-2deg) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .availability-pill {
      animation: none;
    }
  }

  /* --- PIE SHARES --- */
  .pie-share-section .section-head {
    align-items: flex-start;
    min-height: 108px;
    padding-right: min(420px, 42vw);
  }

  .pie-share-section .availability-pill {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .pie-share-intro {
    margin: 6px 0 0;
    font-size: 1.05rem;
    color: #4a4a4a;
    max-width: 62ch;
  }

  .pie-share-overview {
    display: grid;
    grid-template-columns: minmax(280px, 0.9fr) 1.1fr;
    gap: 24px;
    align-items: start;
  }

  .pie-pool-card {
    background: #fffaf0;
    border: 3px solid var(--border);
    border-radius: 24px;
    box-shadow: 8px 8px 0px var(--shadow);
    padding: 28px;
  }

  .pie-chart {
    width: min(320px, 100%);
    aspect-ratio: 1;
    margin: 0 auto 24px;
    border-radius: 50%;
    background:
      conic-gradient(
        #3b82f6 0deg 109deg,
        #22c55e 109deg 327deg,
        #ec4899 327deg 349deg,
        #f59e0b 349deg 360deg
      );
    border: 3px solid var(--border);
    position: relative;
    box-shadow: 4px 4px 0px var(--shadow);
  }

  .pie-chart::after {
    content: '';
    position: absolute;
    inset: 21%;
    background: #fffaf0;
    border: 3px solid var(--border);
    border-radius: 50%;
  }

  .pie-hole {
    position: absolute;
    inset: 21%;
    z-index: 1;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 16px;
  }

  .pie-hole strong {
    display: block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.45rem, 4vw, 2rem);
    line-height: 1;
  }

  .pie-hole span {
    display: block;
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 600;
  }

  .pie-legend {
    display: grid;
    gap: 10px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
  }

  .pie-legend-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pie-dot {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid var(--border);
    border-radius: 50%;
    flex: 0 0 auto;
  }

  .pie-dot--builder {
    background: repeating-linear-gradient(45deg, #3b82f6, #3b82f6 5px, #2563eb 5px, #2563eb 10px);
  }

  .pie-dot--cardano {
    background: repeating-linear-gradient(135deg, #22c55e, #22c55e 5px, #16a34a 5px, #16a34a 10px);
  }

  .pie-dot--user {
    background: repeating-linear-gradient(0deg, #ec4899, #ec4899 5px, #db2777 5px, #db2777 10px);
  }

  .pie-dot--feedback {
    background: repeating-linear-gradient(90deg, #f59e0b, #f59e0b 5px, #d97706 5px, #d97706 10px);
  }

  .pie-share-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .pie-share-card {
    background: white;
    border: 3px solid var(--border);
    border-radius: 16px;
    padding: 18px;
    box-shadow: 5px 5px 0px var(--shadow);
  }

  .pie-share-tag {
    display: inline-block;
    margin-bottom: 10px;
    background: #2f80ed;
    border: 2px solid var(--border);
    border-radius: 999px;
    color: white;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    padding: 4px 10px;
    text-transform: uppercase;
    box-shadow: 3px 3px 0px var(--shadow);
  }

  .draper-dragon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 14px;
    padding: 10px 18px;
    width: min(100%, 260px);
    min-height: 72px;
    border: 2px solid var(--border);
    border-radius: 10px;
    background: white;
    box-shadow: 4px 4px 0px var(--shadow);
    transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .draper-dragon-link:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--shadow);
  }

  .draper-dragon-link:focus-visible {
    outline: 3px solid var(--berry-blue);
    outline-offset: 3px;
  }

  .draper-dragon-logo {
    display: block;
    width: 100%;
    max-height: 52px;
    height: auto;
    object-fit: contain;
  }

  .pie-share-card h3 {
    margin: 0 0 10px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
    line-height: 1.3;
  }

  .pie-share-card p {
    margin: 0;
    color: #4a4a4a;
  }

  /* --- SPONSOR --- */
  .sponsor-panel {
    background:
      radial-gradient(circle at 12% 18%, rgba(112, 214, 255, 0.45) 0, transparent 26%),
      radial-gradient(circle at 85% 85%, rgba(247, 197, 72, 0.35) 0, transparent 28%),
      var(--whipped-cream);
    overflow: hidden;
  }

  .sponsor-panel::after {
    position: absolute;
    right: -34px;
    bottom: 24px;
    transform: rotate(-8deg);
    padding: 10px 44px;
    border: 3px solid var(--border);
    background: var(--crust-yellow);
    box-shadow: 5px 5px 0px var(--shadow);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sponsor-layout {
    display: grid;
    grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1fr);
    gap: 28px;
    align-items: center;
  }

  .sponsor-logo-card {
    display: grid;
    place-items: center;
    min-height: 260px;
    padding: 26px;
    border: 3px solid var(--border);
    border-radius: 22px;
    background: #eef7ff;
    box-shadow: 7px 7px 0px var(--shadow);
    transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .sponsor-logo-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 9px 9px 0px var(--shadow);
  }

  .sponsor-logo-card:focus-visible {
    outline: 3px solid var(--berry-blue);
    outline-offset: 3px;
  }

  .sponsor-logo {
    width: min(100%, 340px);
    height: auto;
    display: block;
  }

  .sponsor-kicker {
    display: inline-flex;
    align-items: center;
    margin-bottom: 12px;
    padding: 6px 14px;
    border: 2px solid var(--border);
    border-radius: 999px;
    background: var(--matcha-green);
    box-shadow: 3px 3px 0px var(--shadow);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .sponsor-title {
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .sponsor-copy {
    margin: 16px 0 0;
    max-width: 62ch;
    color: #444;
    font-size: 1.08rem;
  }

  .sponsor-highlights {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 22px;
    max-width: 720px;
  }

  .sponsor-highlight {
    border: 2px solid var(--border);
    border-radius: 14px;
    padding: 12px;
    background: white;
    box-shadow: 4px 4px 0px var(--shadow);
    font-weight: 700;
  }

  /* --- CORE RULES --- */
  .rules-intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }

  .callout, .warning, .success {
    border-radius: 16px;
    padding: 20px;
    border: 3px solid var(--border);
    background: white;
    box-shadow: 5px 5px 0px var(--shadow);
  }

  .callout { background-color: #e3f2fd; }
  .warning { background-color: #ffebee; }
  .success { background-color: #e8f5e9; }

  .callout strong, .warning strong, .success strong {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
  }

  .rules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .rule-group {
    margin-top: 28px;
    border: 3px solid var(--border);
    border-radius: 20px;
    padding: 18px;
    box-shadow: 5px 5px 0px var(--shadow);
  }

  .rule-group--builder {
    background: rgba(247, 197, 72, 0.22);
  }

  .rule-group--real-use {
    background: rgba(203, 247, 232, 0.24);
  }

  .rule-group--feedback {
    background: rgba(244, 172, 183, 0.24);
  }

  .rule-group:first-of-type {
    margin-top: 0;
  }

  .rule-group-title {
    margin: 0 0 14px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.25rem;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .rule-group-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: var(--whipped-cream);
    font-size: 1.1rem;
    line-height: 1;
    flex-shrink: 0;
  }

  .rule {
    background: white;
    border: 3px solid var(--border);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 5px 5px 0px var(--shadow);
    transition: transform 0.2s;
  }
  
  .rule:hover {
    transform: scale(1.02) rotate(1deg);
  }

  .rule:nth-child(even):hover {
    transform: scale(1.02) rotate(-1deg);
  }

  .rule-num {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: var(--crust-yellow);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 12px;
    box-shadow: 2px 2px 0px var(--shadow);
  }

  .rule h3 {
    margin: 0 0 8px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
  }

  .rule p {
    margin: 0;
    color: #555;
    font-size: 0.95rem;
  }

  /* --- TIMELINE & REGISTER --- */
  .split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .timeline {
    display: grid;
    gap: 16px;
    margin-top: 20px;
    position: relative;
  }

  .timeline-item {
    background: white;
    border: 3px solid var(--border);
    border-radius: 16px;
    padding: 16px;
    box-shadow: 5px 5px 0px var(--shadow);
    position: relative;
  }

  .timeline-item strong {
    display: block;
    margin-bottom: 4px;
    font-family: 'Space Grotesk', sans-serif;
    color: var(--pie-orange);
  }

  .checklist {
    padding-left: 20px;
    margin: 12px 0 0;
  }

  .checklist li { 
    margin: 8px 0; 
    list-style-type: '🧁 ';
    padding-left: 5px;
  }

  .checklist--warning li {
    list-style-type: '💀 ';
  }

  .mono-box {
    margin-top: 14px;
    border-radius: 12px;
    padding: 14px;
    background: #fafafa;
    border: 3px dashed var(--border);
    font-family: ui-monospace, monospace;
    font-weight: bold;
    overflow-wrap: anywhere;
    font-size: 0.9rem;
  }

  .hashtag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  .tag {
    background: var(--filling-pink);
    border: 2px solid var(--border);
    border-radius: 999px;
    padding: 6px 14px;
    font-weight: 700;
    font-size: 0.9rem;
    box-shadow: 3px 3px 0px var(--shadow);
  }

  .tweet-card {
    grid-column: 1 / -1;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.65fr);
    gap: 12px 16px;
    align-items: start;
  }

  .tweet-card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    grid-column: 1 / -1;
  }

  .tweet-card-head strong {
    color: var(--text);
  }

  .tweet-help {
    margin: 10px 0 0;
    color: #444;
    grid-column: 1 / -1;
  }

  .tweet-template {
    margin-top: 12px;
    white-space: pre-wrap;
    line-height: 1.5;
    grid-column: 1;
  }

  .tweet-copy-btn {
    padding: 8px 14px;
    font-size: 0.9rem;
    background: var(--crust-yellow);
  }

  .tweet-card .hashtag-row {
    grid-column: 2;
    margin-top: 12px;
    align-self: start;
  }

  .footer-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .source-truth {
    margin-top: 28px;
  }

  .source-truth-panel {
    background: var(--whipped-cream);
    border: 3px solid var(--border);
    border-radius: 24px;
    box-shadow: 8px 8px 0px var(--shadow);
    padding: 24px;
  }

  .source-truth-title {
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.5rem, 2.6vw, 2rem);
    line-height: 1.1;
  }

  .source-truth-sub {
    margin: 10px 0 0;
    color: #454545;
    max-width: 72ch;
  }

  .source-truth-links {
    margin-top: 18px;
    display: grid;
    gap: 12px;
  }

  .source-truth-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 16px;
    border: 3px solid var(--border);
    border-radius: 14px;
    background: #fff8dc;
    box-shadow: 4px 4px 0px var(--shadow);
    font-weight: 600;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .source-truth-link:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--shadow);
  }

  .source-truth-link:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--shadow);
  }

  .source-truth-link:focus-visible {
    outline: 3px solid var(--berry-blue);
    outline-offset: 3px;
  }

  .source-truth-link-text {
    margin: 0;
  }

  .source-truth-link-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }

  /* --- FOOTER --- */
  footer {
    padding: 30px 0;
    text-align: center;
    font-weight: 600;
    color: #555;
    border-top: 3px solid var(--border);
    background: var(--crust-yellow);
    box-shadow: 0 -4px 0px var(--shadow);
    margin-top: 40px;
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 900px) {
    .hero,
    .rules-intro,
    .pie-share-overview,
    .sponsor-layout,
    .split {
      grid-template-columns: 1fr;
    }

    .sponsor-highlights {
      grid-template-columns: 1fr;
    }

    .tweet-card {
      grid-template-columns: 1fr;
    }

    .tweet-card .hashtag-row {
      grid-column: 1;
      margin-top: 8px;
    }
    
    .hero-side {
      padding-top: 50px;
    }

    .source-truth-panel {
      padding: 20px;
    }

    .source-truth-link {
      align-items: flex-start;
    }

    .pie-share-section .section-head {
      display: grid;
      gap: 16px;
      min-height: 0;
      padding-right: 0;
    }

    .pie-share-section .availability-pill {
      position: static;
      width: calc(100% - 8px);
      max-width: 390px;
      padding: 12px 18px;
      border-radius: 18px;
      justify-self: start;
    }
  }
`;

export default function PieceOfPie() {
  const sampleTweetTemplate = `Week [X] update for [Project Name]

[Share what your team shipped this week]
[Add your live link or demo update]
[Share what you will build next]

#gimbalabs #pieceofpie #hackathon @gimbalabs`;
  const [copyButtonLabel, setCopyButtonLabel] = useState('Copy sample tweet');

  const handleCopyTweet = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(sampleTweetTemplate);
      } else if (typeof document !== 'undefined') {
        const textArea = document.createElement('textarea');
        textArea.value = sampleTweetTemplate;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopyButtonLabel('Copied!');
      window.setTimeout(() => setCopyButtonLabel('Copy sample tweet'), 1800);
    } catch {
      setCopyButtonLabel('Copy failed');
      window.setTimeout(() => setCopyButtonLabel('Copy sample tweet'), 1800);
    }
  };

  return (
    <>
      <Head>
        <title>Piece Of Pie Hackathon by Gimbalabs</title>
        <meta name="description" content="Official landing page for the Piece Of Pie Hackathon by Gimbalabs." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </Head>

        {/* NAVIGATION */}
        <div className="wrap topbar">
          <div className="brand">
            <div className="brand-mark">🥧</div>
            <div>Piece Of Pie Hackathon by Gimbalabs</div>
          </div>
          <nav className="nav">
            <a href="#rules">Rules</a>
            <a href="#timeline">Timeline</a>
            <a href="#register">Register</a>
          </nav>
        </div>

        {/* HERO SECTION */}
        <header>
          <div className="wrap hero">
            <section className="panel hero-copy">
              <div className="eyebrow">Public progress • Clear rules • Real output</div>
              <h1>Build in public.<br />Qualify through consistency.</h1>
              <p className="lead">
                Piece Of Pie is a 12-week, participation-driven hackathon. This is not about judges picking favorites.
                It is about meeting clear requirements, showing visible effort, and earning your slice by doing the work.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#rules">Read the rules first</a>
                <a className="btn btn-secondary" href="#register">Go to registration</a>
              </div>
            </section>

            <aside className="panel hero-side">
              <div className="sticker">overview</div>
              <p style={{ margin: 0, fontWeight: 600, color: '#333' }}>
                Teams can be solo or multi-person, but every participant must be named.
                Each project must have one official public repo, and every participant can only be in one project.
              </p>
              <div className="mini-grid">
                <div className="mini">
                  <strong>Duration</strong>
                  ~12 weeks
                </div>
                <div className="mini">
                  <strong>Enrollment</strong>
                  April 13th - 26th
                </div>
                <div className="mini">
                  <strong>Repo</strong>
                  Public and official
                </div>
                <div className="mini">
                  <strong>Progress</strong>
                  1 public tweet every week minimum
                </div>
              </div>
            </aside>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main>
          <div className="wrap">

          {/* PIE SHARES */}
          <section className="section panel pie-share-section">
            <div className="section-head">
              <div>
                <h2 className="section-title">How the Pie Gets Shared</h2>
                <p className="pie-share-intro">Each pie rewards a different kind of contribution: building consistently, shipping on Cardano, proving real-world value, and helping other teams get better.</p>
              </div>
              <div
                className="priority-pill availability-pill"
              >
                <strong>33,000 ADA available!</strong>
                <span>+ qualified projects can pitch to the Draper Dragon VC Fund</span>
              </div>
            </div>

            <div className="pie-share-overview">
              <aside className="pie-pool-card" aria-label="Piece of Pie reward pools">
                <div className="pie-chart" aria-hidden="true">
                  <div className="pie-hole">
                    <strong>33,000 ADA</strong>
                    <span>available</span>
                  </div>
                </div>

                <div className="pie-legend">
                  <div className="pie-legend-item"><span className="pie-dot pie-dot--builder"></span>Builder Pie — 10,000 ADA</div>
                  <div className="pie-legend-item"><span className="pie-dot pie-dot--cardano"></span>Cardano Pie — 20,000 ADA</div>
                  <div className="pie-legend-item"><span className="pie-dot pie-dot--user"></span>Real User Pie — 2,000 ADA</div>
                  <div className="pie-legend-item"><span className="pie-dot pie-dot--feedback"></span>Feedback Pie — 1,000 ADA</div>
                </div>
              </aside>

              <div className="pie-share-grid">
                <article className="pie-share-card">
                  <h3>🥧 Builder Pie — 10,000 ADA (equal split)</h3>
                  <p>
                    Build one project over 12 weeks and share your progress publicly each week.
                    Earn an equal share of the pie by showing up consistently and shipping something real.
                  </p>
                </article>

                <article className="pie-share-card">
                  <h3>🥧 Cardano Pie — 20,000 ADA (equal split)</h3>
                  <p>
                    If you build on Cardano, you get a share of a much bigger pie.
                    This replaces the Builder Pie for teams shipping Cardano projects.
                    In addition, qualified projects get an opportunity to pitch to the Draper Dragon VC Fund!
                  </p>
                  <a
                    className="draper-dragon-link"
                    href="https://www.draperdragon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Draper Dragon"
                  >
                    <img
                      className="draper-dragon-logo"
                      src="/draper-dragon-logo-cropped.png"
                      alt="Draper Dragon"
                    />
                  </a>
                </article>

                <article className="pie-share-card">
                  <h3>🥧 Real User Pie — 2,000 ADA (equal split)</h3>
                  <p>
                    Get at least one real paying user for your project.
                    Earn an equal share by proving real-world value beyond friends and family.
                  </p>
                </article>

                <article className="pie-share-card">
                  <h3>🥧 Feedback Pie — 1,000 ADA (credit-weighted)</h3>
                  <p>
                    Help other builders by giving live, recorded feedback sessions.
                    Earn based on how much useful feedback you contribute.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* SPONSOR SECTION */}
          <section className="section panel sponsor-panel" aria-labelledby="sponsor-title">
            <div className="sponsor-layout">
              <a
                className="sponsor-logo-card"
                href="https://cardanofoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Cardano Foundation"
              >
                <img
                  className="sponsor-logo"
                  src="/cardano-foundation-logo.png"
                  alt="Cardano Foundation"
                />
              </a>

              <div className="sponsor-content">
                <span className="sponsor-kicker">Official sponsor</span>
                <h2 id="sponsor-title" className="sponsor-title">Backed by Cardano Foundation</h2>
                <p className="sponsor-copy">
                  The Cardano Foundation is helping make the Piece Of Pie hackathon possible by sposoring the Cardano Pie and 
                  giving qualified teams a chance to pitch to the Draper Dragon Venture Fund.
                </p>
              </div>
            </div>
          </section>

          {/* RULES SECTION */}
          <section id="rules" className="section panel">
            <div className="section-head">
              <div>
                <h2 className="section-title">Core Rules</h2>
                <p className="section-sub">This is the top priority of the site. Read this before anything else.</p>
              </div>
              <div className="priority-pill">Top priority</div>
            </div>

            <div className="rules-intro">
              <div className="callout">
                <strong>Key principle</strong>
                <p style={{ margin: '8px 0 0', color: '#444' }}>
                  Qualify through consistent, verifiable participation — not competition.
                </p>
              </div>
              <div className="warning">
                <strong style={{ color: 'var(--cherry-red)' }}>Automatic disqualification triggers</strong>
                <ul className="checklist checklist--warning">
                  <li>Missing a required weekly tweet.</li>
                  <li>Joining more than one project.</li>
                  <li>Failing to provide verifiable public evidence.</li>
                </ul>
              </div>
            </div>

            <div className="rule-group rule-group--builder">
              <h3 className="rule-group-title">
                <span className="rule-group-icon" aria-hidden="true">🛠️</span>
                <span>The Builder Pie</span>
              </h3>
              <div className="rules-grid">
                <article className="rule">
                  <div className="rule-num">1</div>
                  <h3>Real Users Can Pay for and Use</h3>
                  <p>Your project must be a user-facing software product (such as a SaaS app, web2/web3 platform, or tool) that includes a clear payment gate, such as a subscription, one-time purchase, usage-based pricing, etc.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">2</div>
                  <h3>Work Solo or Form a Team</h3>
                  <p>You can build on your own or collaborate with others. Both solo entries and team entries are completely welcome.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">3</div>
                  <h3>Register Every Team Member</h3>
                  <p>Every single person contributing to the project must be explicitly listed during registration. No unnamed or anonymous teammates are permitted.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">4</div>
                  <h3>Commit to a Single Project</h3>
                  <p>To ensure focus and quality, participants may only join one project. If you are found to be involved in multiple projects, the projects will be disqualified.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">5</div>
                  <h3>Maintain One Official Public Repo</h3>
                  <p>Each project requires a single public repository. This link will serve as the official source of truth for your work and must display a visible commit history.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">6</div>
                  <h3>Start With an Empty Repo</h3>
                  <p>Your repository must start entirely empty. It must be made public at the time of registration and remain public until the final payouts are completed.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">7</div>
                  <h3>Post Weekly Progress Tweets (Mandatory)</h3>
                  <p>You must post at least one public tweet every week demonstrating your progress. More tweets are encouraged, but missing even a single week will result in disqualification. To be verified, weekly tweets must:</p>
                  <ul className="checklist">
                    <li>Clearly show project progress.</li>
                    <li>Include the hashtags: #gimbalabs, #pieceofpie, and #hackathon.</li>
                    <li>Mention @gimbalabs.</li>
                  </ul>
                </article>

                <article className="rule">
                  <div className="rule-num">8</div>
                  <h3>Make Your Product Publicly Accessible</h3>
                  <p>By the end of the event, your app or product must be publicly usable and deployed to its intended platform (e.g., a live web URL, a downloadable mobile app, a browser extension, etc.). Projects that only run locally (localhost) will not qualify.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">9</div>
                  <h3>Deliver a Complete Final Presentation</h3>
                  <p>Qualification is based on your final presentation. To pass verification and prove your work, your presentation must include:</p>
                  <ul className="checklist">
                    <li>A live demo of your product.</li>
                    <li>Your official public repo link.</li>
                    <li>Links to all of your required weekly progress tweets.</li>
                    <li>Link to deployed project</li>
                  </ul>
                </article>

                <div className="callout tweet-card">
                  <div className="tweet-card-head">
                    <strong>Sample Weekly Progress Tweet</strong>
                    <button type="button" className="btn tweet-copy-btn" onClick={handleCopyTweet}>
                      {copyButtonLabel}
                    </button>
                  </div>
                  <p className="tweet-help">
                    Copy this template, then change the body to reflect your real progress for the week.
                  </p>
                  <div className="mono-box tweet-template">{sampleTweetTemplate}</div>
                  <div className="hashtag-row">
                    <div className="tag">#gimbalabs</div>
                    <div className="tag">#pieceofpie</div>
                    <div className="tag">#hackathon</div>
                    <div className="tag">@gimbalabs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rule-group rule-group--real-use">
              <h3 className="rule-group-title">
                <span className="rule-group-icon" aria-hidden="true">🚀</span>
                <span>The Real User Pie</span>
              </h3>
              <div className="rules-grid">
                <article className="rule">
                  <div className="rule-num">1</div>
                  <h3>Meet the Builder Requirements</h3>
                  <p>To be eligible for this track, your project must first fully qualify for the Builder Pie requirements listed above.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">2</div>
                  <h3>Gain Your First Paying User</h3>
                  <p>You must secure at least 1 paying customer (excluding family and friends). You are required to provide proof of payment along with the story of how you acquired this user.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">3</div>
                  <h3>Share Your Proof Publicly</h3>
                  <p>Both your proof of payment and your customer acquisition story must be published publicly for verification.</p>
                </article>
              </div>
            </div>

            <div className="rule-group rule-group--feedback">
              <h3 className="rule-group-title">
                <span className="rule-group-icon" aria-hidden="true">🗣️</span>
                <span>The Feedback Pie</span>
              </h3>
              <div className="rules-grid">
                <article className="rule">
                  <div className="rule-num">1</div>
                  <h3>Participate With or Without a Project</h3>
                  <p>You do not need to be a participating Builder to join this track! It is open to anyone, though Builders are highly encouraged to participate as well.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">2</div>
                  <h3>Recorded Feedback Sessions</h3>
                  <p>All feedback must be given via live, recorded video sessions (using tools like Zoom, Google Meet, etc.) with the builder present. No unsolicited feedback.</p>
                </article>

                <article className="rule">
                  <div className="rule-num">3</div>
                  <h3>Share Evidence & Earn Credits</h3>
                  <p>
                    You will earn 1 credit for every recorded feedback session you complete, up to a maximum of 15 credits per qualified participant. Evidence must be shared for verification.{" "}
                    <a href="https://docs.google.com/document/d/1FPellYxfgDSqw2Qlv6srPxh4DfKfjP20RHKns5OXvqg/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                      <strong>
                        <u>Use this template</u>
                      </strong>
                    </a>
                  </p>
                </article>
              </div>
            </div>

          </section>

          {/* TIMELINE & REGISTRATION */}
          <section className="section split">

            {/* TIMELINE */}
            <div id="timeline" className="panel">
              <h2 className="section-title">Timeline</h2>
              <p className="section-sub">Start with enrollment, then keep the momentum with steady build sessions and receiving feedback.</p>

              <div className="timeline">
                <div className="timeline-item">
                  <strong>Weeks 1–2 — Enrollment period - April 13th - 26th</strong>
                  Register the project, list every participant, and submit the official public repo.
                </div>
                <div className="timeline-item">
                  <strong>Weeks 1–12 — Build period - April 13th - July 5th</strong>
                  Build in public, keep the repo updated, and post at least one public progress tweet every week.
                </div>
                <div className="timeline-item">
                  <strong>Week 12 — Final presentations - June 29th - July 5th</strong>
                  Show the live/recorded demo, public repo, all weekly tweet links, etc. for verification.
                </div>
                <div className="timeline-item">
                  <strong>Post-hackathon — Payouts - July 5th - 12th</strong>
                  Qualified participants receive shares within their pool based on the published rules.
                </div>
              </div>
            </div>

            {/* REGISTRATION */}
            <div id="register" className="panel">
              <h2 className="section-title">Registration</h2>
              <p className="section-sub">Submit one registration form per project during the enrollment window.</p>

              <div className="timeline" style={{ marginTop: '14px' }}>
                <div className="timeline-item">
                  <strong>Step 1 — Prepare your project info</strong>
                  Finalize your project title and team members, create an empty public GitHub repo, and keep the repo link ready before you begin.
                </div>
                <div className="timeline-item">
                  <strong>Step 2 — Complete the registration form</strong>
                  Submit the official registration form with accurate information.
                </div>
                <div className="timeline-item">
                  <strong>Step 3 — Keep your proof public</strong>
                  Ensure your repository and weekly progress tweets remain public for verification throughout the hackathon.
                </div>
              </div>

              <div className="footer-actions">
                <a className="btn btn-primary" href="https://forms.gle/dn717R8CcxTz6qFcA" target="_blank" rel="noopener noreferrer">Register</a>
                <a className="btn btn-secondary" href="https://github.com" target="_blank" rel="noopener noreferrer">Create empty public repo</a>
              </div>
            </div>
          </section>

          <section className="source-truth">
            <div className="source-truth-panel">
              <h2 className="source-truth-title">Official Source of Truth</h2>
              <p className="source-truth-sub">
                All detailed rules, clarifications, FAQs, and official updates live in the Piece of Pie official channels. Please review them regularly to stay aligned throughout the hackathon.
              </p>

              <div className="source-truth-links">
                <a
                  className="source-truth-link"
                  href="https://github.com/gimbalabs/Piece-of-Pie-Hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the Piece of Pie official GitHub repository"
                >
                  <p className="source-truth-link-text">
                    For detailed rules, FAQs, and updates, check out the Piece of Pie Official Repo.
                  </p>
                  <svg className="source-truth-link-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71c.5.1.68-.22.68-.49c0-.24-.01-1.05-.01-1.9c-2.78.62-3.37-1.21-3.37-1.21c-.45-1.18-1.11-1.49-1.11-1.49c-.91-.64.07-.63.07-.63c1 .07 1.53 1.05 1.53 1.05c.9 1.57 2.35 1.12 2.92.85c.09-.67.35-1.12.64-1.38c-2.22-.26-4.56-1.14-4.56-5.07c0-1.12.39-2.03 1.03-2.75c-.1-.26-.45-1.3.1-2.7c0 0 .84-.27 2.75 1.05A9.31 9.31 0 0 1 12 6.84c.85 0 1.71.12 2.51.35c1.91-1.32 2.75-1.05 2.75-1.05c.55 1.4.2 2.44.1 2.7c.64.72 1.03 1.63 1.03 2.75c0 3.94-2.34 4.8-4.57 5.06c.36.32.67.95.67 1.92c0 1.39-.01 2.5-.01 2.84c0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>

                <a
                  className="source-truth-link"
                  href="https://discord.gg/jJcwaqJHPV"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the Gimbalabs Discord server"
                >
                  <p className="source-truth-link-text">
                    If you have questions, ask in the Gimbalabs Discord.
                  </p>
                  <svg className="source-truth-link-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M20.32 4.37a19.73 19.73 0 0 0-4.9-1.53a13.86 13.86 0 0 0-.63 1.28a18.21 18.21 0 0 0-5.58 0a12.46 12.46 0 0 0-.63-1.28a19.68 19.68 0 0 0-4.91 1.54C.6 9 .11 13.45.35 17.83a19.86 19.86 0 0 0 6 3.02a14.3 14.3 0 0 0 1.29-2.14a12.75 12.75 0 0 1-2.03-.99c.17-.13.33-.27.49-.41c3.92 1.87 8.18 1.87 12.05 0c.16.14.32.28.49.41c-.64.39-1.32.72-2.03.99c.37.75.8 1.46 1.29 2.14a19.74 19.74 0 0 0 6-3.02c.28-5.08-.47-9.49-3.58-13.46ZM8.31 15.1c-1.18 0-2.14-1.1-2.14-2.45c0-1.35.95-2.45 2.14-2.45c1.2 0 2.15 1.11 2.14 2.45c0 1.35-.95 2.45-2.14 2.45Zm7.38 0c-1.19 0-2.14-1.1-2.14-2.45c0-1.35.95-2.45 2.14-2.45c1.19 0 2.14 1.11 2.14 2.45c0 1.35-.95 2.45-2.14 2.45Z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          </div>
        </main>

        {/* FOOTER */}
        <footer>
          Piece Of Pie Hackathon - 2026, by Gimbalabs · Built around clear rules, public progress, and verifiable participation.
        </footer>
    </>
  );
}

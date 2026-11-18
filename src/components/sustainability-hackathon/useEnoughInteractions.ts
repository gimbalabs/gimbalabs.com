import { useEffect, type RefObject } from "react";

type Mark = { x: number; y: number; strength: number; color: string };

/** The approved Enough interactions, scoped to this page and cleaned up on exit. */
export function useEnoughInteractions(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups: (() => void)[] = [];
    function listen(
      target: EventTarget,
      type: string,
      listener: EventListener,
      options?: AddEventListenerOptions,
    ) {
      target.addEventListener(type, listener, options);
      cleanups.push(() => target.removeEventListener(type, listener, options));
    }

    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    const dark = matchMedia("(prefers-color-scheme: dark)");
    const glowColors = ["sage", "clay", "slate", "ochre"] as const;
    const textColors = {
      sage: "lilac",
      clay: "mint",
      slate: "peach",
      ochre: "periwinkle",
    };
    const glowSelector = ".text-backing, .pict, .brand-logo";
    const glowTargets = root.querySelectorAll<HTMLElement | SVGElement>(
      glowSelector,
    );
    const cards = root.querySelectorAll<HTMLElement>(".interest");

    function chooseColor(previous: string | undefined) {
      const choices = glowColors.filter((color) => color !== previous);
      return choices[Math.floor(Math.random() * choices.length)]!;
    }

    function glow(target: HTMLElement | SVGElement) {
      const color = chooseColor(target.dataset.glowColor);
      target.dataset.glowColor = color;
      target.dataset.textColor = textColors[color];
      target.classList.add("is-glowing");
    }

    for (const target of glowTargets) {
      listen(target, "pointerenter", (event) => {
        if (fine.matches && (event as PointerEvent).pointerType !== "touch")
          glow(target);
      });
      listen(target, "pointerleave", () => {
        if (!target.closest("a:focus-visible, button:focus-visible")) {
          target.classList.remove("is-glowing");
        }
      });
    }
    listen(root, "focusin", (event) => {
      if (
        event.target instanceof Element &&
        event.target.matches("a:focus-visible, button:focus-visible")
      ) {
        event.target
          .querySelectorAll<HTMLElement | SVGElement>(glowSelector)
          .forEach(glow);
      }
    });
    listen(root, "focusout", (event) => {
      if (event.target instanceof Element) {
        event.target
          .querySelectorAll(glowSelector)
          .forEach((target) => target.classList.remove("is-glowing"));
      }
    });
    listen(fine, "change", () => {
      if (!fine.matches) {
        glowTargets.forEach((target) => target.classList.remove("is-glowing"));
        cards.forEach((card) => card.classList.remove("is-color-hover"));
      }
    });

    for (const card of cards) {
      listen(card, "pointerenter", (event) => {
        if (!fine.matches || (event as PointerEvent).pointerType === "touch")
          return;
        card.dataset.cardColor = chooseColor(card.dataset.cardColor);
        card.classList.add("is-color-hover");
      });
      listen(card, "pointerleave", () =>
        card.classList.remove("is-color-hover"),
      );
    }

    const canvas = root.querySelector<HTMLCanvasElement>(".board-marks");
    const context = canvas?.getContext("2d");
    if (!canvas || !context)
      return () => cleanups.forEach((cleanup) => cleanup());
    const drawingCanvas = canvas;
    const ctx = context;
    const surface = root;
    const cell = 8;
    const step = cell * 6;
    const radius = cell * 14;
    let width = 0;
    let height = 0;
    let marks: Mark[] = [];
    let frame = 0;
    let lastMove = -Infinity;
    let pointer = { x: 0, y: 0 };

    function paint(now: number) {
      frame = 0;
      const age = now - lastMove;
      const active = !reduced.matches && fine.matches && !document.hidden;
      const fade = active ? Math.max(0, 1 - age / 640) : 0;
      const targetY = Math.round(pointer.y / cell) * cell;
      let settling = false;
      ctx.clearRect(0, 0, width, height);

      for (const mark of marks) {
        const distance = Math.hypot(mark.x - pointer.x, mark.y - pointer.y);
        const proximity = Math.max(0, 1 - distance / radius);
        const target = proximity * proximity * fade;
        mark.strength += (target - mark.strength) * 0.22;
        if (mark.strength < 0.002) mark.strength = 0;
        if (Math.abs(target - mark.strength) > 0.002) settling = true;

        const shift =
          Math.sign(targetY - mark.y) * Math.round(mark.strength) * cell;
        const length = mark.strength
          ? cell + Math.round(mark.strength * 3) * cell
          : 2;
        ctx.fillStyle = mark.color;
        ctx.globalAlpha = 0.11 + mark.strength * 0.42;
        ctx.fillRect(mark.x, mark.y + shift, length, 2);
      }
      ctx.globalAlpha = 1;
      if (active && (fade > 0 || settling))
        frame = requestAnimationFrame(paint);
    }

    function rest() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      lastMove = -Infinity;
      for (const mark of marks) mark.strength = 0;
      paint(performance.now());
    }

    function resize() {
      width = innerWidth;
      height = innerHeight;
      const scale = Math.min(devicePixelRatio || 1, 2);
      drawingCanvas.width = Math.round(width * scale);
      drawingCanvas.height = Math.round(height * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      const style = getComputedStyle(surface);
      const palette = glowColors.map((name) =>
        style.getPropertyValue("--mark-" + name).trim(),
      );
      marks = [];
      for (let y = cell * 3; y < height; y += step) {
        for (let x = cell * 3; x < width; x += step) {
          const index =
            Math.round((x - cell * 3) / step) +
            Math.round((y - cell * 3) / step) * 3;
          marks.push({
            x,
            y,
            strength: 0,
            color: palette[index % palette.length]!,
          });
        }
      }
      rest();
    }

    listen(
      document,
      "pointermove",
      (event) => {
        const pointerEvent = event as PointerEvent;
        if (
          reduced.matches ||
          !fine.matches ||
          pointerEvent.pointerType === "touch" ||
          document.hidden
        )
          return;
        if (
          !(event.target instanceof Element) ||
          !surface.contains(event.target)
        )
          return;
        if (
          event.target.closest(
            ".paper, .text-backing, .pict, .brand-logo, a, button, input, textarea, iframe",
          )
        ) {
          lastMove = -Infinity;
          return;
        }
        // Keyboard focus (including inside the iframe) never suppresses pointer response.
        pointer = { x: pointerEvent.clientX, y: pointerEvent.clientY };
        lastMove = performance.now();
        if (!frame) frame = requestAnimationFrame(paint);
      },
      { passive: true },
    );
    listen(document, "pointerleave", () => {
      lastMove = -Infinity;
    });
    listen(document, "visibilitychange", rest);
    listen(window, "resize", resize, { passive: true });
    listen(window, "scroll", rest, { passive: true });
    listen(reduced, "change", rest);
    listen(fine, "change", rest);
    listen(dark, "change", resize);
    resize();

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      if (frame) cancelAnimationFrame(frame);
      glowTargets.forEach((target) => target.classList.remove("is-glowing"));
      cards.forEach((card) => card.classList.remove("is-color-hover"));
    };
  }, [rootRef]);
}

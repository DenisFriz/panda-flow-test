import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-reveal: fades + slides elements up as they enter the viewport,
 * mirroring the dominant Webflow IX2 interaction on the original site.
 *
 * Apply to a container; any descendant with the given selector (default
 * `.reveal`) is animated with a stagger. Returns a ref to attach.
 */
export function useGsapReveal({
  selector = '.reveal',
  stagger = 0.12,
  y = 40,
  start = 'top 85%',
} = {}) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const targets = root.querySelectorAll(selector);
    if (!targets.length) return;

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger,
          scrollTrigger: { trigger: root, start },
          onComplete: () =>
            targets.forEach((el) => el.classList.add('is-visible')),
        }
      );
    }, root);

    return () => ctx.revert();
  }, [selector, stagger, y, start]);

  return scopeRef;
}

/** Count-up tween for stat numbers, triggered on scroll into view. */
export function useCountUp(value, { suffix = '', duration = 2 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.n)}${suffix}`;
        },
      });
    }, el);
    return () => ctx.revert();
  }, [value, suffix, duration]);

  return ref;
}

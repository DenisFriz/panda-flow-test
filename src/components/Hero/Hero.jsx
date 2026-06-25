import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { assets } from '../../assets.js';
import './styles.css';

const words = ['surgeon', 'confidence', 'procedure', 'bliss', 'surgeon'];

const steps = [
  { n: '1', label: 'ANSWER A FEW QUESTIONS' },
  { n: '2', label: 'CONSULT A CARE ADVISOR' },
  { n: '3', label: 'MATCH WITH A SURGEON' },
  { n: '4', label: 'BOOK A COSMETIC PROCEDURE' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    let ctx;
    let onResize;

    const build = () => {
      ctx && ctx.revert();
      const items = carousel.querySelectorAll('.text-ticker_text');
      if (items.length < 2) return;
      // per-word step = word height + column gap (robust across breakpoints/fonts)
      const step = items[1].offsetTop - items[0].offsetTop;

      ctx = gsap.context(() => {
        gsap.set(carousel, { y: 0 });
        const tl = gsap.timeline({ repeat: -1 });
        for (let i = 1; i <= 4; i++) {
          tl.to(
            carousel,
            { y: -step * i, duration: 0.6, ease: 'power2.inOut' },
            '+=1.6'
          );
        }
        // 4th word is the duplicate "surgeon" → snap back to the real first one
        tl.set(carousel, { y: 0 });
      }, carousel);
    };

    build();
    onResize = () => build();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      ctx && ctx.revert();
    };
  }, []);

  return (
    <section className="section_hero-hp" id="top" ref={sectionRef}>
      <div className="container-main">
        <div className="hp_hero-wrapper">
          <div className="hero-wrapper_inner-2">
            <h1 className="text-color-white-2 mfs40">Find your</h1>
            <div className="text-ticker-wrapper-2">
              <div className="text-ticker-outer-2">
                <div className="text-ticker_carousel-2" ref={carouselRef}>
                  {words.map((w, i) => (
                    <div className="text-ticker_text" key={`${w}-${i}`}>
                      {w}
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="text-color-white-2">.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="button-circle_center-2">
        <a
          href="https://start.bliss.me/quiz"
          target="_blank"
          rel="noreferrer"
          className="button-circle-2 inward-shadow w-button"
        >
          START
        </a>
      </div>

      <div className="hero_bar-wrapper-2">
        <div className="hero-bar-inner">
          <div className="hero_bar-wrapper-left">
            <h2 className="fs-24-2 text-color-white-2 mfs18 hero-bar-title">
              Welcome to your personal cosmetic concierge.
            </h2>
          </div>
          <div className="hero_bar-wrapper-right">
            {steps.map((s) => (
              <div className="hero_bar-item" key={s.n}>
                <div className="number-circle">{s.n}</div>
                <h3 className="fs-14 text-color-white font-weight-500 ls-0-5 mobile-9">
                  {s.label}
                </h3>
              </div>
            ))}
          </div>
          <img
            src={assets.arrow}
            loading="lazy"
            alt=""
            className="hero-arrow"
          />
        </div>
      </div>
    </section>
  );
}

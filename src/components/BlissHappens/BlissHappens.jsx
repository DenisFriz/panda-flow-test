import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../../assets.js';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: '55k',
    color: 'text-color-beige',
    label: 'Successfully Performed Procedures',
  },
  {
    value: '40+',
    color: 'text-color-pink-dark',
    label: 'Board-Certified Surgeons Across the Nation',
  },
  {
    value: '5',
    color: 'text-color-dark-green',
    icon: assets.statCheck,
    label: (
      <>
        Top-Rated <br />
        Concierge Support
      </>
    ),
  },
];

export default function BlissHappens() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const items = root.querySelectorAll('.large-video-slider-top-item');
    if (!items.length || prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { x: -40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: root, start: 'top 80%' },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_stats bliss" ref={sectionRef}>
      <div className="container-main">
        <div className="heading-wrapper">
          <h2>Bliss Happens, and Yours Starts Here.</h2>
          <p className="fs22">See all the little details become a big deal.</p>
        </div>

        <div className="large-video-slider-top">
          {stats.map((s) => (
            <div
              className="large-video-slider-top-item"
              slide-in="left"
              key={s.value}
            >
              {s.icon ? (
                <div className="row-16">
                  <h3 className={`fs-124 ${s.color}`}>{s.value}</h3>
                  <div className="icon-100">
                    <img
                      src={s.icon}
                      loading="lazy"
                      alt=""
                      className="img100"
                    />
                  </div>
                </div>
              ) : (
                <h3 className={`fs-124 ${s.color}`}>{s.value}</h3>
              )}
              <div className="fs-24 mfs-16 z-index-2 bliss-card-label">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

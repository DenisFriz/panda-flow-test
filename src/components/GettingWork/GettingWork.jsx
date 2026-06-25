import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets, timelineImgs } from '../../assets.js';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const headingWords = 'Getting Work Done Shouldn’t Be Hard Work.'.split(' ');

const steps = [
  {
    num: '01.',
    imageFirst: true,
    title: 'Let’s Get Personal',
    text: 'Your questionnaire tells us about you, and your vision, so we can find the right surgeon for your personalized care plan. ',
    img: { wrapMoveUp: null, imgMoveUp: 'second' },
  },
  {
    num: '02.',
    imageFirst: false,
    title: 'Support Without the Wait',
    text: 'Your complimentary, dedicated Care Advisor steps in to handle planning, emotions, education, and recovery.',
    img: { wrapMoveUp: 'second', imgMoveUp: 'second' },
  },
  {
    num: '03.',
    imageFirst: true,
    title: 'Match with Your Bliss-Verified Surgeon',
    text: 'Bliss finds the ideal board-certified surgeon for you based on your dream results, comfort level, and medical history.',
    img: { wrapMoveUp: null, imgMoveUp: 'second' },
  },
  {
    num: '04.',
    imageFirst: false,
    title: 'We Finally Make It Happen',
    text: 'The little details shape the big reveal when you book your procedure and take that final step toward the look that feels you.',
    img: { wrapMoveUp: null, imgMoveUp: 'first' },
  },
];

function srcSet(img) {
  return [
    img.src500 && `${img.src500} 500w`,
    img.src800 && `${img.src800} 800w`,
    `${img.src} ${img.width || 1665}w`,
  ]
    .filter(Boolean)
    .join(', ');
}

function StepText({ step }) {
  return (
    <>
      <div className="timeline-month">{step.num}</div>
      <div className="timeline-text-wrapper">
        <h3 className="mfs-22">{step.title}</h3>
        <div className="spacer _24" />
        <div className="letter-animation">
          <p className="fs22">{step.text}</p>
        </div>
      </div>
    </>
  );
}

function StepImage({ index, side, wrapMoveUp, imgMoveUp }) {
  const img = timelineImgs[index];
  const wrapAttrs = wrapMoveUp ? { 'move-up': wrapMoveUp } : {};
  return (
    <div className="timeline-item" {...wrapAttrs}>
      <img
        className={`gif-image ${side}`}
        src={img.src}
        srcSet={srcSet(img)}
        sizes="100vw"
        loading="lazy"
        alt=""
        move-up={imgMoveUp}
      />
    </div>
  );
}

export default function GettingWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      if (thumbRef.current) gsap.set(thumbRef.current, { scaleY: 1 });
      return;
    }

    const isMobile = window.innerWidth <= 768;

    const ctx = gsap.context(() => {
      // heading words slide up + fade in
      gsap.from('.word-slide .word-wrapper', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.word-slide', start: 'top 85%' },
      });

      // per-row reveals (mirrors the original move-up interaction)
      const reveal = (selector, delay) => {
        gsap.utils.toArray(selector).forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: isMobile ? 0 : delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          });
        });
      };
      reveal('[move-up="first"]', 0);
      reveal('[move-up="second"]', 0.3);

      // scrub-grow the purple progress bar over the track
      const track = trackRef.current;
      const thumb = thumbRef.current;
      if (track && thumb) {
        gsap.fromTo(
          thumb,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: track,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section_timeline" id="2021" ref={sectionRef}>
      <div className="container-main">
        <div className="text-center relative">
          <div className="heading-wrapper">
            <h2 className="word-slide">
              {headingWords.map((word, i) => (
                <span className="word-wrapper" key={`${word}-${i}`}>
                  {word}
                  {i < headingWords.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h2>
            <p className="fs22">
              Achieve beauty on your terms with the personal experience you
              deserve.
            </p>
          </div>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-holder">
            <div className="timeline-track-wrapper">
              <div className="timeline-track a" ref={trackRef}>
                {['_4', '_3', '_2', '_1'].map((d) => (
                  <div className={`dot ${d}`} key={d}>
                    <img
                      src={assets.dot}
                      loading="lazy"
                      alt=""
                      className="dot-img"
                    />
                  </div>
                ))}
                <div
                  className="thumb-thumb"
                  ref={thumbRef}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="timeline-content-wrapper">
              {steps.map((step, i) =>
                step.imageFirst ? (
                  <div className="timeline-row" key={step.num}>
                    <StepImage
                      index={i}
                      side="left"
                      wrapMoveUp={step.img.wrapMoveUp}
                      imgMoveUp={step.img.imgMoveUp}
                    />
                    <div className="timeline-item right" move-up="first">
                      <StepText step={step} />
                    </div>
                  </div>
                ) : (
                  <div className="timeline-row tablet-reverse" key={step.num}>
                    <div className="timeline-item left-item" move-up="first">
                      <StepText step={step} />
                    </div>
                    <StepImage
                      index={i}
                      side="right"
                      wrapMoveUp={step.img.wrapMoveUp}
                      imgMoveUp={step.img.imgMoveUp}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="spacer _90">
          <div className="button-center">
            <a
              className="button secondary w-button"
              href="https://start.bliss.me/quiz?page_referrer=https%253A%252F%252Fwww.google.com%252F"
            >
              START YOUR journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

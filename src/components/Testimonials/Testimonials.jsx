import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets, videoStories } from '../../assets.js';
import 'swiper/css';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const headingWords = [
  'More',
  'Stories.',
  'More',
  'Transformational',
  'Results.',
];

function VideoSlide({ story, index, isActive, onActivate, onDeactivate }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // another slide became active → pause this one
  useEffect(() => {
    if (!isActive && playing) {
      const v = videoRef.current;
      if (v) {
        v.pause();
        v.removeAttribute('controls');
      }
      setPlaying(false);
    }
  }, [isActive, playing]);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.style.display = 'block';
    v.setAttribute('controls', '');
    v.play();
    setPlaying(true);
    onActivate(index);
  };

  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.removeAttribute('controls');
    v.style.display = 'none';
    setPlaying(false);
    onDeactivate();
  };

  const toggle = (e) => {
    e.stopPropagation();
    if (videoRef.current && videoRef.current.paused) play();
    else pause();
  };

  const onWrapperClick = (e) => {
    const v = videoRef.current;
    if (e.target === v || (v && v.contains(e.target))) return; // ignore native controls
    toggle(e);
  };

  return (
    <div className="w-embed">
      <div
        className="custom-video-wrapper"
        onClick={onWrapperClick}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          margin: 'auto',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <img
          className="customThumbnail"
          src={story.thumb}
          alt="Video Thumbnail"
          loading="lazy"
          style={{
            width: '100%',
            display: playing ? 'none' : 'block',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        />

        <video
          ref={videoRef}
          className="customVideo"
          playsInline
          onEnded={() => {
            pause();
            if (videoRef.current) videoRef.current.currentTime = 0;
          }}
          style={{
            width: '100%',
            display: playing ? 'block' : 'none',
            borderRadius: '20px',
          }}
        >
          <source src={story.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="playBtn"
          onClick={toggle}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 2,
            display: playing ? 'none' : 'block',
          }}
        >
          <img
            className="playPauseIcon"
            src={playing ? assets.pause : assets.play}
            alt={playing ? 'Pause' : 'Play'}
            style={{ width: '48px', height: '48px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headingRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.word-wrapper', {
        y: '1em',
        autoAlpha: 0,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: heading, start: 'top 85%' },
      });
    }, heading);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="section_video-slider w-variant-5167d237-93b7-1c7a-1eea-ed57247e4f70"
      id="testimonials"
    >
      <div className="container-main">
        <div className="text-align-center testimonials-text">
          <h2 className="word-slide" ref={headingRef}>
            {headingWords.map((w, i) => (
              <span className="word-wrapper" key={i}>
                {w}
              </span>
            ))}
          </h2>
        </div>

        <div className="swiper-container bottom-32 width">
          <Swiper
            className="swiper-video top-64"
            slidesPerView={1.5}
            spaceBetween={16}
            grabCursor
            loop={false}
            breakpoints={{ 768: { slidesPerView: 3.5, spaceBetween: 24 } }}
          >
            {videoStories.map((story, i) => (
              <SwiperSlide className="video-s" key={i}>
                <VideoSlide
                  story={story}
                  index={i}
                  isActive={activeIndex === i}
                  onActivate={setActiveIndex}
                  onDeactivate={() => setActiveIndex(null)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="button-center top-50">
          <a
            href="https://start.bliss.me/quiz"
            target="_blank"
            rel="noreferrer"
            className="button secondary w-button"
          >
            begin questionnaire
          </a>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { assets } from '../../assets.js';
import './styles.css';

const eduColumns = [
  {
    heading: 'Resources',
    links: [
      { label: 'The Blog', href: '/blog' },
      {
        label: 'What is SmartMatch?',
        href: '/resource/skip-the-stress-with-smartmatch',
      },
      {
        label: 'Prioritizing Safety',
        href: '/benefits/surgical-safety-is-the-priority',
      },
      {
        label: 'Minimally Invasive Procedures',
        href: '/resource/minimally-invasive-procedures',
      },
      {
        label: 'Finding the Right Surgeon',
        href: '/benefits/the-right-surgeon',
      },
      { label: 'Pricing', href: '#', hide: true },
      { label: 'FAQs', href: '#', hide: true },
    ],
  },
  {
    heading: 'Benefits',
    links: [
      { label: 'What is Bliss Imagine?', href: '/benefits/bliss-imagine' },
      {
        label: 'Meet the Care Concierge',
        href: '/benefits/your-personal-bliss-concierge',
      },
      { label: 'Learn About Financing', href: '/benefits/financing' },
      {
        label: 'Traveling for Surgery',
        href: '/resource/traveling-for-your-cosmetic-procedure',
      },
      { label: 'Med Spa Treatments', href: '/benefits/refresh-and-rejuvenate' },
    ],
  },
  {
    heading: 'About Bliss',
    links: [
      { label: 'Who We Are', href: '/about' },
      { label: 'Bliss in the News', href: '/#news' },
      { label: 'For Surgeons', href: '/providers' },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);
  const eduRef = useRef(null);

  // body scroll lock for the mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // close the EDUCATION dropdown on Escape / outside click
  useEffect(() => {
    if (!eduOpen) return;
    const onKey = (e) => e.key === 'Escape' && setEduOpen(false);
    const onClick = (e) => {
      if (eduRef.current && !eduRef.current.contains(e.target))
        setEduOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [eduOpen]);

  const open = (c) => `${c}${eduOpen ? ' w--open' : ''}`;

  return (
    <header
      className={`navbar8_component w-nav${menuOpen ? ' nav-open' : ''}`}
      data-collapse="medium"
      data-animation="default"
      role="banner"
    >
      <div className="navbar8_container">
        <div className="nav-left-wrapper">
          <button
            type="button"
            className={`navbar8_menu-button w-nav-button${menuOpen ? ' w--open' : ''}`}
            aria-label="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <div className="menu-icon5">
              <div className="menu-icon1_line-top" />
              <div className="menu-icon1_line-middle">
                <div className="menu-icon1_line-middle-inner" />
              </div>
              <div className="menu-icon1_line-bottom" />
            </div>
          </button>

          <a
            href="/"
            className="navbar8_logo-link w-nav-brand"
            aria-label="home"
          >
            <img src={assets.navLogo} alt="Bliss" className="nav-logo" />
          </a>
        </div>

        <div className="nav-tablet-items">
          <a href="/pricing" className="button nav hide-mobile hide w-button">
            view pricing
          </a>
          <a href="/pricing" className="button nav show-mobile hide w-button">
            pricing
          </a>
          <a
            id="nav-button-2"
            href="https://start.bliss.me/quiz"
            target="_blank"
            rel="noreferrer"
            className="button nav desktop-hide-btn secondary no-border w-button"
          >
            Qualify now
          </a>
        </div>

        <nav
          className={`navbar8_menu w-nav-menu${menuOpen ? ' w--open' : ''}`}
          role="navigation"
        >
          <div className="navbar8_menu-left for-anchors">
            <div className="navbar8_menu-left" />
          </div>

          <div className="navbar8_menu-left regular">
            <div className="navbar8_menu-left">
              <a href="/procedures" className="nav-link-main ml32 w-nav-link">
                procedures
              </a>
              <a
                href="/before-and-after"
                className="nav-link-main ml32 w-nav-link"
              >
                BEFORE &amp; AFTER
              </a>
              <a href="/surgeons" className="nav-link-main ml32 w-nav-link">
                our surgeons
              </a>
              <a href="/locations" className="nav-link-main ml32 w-nav-link">
                locations
              </a>

              <div
                ref={eduRef}
                className={open('navbar8_menu-dropdown w-dropdown')}
                onMouseEnter={() => setEduOpen(true)}
                onMouseLeave={() => setEduOpen(false)}
              >
                <div
                  className={open(
                    'nav-link-main-toggle large w-dropdown-toggle'
                  )}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="menu"
                  aria-expanded={eduOpen}
                  onClick={() => setEduOpen((o) => !o)}
                  onFocus={() => setEduOpen(true)}
                >
                  <div>EDUCATION</div>
                  <img
                    src={assets.chevron}
                    alt=""
                    aria-hidden
                    className="nav-chevron"
                  />
                </div>

                <nav className={open('navbar8_dropdown-list w-dropdown-list')}>
                  <div className="navbar_container-inner">
                    <div className="navbar8_dropdown-content">
                      <h2 className="fs32 tablet-hide">
                        Discover the Bliss Experience
                      </h2>
                      <div className="nav-col-wrapper">
                        <div className="navbar8_dropdown-column">
                          <div className="nav-col-wrapper">
                            {eduColumns.map((col, i) => (
                              <div
                                className="navbar8_dropdown-column"
                                key={col.heading}
                              >
                                <div
                                  className={`nav-drop-inner-wrapper${
                                    i === eduColumns.length - 1 ? ' last' : ''
                                  }`}
                                >
                                  <div className="fs-14 text-color-grey-secondary">
                                    {col.heading}
                                  </div>
                                  <div className="nav-col-list">
                                    {col.links.map((l) => (
                                      <a
                                        key={l.label}
                                        href={l.href}
                                        className={`navbar8_dropdown-link${
                                          l.hide ? ' hide' : ''
                                        } w-inline-block`}
                                      >
                                        <div className="navbar8_item-text">
                                          <div
                                            className={
                                              l.hide
                                                ? 'fs-18 font-weight-500'
                                                : 'fs-18 mfs-16'
                                            }
                                          >
                                            {l.label}
                                          </div>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-img-wrapper">
                      <img
                        sizes="100vw"
                        srcSet={`${assets.navDropImg500} 500w, ${assets.navDropImg} 1104w`}
                        src={assets.navDropImg}
                        alt=""
                        loading="lazy"
                        className="nav-img"
                      />
                    </div>
                  </div>
                </nav>
              </div>

              <a href="/#faq" className="nav-link-main tablet-show w-nav-link">
                faq's
              </a>

              <a
                href="https://concierge.bliss.me/"
                className="nav-link-main ml32 w-nav-link"
                target="_blank"
                rel="noreferrer"
              >
                bliss ai
              </a>
            </div>
          </div>

          <div className="navbar8_menu-right">
            <a
              id="nav-price"
              href="/pricing"
              className="button nav tablet-hide hide w-inline-block"
            >
              <div className="btn-txt">view pricing</div>
            </a>

            <a
              href="https://www.linkedin.com/company/bliss-me"
              className="nav-link-main tablet-show no-border top-24 w-nav-link"
              target="_blank"
              rel="noreferrer"
            >
              careers
            </a>

            <a
              id="nav-button"
              href="https://start.bliss.me/quiz"
              className="button nav tablet-hide secondary no-border w-inline-block"
              target="_blank"
              rel="noreferrer"
            >
              <div className="btn-txt">Qualify now</div>
            </a>

            <a
              href="/terms-and-conditions"
              className="nav-link-main tablet-show no-border w-nav-link"
            >
              TERMS &amp; CONDITIONS
            </a>
            <a
              href="/privacy-policy"
              className="nav-link-main tablet-show no-border w-nav-link"
            >
              PRIVACY POLICY
            </a>

            <a
              href="tel:1-888-270-4305"
              className="nav-link-main nav-desktop-hide w-inline-block"
            >
              <img src={assets.phoneIcon} alt="" className="call-us-icon" />
              <div className="fs-16">&nbsp;1-888-270-4305</div>
            </a>
          </div>
        </nav>
      </div>

      {/* overlay behind the open mobile menu */}
      {menuOpen && (
        <div
          className="w-nav-overlay nav-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

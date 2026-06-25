import { useGsapReveal } from '../../hooks/useGsapReveal.js';
import { processImgs as p } from '../../assets.js';
import './styles.css';

const blocks = [
  {
    imageFirst: true,
    bgClass: '',
    mobileImg: p.b1Mobile,
    desktopImg: p.b1Desktop,
    icon: p.b1Icon,
    title: (
      <>
        A Trusted Network of <br />
        <span className="font-weight-600">Board-Certified Surgeons</span>
      </>
    ),
    subhead:
      'Choosing cosmetic surgery can feel overwhelming and intimidating, but Bliss makes it clear and secure.',
    points: [
      'Get the freedom to choose the board-certified surgeon who best matches your needs.',
      'Private-practice owners with proven expertise and outstanding reviews.',
      'Bliss surgeons uphold the highest standards of safety and care.',
    ],
  },
  {
    imageFirst: false,
    bgClass: '_2',
    mobileImg: p.b2Mobile,
    desktopImg: p.b2Desktop,
    icon: p.b2Icon,
    title: (
      <>
        Every Step Made Simple With
        <span className="font-weight-600"> Clarity and Support</span>
      </>
    ),
    subhead:
      'Every patient is paired with a dedicated concierge who will guide them throughout the entire journey.',
    points: [
      'Commitment-free consultations and flexible surgeon options at no cost.',
      '24/7 assistance for any questions or concerns.',
      'Non-stop, complimentary care, education, and emotional support.',
    ],
  },
  {
    imageFirst: true,
    bgClass: 'animation3',
    mobileImg: p.b3Mobile,
    desktopImg: p.b3DesktopFull,
    desktopImg500: p.b3Desktop500,
    desktopSizes: '(max-width: 908px) 100vw, 908px',
    icon: p.b3Icon,
    title: (
      <>
        Premium Care <br />
        <span className="text-weight-semibold">Within Your Budget</span>
        <span className="font-weight-600">&nbsp;</span>
      </>
    ),
    subhead:
      'Bliss makes aesthetic procedures accessible and affordable, without compromise.',
    points: [
      'Best-price guarantee across our entire network.',
      'Multiple surgeons and locations so you can choose what fits best.',
      'Complete travel coordination and aftercare support.',
      'Flexible financing and payment plans.',
    ],
  },
];

function Images({ block }) {
  return (
    <div className="p-process-images is-456">
      {block.imageFirst && block.desktopImg500 ? (
        <img
          src={block.desktopImg}
          loading="lazy"
          sizes={block.desktopSizes}
          srcSet={`${block.desktopImg500} 500w, ${block.desktopImg} 908w`}
          alt=""
          className="img100 tablet-hide cover"
        />
      ) : null}
      <img
        src={block.mobileImg}
        loading="lazy"
        alt=""
        className="img100 cover desktop-hide"
      />
      {!(block.imageFirst && block.desktopImg500) ? (
        <img
          src={block.desktopImg}
          loading="lazy"
          alt=""
          className={`img100 tablet-hide${block.imageFirst ? '' : ' cover'}`}
        />
      ) : null}
    </div>
  );
}

function Text({ block }) {
  return (
    <div className="p-process-text is-564">
      <h3 className="fs38 font-weight-500">{block.title}</h3>
      <p className="fs22 font-weight-500">{block.subhead}</p>
      <div className="p-process-col mb0">
        {block.points.map((pt) => (
          <div className="p-process-row reveal" key={pt}>
            <div className="icon-30">
              <img src={block.icon} loading="lazy" alt="" className="img100" />
            </div>
            <p className="fs22">{pt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyBliss() {
  const ref = useGsapReveal();

  return (
    <section className="section_p-process top-80" ref={ref}>
      <div className="container-main">
        <div className="p-process-wrapper is-new">
          <div className="heading-wrapper _617 bottom0 reveal">
            <h2 className="fs38">Why Everyone&rsquo;s Choosing Bliss</h2>
            <p className="fs-24 mfs-16 bliss-subtitle">
              Bliss guides you every step, matching you with pre-vetted,
              board-certified experts who meet our highest standards.
            </p>
          </div>

          {blocks.map((block, i) => (
            <div className="p-process-content is-new tablet-styles" key={i}>
              {block.imageFirst ? (
                <>
                  <Images block={block} />
                  <Text block={block} />
                </>
              ) : (
                <>
                  <Text block={block} />
                  <Images block={block} />
                </>
              )}
              <div
                className={`p-process-tablet-bg${block.bgClass ? ` ${block.bgClass}` : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Centralized asset paths (files live in /public/assets, served from /assets).
const A = '/assets';

export const assets = {
  logo: `${A}/681a2ee6b58085699e9b915e_logo.svg`,
  navLogo: `${A}/67ee707d50657d69bf26f91c_Layer_1.svg`,
  logoMark: `${A}/68115d09658b241135b0ec32_bls.svg`,
  heroBg: `${A}/68136ec30c004401529cc8de_bg-min.avif`,
  plus: `${A}/67f7e4444498c4c3cfe66f61_plus.svg`,
  minus: `${A}/67f7e53c618a7f63bfcd72c5_minus.svg`,
  play: `${A}/681a1451e46dc96cac240054_play.svg`,
  pause: `${A}/681b3e6c7c9bf151b8af08d5_pause.svg`,
  arrowLeft: `${A}/686f8c1a707844cc2b3662ae_left.svg`,
  arrowRight: `${A}/686f8c1afb5099a7402bc209_right.svg`,
  arrow: `${A}/681a205cd4d385862468a591_arr.svg`,
  chevron: `${A}/6874d89a04d78147c3ce42c2_chevron.svg`,
  phoneIcon: `${A}/6823134f250383de2df398b9_mbp.svg`,
  // EDUCATION mega-dropdown promo image (Webflow CDN avif, 2-size srcset)
  navDropImg:
    'https://cdn.prod.website-files.com/67c81975ab2146707dcd23bc/6874ced5803e8ed1fa278720_nav2.avif',
  navDropImg500:
    'https://cdn.prod.website-files.com/67c81975ab2146707dcd23bc/6874ced5803e8ed1fa278720_nav2-p-500.avif',
  link: `${A}/681a2f1afae856e609acce69_link.svg`,
  dot: `${A}/686f9562008bc954bbb64b54_dot.svg`,
  // testimonial / story images
  story1: `${A}/69b933c300717e01f3efe379_marissawebsite.png`,
  story2: `${A}/69b9351bc986553a6d5a6790_sidneywebsite.png`,
  story3: `${A}/69b9358940c92fe1d69e9e5b_carlywebsite.png`,
  // app / promo imagery
  appHeader: `${A}/67d1781878d1536ec1fd4f70_headerimage.webp`,
  formMiddle: `${A}/67d17817b79ca6dd2128fab9_formmiddle-2.webp`,
  blissPurple: `${A}/68af0fe2cff4353f23953dff_purple.avif`,
  blissImagine: `${A}/68c0130e46c25587aff4a467_bliss.avif`,
  aiLogo: `${A}/69ca9dbfbc6db1d493544d56_ai-logo-bliss.avif`,
  statCheck: `${A}/68946a9881ff335b2c9d4594_Vegreenctor.svg`,
};

// "Why Everyone's Choosing Bliss" (section_p-process) imagery
export const processImgs = {
  b1Mobile: `${A}/68d4f7fdcb60cddac9e8659b_img.avif`, // desktop-hide
  b1Desktop: `${A}/68f73e2b2c42caaf8e299542_Group_2100233191_1.avif`, // tablet-hide
  b1Icon: `${A}/68c2912d6399af4321c5988f_Frame.svg`,
  b2Mobile: `${A}/68d66d3d6b813218e19ee166_shutterstock_2175055125_1.avif`,
  b2Desktop: `${A}/68d456f708d721255f0a0a42_Group_2100232801.avif`,
  b2Icon: `${A}/68d66cd78508f245a35c2416_Frame.svg`,
  b3DesktopFull: `${A}/68d66d17897c23bf83fb442f_Group_2100233110.avif`,
  b3Desktop500: `${A}/68d66d17897c23bf83fb442f_Group_2100233110-p-500.avif`, // srcset 500w
  b3Mobile: `${A}/68d459372c2ca8c95ebd90a0_dr-gerth-headshot-v1r1_1.avif`,
  b3Icon: `${A}/68d66cecbc15491fb9ea42c6_Frame.svg`,
};

// "More Stories…" (section_video-slider) video testimonials — local thumbs + Cloudinary mp4s
export const videoStories = [
  {
    thumb: `${A}/68f77c0d63b06fd7aca02c78_Screenshot_2025-10-21_at_13.32.44-min.avif`,
    video:
      'https://res.cloudinary.com/dsrowswlk/video/upload/f_auto,q_auto,w_900/v1765355219/Azjae_izoe3k.mp4',
  },
  {
    thumb: `${A}/68247e42b9e8ac2bab62cc63_Raquel__Thumbnail_1.avif`,
    video:
      'https://res.cloudinary.com/dsrowswlk/video/upload/f_auto,q_auto,w_900/v1746620600/j9fgey7escrrbbefc6xf.mp4',
  },
  {
    thumb: `${A}/68247e439b44a4573f999c63_Barbara_Thumbnail_1.avif`,
    video:
      'https://res.cloudinary.com/dsrowswlk/video/upload/f_auto,q_auto,w_900/v1746620711/trmcszripub4oks8jl5p.mp4',
  },
  {
    thumb: `${A}/68247e42b34e65dbe3ed24c0_Margaret_Thumbnail_1.avif`,
    video:
      'https://res.cloudinary.com/dsrowswlk/video/upload/f_auto,q_auto,w_900/v1746620544/s5cp9c9yjknrp8cbmnd5.mp4',
  },
  {
    thumb: `${A}/68f77c0dec6df9d66bdf6547_Screenshot_2025-10-21_at_13.34.24-min.avif`,
    video:
      'https://res.cloudinary.com/dsrowswlk/video/upload/f_auto,q_auto,w_900/v1765355299/Katya_New_cfzifi.mp4',
  },
  {
    thumb: `${A}/68f77fe2d8b09f82e70f9f54_Screenshot_2025-10-21_at_14.49.28-min.avif`,
    video:
      'https://res.cloudinary.com/dsrowswlk/video/upload/f_auto,q_auto,w_900/v1765355422/Kristina.mp4_vsoz67.mp4',
  },
  {
    thumb: `${A}/68247e433989f5f86bd0e6e2_Jeanette_Thumbnail_1.avif`,
    video:
      'https://res.cloudinary.com/dsrowswlk/video/upload/f_auto,q_auto,w_900/v1746634103/ehls4gsjiare5waip0to.mp4',
  },
];

// "Getting Work Done" timeline (section_timeline) imagery
export const timelineImgs = [
  {
    src: `${A}/681b358f5b49aa19461627a0_2022.12.avif`,
    src500: `${A}/681b358f5b49aa19461627a0_2022.12-p-500.avif`,
    src800: `${A}/681b358f5b49aa19461627a0_2022.12-p-800.avif`,
  },
  {
    src: `${A}/681b358f7c863f12efeda136_2022.12-2.avif`,
    src500: `${A}/681b358f7c863f12efeda136_2022.12-2-p-500.avif`,
    src800: `${A}/681b358f7c863f12efeda136_2022.12-2-p-800.avif`,
  },
  {
    src: `${A}/681b358f87622f34822133ec_2022.12-1.avif`,
    src500: `${A}/681b358f87622f34822133ec_2022.12-1-p-500.avif`,
    src800: `${A}/681b358f87622f34822133ec_2022.12-1-p-800.avif`,
  },
  {
    src: `${A}/67e38fc0c02e16a6e2e8f451_2022.12_8.avif`,
    src500: `${A}/67e38fc0c02e16a6e2e8f451_2022.12_8-p-500.avif`, // no -800 variant locally
    width: 1110, // live srcset tops out at 1110w
  },
];

// "How it works" step icons
export const stepIcons = [
  `${A}/68370a7b07e229dd7a5a962d_1.svg`,
  `${A}/68370a7b422f27def26c3065_2.svg`,
  `${A}/68370a7b9652bf17df902e24_3.svg`,
  `${A}/68370a7b98d7f755ba538a5e_4.svg`,
];

// generic decorative frames used across feature cards
export const frames = [
  `${A}/68370cde96b8aa505d641139_l1.svg`,
  `${A}/68370cddca6a03c723b67981_l2.svg`,
  `${A}/68370cdd525c5a998c0365d6_l3.svg`,
  `${A}/68370cdd195604758e241503_l4.svg`,
];

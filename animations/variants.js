const easing = [0.6, -0.05, 0.01, 0.99];

//Transitions between pages

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.5,
      type: "tween",
    },
  },
};

// Home Component Animations

export const leadImgVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: { duration: 2 },
  },
};

export const closingCaptionVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
      duration: 1,
    },
  },
};

// Navbar Animations

export const navLinkVariants = {
  hover: {
    scale: 1.02,
  },
};

// All Button Animations

export const btnVariants = {
  hover: {
    scale: 1.02,
  },
};

// Aboutme Component Animations

export const aboutItemsLeftVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.2, duration: 3, type: "spring", ease: easing },
  },
};

export const aboutItemsCenterVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.4, duration: 3, type: "spring", ease: easing },
  },
};

export const aboutItemsRightVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.6, duration: 3, type: "spring", ease: easing },
  },
};

export const personContainerVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, duration: 3, type: "tween", ease: easing },
  },
};

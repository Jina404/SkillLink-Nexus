export type Partner = {
  name: string;
  src: string;
  width: number;
  height: number;
  /**
   * File height ÷ artwork height. Each file has a different amount of empty space
   * around the logo, so this keeps the visible logos the same height.
   */
  artScale: number;
  alt: string;
};

export const partnersSection = {
  title: "Supporting Partners",
  subtitle: "The institutions and organizations that back our work.",
};

// Width and height are each file's own pixel size, so the logos keep their proportions.
export const partners: Partner[] = [
  {
    name: "MasterCard Foundation",
    src: "/partners/mastercard.png",
    width: 450,
    height: 416,
    artScale: 1.22, // artwork is 341 of 416px tall
    alt: "MasterCard Foundation logo",
  },
  {
    name: "USIU Incubation & Innovation Center",
    src: "/partners/usiu.png",
    width: 3000,
    height: 1228,
    artScale: 1.07, // artwork is 1144 of 1228px tall
    alt: "USIU Incubation & Innovation Center logo",
  },
];

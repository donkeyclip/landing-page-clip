import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacity = (opacity,selector, duration, easing = "linear", delay=0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity
      },
    },
    {
      selector,
      duration,
      easing,
      delay
    }
  );
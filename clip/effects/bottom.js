import { CSSEffect } from "@donkeyclip/motorcortex";
export const bottom = (bottom,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        bottom
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
import { CSSEffect } from "@donkeyclip/motorcortex";
export const left = (left,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
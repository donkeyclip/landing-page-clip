import { CSSEffect } from "@donkeyclip/motorcortex";
export const right = (right,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        right
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
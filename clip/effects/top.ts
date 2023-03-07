import { CSSEffect } from "@donkeyclip/motorcortex";
export const top = (top,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        top
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
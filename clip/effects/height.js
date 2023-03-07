import { CSSEffect } from "@donkeyclip/motorcortex";
export const height = (height,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

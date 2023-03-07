import { CSSEffect } from "@donkeyclip/motorcortex";
export const width = (width,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

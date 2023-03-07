import { CSSEffect } from "@donkeyclip/motorcortex";
export const bgColor = (bgColor,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        backgroundColor:bgColor
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
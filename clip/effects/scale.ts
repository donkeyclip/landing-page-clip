import { CSSEffect } from "@donkeyclip/motorcortex";
export const scale = (scale,selector, duration, easing = "linear",delay=0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform:{
            scale
        }
      },
    },
    {
      selector,
      duration,
      easing,
      delay
    }
  );
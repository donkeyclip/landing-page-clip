import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacity = (
  opacity,
  selector,
  duration,
  easing = "linear",
  delay = 0,
  initialValues = undefined
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity,
      },
      ...(initialValues && { initialValues: { opacity: initialValues } }),
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

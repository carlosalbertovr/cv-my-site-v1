import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "../../utils/twMerge";

const DELAY = 0.25;

type TProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  duration?: number;
  index?: number;
  removeAnimation?: boolean;
}>;

export function Reveal(props: TProps) {
  const { children, className, index, duration, removeAnimation } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Fire the animation
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={cn(["relative w-fit", className])}>
      <motion.div
        variants={{
          hidden: {
            opacity: removeAnimation ? 1 : 0,
            scale: removeAnimation ? 1 : 0,
          },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: duration ? duration : 0.5,
          delay: index ? index * DELAY : DELAY,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

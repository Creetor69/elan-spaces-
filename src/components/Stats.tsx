import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function Stats() {
  const stats = [
    { label: "Success Projects", value: 98, suffix: "%" },
    { label: "Happy Customers", value: 1500, suffix: "+" },
    { label: "Team Members", value: 30, suffix: "+" },
    { label: "Years Experience", value: 25, suffix: "+" },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-margin-mobile md:px-margin-desktop border-y border-blue-50">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <span className="font-accent text-lg text-primary block mb-2">Heritage in Bengaluru</span>
          <h2 className="font-display text-3xl md:text-5xl text-blue-950 lowercase tracking-tighter">our legacy in <span className="text-primary italic">sanctuary design</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="font-display text-4xl md:text-6xl text-primary font-bold mb-2 flex items-baseline">
              <Counter value={stat.value} />
              <span className="text-2xl md:text-3xl ml-1">{stat.suffix}</span>
            </div>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-tertiary">
              {stat.label}
            </p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}

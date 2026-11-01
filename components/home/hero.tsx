"use client";
import { motion } from "framer-motion";
import ServiceCard from "@/components/home/services/service-card";
import ServicesData from "@/data/SERVICES_DATA.json";

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    // Spans (display: block) so lines can sit inside a heading
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <div className="w-full space-y-10">
      <div className="space-y-5">
        <h2 className="uppercase font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1] space-y-1 font-geist">
          <RevealLine delay={0.1}>
            <span className="text-muted-foreground">Software Engineer</span>
          </RevealLine>
          <RevealLine delay={0.2}>&amp; Founder</RevealLine>
        </h2>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          I work with founders and businesses to design and build web and mobile
          products that people can rely on. Building my own product has taught
          me to value clear scope, honest communication, and work that holds up
          over time.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {ServicesData.map((service) => (
          <ServiceCard key={service.index} {...service} />
        ))}
      </motion.div>
    </div>
  );
}

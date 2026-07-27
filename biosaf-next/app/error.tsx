"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/ui/PageTransition";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { buttonTap } from "@/lib/motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <ScrollReveal>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-red-600 mb-4"
          >
            Oops!
          </motion.h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-gray-600 mb-8">{error.message}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <motion.button
            onClick={reset}
            {...buttonTap}
            className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors"
          >
            Try Again
          </motion.button>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}

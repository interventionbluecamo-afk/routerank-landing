'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4">
            Ready to start flexing your stats?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Join thousands of delivery drivers competing to be the best. Track your routes, 
            earn badges, and climb the leaderboards—all for free.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg w-full sm:w-auto group">
              <a href="#early-access">
                Join Early Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-base sm:text-lg w-full sm:w-auto border-2 border-white/20 hover:border-white/40 text-white">
              <a href="#how-it-works">
                <Download className="w-5 h-5 mr-2" />
                See How It Works
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-8 text-sm text-gray-400"
          >
            <p>Coming soon to iOS & Android</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

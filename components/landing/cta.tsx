'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6">
            Ready to flex your stats?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands competing to be the best. Track routes, earn badges, climb ranks—free forever.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center pt-4"
          >
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 h-14 px-8 text-base font-medium">
              <a href="#waitlist">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <div className="pt-8 text-sm text-gray-500">
            <p>Coming soon to iOS & Android</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
            Ready to flex your stats?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands competing to be the best. Track routes, earn badges, climb ranks—free forever.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center pt-4"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-16 px-12 text-lg font-bold shadow-2xl">
              <a href="#waitlist">
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>

          <div className="pt-8 text-sm text-gray-400">
            <p>Coming soon to iOS & Android</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

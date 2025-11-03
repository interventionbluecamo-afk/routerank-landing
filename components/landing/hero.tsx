'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Coming Soon
            </motion.div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.1] text-black">
              Track your grind.
              <br />
              <span className="text-blue-600">Climb the ranks.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl">
              The app that finally lets drivers compete, prove performance, and flex real stats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900 h-14 px-8 text-base font-medium">
                <a href="#waitlist">Join Waitlist</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-14 px-8 text-base text-gray-700 hover:text-black">
                <a href="#leaderboard" className="flex items-center gap-2">
                  See it in action
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Stats - Minimal */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-semibold text-black">500+</div>
                <div className="text-sm text-gray-600 mt-1">On waitlist</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-black">50+</div>
                <div className="text-sm text-gray-600 mt-1">Badges</div>
              </div>
            </div>
          </motion.div>

          {/* Visual - Clean Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-gray-50 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                {/* Mock Phone Screen */}
                <div className="h-full bg-gradient-to-b from-gray-900 to-black p-6 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-white/60 text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white/60 rounded-sm" />
                      <div className="w-1 h-1 bg-white/60 rounded-full" />
                    </div>
                  </div>

                  {/* Leaderboard Preview */}
                  <div className="flex-1 space-y-3">
                    <div className="text-white font-semibold text-lg mb-4">Weekly Leaderboard</div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {i}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">Driver {i}</div>
                          <div className="text-white/60 text-sm">{(1200 - i * 50).toLocaleString()} packages</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

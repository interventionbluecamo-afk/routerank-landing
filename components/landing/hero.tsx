'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold border border-blue-200"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              Coming Soon
            </motion.div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-[1.1] text-black">
              Track your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                grind.
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
              The app that finally lets drivers compete, prove performance, and flex real stats.
            </p>

            <div className="flex justify-center pt-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-16 px-10 text-lg font-semibold shadow-lg">
                <a href="#waitlist">Join Waitlist</a>
              </Button>
            </div>

            {/* Compact Stats - 2 Cards Only */}
            <div className="grid grid-cols-2 gap-6 pt-16 max-w-md mx-auto">
              {[
                { icon: Trophy, label: '500+', sublabel: 'On waitlist', color: 'from-yellow-400 to-orange-500' },
                { icon: Zap, label: '50+', sublabel: 'Badges', color: 'from-purple-500 to-pink-500' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-xl`}>
                      <Icon className="w-8 h-8 mb-3" />
                      <div className="text-3xl font-bold mb-1">{stat.label}</div>
                      <div className="text-sm opacity-90">{stat.sublabel}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

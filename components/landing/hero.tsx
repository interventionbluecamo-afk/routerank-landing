'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Users, Trophy } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-100 rounded-full text-xs sm:text-sm font-medium mb-4"
          >
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span>Coming Soon • Early Access Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-tight"
          >
            Track your grind.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Climb the ranks.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
          >
            Finally, a way to prove you're crushing it. Compete with thousands of drivers, 
            unlock badges, and flex your stats on real leaderboards.
          </motion.p>

          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span>❌</span>
              <span>Tired of apps that don't track your real stats?</span>
            </div>
            <div className="flex items-center gap-2">
              <span>❌</span>
              <span>Want to prove you're top tier?</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button asChild size="lg" className="text-base sm:text-lg w-full sm:w-auto">
              <a href="#early-access">Join Early Access (Free)</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="text-base sm:text-lg w-full sm:w-auto">
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </motion.div>

          {/* Social Proof - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8"
          >
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-black">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Early Access</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-black">10K+</div>
              <div className="text-xs sm:text-sm text-gray-600">Routes Logged</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-black">50+</div>
              <div className="text-xs sm:text-sm text-gray-600">Badges Unlocked</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Demo - Mobile Stacked */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 space-y-4">
            {/* Floating Rank Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-5 sm:p-6 text-white shadow-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl sm:text-2xl">⚡</span>
                <span className="text-xs sm:text-sm font-semibold">Pro Driver</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold">Rank #42</div>
              <div className="text-xs sm:text-sm opacity-90">150 routes completed</div>
            </motion.div>

            {/* Floating Leaderboard Preview */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-200"
            >
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Weekly Leaderboard</h3>
              <div className="space-y-2 sm:space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between text-sm sm:text-base">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-gray-400">#{i}</span>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full" />
                      <span className="font-medium">Driver {i}</span>
                    </div>
                    <span className="font-bold">{1200 - i * 50} pkgs</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Badge Showcase */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-200"
            >
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Recent Badges</h3>
              <div className="flex gap-2 sm:gap-3">
                {['💯', '🏃', '⚡', '🔥'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

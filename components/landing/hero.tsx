'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden bg-black text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-xs sm:text-sm font-medium"
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span>Coming Soon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight"
          >
            Track your grind.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Climb the ranks.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Prove you're crushing it. Compete. Flex your stats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button asChild size="lg" className="text-base sm:text-lg w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-bold h-14 sm:h-16">
              <a href="#waitlist">Join Waitlist</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-base sm:text-lg w-full sm:w-auto border-2 border-white/20 hover:border-white/40 text-white h-14 sm:h-16">
              <a href="#leaderboard">See Leaderboard</a>
            </Button>
          </motion.div>

          {/* Stats - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8"
          >
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">On Waitlist</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10K+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Routes Ready</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Badges</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Demo - Hidden on Mobile */}
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
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-semibold">Pro Driver</span>
              </div>
              <div className="text-3xl font-bold">Rank #42</div>
              <div className="text-sm opacity-90">150 routes completed</div>
            </motion.div>

            {/* Floating Leaderboard Preview */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl"
            >
              <h3 className="font-bold text-lg mb-4 text-white">Weekly Leaderboard</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400">#{i}</span>
                      <div className="w-8 h-8 bg-gray-700 rounded-full" />
                      <span className="font-medium text-white">Driver {i}</span>
                    </div>
                    <span className="font-bold text-white">{1200 - i * 50} pkgs</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Badge Showcase */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl"
            >
              <h3 className="font-bold text-lg mb-4 text-white">Recent Badges</h3>
              <div className="flex gap-3">
                {['💯', '🏃', '⚡', '🔥'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

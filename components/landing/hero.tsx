'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden bg-white sm:py-16 lg:py-20">
      {/* Subtle background - Much more minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Title - Less cheesy, more direct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center space-y-2 sm:space-y-3"
          >
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              Rank your routes
            </h1>
            <p className="text-base text-gray-600 font-medium sm:text-lg md:text-xl max-w-xl mx-auto">
              Leaderboards, badges, and stats for delivery drivers
            </p>
          </motion.div>

          {/* Vertical Video - Clean container with visible rounded edges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
          >
            {/* Video Container - rounded-3xl for smooth edges */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-[9/16] max-h-[580px] sm:max-h-[640px] lg:max-h-[720px]">
              {/* Video Placeholder - Dark background so edges are visible */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                {/* Subtle animated overlay */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                />
                
                {/* Play Button - Clean and subtle */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-all sm:w-20 sm:h-20"
                >
                  <Play className="w-6 h-6 text-white ml-0.5 sm:w-8 sm:h-8" fill="currentColor" />
                </motion.button>

                {/* Corner badge - Minimal */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300 border border-white/10">
                  Demo soon
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Below Video - Clean and simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-center space-y-4 sm:space-y-5 w-full max-w-md mx-auto"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-14 w-full px-8 text-lg font-semibold shadow-lg active:scale-95 transition-all border-0 sm:h-16 sm:text-xl">
                <a href="#waitlist">Join Waitlist →</a>
              </Button>
            </motion.div>

            {/* Secondary CTA - Show me more */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild variant="ghost" size="lg" className="h-12 w-full px-8 text-base font-medium border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all sm:h-14 sm:text-lg">
                <a href="#leaderboard" className="flex items-center justify-center gap-2">
                  Show me more
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </motion.div>

            {/* Company Logos - Minimal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-4 sm:pt-6"
            >
              <p className="text-xs text-gray-400 mb-4 font-medium tracking-wide uppercase sm:text-sm sm:mb-5">
                Used by drivers at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {[
                  { name: 'FedEx', logo: 'FedEx' },
                  { name: 'Amazon DSP', logo: 'Amazon' },
                  { name: 'UPS', logo: 'UPS' },
                  { name: 'DHL', logo: 'DHL' },
                ].map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <div className="text-base font-bold opacity-40 hover:opacity-60 sm:text-lg">
                      {company.logo}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

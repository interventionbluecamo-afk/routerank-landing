'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden bg-white">
      {/* Subtle animated blobs - much more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Coming Soon Badge - Neutral with subtle accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-200"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
            Coming Soon
          </motion.div>

          {/* Main Headline - Keep gradient on "grind" only */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.1] text-black px-4">
            Track your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              grind.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium px-4">
            Compete. Prove performance. Flex real stats.
          </p>

          {/* Primary CTA - Keep gradient as accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-semibold shadow-xl active:scale-95 transition-transform">
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </motion.div>

          {/* Key Stats - Neutral text with gradient as accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6 sm:gap-12 pt-8 sm:pt-12"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">On waitlist</div>
            </div>
            <div className="h-8 sm:h-12 w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Badges</div>
            </div>
          </motion.div>

          {/* Company Logos - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-12 sm:pt-16 pb-8"
          >
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 font-medium tracking-wide uppercase">
              Used by drivers at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
              {[
                { name: 'FedEx', logo: 'FedEx' },
                { name: 'Amazon DSP', logo: 'Amazon' },
                { name: 'UPS', logo: 'UPS' },
                { name: 'DHL', logo: 'DHL' },
              ].map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-gray-400 hover:text-gray-600 transition-all"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold opacity-40 hover:opacity-60">
                    {company.logo}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

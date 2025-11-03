'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-6 sm:space-y-8"
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-black">
              Track your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                grind.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Compete. Prove performance. Flex real stats.
            </p>

            {/* Primary CTA - Keep gradient as accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-2"
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
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-12 pt-6 sm:pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">On waitlist</div>
              </div>
              <div className="h-8 sm:h-12 w-px bg-gray-300" />
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Badges</div>
              </div>
            </motion.div>

            {/* Company Logos - Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-8 sm:pt-12"
            >
              <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 font-medium tracking-wide uppercase">
                Used by drivers at
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
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
                    <div className="text-base sm:text-lg md:text-xl font-bold opacity-40 hover:opacity-60">
                      {company.logo}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 aspect-video">
              {/* Video Placeholder - Clean and tasteful */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                
                {/* Play Button - Subtle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-xl group hover:shadow-2xl transition-all"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </motion.button>

                {/* Corner badge - "Demo Coming Soon" */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm">
                  Demo soon
                </div>
              </div>

              {/* Subtle border glow effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-gray-200/50 pointer-events-none" />
            </div>

            {/* Caption below video */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-4 text-sm text-gray-500"
            >
              See RouteRank in action
            </motion.p>
          </motion.div>
        </div>
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

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden bg-white sm:py-16 lg:py-20">
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
        <div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-12">
          {/* Content Column - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-5 sm:space-y-6 lg:text-left lg:space-y-8"
          >
            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
              Coming Soon
            </motion.div>

            {/* Main Headline - Mobile optimized sizes */}
            <h1 className="text-4xl font-bold tracking-tight leading-[1.1] text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Track your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                grind.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto font-medium sm:text-lg md:text-xl lg:mx-0 lg:text-xl">
              Compete. Prove performance. Flex real stats.
            </p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-12 w-full max-w-sm mx-auto px-8 text-base font-semibold shadow-xl active:scale-95 transition-transform sm:h-14 sm:text-lg lg:w-auto lg:mx-0">
                <a href="#waitlist">Join Waitlist</a>
              </Button>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 pt-6 sm:gap-8 sm:pt-8 lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-2xl lg:text-3xl">500+</div>
                <div className="text-xs text-gray-500 mt-0.5 sm:text-sm">On waitlist</div>
              </div>
              <div className="h-10 w-px bg-gray-300 sm:h-12" />
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-2xl lg:text-3xl">50+</div>
                <div className="text-xs text-gray-500 mt-0.5 sm:text-sm">Badges</div>
              </div>
            </motion.div>

            {/* Company Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-6 sm:pt-8 lg:pt-12"
            >
              <p className="text-xs text-gray-400 mb-3 font-medium tracking-wide uppercase sm:text-sm sm:mb-4 lg:mb-6">
                Used by drivers at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start lg:gap-8">
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
                    <div className="text-sm font-bold opacity-40 hover:opacity-60 sm:text-base md:text-lg lg:text-xl">
                      {company.logo}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Video Column - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full order-first lg:order-last"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 aspect-video sm:rounded-2xl sm:shadow-2xl lg:rounded-3xl">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                
                {/* Play Button - Touch friendly on mobile */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-xl group hover:shadow-2xl transition-all sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                >
                  <Play className="w-6 h-6 text-white ml-0.5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 lg:ml-1" fill="currentColor" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </motion.button>

                {/* Corner badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-semibold text-gray-700 border border-gray-200 shadow-sm sm:top-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-xs">
                  Demo soon
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-xl border border-gray-200/50 pointer-events-none sm:rounded-2xl sm:border-2 lg:rounded-3xl" />
            </div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-3 text-xs text-gray-500 sm:mt-4 sm:text-sm"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
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

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-white sm:py-12 lg:py-16">
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

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Vertical Video - Portrait Format */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 aspect-[9/16] max-h-[600px] sm:max-h-[700px] lg:max-h-[800px]">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                
                {/* Play Button - Centered */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-xl group hover:shadow-2xl transition-all sm:w-20 sm:h-20"
                >
                  <Play className="w-6 h-6 text-white ml-0.5 sm:w-8 sm:h-8" fill="currentColor" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </motion.button>

                {/* Corner badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-semibold text-gray-700 border border-gray-200 shadow-sm sm:top-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-xs">
                  Demo soon
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-gray-200/50 pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Below Video - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center space-y-4 sm:space-y-5 w-full max-w-md mx-auto"
          >
            {/* Primary CTA */}
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-12 w-full px-8 text-base font-semibold shadow-xl active:scale-95 transition-transform sm:h-14 sm:text-lg">
              <a href="#waitlist">Join Waitlist</a>
            </Button>

            {/* Key Stats - Compact */}
            <div className="flex items-center justify-center gap-6 pt-2 sm:gap-8">
              <div className="text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-2xl">500+</div>
                <div className="text-xs text-gray-500 mt-0.5 sm:text-sm">On waitlist</div>
              </div>
              <div className="h-8 w-px bg-gray-300 sm:h-10" />
              <div className="text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-2xl">50+</div>
                <div className="text-xs text-gray-500 mt-0.5 sm:text-sm">Badges</div>
              </div>
            </div>

            {/* Company Logos - Compact */}
            <div className="pt-2 sm:pt-4">
              <p className="text-xs text-gray-400 mb-2 font-medium tracking-wide uppercase sm:text-sm sm:mb-3">
                Used by drivers at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="text-gray-400 hover:text-gray-600 transition-all"
                  >
                    <div className="text-sm font-bold opacity-40 hover:opacity-60 sm:text-base">
                      {company.logo}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
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

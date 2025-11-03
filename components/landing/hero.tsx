'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden bg-white sm:py-16 lg:py-20">
      {/* Animated background - More vibrant like rainbow.me */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Vertical Video - Premium container with gradient glow */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
          >
            {/* Gradient glow effect - Rainbow.me style */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl animate-pulse" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 bg-gradient-to-br from-gray-50 to-white aspect-[9/16] max-h-[580px] sm:max-h-[640px] lg:max-h-[720px] backdrop-blur-sm">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white">
                {/* Subtle animated gradient overlay */}
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                      'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
                      'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0"
                />
                
                {/* Play Button - Premium, larger, more engaging */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl group transition-all sm:w-24 sm:h-24"
                >
                  <Play className="w-8 h-8 text-white ml-1 sm:w-10 sm:h-10" fill="currentColor" />
                  {/* Animated glow ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-xl"
                  />
                </motion.button>

                {/* Corner badge - More premium */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-gray-800 border border-gray-200/50 shadow-lg">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Demo soon</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Below Video - Optimized flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-6 sm:space-y-7 w-full max-w-md mx-auto"
          >
            {/* Primary CTA - Premium, unmissable */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              {/* Subtle glow behind button */}
              <motion.div
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-60"
              />
              <Button asChild size="lg" className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 h-14 w-full px-8 text-lg font-bold shadow-2xl active:scale-95 transition-all border-0 sm:h-16 sm:text-xl">
                <a href="#waitlist">Join Waitlist →</a>
              </Button>
            </motion.div>

            {/* Key Stats - More prominent, animated */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-8 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center cursor-default"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-3xl lg:text-4xl"
                >
                  500+
                </motion.div>
                <div className="text-xs text-gray-500 mt-1 font-medium sm:text-sm">On waitlist</div>
              </motion.div>
              <div className="h-12 w-px bg-gradient-to-b from-gray-300 to-gray-200 sm:h-14" />
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center cursor-default"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-3xl lg:text-4xl"
                >
                  50+
                </motion.div>
                <div className="text-xs text-gray-500 mt-1 font-medium sm:text-sm">Badges</div>
              </motion.div>
            </motion.div>

            {/* Company Logos - More polished */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4 sm:pt-6"
            >
              <p className="text-xs text-gray-400 mb-4 font-semibold tracking-wider uppercase sm:text-sm sm:mb-5">
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.08, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-default"
                  >
                    <div className="text-base font-black opacity-50 hover:opacity-70 transition-opacity sm:text-lg">
                      {company.logo}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - More refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-400 group cursor-pointer"
        >
          <span className="text-xs font-medium group-hover:text-gray-600 transition-colors">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1.5 group-hover:border-gray-400 transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

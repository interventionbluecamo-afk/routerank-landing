'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp, Zap, Award } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    { icon: Trophy, label: 'Live Rankings', desc: 'See where you rank', color: 'from-yellow-400 to-orange-500', emoji: '🏆' },
    { icon: Award, label: '50+ Badges', desc: 'Unlock achievements', color: 'from-purple-500 to-pink-500', emoji: '💯' },
    { icon: TrendingUp, label: '500+ Drivers', desc: 'On waitlist', color: 'from-blue-500 to-cyan-500', emoji: '📈' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center"
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
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-16 px-10 text-lg font-semibold shadow-lg active:scale-95 transition-transform">
                <a href="#waitlist">Join Waitlist</a>
              </Button>
            </div>

            {/* Innovative Feature Cards - Stacked with Interactions */}
            <div className="pt-16 max-w-lg mx-auto">
              <div className="relative">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isHovered = hoveredCard === index;
                  
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.15 }}
                      whileHover={{ scale: 1.05, y: -8, zIndex: 10 }}
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer mb-4 last:mb-0"
                      style={{
                        filter: hoveredCard !== null && hoveredCard !== index ? 'blur(2px)' : 'blur(0)',
                        transition: 'filter 0.3s ease',
                      }}
                    >
                      <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-white shadow-xl border-2 ${
                        isHovered ? 'border-white/50' : 'border-transparent'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-4xl">{feature.emoji}</div>
                            <div>
                              <div className="font-bold text-xl mb-1">{feature.label}</div>
                              <div className="text-sm opacity-90">{feature.desc}</div>
                            </div>
                          </div>
                          <Icon className={`w-6 h-6 transition-transform ${isHovered ? 'rotate-12 scale-110' : ''}`} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stats Row Below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                <div className="text-xs text-gray-600 mt-1">On waitlist</div>
              </div>
              <div className="h-8 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
                <div className="text-xs text-gray-600 mt-1">Badges</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

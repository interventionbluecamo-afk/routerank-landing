'use client';

import { motion } from 'framer-motion';
import { Camera, Trophy, Zap } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Camera,
    title: 'Snap Your Route',
    description: 'Use the app\'s camera to instantly capture your route summary. No screenshots needed - just point and shoot. GPS auto-tracks your miles.',
    emoji: '📸',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: 2,
    icon: Zap,
    title: 'Auto-Verified Stats',
    description: 'Your stats get verified instantly and added to leaderboards. Prove you\'re crushing it with real numbers.',
    emoji: '⚡',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: 3,
    icon: Trophy,
    title: 'Compete & Flex',
    description: 'Watch your rank climb, unlock badges, and flex your stats. Push notifications keep you motivated every day.',
    emoji: '🏆',
    color: 'from-orange-500 to-red-500',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            How It Works
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Three simple steps to start tracking your grind and climbing the ranks.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-purple-300 to-gray-200 -z-10" />

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Number Circle */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative z-10 shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon Circle */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

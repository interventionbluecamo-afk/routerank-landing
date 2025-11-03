'use client';

import { motion } from 'framer-motion';
import { Camera, TrendingUp, Award, MapPin, Bell, Zap } from 'lucide-react';

const mvpFeatures = [
  {
    icon: Camera,
    title: 'Route logging',
    description: 'Snap route summary. Enter packages, miles, stops. Verified in 30 seconds.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Live leaderboards',
    description: 'Real-time rankings by packages, miles, stops. Filter daily, weekly, monthly.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Badges & achievements',
    description: 'Unlock 50+ badges. Century Club, Speedster, Week Warrior, and more.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: MapPin,
    title: 'Route replay',
    description: 'Optional Life360-style playback. Animated tracking, hotspot maps.',
    gradient: 'from-green-500 to-emerald-500',
    optional: true,
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    description: 'Only important alerts: rank changes, badges earned, streaks.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Rank tiers',
    description: 'Rookie to Mythic. Every route counts toward progression.',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function MVPDetails() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4 sm:mb-6 border border-gray-200">
            <Zap className="w-4 h-4" />
            MVP Features
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-black mb-4 sm:mb-6">
            Everything you need
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Simple. Powerful. Built for drivers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mvpFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-xl h-full flex flex-col`}>
                  {feature.optional && (
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full border border-white/30">
                      OPTIONAL
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-white/90 flex-grow">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

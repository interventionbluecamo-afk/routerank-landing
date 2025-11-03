'use client';

import { motion } from 'framer-motion';
import {
  Camera,
  TrendingUp,
  Award,
  BarChart3,
  MapPin,
  Bell,
  Zap,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Instant proof',
    description: 'Snap route summary. No screenshots.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Real-time rankings',
    description: 'See where you rank. Daily, weekly, monthly.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Unlock badges',
    description: 'Earn achievements. Show them off.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Track everything',
    description: 'Efficiency scores, streaks, progression.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    title: 'Route replay',
    description: 'Life360-style playback with animated tracking.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    description: 'Rank changes, badges, streaks only.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'Rank tiers',
    description: 'Rookie to Mythic. Every route counts.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Verified stats',
    description: 'Proof keeps leaderboards honest.',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-black mb-6">
            Built for drivers
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Stop relying on apps that don't track your real performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 text-white shadow-xl h-full`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
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
    title: 'Instant Proof',
    description: 'Snap route summary. No screenshots.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Rankings',
    description: 'See where you rank. Daily, weekly, monthly.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Unlock Badges',
    description: 'Earn achievements. Show them off.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Track Everything',
    description: 'Efficiency scores, streaks, progression.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    title: 'Route Replay',
    description: 'Life360-style playback with animated tracking.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Rank changes, badges, streaks only.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Rank Tiers',
    description: 'Rookie to Mythic. Every route counts.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Shield,
    title: 'Verified Stats',
    description: 'Proof keeps leaderboards honest.',
    color: 'from-teal-500 to-cyan-500',
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 px-4">
            Built For Drivers
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Stop relying on apps that don't track your real performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-gray-800 hover:border-gray-700 transition-all bg-gray-900">
                <div className="flex flex-col items-start space-y-4 p-5 sm:p-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

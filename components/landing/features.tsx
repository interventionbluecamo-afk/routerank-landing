'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Shield,
  TrendingUp,
  Award,
  BarChart3,
  Camera,
  MapPin,
  Bell,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Instant Proof Capture',
    description: 'Snap a photo of your route summary right in the app. No screenshots, no hassle. Just point and shoot.',
    color: 'from-blue-500 to-cyan-500',
    painPoint: 'Stop fumbling with screenshots',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Leaderboards',
    description: 'See where you rank by packages, miles, stops, or routes. Filter daily, weekly, monthly, or all-time.',
    color: 'from-purple-500 to-pink-500',
    painPoint: 'Finally prove you\'re top tier',
  },
  {
    icon: Award,
    title: 'Unlock Badges & Flex',
    description: 'Earn achievements like "Century Club" (100+ packages), "Speedster", "Weather Warrior" and show them off.',
    color: 'from-orange-500 to-red-500',
    painPoint: 'Show your real achievements',
  },
  {
    icon: BarChart3,
    title: 'Track Everything',
    description: 'Efficiency scores, streaks, rank progression, weather patterns. See your stats improve over time.',
    color: 'from-green-500 to-emerald-500',
    painPoint: 'Your DSP doesn\'t track this',
  },
  {
    icon: MapPin,
    title: 'GPS Route Tracking',
    description: 'Auto-track your routes with GPS. Verify your mileage, see your path, and prove your routes are legit.',
    color: 'from-indigo-500 to-purple-500',
    painPoint: 'Stop guessing your stats',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Get notified when you move up ranks, unlock badges, or your streak is about to break. Never miss a win.',
    color: 'from-yellow-500 to-orange-500',
    painPoint: 'Stay motivated daily',
  },
  {
    icon: Zap,
    title: 'Competitive Streaks',
    description: 'Maintain daily streaks, climb rank tiers from Rookie to Mythic. Every route counts toward your grind.',
    color: 'from-pink-500 to-rose-500',
    painPoint: 'Turn your job into a game',
  },
  {
    icon: Shield,
    title: '100% Verified Stats',
    description: 'Proof images keep leaderboards honest. No inflated numbers, just real drivers competing fairly.',
    color: 'from-teal-500 to-cyan-500',
    painPoint: 'No more fake leaderboards',
  },
];

export function Features() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            Built For Drivers Who Want More
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Stop relying on DSP apps that don't track your real performance. 
            Prove you're crushing it and compete with the best.
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
              <Card hover className="h-full border-2 hover:border-black transition-all">
                <div className="flex flex-col items-start space-y-4 p-5 sm:p-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                    <p className="text-xs sm:text-sm font-medium text-purple-600">{feature.painPoint}</p>
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

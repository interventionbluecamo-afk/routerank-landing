'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const badges = [
  { emoji: '💯', name: 'Century Club', desc: '100+ packages in one route', gradient: 'from-blue-500 to-cyan-500', earned: true },
  { emoji: '🏃', name: 'Marathon Runner', desc: '100+ miles in one route', gradient: 'from-purple-500 to-pink-500', earned: true },
  { emoji: '⚡', name: 'Speedster', desc: '< 2 min per stop average', gradient: 'from-yellow-500 to-orange-500', earned: true },
  { emoji: '🔥', name: 'Week Warrior', desc: '7-day streak', gradient: 'from-red-500 to-pink-500', earned: true },
  { emoji: '🌧️', name: 'Weather Warrior', desc: 'Route in bad weather', gradient: 'from-gray-500 to-blue-500', earned: false },
  { emoji: '🌅', name: 'Early Bird', desc: '10 routes before 7am', gradient: 'from-orange-400 to-yellow-500', earned: false },
  { emoji: '🦉', name: 'Night Owl', desc: '10 routes after 8pm', gradient: 'from-indigo-500 to-purple-600', earned: false },
  { emoji: '👑', name: 'Month Master', desc: '30-day streak', gradient: 'from-yellow-400 to-amber-600', earned: false },
];

export function BadgesShowcase() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-800">Achievement System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            Unlock Badges & Flex
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Earn achievements for crushing routes, maintaining streaks, and pushing limits. Show them off on your profile.
          </p>
        </motion.div>

        {/* Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={`h-full border-2 transition-all ${
                badge.earned 
                  ? `bg-gradient-to-br ${badge.gradient} text-white border-transparent shadow-xl` 
                  : 'bg-gray-100 border-gray-300 opacity-60'
              }`}>
                <div className="flex flex-col items-center text-center p-4 sm:p-6">
                  <motion.div
                    animate={badge.earned ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"
                  >
                    {badge.emoji}
                  </motion.div>
                  <h3 className={`font-bold text-sm sm:text-base mb-1 sm:mb-2 ${badge.earned ? 'text-white' : 'text-gray-600'}`}>
                    {badge.name}
                  </h3>
                  <p className={`text-xs sm:text-sm ${badge.earned ? 'text-white/90' : 'text-gray-500'}`}>
                    {badge.desc}
                  </p>
                  {badge.earned && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      className="mt-2 text-xs font-semibold bg-white/20 px-2 py-1 rounded-full"
                    >
                      UNLOCKED ✓
                    </motion.div>
                  )}
                  {!badge.earned && (
                    <div className="mt-2 text-xs text-gray-400">
                      Locked 🔒
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 sm:gap-12 px-6 sm:px-12 py-6 sm:py-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1">4/10</div>
              <div className="text-xs sm:text-sm text-gray-600">Badges Earned</div>
            </div>
            <div className="h-12 sm:h-16 w-px bg-purple-200" />
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1">42</div>
              <div className="text-xs sm:text-sm text-gray-600">Total Routes</div>
            </div>
            <div className="h-12 sm:h-16 w-px bg-purple-200" />
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1">#42</div>
              <div className="text-xs sm:text-sm text-gray-600">Leaderboard Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


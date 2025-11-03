'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const badges = [
  { emoji: '💯', name: 'Century Club', desc: '100+ packages', gradient: 'from-blue-500 to-cyan-500', earned: true },
  { emoji: '🏃', name: 'Marathon', desc: '100+ miles', gradient: 'from-purple-500 to-pink-500', earned: true },
  { emoji: '⚡', name: 'Speedster', desc: '< 2 min/stop', gradient: 'from-yellow-500 to-orange-500', earned: true },
  { emoji: '🔥', name: 'Week Warrior', desc: '7-day streak', gradient: 'from-red-500 to-pink-500', earned: true },
  { emoji: '🌧️', name: 'Weather Warrior', desc: 'Bad weather route', gradient: 'from-gray-500 to-blue-500', earned: false },
  { emoji: '🌅', name: 'Early Bird', desc: '10 routes before 7am', gradient: 'from-orange-400 to-yellow-500', earned: false },
  { emoji: '🦉', name: 'Night Owl', desc: '10 routes after 8pm', gradient: 'from-indigo-500 to-purple-600', earned: false },
  { emoji: '👑', name: 'Month Master', desc: '30-day streak', gradient: 'from-yellow-400 to-amber-600', earned: false },
  { emoji: '🚀', name: 'Fast Track', desc: 'Complete 5 routes in a day', gradient: 'from-blue-600 to-indigo-600', earned: false },
  { emoji: '💪', name: 'Power Hour', desc: '100+ packages before noon', gradient: 'from-green-500 to-emerald-500', earned: false },
  { emoji: '⭐', name: 'Perfect Score', desc: '100% efficiency rating', gradient: 'from-yellow-400 to-yellow-600', earned: false },
  { emoji: '🏆', name: 'Champion', desc: 'Top 10 for a month', gradient: 'from-purple-600 to-pink-600', earned: false },
];

export function BadgesShowcase() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
            <Sparkles className="w-4 h-4" />
            Achievement System
          </div>
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-black mb-6">
            Unlock badges & flex
          </h2>
          <p className="text-xl text-gray-600">
            Earn achievements. Show them off.
          </p>
        </motion.div>

        {/* Compact Badge Grid - 6 columns on mobile, 12 on desktop - Shows more badges */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="relative group"
            >
              <div className={`aspect-square bg-gradient-to-br ${badge.gradient} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-lg transition-all ${
                badge.earned ? '' : 'opacity-50 grayscale'
              }`}>
                {badge.emoji}
              </div>
              {badge.earned && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">✓</span>
                </div>
              )}
              {/* Compact Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-black text-white text-xs px-2 py-1.5 rounded-lg whitespace-nowrap">
                  <div className="font-semibold">{badge.name}</div>
                  <div className="text-white/70">{badge.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats - Rainbow Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 sm:gap-12 px-8 sm:px-12 py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">4/12</div>
              <div className="text-sm font-semibold text-gray-700">Badges</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-purple-300 to-pink-300" />
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">42</div>
              <div className="text-sm font-semibold text-gray-700">Routes</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-blue-300 to-cyan-300" />
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">#42</div>
              <div className="text-sm font-semibold text-gray-700">Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

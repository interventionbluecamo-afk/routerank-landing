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
    <section className="py-16 sm:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold mb-4 sm:mb-6 border border-purple-200">
            <Sparkles className="w-4 h-4" />
            Achievement System
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-black mb-4 sm:mb-6">
            Unlock badges & flex
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Earn achievements. Show them off.
          </p>
        </motion.div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-x-visible">
          <div className="inline-flex sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 min-w-max sm:min-w-0">
            {badges.map((badge, index) => (
              <motion.button
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-left active:scale-95 transition-transform flex-shrink-0 w-[140px] sm:w-auto"
              >
                <div className={`bg-gradient-to-br ${badge.gradient} rounded-2xl p-4 text-white shadow-lg h-full flex flex-col ${
                  badge.earned ? '' : 'opacity-50 grayscale'
                }`}>
                  {/* Emoji + Status */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl sm:text-4xl">{badge.emoji}</div>
                    {badge.earned ? (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[8px] sm:text-[10px] font-bold">✓</span>
                      </div>
                    ) : (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[8px] sm:text-[10px]">🔒</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Always Visible Label */}
                  <div className="mt-auto">
                    <h3 className="font-bold text-xs sm:text-sm mb-1 leading-tight">{badge.name}</h3>
                    <p className="text-[10px] sm:text-xs text-white/80 leading-tight">{badge.desc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stats - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 sm:mt-12"
        >
          <div className="inline-flex items-center gap-6 sm:gap-12 px-6 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl border-2 border-purple-200">
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">4/12</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700">Badges</div>
            </div>
            <div className="h-10 sm:h-12 w-px bg-gradient-to-b from-purple-300 to-pink-300" />
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 sm:mb-2">42</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700">Routes</div>
            </div>
            <div className="h-10 sm:h-12 w-px bg-gradient-to-b from-blue-300 to-cyan-300" />
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1 sm:mb-2">#42</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700">Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

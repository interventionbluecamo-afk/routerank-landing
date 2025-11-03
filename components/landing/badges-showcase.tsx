'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const badges = [
  { emoji: '💯', name: 'Century Club', desc: '100+ packages', gradient: 'from-blue-500 to-cyan-500', earned: true },
  { emoji: '🏃', name: 'Marathon', desc: '100+ miles', gradient: 'from-purple-500 to-pink-500', earned: true },
  { emoji: '⚡', name: 'Speedster', desc: '< 2 min/stop', gradient: 'from-yellow-500 to-orange-500', earned: true },
  { emoji: '🔥', name: 'Week Warrior', desc: '7-day streak', gradient: 'from-red-500 to-pink-500', earned: true },
  { emoji: '🌧️', name: 'Weather Warrior', desc: 'Bad weather', gradient: 'from-gray-500 to-blue-500', earned: false },
  { emoji: '🌅', name: 'Early Bird', desc: '10 before 7am', gradient: 'from-orange-400 to-yellow-500', earned: false },
  { emoji: '🦉', name: 'Night Owl', desc: '10 after 8pm', gradient: 'from-indigo-500 to-purple-600', earned: false },
  { emoji: '👑', name: 'Month Master', desc: '30-day streak', gradient: 'from-yellow-400 to-amber-600', earned: false },
];

export function BadgesShowcase() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Achievement System</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 px-4">
            Unlock Badges & Flex
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto px-4">
            Earn achievements. Show them off.
          </p>
        </motion.div>

        {/* Compact Badge Grid - 4 columns on mobile, 8 on desktop */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className={`aspect-square rounded-xl bg-gradient-to-br ${badge.gradient} flex flex-col items-center justify-center p-2 sm:p-3 shadow-lg transition-all ${
                badge.earned ? '' : 'opacity-40 grayscale'
              }`}>
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1">{badge.emoji}</div>
                {badge.earned && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
                )}
              </div>
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  <div className="font-bold">{badge.name}</div>
                  <div className="text-gray-400">{badge.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 sm:gap-12 px-6 sm:px-12 py-4 sm:py-6 bg-gray-800 rounded-xl border border-gray-700">
            <div>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">4/10</div>
              <div className="text-xs text-gray-400">Badges</div>
            </div>
            <div className="h-8 sm:h-12 w-px bg-gray-700" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">42</div>
              <div className="text-xs text-gray-400">Routes</div>
            </div>
            <div className="h-8 sm:h-12 w-px bg-gray-700" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">#42</div>
              <div className="text-xs text-gray-400">Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

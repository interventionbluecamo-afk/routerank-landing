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
          className="text-center mb-16"
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

        {/* Badge Grid with Labels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${badge.gradient} rounded-2xl p-6 text-white shadow-xl transition-all ${
                badge.earned ? '' : 'opacity-50 grayscale'
              }`}>
                <div className="text-5xl mb-4 text-center">{badge.emoji}</div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">{badge.name}</h3>
                  <p className="text-sm opacity-90">{badge.desc}</p>
                </div>
                {badge.earned && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                )}
                {!badge.earned && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                )}
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
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-12 px-12 py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">4/10</div>
              <div className="text-sm font-semibold text-gray-700">Badges</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-purple-300 to-pink-300" />
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">42</div>
              <div className="text-sm font-semibold text-gray-700">Routes</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-blue-300 to-cyan-300" />
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

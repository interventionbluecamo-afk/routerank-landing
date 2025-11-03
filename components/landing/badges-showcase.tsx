'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const badges = [
  { emoji: '💯', name: 'Century Club', desc: '100+ packages', earned: true },
  { emoji: '🏃', name: 'Marathon', desc: '100+ miles', earned: true },
  { emoji: '⚡', name: 'Speedster', desc: '< 2 min/stop', earned: true },
  { emoji: '🔥', name: 'Week Warrior', desc: '7-day streak', earned: true },
  { emoji: '🌧️', name: 'Weather Warrior', desc: 'Bad weather', earned: false },
  { emoji: '🌅', name: 'Early Bird', desc: '10 before 7am', earned: false },
  { emoji: '🦉', name: 'Night Owl', desc: '10 after 8pm', earned: false },
  { emoji: '👑', name: 'Month Master', desc: '30-day streak', earned: false },
];

export function BadgesShowcase() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Achievement System
          </div>
          <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-black mb-6">
            Unlock badges & flex
          </h2>
          <p className="text-xl text-gray-600">
            Earn achievements. Show them off.
          </p>
        </motion.div>

        {/* Compact Badge Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 max-w-4xl mx-auto mb-12">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className={`aspect-square rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transition-all ${
                badge.earned 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-400 grayscale'
              }`}>
                {badge.emoji}
              </div>
              {badge.earned && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                  <div className="font-semibold">{badge.name}</div>
                  <div className="text-white/60">{badge.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-12 px-12 py-6 bg-gray-50 rounded-2xl">
            <div>
              <div className="text-3xl font-semibold text-black mb-1">4/10</div>
              <div className="text-sm text-gray-600">Badges</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-3xl font-semibold text-black mb-1">42</div>
              <div className="text-sm text-gray-600">Routes</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-3xl font-semibold text-black mb-1">#42</div>
              <div className="text-sm text-gray-600">Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

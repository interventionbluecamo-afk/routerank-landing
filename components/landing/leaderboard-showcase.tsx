'use client';

import { motion } from 'framer-motion';
import { Trophy, TrendingUp } from 'lucide-react';

export function LeaderboardShowcase() {
  return (
    <section id="leaderboard" className="py-16 sm:py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4 sm:mb-6 border border-gray-200">
            <Trophy className="w-4 h-4" />
            Live Leaderboards
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-black mb-4 sm:mb-6">
            See where you rank
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Real-time rankings by packages, miles, stops, or routes
          </p>
        </motion.div>

        {/* Modern Leaderboard - Less Card, More Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg">
              Packages
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-300">
              Miles
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-300">
              Routes
            </button>
          </div>

          {/* Top 3 - Podium Style (More Visual) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
            {/* 2nd Place */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-4 sm:p-5 text-center order-1 border border-gray-200 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl mb-2">🥈</div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl sm:text-3xl shadow-sm">
                👨
              </div>
              <div className="font-bold text-sm sm:text-base text-black mb-1">Sarah C.</div>
              <div className="text-xs text-gray-500 mb-2">FedEx</div>
              <div className="text-xl sm:text-2xl font-bold text-black">4,200</div>
            </motion.div>

            {/* 1st Place - Elevated with gradient accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-2xl p-5 sm:p-6 text-center order-2 -mt-4 sm:-mt-6 shadow-2xl"
            >
              <div className="text-4xl sm:text-5xl mb-2">👑</div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl sm:text-4xl shadow-xl border-4 border-white">
                👨‍🦱
              </div>
              <div className="font-bold text-base sm:text-lg text-white mb-1">Marcus J.</div>
              <div className="text-xs text-white/90 mb-2">Amazon DSP</div>
              <div className="text-2xl sm:text-3xl font-bold text-white">5,847</div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="bg-white rounded-2xl p-4 sm:p-5 text-center order-3 border border-gray-200 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl mb-2">🥉</div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl sm:text-3xl shadow-sm">
                👩
              </div>
              <div className="font-bold text-sm sm:text-base text-black mb-1">Emily R.</div>
              <div className="text-xs text-gray-500 mb-2">UPS</div>
              <div className="text-xl sm:text-2xl font-bold text-black">3,891</div>
            </motion.div>
          </div>

          {/* Simple List - Natural Flow */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-5 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-black">Weekly Rankings</h3>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>500+ drivers</span>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                { rank: 4, name: 'Jake M.', company: 'Amazon Flex', packages: '3,245', badge: '⚡', trend: '+2' },
                { rank: 5, name: 'Alex P.', company: 'FedEx', packages: '3,102', badge: '💯', trend: '+1' },
                { rank: 6, name: 'Ryan T.', company: 'UPS', packages: '2,987', badge: '🔥', trend: '-1' },
                { rank: 42, name: 'You', company: 'Join to compete!', packages: '—', highlight: true },
              ].map((entry, i) => (
                <motion.div
                  key={entry.rank}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ backgroundColor: 'rgb(249 250 251)' }}
                  className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 transition-colors ${
                    entry.highlight ? 'bg-gradient-to-r from-purple-50 to-pink-50' : ''
                  }`}
                >
                  <div className={`w-10 sm:w-12 text-center font-bold text-base sm:text-lg ${
                    entry.highlight ? 'text-purple-700' : 'text-gray-400'
                  }`}>
                    #{entry.rank}
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg sm:text-xl shadow-sm flex-shrink-0">
                    {entry.badge || '🚗'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-bold text-sm sm:text-base mb-0.5 ${
                      entry.highlight ? 'text-purple-700' : 'text-black'
                    }`}>
                      {entry.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 truncate">{entry.company}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {entry.trend && (
                      <span className={`text-xs font-semibold ${
                        entry.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {entry.trend}
                      </span>
                    )}
                    <div className={`text-base sm:text-lg font-bold text-right ${
                      entry.highlight ? 'text-purple-700' : 'text-black'
                    }`}>
                      {entry.packages}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Your Stats - Gradient accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-xl"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="text-xs sm:text-sm text-white/80 mb-1">Your Current Rank</div>
                <div className="text-3xl sm:text-4xl font-bold">#42</div>
              </div>
              <div>
                <div className="text-xs sm:text-sm text-white/80 mb-1">This Week</div>
                <div className="text-2xl sm:text-3xl font-bold">1,247 packages</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

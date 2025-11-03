'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export function LeaderboardShowcase() {
  return (
    <section id="leaderboard" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-sm font-semibold mb-4 sm:mb-6 border border-orange-200">
            <Trophy className="w-4 h-4" />
            Live Leaderboards
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-black mb-4 sm:mb-6">
            See where you rank
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Real-time rankings by packages, miles, stops, or routes
          </p>
        </motion.div>

        {/* Compact Leaderboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-orange-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold">Weekly Leaderboard</h3>
              <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-xs sm:text-sm font-semibold hover:bg-white/30">
                Packages
              </button>
            </div>
          </div>

          {/* Compact Top 3 */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-orange-200">
            <div className="flex items-end justify-center gap-2 sm:gap-3">
              {/* 2nd */}
              <div className="text-center flex-1">
                <div className="text-xl sm:text-2xl mb-1">🥈</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full mx-auto mb-1 flex items-center justify-center text-lg sm:text-xl shadow-md">
                  👨
                </div>
                <div className="font-bold text-xs sm:text-sm text-black">Sarah C.</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mb-0.5">FedEx</div>
                <div className="text-base sm:text-lg font-bold text-black">4,200</div>
              </div>

              {/* 1st */}
              <div className="text-center flex-1">
                <div className="text-2xl sm:text-3xl mb-1">👑</div>
                <div className="text-xl sm:text-2xl mb-1">🥇</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-1 flex items-center justify-center text-xl sm:text-2xl shadow-xl border-2 sm:border-3 border-yellow-300">
                  👨‍🦱
                </div>
                <div className="font-bold text-sm sm:text-base text-black">Marcus J.</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mb-0.5">Amazon DSP</div>
                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5,847</div>
              </div>

              {/* 3rd */}
              <div className="text-center flex-1">
                <div className="text-xl sm:text-2xl mb-1">🥉</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-1 flex items-center justify-center text-lg sm:text-xl shadow-md">
                  👩
                </div>
                <div className="font-bold text-xs sm:text-sm text-black">Emily R.</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mb-0.5">UPS</div>
                <div className="text-base sm:text-lg font-bold text-black">3,891</div>
              </div>
            </div>
          </div>

          {/* Compact List - 3 entries */}
          <div className="p-4 sm:p-5 bg-white space-y-2">
            {[
              { rank: 4, name: 'Jake M.', company: 'Amazon Flex', packages: '3,245', badge: '⚡' },
              { rank: 5, name: 'Alex P.', company: 'FedEx', packages: '3,102', badge: '💯' },
              { rank: 6, name: 'You?', company: 'Join now!', packages: '—', highlight: true },
            ].map((entry, i) => (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  entry.highlight ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300' : 'hover:bg-gray-50'
                }`}
              >
                <div className="w-7 sm:w-8 text-gray-500 font-bold text-sm">#{entry.rank}</div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-base sm:text-lg shadow-sm">
                  {entry.badge || '🚗'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-bold text-sm sm:text-base ${entry.highlight ? 'text-purple-700' : 'text-black'} truncate`}>
                    {entry.name}
                  </div>
                  <div className="text-xs text-gray-600 truncate">{entry.company}</div>
                </div>
                <div className={`text-base sm:text-lg font-bold ${entry.highlight ? 'text-purple-700' : 'text-black'}`}>
                  {entry.packages}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Your Position - Compact */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] sm:text-xs text-white/80 mb-0.5">Your Rank</div>
                <div className="text-2xl sm:text-3xl font-bold">#42</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] sm:text-xs text-white/80 mb-0.5">This Week</div>
                <div className="text-lg sm:text-xl font-bold">1,247 packages</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

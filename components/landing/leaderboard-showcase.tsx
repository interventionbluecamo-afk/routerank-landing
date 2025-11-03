'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export function LeaderboardShowcase() {
  return (
    <section id="leaderboard" className="py-16 sm:py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-sm font-medium mb-4">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>Live Leaderboards</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 px-4">
            See Where You Rank
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Real-time rankings by packages, miles, stops, or routes
          </p>
        </motion.div>

        {/* Leaderboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-gray-900 border-2 border-gray-800 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold">Weekly Leaderboard</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-white/20 rounded-lg text-xs sm:text-sm font-medium">Packages</button>
                  <button className="px-3 py-1 bg-white/30 rounded-lg text-xs sm:text-sm font-medium">Miles</button>
                </div>
              </div>
              <p className="text-sm opacity-90">Updated in real-time</p>
            </div>

            {/* Top 3 Podium */}
            <div className="p-4 sm:p-6 bg-gradient-to-b from-yellow-900/30 to-orange-900/20">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                {/* 2nd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl mb-2">🥈</div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center text-xl sm:text-2xl">
                    👨
                  </div>
                  <div className="font-bold text-sm sm:text-base text-white">Sarah C.</div>
                  <div className="text-xs text-gray-400 mb-1">FedEx</div>
                  <div className="text-lg sm:text-xl font-bold text-white">4,200</div>
                  <div className="text-xs text-gray-400">packages</div>
                </motion.div>

                {/* 1st Place */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl mb-2">🥇</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl sm:text-3xl shadow-lg border-4 border-yellow-300">
                    👨‍🦱
                  </div>
                  <div className="font-bold text-base sm:text-lg text-white">Marcus J.</div>
                  <div className="text-xs text-gray-400 mb-1">Amazon DSP</div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">5,847</div>
                  <div className="text-xs text-gray-400">packages</div>
                  <div className="mt-2 text-xs font-semibold text-purple-400">🏆 Champion</div>
                </motion.div>

                {/* 3rd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl mb-2">🥉</div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-2 flex items-center justify-center text-xl sm:text-2xl">
                    👩
                  </div>
                  <div className="font-bold text-sm sm:text-base text-white">Emily R.</div>
                  <div className="text-xs text-gray-400 mb-1">UPS</div>
                  <div className="text-lg sm:text-xl font-bold text-white">3,891</div>
                  <div className="text-xs text-gray-400">packages</div>
                </motion.div>
              </div>
            </div>

            {/* Rest of Leaderboard */}
            <div className="p-4 sm:p-6 space-y-3 bg-gray-900">
              {[
                { rank: 4, name: 'Jake M.', company: 'Amazon Flex', packages: '3,245', badge: '⚡' },
                { rank: 5, name: 'Alex P.', company: 'FedEx', packages: '3,102', badge: '💯' },
                { rank: 6, name: 'Mike T.', company: 'UPS', packages: '2,987', badge: '🔥' },
                { rank: 7, name: 'You?', company: 'Join now!', packages: '—', highlight: true },
              ].map((entry, i) => (
                <motion.div
                  key={entry.rank}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`flex items-center gap-3 sm:gap-4 p-3 rounded-xl ${
                    entry.highlight ? 'bg-purple-900/30 border-2 border-purple-500/50' : 'bg-gray-800'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 sm:w-10 text-center">
                    <span className={`text-lg sm:text-xl font-bold ${entry.highlight ? 'text-purple-400' : 'text-gray-400'}`}>
                      #{entry.rank}
                    </span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                    {entry.badge || '🚗'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm sm:text-base truncate ${entry.highlight ? 'text-purple-400' : 'text-white'}`}>
                        {entry.name}
                      </span>
                      {entry.badge && <span className="text-lg">{entry.badge}</span>}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 truncate">{entry.company}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-lg sm:text-xl font-bold ${entry.highlight ? 'text-purple-400' : 'text-white'}`}>
                      {entry.packages}
                    </div>
                    <div className="text-xs text-gray-400">packages</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Your Position Card */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm opacity-90 mb-1">Your Rank</div>
                  <div className="text-3xl sm:text-4xl font-bold">#42</div>
                </div>
                <div className="text-right">
                  <div className="text-xs sm:text-sm opacity-90 mb-1">This Week</div>
                  <div className="text-xl sm:text-2xl font-bold">1,247 packages</div>
                  <div className="text-xs opacity-75 mt-1">+23 ranks ⬆️</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

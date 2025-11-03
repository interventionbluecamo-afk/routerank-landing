'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export function LeaderboardShowcase() {
  return (
    <section id="leaderboard" className="py-24 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-sm font-semibold mb-6 border border-orange-200">
            <Trophy className="w-4 h-4" />
            Live Leaderboards
          </div>
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-black mb-6">
            See where you rank
          </h2>
          <p className="text-xl text-gray-700">
            Real-time rankings by packages, miles, stops, or routes
          </p>
        </motion.div>

        {/* Clean Leaderboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl border-2 border-orange-200 overflow-hidden"
        >
          {/* Header - Rainbow Gradient */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Weekly Leaderboard</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-semibold hover:bg-white/30">
                  Packages
                </button>
              </div>
            </div>
          </div>

          {/* Top 3 - Horizontal, Clean */}
          <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-orange-200">
            <div className="flex items-end justify-center gap-4">
              {/* 2nd */}
              <div className="text-center flex-1">
                <div className="text-3xl mb-2">🥈</div>
                <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl shadow-lg">
                  👨
                </div>
                <div className="font-bold text-base text-black">Sarah C.</div>
                <div className="text-xs text-gray-600 mb-1">FedEx</div>
                <div className="text-xl font-bold text-black">4,200</div>
              </div>

              {/* 1st */}
              <div className="text-center flex-1">
                <div className="text-4xl mb-2">👑</div>
                <div className="text-3xl mb-2">🥇</div>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-3xl shadow-xl border-4 border-yellow-300">
                  👨‍🦱
                </div>
                <div className="font-bold text-lg text-black">Marcus J.</div>
                <div className="text-xs text-gray-600 mb-1">Amazon DSP</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5,847</div>
              </div>

              {/* 3rd */}
              <div className="text-center flex-1">
                <div className="text-3xl mb-2">🥉</div>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl shadow-lg">
                  👩
                </div>
                <div className="font-bold text-base text-black">Emily R.</div>
                <div className="text-xs text-gray-600 mb-1">UPS</div>
                <div className="text-xl font-bold text-black">3,891</div>
              </div>
            </div>
          </div>

          {/* Rest of List */}
          <div className="p-6 space-y-2 bg-white">
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
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  entry.highlight ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300' : 'hover:bg-gray-50'
                }`}
              >
                <div className="w-10 text-gray-500 font-bold">#{entry.rank}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl shadow-md">
                  {entry.badge || '🚗'}
                </div>
                <div className="flex-1">
                  <div className={`font-bold ${entry.highlight ? 'text-purple-700' : 'text-black'}`}>
                    {entry.name}
                  </div>
                  <div className="text-sm text-gray-600">{entry.company}</div>
                </div>
                <div className={`text-xl font-bold ${entry.highlight ? 'text-purple-700' : 'text-black'}`}>
                  {entry.packages}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Your Position - Rainbow Gradient */}
          <div className="p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-white/80 mb-1">Your Rank</div>
                <div className="text-4xl font-bold">#42</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/80 mb-1">This Week</div>
                <div className="text-2xl font-bold">1,247 packages</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

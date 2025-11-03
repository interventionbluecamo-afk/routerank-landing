'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export function LeaderboardShowcase() {
  return (
    <section id="leaderboard" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Live Leaderboards
          </div>
          <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-black mb-6">
            See where you rank
          </h2>
          <p className="text-xl text-gray-600">
            Real-time rankings by packages, miles, stops, or routes
          </p>
        </motion.div>

        {/* Clean Leaderboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-black text-white p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Weekly Leaderboard</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20">
                  Packages
                </button>
              </div>
            </div>
          </div>

          {/* Top 3 - Horizontal, Clean */}
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="flex items-end justify-center gap-4">
              {/* 2nd */}
              <div className="text-center flex-1">
                <div className="text-2xl mb-2">🥈</div>
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">
                  👨
                </div>
                <div className="font-semibold text-sm text-black">Sarah C.</div>
                <div className="text-xs text-gray-600 mb-1">FedEx</div>
                <div className="text-lg font-semibold text-black">4,200</div>
              </div>

              {/* 1st */}
              <div className="text-center flex-1">
                <div className="text-3xl mb-2">👑</div>
                <div className="text-2xl mb-2">🥇</div>
                <div className="w-14 h-14 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl border-2 border-blue-400">
                  👨‍🦱
                </div>
                <div className="font-semibold text-base text-black">Marcus J.</div>
                <div className="text-xs text-gray-600 mb-1">Amazon DSP</div>
                <div className="text-xl font-bold text-blue-600">5,847</div>
              </div>

              {/* 3rd */}
              <div className="text-center flex-1">
                <div className="text-2xl mb-2">🥉</div>
                <div className="w-12 h-12 bg-orange-300 rounded-full mx-auto mb-2 flex items-center justify-center text-xl">
                  👩
                </div>
                <div className="font-semibold text-sm text-black">Emily R.</div>
                <div className="text-xs text-gray-600 mb-1">UPS</div>
                <div className="text-lg font-semibold text-black">3,891</div>
              </div>
            </div>
          </div>

          {/* Rest of List */}
          <div className="p-6 space-y-2">
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
                className={`flex items-center gap-4 p-3 rounded-xl ${
                  entry.highlight ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                }`}
              >
                <div className="w-8 text-gray-400 font-medium">#{entry.rank}</div>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                  {entry.badge || '🚗'}
                </div>
                <div className="flex-1">
                  <div className={`font-semibold ${entry.highlight ? 'text-blue-600' : 'text-black'}`}>
                    {entry.name}
                  </div>
                  <div className="text-sm text-gray-600">{entry.company}</div>
                </div>
                <div className={`text-lg font-semibold ${entry.highlight ? 'text-blue-600' : 'text-black'}`}>
                  {entry.packages}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Your Position */}
          <div className="p-6 bg-black text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-white/60 mb-1">Your Rank</div>
                <div className="text-3xl font-bold">#42</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/60 mb-1">This Week</div>
                <div className="text-xl font-semibold">1,247 packages</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

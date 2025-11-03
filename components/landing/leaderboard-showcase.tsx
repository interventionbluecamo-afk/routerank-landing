'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, TrendingUp } from 'lucide-react';
import { useState } from 'react';

type Metric = 'packages' | 'miles' | 'routes';

interface LeaderboardEntry {
  rank: number;
  name: string;
  company: string;
  packages: string;
  miles: string;
  routes: string;
  badge?: string;
  trend?: string;
  highlight?: boolean;
}

interface Top3Entry {
  rank: number;
  name: string;
  company: string;
  packages: string;
  miles: string;
  routes: string;
  emoji: string;
  avatar: string;
}

const top3Data: Top3Entry[] = [
  {
    rank: 2,
    name: 'Sarah C.',
    company: 'FedEx',
    packages: '4,200',
    miles: '12,847',
    routes: '142',
    emoji: '🥈',
    avatar: '👨',
  },
  {
    rank: 1,
    name: 'Marcus J.',
    company: 'Amazon DSP',
    packages: '5,847',
    miles: '18,234',
    routes: '198',
    emoji: '👑',
    avatar: '👨‍🦱',
  },
  {
    rank: 3,
    name: 'Emily R.',
    company: 'UPS',
    packages: '3,891',
    miles: '11,502',
    routes: '128',
    emoji: '🥉',
    avatar: '👩',
  },
];

const listData: LeaderboardEntry[] = [
  { rank: 4, name: 'Jake M.', company: 'Amazon Flex', packages: '3,245', miles: '9,842', routes: '115', badge: '⚡', trend: '+2' },
  { rank: 5, name: 'Alex P.', company: 'FedEx', packages: '3,102', miles: '8,956', routes: '108', badge: '💯', trend: '+1' },
  { rank: 6, name: 'Ryan T.', company: 'UPS', packages: '2,987', miles: '8,234', routes: '102', badge: '🔥', trend: '-1' },
  { rank: 42, name: 'You', company: 'Join to compete!', packages: '—', miles: '—', routes: '—', highlight: true },
];

const getMetricValue = (entry: LeaderboardEntry | Top3Entry, metric: Metric): string => {
  switch (metric) {
    case 'packages':
      return entry.packages;
    case 'miles':
      return entry.miles;
    case 'routes':
      return entry.routes;
    default:
      return entry.packages;
  }
};

const getMetricLabel = (metric: Metric): string => {
  switch (metric) {
    case 'packages':
      return 'packages';
    case 'miles':
      return 'miles';
    case 'routes':
      return 'routes';
  }
};

export function LeaderboardShowcase() {
  const [selectedMetric, setSelectedMetric] = useState<Metric>('packages');
  const [yourStats, setYourStats] = useState({
    rank: 42,
    packages: '1,247',
    miles: '3,842',
    routes: '47',
  });

  const getYourStatValue = (metric: Metric): string => {
    switch (metric) {
      case 'packages':
        return `${yourStats.packages} packages`;
      case 'miles':
        return `${yourStats.miles} miles`;
      case 'routes':
        return `${yourStats.routes} routes`;
    }
  };

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

        {/* Modern Leaderboard - Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Filter Pills - Interactive */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {(['packages', 'miles', 'routes'] as Metric[]).map((metric) => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedMetric === metric
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-102'
                }`}
              >
                {metric.charAt(0).toUpperCase() + metric.slice(1)}
              </button>
            ))}
          </div>

          {/* Top 3 - Podium Style with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMetric}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-8"
            >
              {/* 2nd Place */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-4 sm:p-5 text-center order-1 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-2">{top3Data[0].emoji}</div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl sm:text-3xl shadow-sm">
                  {top3Data[0].avatar}
                </div>
                <div className="font-bold text-sm sm:text-base text-black mb-1">{top3Data[0].name}</div>
                <div className="text-xs text-gray-500 mb-2">{top3Data[0].company}</div>
                <motion.div
                  key={`top3-2-${selectedMetric}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-black"
                >
                  {getMetricValue(top3Data[0], selectedMetric)}
                </motion.div>
              </motion.div>

              {/* 1st Place - Elevated with gradient accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-2xl p-5 sm:p-6 text-center order-2 -mt-4 sm:-mt-6 shadow-2xl"
              >
                <div className="text-4xl sm:text-5xl mb-2">{top3Data[1].emoji}</div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl sm:text-4xl shadow-xl border-4 border-white">
                  {top3Data[1].avatar}
                </div>
                <div className="font-bold text-base sm:text-lg text-white mb-1">{top3Data[1].name}</div>
                <div className="text-xs text-white/90 mb-2">{top3Data[1].company}</div>
                <motion.div
                  key={`top3-1-${selectedMetric}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold text-white"
                >
                  {getMetricValue(top3Data[1], selectedMetric)}
                </motion.div>
              </motion.div>

              {/* 3rd Place */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl p-4 sm:p-5 text-center order-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-2">{top3Data[2].emoji}</div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl sm:text-3xl shadow-sm">
                  {top3Data[2].avatar}
                </div>
                <div className="font-bold text-sm sm:text-base text-black mb-1">{top3Data[2].name}</div>
                <div className="text-xs text-gray-500 mb-2">{top3Data[2].company}</div>
                <motion.div
                  key={`top3-3-${selectedMetric}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-black"
                >
                  {getMetricValue(top3Data[2], selectedMetric)}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Simple List - Natural Flow with Animation */}
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

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMetric}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="divide-y divide-gray-100"
              >
                {listData.map((entry, i) => (
                  <motion.div
                    key={`${entry.rank}-${selectedMetric}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
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
                      <motion.div
                        key={`value-${entry.rank}-${selectedMetric}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`text-base sm:text-lg font-bold text-right ${
                          entry.highlight ? 'text-purple-700' : 'text-black'
                        }`}
                      >
                        {entry.highlight ? '—' : getMetricValue(entry, selectedMetric)}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Your Stats - Gradient accent with Animation */}
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
                <div className="text-3xl sm:text-4xl font-bold">#{yourStats.rank}</div>
              </div>
              <div>
                <div className="text-xs sm:text-sm text-white/80 mb-1">This Week</div>
                <motion.div
                  key={`your-stat-${selectedMetric}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold"
                >
                  {getYourStatValue(selectedMetric)}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

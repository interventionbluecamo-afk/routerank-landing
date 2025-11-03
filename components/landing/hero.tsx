'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold border border-blue-200"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              Coming Soon
            </motion.div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-[1.1] text-black">
              Track your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                grind.
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
              The app that finally lets drivers compete, prove performance, and flex real stats.
            </p>

            <div className="flex justify-center pt-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-16 px-10 text-lg font-semibold shadow-lg active:scale-95 transition-transform">
                <a href="#waitlist">Join Waitlist</a>
              </Button>
            </div>

            {/* Fun Interactive Preview - Mobile Optimized */}
            <div className="pt-16 max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                {/* Animated Leaderboard Preview */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="font-bold text-lg text-black">Weekly Leaderboard</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-600">500+ drivers</div>
                  </div>
                  
                  {/* Top 3 Compact */}
                  <div className="flex items-center justify-center gap-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="text-center flex-1">
                      <div className="text-xl mb-1">🥈</div>
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full mx-auto mb-1 flex items-center justify-center text-lg">
                        👨
                      </div>
                      <div className="text-xs font-semibold text-black">Sarah</div>
                      <div className="text-xs text-gray-600">4,200</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-2xl mb-1">👑</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-1 flex items-center justify-center text-xl border-2 border-yellow-300">
                        👨‍🦱
                      </div>
                      <div className="text-sm font-bold text-black">Marcus</div>
                      <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5,847</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-xl mb-1">🥉</div>
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-1 flex items-center justify-center text-lg">
                        👩
                      </div>
                      <div className="text-xs font-semibold text-black">Emily</div>
                      <div className="text-xs text-gray-600">3,891</div>
                    </div>
                  </div>

                  {/* Badge Showcase */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600 text-sm font-medium">Recent badges:</span>
                    <div className="flex gap-2">
                      {['💯', '🏃', '⚡', '🔥'].map((emoji, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl shadow-md"
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Below Preview */}
              <div className="flex items-center justify-center gap-8 mt-8">
                <div>
                  <div className="text-2xl font-bold text-black">500+</div>
                  <div className="text-xs text-gray-600">On waitlist</div>
                </div>
                <div className="h-8 w-px bg-gray-300" />
                <div>
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-xs text-gray-600">Badges</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

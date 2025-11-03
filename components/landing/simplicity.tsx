'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Upload, MapPin, Zap } from 'lucide-react';

export function Simplicity() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 px-4">
            Not Another App to Manage
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Log routes in 30 seconds. Optional GPS tracking. That's it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Simple Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full border-2 border-gray-800 hover:border-purple-500 transition-all text-center p-6 sm:p-8 bg-gray-900">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Upload Stats</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                Snap route summary. Enter numbers. Done.
              </p>
              <div className="text-lg sm:text-xl font-bold text-purple-400">30 seconds</div>
            </Card>
          </motion.div>

          {/* Optional Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-gray-800 hover:border-green-500 transition-all text-center p-6 sm:p-8 bg-gray-900 relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xs font-semibold bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                OPTIONAL
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Optional GPS</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                Background location for route replay & hotspot maps. Your choice.
              </p>
              <div className="space-y-2 text-left text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Route replay animation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Hotspot heatmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Auto-verified mileage</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* That's It */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full border-2 border-gray-800 hover:border-orange-500 transition-all text-center p-6 sm:p-8 bg-gradient-to-br from-orange-900/30 to-red-900/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">That's It</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 font-medium">
                No setup. No check-ins. Just log routes when done.
              </p>
              <div className="text-lg sm:text-xl font-bold text-orange-400">
                Zero hassle
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="text-sm sm:text-base opacity-90 mb-2">❌ Other Apps</div>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>Complex setup</li>
                  <li>Daily check-ins</li>
                  <li>Too many notifications</li>
                  <li>Hard to use</li>
                </ul>
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold mb-2">✅ RouteRank</div>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>Log route → done</li>
                  <li>Optional GPS</li>
                  <li>Only important alerts</li>
                  <li>Dead simple</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

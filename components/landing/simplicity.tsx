'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Upload, MapPin, Smartphone } from 'lucide-react';

export function Simplicity() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            It's Not Another App to Manage
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            RouteRank is dead simple. Log your route stats in seconds, not minutes.
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
            <Card className="h-full border-2 hover:border-purple-500 transition-all text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Upload Route Stats</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Snap a photo of your route summary. Enter packages, miles, stops. Done in 30 seconds.
              </p>
              <div className="text-xs sm:text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                No complex forms
              </div>
            </Card>
          </motion.div>

          {/* Optional Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-2 hover:border-green-500 transition-all text-center p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                OPTIONAL
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Background GPS</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Want route replay and hotspot maps? Enable background location. Your choice, zero hassle.
              </p>
              <div className="space-y-2 text-left text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Route replay animation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Hotspot heatmap</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span>
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
            <Card className="h-full border-2 hover:border-orange-500 transition-all text-center p-6 sm:p-8 bg-gradient-to-br from-orange-50 to-yellow-50">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">That's It</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 font-medium">
                No complicated setup. No daily check-ins. Just log your routes when you finish. 
                Everything else happens automatically.
              </p>
              <div className="text-lg sm:text-xl font-bold text-orange-600">
                30 seconds per route
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
          className="mt-10 sm:mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="text-sm sm:text-base opacity-90 mb-2">❌ Other Apps</div>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>Complex onboarding</li>
                  <li>Daily check-ins required</li>
                  <li>Too many notifications</li>
                  <li>Hard to navigate</li>
                </ul>
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold mb-2">✅ RouteRank</div>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>Log route → done</li>
                  <li>Optional GPS tracking</li>
                  <li>Only important notifications</li>
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


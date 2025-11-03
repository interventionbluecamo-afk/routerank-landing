'use client';

import { motion } from 'framer-motion';
import { Upload, MapPin, Zap } from 'lucide-react';

export function Simplicity() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200">
            <Zap className="w-4 h-4" />
            Simple Setup
          </div>
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-black mb-6">
            Not another app to manage
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Log routes in 30 seconds. Optional GPS. Done.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Upload,
              title: 'Upload stats',
              description: 'Snap route summary. Enter numbers. Done.',
              highlight: '30 seconds',
              gradient: 'from-blue-500 to-cyan-500',
            },
            {
              icon: MapPin,
              title: 'Route replay',
              description: 'Life360-style playback with animated tracking. Optional.',
              highlight: 'Your choice',
              gradient: 'from-purple-500 to-pink-500',
              optional: true,
            },
            {
              icon: Zap,
              title: "That's it",
              description: 'No setup. No check-ins. Just log routes.',
              highlight: 'Zero hassle',
              gradient: 'from-orange-500 to-red-500',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white shadow-xl`}>
                  {item.optional && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                      OPTIONAL
                    </div>
                  )}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-lg font-bold text-white/90">{item.highlight}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison - Rainbow Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-sm">
            <div className="text-red-600 text-sm font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">❌</span>
              <span>Other apps</span>
            </div>
            <ul className="space-y-3 text-gray-900">
              {['Complex setup', 'Daily check-ins', 'Too many notifications', 'Hard to use'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-red-500">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative">
              <div className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>RouteRank</span>
              </div>
              <ul className="space-y-3 text-white">
                {['Log route → done', 'Route replay (optional)', 'Only important alerts', 'Dead simple'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-green-300">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

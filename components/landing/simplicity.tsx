'use client';

import { motion } from 'framer-motion';
import { Upload, MapPin, Zap } from 'lucide-react';

export function Simplicity() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-black mb-6">
            Not another app to manage
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            },
            {
              icon: MapPin,
              title: 'Route replay',
              description: 'Life360-style playback with animated tracking. Optional.',
              highlight: 'Your choice',
              optional: true,
            },
            {
              icon: Zap,
              title: "That's it",
              description: 'No setup. No check-ins. Just log routes.',
              highlight: 'Zero hassle',
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
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-6">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="text-lg font-medium text-black">{item.highlight}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-8 bg-gray-50 rounded-3xl">
            <div className="text-gray-600 text-sm font-medium mb-4">Other apps</div>
            <ul className="space-y-3 text-gray-900">
              {['Complex setup', 'Daily check-ins', 'Too many notifications', 'Hard to use'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-red-500">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-black text-white rounded-3xl">
            <div className="text-white/60 text-sm font-medium mb-4">RouteRank</div>
            <ul className="space-y-3 text-white">
              {['Log route → done', 'Route replay (optional)', 'Only important alerts', 'Dead simple'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

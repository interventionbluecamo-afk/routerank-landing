'use client';

import { motion } from 'framer-motion';
import { Upload, MapPin, Camera, CheckCircle, XCircle, Zap, TrendingUp, Award, Bell } from 'lucide-react';

const mvpFeatures = [
  {
    icon: Camera,
    title: 'Route logging',
    description: 'Snap route summary with camera. Enter packages, miles, stops. Verified instantly.',
    time: '30 seconds',
    painPoint: 'No more screenshots or manual tracking',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Leaderboards',
    description: 'Real-time rankings by packages, miles, stops. Filter daily, weekly, monthly.',
    painPoint: 'Finally prove you\'re top tier',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Badges & achievements',
    description: 'Unlock badges for milestones. Century Club, Speedster, Week Warrior, and more.',
    painPoint: 'Show your real achievements',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: MapPin,
    title: 'GPS tracking',
    description: 'Optional Life360-style route replay. Animated tracking, hotspot maps, auto-verified mileage.',
    painPoint: 'Stop guessing your stats',
    optional: true,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    description: 'Only important alerts: rank changes, badges earned, streak reminders.',
    painPoint: 'No notification spam',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

const painPoints = [
  { text: 'DSP apps don\'t track your real performance', solved: true },
  { text: 'No way to prove you\'re crushing it', solved: true },
  { text: 'Complex apps with daily check-ins required', solved: true },
  { text: 'Too many notifications, hard to navigate', solved: true },
];

export function Simplicity() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Log routes in 30 seconds. Optional GPS. Done.
          </p>
        </motion.div>

        {/* Pain Points Solved - Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900">Driver Pain Points</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-500 mt-0.5">×</span>
                  <span className="text-gray-800">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MVP Features Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-3xl font-bold text-black">MVP Features</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mvpFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 text-white shadow-xl h-full flex flex-col`}>
                    {feature.optional && (
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full border border-white/30">
                        OPTIONAL
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {feature.time && (
                        <div className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                          {feature.time}
                        </div>
                      )}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/90 text-sm mb-4 flex-grow">{feature.description}</p>
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle className="w-4 h-4" />
                        <span>{feature.painPoint}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Comparison - Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Other Apps */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900">Other Apps</h3>
            </div>
            <ul className="space-y-4">
              {['Complex onboarding process', 'Daily check-ins required', 'Too many notifications', 'Hard to navigate', 'No real performance tracking'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">×</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RouteRank */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <h3 className="text-2xl font-bold">RouteRank</h3>
              </div>
              <ul className="space-y-4">
                {['Log route → done (30 seconds)', 'Route replay (optional)', 'Only important alerts', 'Dead simple interface', 'Real verified stats'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-300 mt-1">✓</span>
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

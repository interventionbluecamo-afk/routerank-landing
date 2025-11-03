'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Camera, TrendingUp, Award } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Problem - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Driver Pain Points</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                'DSP apps don\'t track real performance',
                'No way to prove you\'re crushing it',
                'Complex apps, daily check-ins required',
                'Too many notifications, hard to use',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <span className="text-red-500 mt-0.5 text-sm sm:text-base">×</span>
                  <span className="text-sm sm:text-base text-gray-800">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Solution - Key 3 Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-black">RouteRank Solves This</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Camera,
                title: '30-second logging',
                desc: 'Snap route. Enter numbers. Done.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: TrendingUp,
                title: 'Real rankings',
                desc: 'See where you rank. Prove you\'re top tier.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Award,
                title: 'Unlock badges',
                desc: 'Earn achievements. Show them off.',
                gradient: 'from-yellow-500 to-orange-500',
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl h-full`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm sm:text-base text-white/90">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


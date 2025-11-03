'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus J.',
    company: 'Amazon DSP',
    quote: 'Finally, a way to prove I\'m one of the best. Climbed from Rookie to Pro in 2 months!',
    avatar: '👨‍🦱',
    badge: '🏆 Champion',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Sarah C.',
    company: 'FedEx',
    quote: 'Love the competitive aspect. My streak is at 23 days. The badges are addictive!',
    avatar: '👩',
    badge: '💯 Century Club',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-4 sm:mb-6 border border-gray-200">
            <Quote className="w-4 h-4" />
            Driver Stories
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-black mb-4 sm:mb-6">
            What drivers say
          </h2>
        </motion.div>

        {/* Compact - 2 columns on mobile, 2 on desktop */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl sm:rounded-3xl p-6 text-white shadow-xl h-full`}>
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 mb-4 opacity-80" />
                <p className="text-white mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm sm:text-base truncate">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm opacity-80 truncate">{testimonial.company}</div>
                    <div className="text-xs opacity-70 mt-0.5">{testimonial.badge}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus J.',
    company: 'Amazon DSP',
    location: 'Atlanta',
    quote: 'Finally, a way to prove I\'m one of the best. Climbed from Rookie to Pro in 2 months!',
    avatar: '👨‍🦱',
    badge: '🏆 Champion',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Sarah C.',
    company: 'FedEx',
    location: 'Phoenix',
    quote: 'Love the competitive aspect. My streak is at 23 days. The badges are addictive!',
    avatar: '👩',
    badge: '💯 Century Club',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Jake M.',
    company: 'UPS',
    location: 'Chicago',
    quote: 'Efficiency score helped me optimize routes big time. Seeing my rank climb keeps me motivated.',
    avatar: '👨',
    badge: '⚡ Speedster',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Emily R.',
    company: 'Amazon DSP',
    location: 'LA',
    quote: 'GPS tracking is a game changer. No more guessing miles. Plus, showing off badges is so satisfying.',
    avatar: '👩‍🦰',
    badge: '🔥 Week Warrior',
    gradient: 'from-red-500 to-pink-500',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-black mb-6">
            What drivers say
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join drivers already flexing their stats.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-6 text-white shadow-xl h-full`}>
                <Quote className="w-6 h-6 mb-4 opacity-80" />
                <p className="text-white mb-6 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold truncate">{testimonial.name}</div>
                    <div className="text-sm opacity-80 truncate">{testimonial.company}</div>
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

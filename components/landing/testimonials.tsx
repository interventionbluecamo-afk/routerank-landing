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
  },
  {
    name: 'Sarah C.',
    company: 'FedEx',
    location: 'Phoenix',
    quote: 'Love the competitive aspect. My streak is at 23 days. The badges are addictive!',
    avatar: '👩',
    badge: '💯 Century Club',
  },
  {
    name: 'Jake M.',
    company: 'UPS',
    location: 'Chicago',
    quote: 'Efficiency score helped me optimize routes big time. Seeing my rank climb keeps me motivated.',
    avatar: '👨',
    badge: '⚡ Speedster',
  },
  {
    name: 'Emily R.',
    company: 'Amazon DSP',
    location: 'LA',
    quote: 'GPS tracking is a game changer. No more guessing miles. Plus, showing off badges is so satisfying.',
    avatar: '👩‍🦰',
    badge: '🔥 Week Warrior',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-black mb-6">
            What drivers say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            >
              <div className="h-full p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <Quote className="w-6 h-6 text-gray-400 mb-4" />
                <p className="text-gray-900 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-black truncate">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 truncate">{testimonial.company}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{testimonial.badge}</div>
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

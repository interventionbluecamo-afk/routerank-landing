'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
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
    <section className="py-16 sm:py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 px-4">
            What Drivers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Join drivers already flexing their stats.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-gray-800 bg-gray-900 hover:border-gray-700 transition-all">
                <div className="flex flex-col h-full p-5 sm:p-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm sm:text-base truncate">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-400 truncate">{testimonial.company}</div>
                      <div className="text-xs text-gray-500 truncate">{testimonial.location}</div>
                      <div className="mt-1 text-xs font-semibold text-purple-400">{testimonial.badge}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

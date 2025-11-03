'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus J.',
    company: 'Amazon DSP',
    location: 'Atlanta, GA',
    quote: 'Finally, a way to prove I\'m one of the best. My DSP never tracks my real stats, but RouteRank does. Climbed from Rookie to Pro in 2 months!',
    avatar: '👨‍🦱',
    badge: '🏆 Champion',
  },
  {
    name: 'Sarah C.',
    company: 'FedEx',
    location: 'Phoenix, AZ',
    quote: 'Love the competitive aspect. My streak is at 23 days and I\'m not stopping. The badges are addictive - especially Century Club!',
    avatar: '👩',
    badge: '💯 Century Club',
  },
  {
    name: 'Jake M.',
    company: 'UPS',
    location: 'Chicago, IL',
    quote: 'The efficiency score helped me optimize my routes big time. Seeing my rank climb every week keeps me motivated. This is what we needed.',
    avatar: '👨',
    badge: '⚡ Speedster',
  },
  {
    name: 'Emily R.',
    company: 'Amazon DSP',
    location: 'Los Angeles, CA',
    quote: 'The GPS tracking is a game changer. No more guessing my miles. Plus, showing off my badges to other drivers is so satisfying.',
    avatar: '👩‍🦰',
    badge: '🔥 Week Warrior',
  },
];

export function Testimonials() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            What Drivers Are Saying
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Join drivers who are already flexing their stats and climbing the ranks.
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
              <Card hover className="h-full border-2">
                <div className="flex flex-col h-full p-5 sm:p-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-black text-sm sm:text-base truncate">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">{testimonial.company}</div>
                      <div className="text-xs text-gray-500 truncate">{testimonial.location}</div>
                      <div className="mt-1 text-xs font-semibold text-purple-600">{testimonial.badge}</div>
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

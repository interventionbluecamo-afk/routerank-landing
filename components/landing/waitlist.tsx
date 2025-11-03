'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('You\'re on the list! We\'ll notify you when we launch.');
      setEmail('');
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-16 sm:py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-sm font-medium text-yellow-300 mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join the Waitlist</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight px-4">
            Be First to Flex
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Get notified when RouteRank launches. Early members get exclusive badges and first access to leaderboards.
          </p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto px-4"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 h-12 sm:h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 focus:border-white"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-12 sm:h-14 bg-white text-black hover:bg-gray-100 w-full sm:w-auto px-8 font-bold"
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-green-500/20 border border-green-500/30 rounded-xl p-6 max-w-md mx-auto"
            >
              <Check className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="font-bold text-lg">You're in! 🎉</div>
                <div className="text-sm text-gray-300">Check your email for confirmation</div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-400 pt-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Launch day access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


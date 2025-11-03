'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import toast from 'react-hot-toast';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('You\'re on the list!');
      setEmail('');
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-black">
            Be first to flex
          </h2>
          <p className="text-xl text-gray-700">
            Get notified when RouteRank launches. Early access, exclusive badges.
          </p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-16 bg-white border-2 border-gray-300 text-base focus:border-purple-500"
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-10 font-semibold shadow-lg"
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-green-50 border-2 border-green-200 rounded-2xl p-6 max-w-md mx-auto"
            >
              <Check className="w-5 h-5 text-green-600" />
              <div className="text-left">
                <div className="font-semibold text-black">You're in!</div>
                <div className="text-sm text-gray-600">Check your email for confirmation</div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 pt-6">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>No credit card</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

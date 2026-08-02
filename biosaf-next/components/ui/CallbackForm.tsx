'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CallbackFormProps {
  options?: { value: string; label: string }[];
  title?: string;
}

export default function CallbackForm({
  options = [
    { value: 'pest', label: 'Pest Management & Fumigation' },
    { value: 'iso', label: 'ISO Certification Consultation' },
    { value: 'food-safety', label: 'Food Safety System Development' },
    { value: 'lab', label: 'Laboratory Equipment Sales' },
  ],
  title = 'Request Technical Callback',
}: CallbackFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);
    setToast(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          subject: `Callback Request: ${form.service}`,
          message: form.message || `Service interest: ${form.service}`,
        }),
      });
      if (res.ok) {
        setToast({ type: 'success', message: 'Request submitted! Our team will call you shortly.' });
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        const err = await res.json();
        setToast({ type: 'error', message: err.error || 'Failed to submit. Please try again.' });
      }
    } catch {
      setToast({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h3 className="text-white text-xl font-bold mb-6">{title}</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          { label: 'Company / Full Name', name: 'name', type: 'text', placeholder: 'Your Enterprise Ltd.', required: true },
          { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@company.com', required: true },
          { label: 'Active Contact Number', name: 'phone', type: 'tel', placeholder: '+92 342 0000000', required: false },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-xs font-semibold text-gray-300 mb-1">{field.label}</label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type={field.type}
              name={field.name}
              value={(form as Record<string, string>)[field.name]}
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
              placeholder={field.placeholder}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm transition-all"
              required={field.required}
            />
          </div>
        ))}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Required System Area</label>
          <select
            name="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm transition-all"
          >
            <option value="">Select a service...</option>
            {options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Your Message (Optional)</label>
          <textarea
            name="message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your requirements..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm resize-none transition-all"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={submitting}
          className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-6 py-3 rounded-full font-bold transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting && (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full"
            />
          )}
          {submitting ? 'Sending...' : 'Submit Request'}
          {!submitting && (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </motion.button>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-xl text-xs font-bold text-center ${
              toast.type === 'success'
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                : 'bg-red-950/80 text-red-400 border border-red-500/30'
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </form>
    </div>
  );
}

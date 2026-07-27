'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { buttonTap } from '@/lib/motion';
import { Save, CheckCircle } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'BIOSAF Enterprises',
    siteEmail: 'info@biosafenterprises.com',
    sitePhone: '+92 342 2766482',
    address: 'BIOSAF Corporate Complex, Office #4, Main Commercial Boulevard, Karachi, Sindh, Pakistan',
    emergencyPhone: '+92 302 1266345',
    heroTitle: 'Delivering Safe Environments & Scientific Quality Systems',
  });
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    try {
      const res = await fetch('/api/admin/settings');
      if (res.ok) {
        const data = await res.json();
        if (Object.keys(data).length > 0) {
          setSettings((prev) => ({ ...prev, ...data }));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
          <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-2" />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xs border border-gray-200 dark:border-gray-800 space-y-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Site & System Settings</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Configure global metadata, contact desk numbers, and corporate branding</p>
        </div>
        {saved && (
          <motion.div
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="w-4 h-4" /> Saved Successfully!
          </motion.div>
        )}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xs border border-gray-200 dark:border-gray-800 space-y-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2">
            General Branding
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Site Name</label>
              <motion.input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Hero Title Tagline</label>
              <motion.input
                type="text"
                value={settings.heroTitle}
                onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2">
            Contact & Operations Desk
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Corporate Email</label>
              <motion.input
                type="email"
                value={settings.siteEmail}
                onChange={(e) => setSettings({ ...settings, siteEmail: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Primary Phone Desk</label>
              <motion.input
                type="text"
                value={settings.sitePhone}
                onChange={(e) => setSettings({ ...settings, sitePhone: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">24/7 Emergency Dispatch Line</label>
              <motion.input
                type="text"
                value={settings.emergencyPhone}
                onChange={(e) => setSettings({ ...settings, emergencyPhone: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Headquarters Address</label>
              <motion.input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                whileFocus={{ scale: 1.01 }}
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
          <motion.button
            type="submit"
            disabled={submitting}
            className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-xs text-sm"
            {...buttonTap}
          >
            {submitting ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
            Save Configuration
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}

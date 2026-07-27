'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonTap, modalOverlay, modalContent } from '@/lib/motion';
import { Plus, Edit, Trash2, HelpCircle } from 'lucide-react';

interface Faq {
  id: number;
  question: string;
  answer: string;
  status: 'active' | 'inactive';
  sortOrder: number;
}

export default function FaqsPage() {
  const [items, setItems] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<Faq | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    status: 'active' as 'active' | 'inactive',
    sortOrder: 0,
  });

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const res = await fetch('/api/admin/faqs');
      if (res.ok) setItems(await res.json());
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
      const url = editingItem ? `/api/admin/faqs/${editingItem.id}` : '/api/admin/faqs';
      const method = editingItem ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setShowModal(false);
      setEditingItem(null);
      fetchItems();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/admin/faqs/${id}`, { method: 'DELETE' });
    fetchItems();
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-2" />
          </div>
          <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
              <tr>
                {[...Array(4)].map((_, i) => (
                  <th key={i} className="px-6 py-3.5">
                    <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {[...Array(5)].map((_, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                >
                  {[...Array(4)].map((_, j) => (
                    <td key={j} className="px-6 py-4">
                      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">FAQs Knowledge Base</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage frequently asked questions & client answers</p>
        </div>
        <motion.button
          onClick={() => {
            setFormData({ question: '', answer: '', status: 'active', sortOrder: 0 });
            setEditingItem(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-xs text-sm"
          {...buttonTap}
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </motion.button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
            <tr>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Question</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {items.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                whileHover={{ y: -1 }}
                className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40"
              >
                <td className="px-6 py-4 font-semibold text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-primary" />
                    {item.question}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">General</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                    item.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <motion.button onClick={() => {
                      setEditingItem(item);
                      setFormData({
                        question: item.question,
                        answer: item.answer,
                        status: item.status,
                        sortOrder: item.sortOrder,
                      });
                      setShowModal(true);
                    }} className="p-1.5 text-brand-primary dark:text-brand-accent"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button onClick={() => handleDelete(item.id)} className="p-1.5 text-red-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
              {items.length === 0 && (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400 text-sm">No FAQs found. Click "Add FAQ" to create one.</td>
                </motion.tr>
              )}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onKeyDown={(e) => e.key === 'Escape' && setShowModal(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-gray-200 dark:border-gray-800"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{editingItem ? 'Edit FAQ' : 'Add FAQ'}</h2>
                <motion.button type="button" onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                ><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></motion.button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Question</label>
                  <motion.input
                    type="text"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Answer</label>
                  <motion.textarea
                    value={formData.answer}
                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                    rows={3}
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <motion.button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-xl text-sm font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >Cancel</motion.button>
                  <motion.button type="submit" disabled={submitting} className="px-4 py-2 bg-brand-primary text-white rounded-xl text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2" {...buttonTap}>{submitting && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}{editingItem ? 'Save' : 'Create'}</motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

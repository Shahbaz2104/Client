'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, HelpCircle } from 'lucide-react';

interface Faq {
  id: number;
  question: string;
  answer: string;
  category: string | null;
  status: 'active' | 'inactive';
  sortOrder: number;
}

export default function FaqsPage() {
  const [items, setItems] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<Faq | null>(null);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: '',
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
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/admin/faqs/${id}`, { method: 'DELETE' });
    fetchItems();
  }

  if (loading) return <div className="p-8 text-gray-500 font-semibold">Loading FAQs...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">FAQs Knowledge Base</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage frequently asked questions & client answers</p>
        </div>
        <button
          onClick={() => {
            setFormData({ question: '', answer: '', category: '', status: 'active', sortOrder: 0 });
            setEditingItem(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-xs text-sm"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </button>
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
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
                <td className="px-6 py-4 font-semibold text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-primary" />
                    {item.question}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.category || 'General'}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                    item.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => {
                      setEditingItem(item);
                      setFormData({
                        question: item.question,
                        answer: item.answer,
                        category: item.category || '',
                        status: item.status,
                        sortOrder: item.sortOrder,
                      });
                      setShowModal(true);
                    }} className="p-1.5 text-brand-primary dark:text-brand-accent">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="p-1.5 text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4">{editingItem ? 'Edit FAQ' : 'Add FAQ'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Question</label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Answer</label>
                <textarea
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                  placeholder="e.g. Pest Control, Food Safety"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-xl text-sm font-medium">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-brand-primary text-white rounded-xl text-sm font-semibold">{editingItem ? 'Save' : 'Create'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

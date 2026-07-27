'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonTap, modalOverlay, modalContent, cardHover } from '@/lib/motion';
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string | null;
  status: 'active' | 'inactive';
  sortOrder: number;
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    category: '',
    status: 'active' as 'active' | 'inactive',
    sortOrder: 0,
  });

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const res = await fetch('/api/admin/gallery');
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
      const url = editingItem ? `/api/admin/gallery/${editingItem.id}` : '/api/admin/gallery';
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
    await fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' });
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.02 }}
            >
              <div className="h-40 bg-gray-100 dark:bg-gray-800 animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Media Gallery</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage field operations & facility showcase imagery</p>
        </div>
        <motion.button
          onClick={() => {
            setFormData({ title: '', image: '', category: '', status: 'active', sortOrder: 0 });
            setEditingItem(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-xs text-sm"
          {...buttonTap}
        >
          <Plus className="w-4 h-4" />
          Add Media
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-xs flex flex-col justify-between"
            {...cardHover}
          >
            <div className="h-40 bg-gray-100 dark:bg-gray-800 relative flex items-center justify-center overflow-hidden">
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <ImageIcon className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.category || 'General'}</p>
              </div>
              <div className="flex items-center gap-1">
                <motion.button onClick={() => {
                  setEditingItem(item);
                  setFormData({
                    title: item.title,
                    image: item.image,
                    category: item.category || '',
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
            </div>
          </motion.div>
        ))}
        {items.length === 0 && (
          <motion.div
            className="col-span-full flex flex-col items-center justify-center py-16 text-gray-400 dark:text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <ImageIcon className="w-10 h-10 mb-3 opacity-50" />
            <p className="text-sm font-medium">No media items found</p>
            <p className="text-xs mt-1">Click "Add Media" to upload imagery</p>
          </motion.div>
        )}
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
                <h2 className="text-xl font-bold">{editingItem ? 'Edit Media' : 'Add Media'}</h2>
                <motion.button type="button" onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                ><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></motion.button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Title</label>
                  <motion.input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Image URL</label>
                  <motion.input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                    placeholder="https://images.unsplash.com/..."
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Category</label>
                  <motion.input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                    placeholder="e.g. Lab Equipment, Field Work"
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

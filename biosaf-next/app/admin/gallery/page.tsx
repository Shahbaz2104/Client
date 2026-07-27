'use client';

import { useState, useEffect } from 'react';
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
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' });
    fetchItems();
  }

  if (loading) return <div className="p-8 text-gray-500 font-semibold">Loading gallery...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Media Gallery</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage field operations & facility showcase imagery</p>
        </div>
        <button
          onClick={() => {
            setFormData({ title: '', image: '', category: '', status: 'active', sortOrder: 0 });
            setEditingItem(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-xs text-sm"
        >
          <Plus className="w-4 h-4" />
          Add Media
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-xs flex flex-col justify-between">
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
                <button onClick={() => {
                  setEditingItem(item);
                  setFormData({
                    title: item.title,
                    image: item.image,
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
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4">{editingItem ? 'Edit Media' : 'Add Media'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm"
                  placeholder="https://images.unsplash.com/..."
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
                  placeholder="e.g. Lab Equipment, Field Work"
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

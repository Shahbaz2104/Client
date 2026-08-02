'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonTap, modalOverlay, modalContent, cardHover } from '@/lib/motion';
import { Plus, Edit, Trash2, FolderOpen, Star, StarOff } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  slug: string;
  clientName: string;
  location: string | null;
  industry: string | null;
  serviceType: string | null;
  description: string | null;
  challenge: string | null;
  solution: string | null;
  outcome: string | null;
  completionDate: string | null;
  image: string | null;
  invoiceFile: string | null;
  certificateFile: string | null;
  status: 'draft' | 'published';
  isFeatured: boolean;
}

const emptyForm = {
  title: '',
  clientName: '',
  location: '',
  industry: '',
  serviceType: '',
  description: '',
  challenge: '',
  solution: '',
  outcome: '',
  completionDate: '',
  image: '',
  invoiceFile: '',
  certificateFile: '',
  status: 'draft' as 'draft' | 'published',
  isFeatured: false,
};

export default function ProjectsPage() {
  const [items, setItems] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<ProjectItem | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const res = await fetch('/api/admin/projects');
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
      const url = editingItem ? `/api/admin/projects/${editingItem.id}` : '/api/admin/projects';
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
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
    fetchItems();
  }

  async function toggleFeatured(item: ProjectItem) {
    await fetch(`/api/admin/projects/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFeatured: !item.isFeatured }),
    });
    fetchItems();
  }

  function openCreate() {
    setFormData(emptyForm);
    setEditingItem(null);
    setShowModal(true);
  }

  function openEdit(item: ProjectItem) {
    setEditingItem(item);
    setFormData({
      title: item.title,
      clientName: item.clientName,
      location: item.location || '',
      industry: item.industry || '',
      serviceType: item.serviceType || '',
      description: item.description || '',
      challenge: item.challenge || '',
      solution: item.solution || '',
      outcome: item.outcome || '',
      completionDate: item.completionDate ? item.completionDate.slice(0, 10) : '',
      image: item.image || '',
      invoiceFile: item.invoiceFile || '',
      certificateFile: item.certificateFile || '',
      status: item.status,
      isFeatured: item.isFeatured,
    });
    setShowModal(true);
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

  const inputCls = "w-full p-2.5 border rounded-xl dark:bg-gray-800 text-sm";
  const field = (label: string, key: keyof typeof formData, type = 'text', placeholder?: string, required = false) => (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <motion.input
        type={type}
        value={String(formData[key])}
        onChange={(e) => setFormData({ ...formData, [key]: type === 'number' ? e.target.value : e.target.value })}
        className={inputCls}
        placeholder={placeholder}
        required={required}
        whileFocus={{ scale: 1.01 }}
      />
    </div>
  );
  const textarea = (label: string, key: keyof typeof formData, rows = 3) => (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <textarea
        value={String(formData[key])}
        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
        className={`${inputCls} resize-none`}
        rows={rows}
      />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Projects &amp; Case Studies</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage client projects featured on the public case studies page</p>
        </div>
        <motion.button
          onClick={openCreate}
          className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-xs text-sm"
          {...buttonTap}
        >
          <Plus className="w-4 h-4" />
          Add Project
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
                <FolderOpen className="w-8 h-8 text-gray-400" />
              )}
              <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${item.status === 'published' ? 'bg-emerald-500 text-white' : 'bg-gray-500 text-white'}`}>
                {item.status}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{item.clientName}</p>
              {item.industry && <p className="text-xs text-gray-400 mt-0.5">{item.industry}</p>}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <motion.button
                    onClick={() => toggleFeatured(item)}
                    title={item.isFeatured ? 'Featured on homepage' : 'Mark as featured'}
                    className={`p-1.5 ${item.isFeatured ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.isFeatured ? <Star className="w-4 h-4 fill-current" /> : <StarOff className="w-4 h-4" />}
                  </motion.button>
                  <motion.button
                    onClick={() => openEdit(item)}
                    className="p-1.5 text-brand-primary dark:text-brand-accent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 text-red-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
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
            <FolderOpen className="w-10 h-10 mb-3 opacity-50" />
            <p className="text-sm font-medium">No projects found</p>
            <p className="text-xs mt-1">Click &quot;Add Project&quot; to create your first case study</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onKeyDown={(e) => e.key === 'Escape' && setShowModal(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-2xl w-full border border-gray-200 dark:border-gray-800 my-8"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{editingItem ? 'Edit Project' : 'Add Project'}</h2>
                <motion.button type="button" onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                ><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></motion.button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {field('Project Title', 'title', 'text', 'e.g. Subway Dolmen Mall Pest Management', true)}
                  {field('Client Name', 'clientName', 'text', 'e.g. SUBWAY', true)}
                  {field('Location', 'location', 'text', 'e.g. Dolmen Mall Clifton, Karachi')}
                  {field('Industry', 'industry', 'text', 'e.g. Food & Beverage')}
                  {field('Service Type', 'serviceType', 'text', 'e.g. Fumigation & Rodent Control')}
                  {field('Completion Date', 'completionDate', 'date')}
                </div>
                {textarea('Description', 'description', 3)}
                {textarea('Challenge', 'challenge', 3)}
                {textarea('Solution', 'solution', 3)}
                {textarea('Outcome', 'outcome', 3)}
                <div className="grid sm:grid-cols-2 gap-4">
                  {field('Cover Image URL', 'image', 'text', 'https://images.unsplash.com/...')}
                  {field('Invoice File URL', 'invoiceFile', 'text', 'https://... (optional)')}
                  {field('Certificate File URL', 'certificateFile', 'text', 'https://... (optional)')}
                  <div>
                    <label className="block text-sm font-semibold mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                      className={inputCls}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
                <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    className="rounded text-brand-secondary"
                  />
                  Feature on homepage
                </label>
                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  {...buttonTap}
                >
                  {submitting ? 'Saving...' : editingItem ? 'Update Project' : 'Create Project'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

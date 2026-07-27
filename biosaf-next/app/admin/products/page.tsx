'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonTap, modalOverlay, modalContent } from '@/lib/motion';
import { Plus, Edit, Trash2, Package } from 'lucide-react';

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  categoryId: number | null;
  category?: Category | null;
  shortDescription: string | null;
  description: string | null;
  isFeatured: boolean;
  status: 'active' | 'inactive';
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    categoryId: '' as string | number,
    shortDescription: '',
    description: '',
    isFeatured: false,
    status: 'active' as 'active' | 'inactive',
  });

  useEffect(() => {
    fetchProductsAndCategories();
  }, []);

  async function fetchProductsAndCategories() {
    try {
      const [resProducts, resCategories] = await Promise.all([
        fetch('/api/admin/products'),
        fetch('/api/admin/categories'),
      ]);
      if (resProducts.ok) setProducts(await resProducts.json());
      if (resCategories.ok) setCategories(await resCategories.json());
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        ...formData,
        categoryId: formData.categoryId ? Number(formData.categoryId) : null,
      };

      const url = editingProduct ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';
      const method = editingProduct ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setShowModal(false);
      setEditingProduct(null);
      resetForm();
      fetchProductsAndCategories();
    } catch (err) {
      console.error('Error saving product:', err);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      fetchProductsAndCategories();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  }

  function handleEdit(product: Product) {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      slug: product.slug,
      categoryId: product.categoryId || '',
      shortDescription: product.shortDescription || '',
      description: product.description || '',
      isFeatured: product.isFeatured,
      status: product.status,
    });
    setShowModal(true);
  }

  function resetForm() {
    setFormData({
      name: '',
      slug: '',
      categoryId: '',
      shortDescription: '',
      description: '',
      isFeatured: false,
      status: 'active',
    });
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
                {[...Array(5)].map((_, i) => (
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
                  {[...Array(5)].map((_, j) => (
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Products & Equipment</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage laboratory apparatus and scientific items catalog</p>
        </div>
        <motion.button
          onClick={() => {
            resetForm();
            setEditingProduct(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-xs text-sm"
          {...buttonTap}
        >
          <Plus className="w-4 h-4" />
          Add Product
        </motion.button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Featured
                </th>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {products.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  whileHover={{ y: -1 }}
                  className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{product.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{product.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {product.category?.name || '—'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {product.isFeatured ? (
                      <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                        Featured
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'active'
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                        : 'bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <motion.button
                        onClick={() => handleEdit(product)}
                        className="p-1.5 rounded-lg text-brand-primary dark:text-brand-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleDelete(product.id)}
                        className="p-1.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
              {products.length === 0 && (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400 text-sm">No products found. Click "Add Product" to create one.</td>
                </motion.tr>
              )}
            </tbody>
          </table>
        </div>
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {editingProduct ? 'Edit Product' : 'Add Product'}
                </h2>
                <motion.button onClick={() => setShowModal(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 p-1.5 rounded-lg" whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>✕</motion.button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Product Name</label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">URL Slug</label>
                  <motion.input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Category</label>
                  <motion.select
                    value={formData.categoryId}
                    onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <option value="">Select Category (Optional)</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </motion.select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Short Description</label>
                  <motion.input
                    type="text"
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Description</label>
                  <motion.textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                      className="w-4 h-4 text-brand-primary rounded focus:ring-brand-primary"
                    />
                    Featured Product
                  </label>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Status:</span>
                    <motion.select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                      className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                      whileFocus={{ scale: 1.01 }}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </motion.select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <motion.button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="px-4 py-2 bg-brand-primary dark:bg-brand-accent text-white dark:text-gray-950 rounded-xl hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-sm flex items-center gap-2"
                    {...buttonTap}
                  >
                    {submitting && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                    {editingProduct ? 'Update' : 'Create'}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

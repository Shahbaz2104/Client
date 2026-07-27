'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonTap, modalOverlay, modalContent } from '@/lib/motion';
import { Plus, Edit, Trash2, Shield, Mail } from 'lucide-react';

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'super_admin';
  status: 'active' | 'inactive';
  createdAt: string;
}

export default function AdminsPage() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<AdminUser | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin' as 'admin' | 'super_admin',
    status: 'active' as 'active' | 'inactive',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchAdmins();
  }, []);

  async function fetchAdmins() {
    try {
      const res = await fetch('/api/admin/admins');
      if (res.ok) {
        const data = await res.json();
        setAdmins(data);
      }
    } catch (err) {
      console.error('Error fetching admins:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);
    try {
      const url = editingAdmin ? `/api/admin/admins/${editingAdmin.id}` : '/api/admin/admins';
      const method = editingAdmin ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to save admin');
      }

      setShowModal(false);
      setEditingAdmin(null);
      resetForm();
      fetchAdmins();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error saving admin');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure you want to remove this admin account?')) return;
    try {
      const res = await fetch(`/api/admin/admins/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || 'Failed to delete');
        return;
      }
      fetchAdmins();
    } catch (err) {
      console.error('Error deleting admin:', err);
    }
  }

  function handleEdit(admin: AdminUser) {
    setEditingAdmin(admin);
    setFormData({
      name: admin.name,
      email: admin.email,
      password: '',
      role: admin.role,
      status: admin.status,
    });
    setErrorMsg('');
    setShowModal(true);
  }

  function resetForm() {
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'admin',
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Admins & Staff</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage administrator accounts and permissions</p>
        </div>
        <motion.button
          onClick={() => {
            resetForm();
            setEditingAdmin(null);
            setErrorMsg('');
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-xs text-sm"
          {...buttonTap}
        >
          <Plus className="w-4 h-4" />
          Add Administrator
        </motion.button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Admin Name
                </th>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Email Address
                </th>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role
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
              {admins.map((admin, index) => (
                <motion.tr
                  key={admin.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  whileHover={{ y: -1 }}
                  className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary dark:text-brand-accent flex items-center justify-center font-bold text-xs">
                        {admin.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{admin.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {admin.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 capitalize">
                      <Shield className="w-3 h-3" />
                      {admin.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                      admin.status === 'active'
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                        : 'bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300'
                    }`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <motion.button
                        onClick={() => handleEdit(admin)}
                        className="p-1.5 rounded-lg text-brand-primary dark:text-brand-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        title="Edit Admin"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleDelete(admin.id)}
                        className="p-1.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                        title="Delete Admin"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
              {admins.length === 0 && (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400 text-sm">No administrators found. Click "Add Administrator" to create one.</td>
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-800"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {editingAdmin ? 'Edit Admin' : 'Add Administrator'}
                </h2>
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1.5 rounded-lg"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>

              {errorMsg && (
                <div className="mx-6 mt-4 p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-xl text-xs text-red-600 dark:text-red-400 font-semibold">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
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
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Password {editingAdmin && '(leave blank to keep unchanged)'}
                  </label>
                  <motion.input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                    placeholder="••••••••"
                    required={!editingAdmin}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Role</label>
                    <motion.select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value as 'admin' | 'super_admin' })}
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
                      whileFocus={{ scale: 1.01 }}
                    >
                      <option value="admin">Admin</option>
                      <option value="super_admin">Super Admin</option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Status</label>
                    <motion.select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none text-sm"
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
                    {editingAdmin ? 'Update' : 'Create'}
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

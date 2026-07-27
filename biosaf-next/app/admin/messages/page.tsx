'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Trash2 } from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  isRead: boolean;
  readAt: string | null;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const res = await fetch('/api/admin/messages');
      if (res.ok) setMessages(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleStatus(id: number, isCurrentlyRead: boolean) {
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isRead: !isCurrentlyRead }),
    });
    fetchMessages();
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure you want to delete this message?')) return;
    await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' });
    fetchMessages();
  }

  if (loading) return <div className="p-8 text-gray-500 font-semibold">Loading messages...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Contact Messages</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Inbound customer inquiries and contact submissions</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
            <tr>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Sender</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Subject & Message</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {messages.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-xs text-gray-500 font-normal">{item.email}</p>
                    {item.phone && <p className="text-xs text-gray-400 font-normal">{item.phone}</p>}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 max-w-md">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{item.subject || 'General Inquiry'}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{item.message}</p>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                    !item.isRead ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                  }`}>
                    {!item.isRead ? 'unread' : 'read'}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => toggleStatus(item.id, item.isRead)}
                      className="p-1.5 text-brand-primary dark:text-brand-accent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      title="Toggle Read/Unread"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

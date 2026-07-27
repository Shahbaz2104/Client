'use client';

import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

interface QuoteRequest {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  service: string | null;
  message: string | null;
  status: 'pending' | 'contacted' | 'completed' | 'cancelled';
  createdAt: string;
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  async function fetchQuotes() {
    try {
      const res = await fetch('/api/admin/quotes');
      if (res.ok) setQuotes(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: number, status: QuoteRequest['status']) {
    await fetch(`/api/admin/quotes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    fetchQuotes();
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/admin/quotes/${id}`, { method: 'DELETE' });
    fetchQuotes();
  }

  if (loading) return <div className="p-8 text-gray-500 font-semibold">Loading quotes...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">RFP Quote Requests</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Manage commercial equipment & pest management quote requests</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
            <tr>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Requester / Company</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Contact Info</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Service Interested</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {quotes.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-xs text-gray-500 font-normal">{item.company || 'Private Client'}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                  <p>{item.email}</p>
                  <p className="text-xs text-gray-400">{item.phone}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 font-medium">
                  {item.service || 'General Quote'}
                </td>
                <td className="px-6 py-4 text-sm">
                  <select
                    value={item.status}
                    onChange={(e) => updateStatus(item.id, e.target.value as QuoteRequest['status'])}
                    className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

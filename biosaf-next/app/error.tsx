"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-8">{error.message}</p>
      <button
        onClick={reset}
        className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold text-brand-dark mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
        Go Home
      </Link>
    </div>
  );
}

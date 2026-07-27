import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-brand-accent mb-4">BIOSAF</h3>
            <p className="text-gray-300">
              Delivering Safe Environments & Scientific Quality Systems
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-brand-accent transition-colors">About</Link></li>
              <li><Link href="/divisions" className="text-gray-300 hover:text-brand-accent transition-colors">Divisions</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300">Email: info@biosaf.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2026 BIOSAF Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

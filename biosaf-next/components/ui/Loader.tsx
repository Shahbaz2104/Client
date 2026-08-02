import { Loader2 } from "lucide-react";

export function Loader({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl p-2 shadow-md shadow-brand-primary/10 flex items-center justify-center">
        <img src="/images/logo1.png" alt="BIOSAF Enterprises Logo" className="w-full h-full object-contain" />
      </div>
      <Loader2 className="h-8 w-8 animate-spin text-brand-primary" />
    </div>
  );
}

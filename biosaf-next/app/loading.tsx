import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl p-2 shadow-lg shadow-brand-primary/20 animate-pulse flex items-center justify-center">
        <img src="/images/logo1.png" alt="BIOSAF Enterprises Logo" className="w-full h-full object-contain" />
      </div>
      <div className="flex items-center gap-2 text-brand-primary text-sm font-bold">
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading...
      </div>
    </div>
  );
}

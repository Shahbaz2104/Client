import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center font-black text-2xl animate-pulse shadow-lg shadow-brand-primary/20">
        B
      </div>
      <div className="flex items-center gap-2 text-brand-primary text-sm font-bold">
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading...
      </div>
    </div>
  );
}

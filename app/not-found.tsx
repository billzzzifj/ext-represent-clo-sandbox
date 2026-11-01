import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 text-neutral-100 font-mono">
      <div className="max-w-md w-full border border-neutral-800 bg-neutral-950 p-8 text-center space-y-4">
        <div className="flex justify-center">
          <ShieldAlert className="h-8 w-8 text-amber-500" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-200">
          Route Not Found // 404
        </h2>
        <p className="text-xs text-neutral-400">
          The requested coordinate does not exist. Redirecting to the primary Owners Club specimen showcase.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-neutral-700 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-neutral-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Return to Storefront
          </Link>
        </div>
      </div>
    </div>
  );
}

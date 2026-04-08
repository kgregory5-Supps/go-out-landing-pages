import { FDA_DISCLAIMER } from "@/lib/productData";

export default function Footer() {
  return (
    <footer className="bg-goout-navy py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand */}
          <p className="text-2xl text-white font-bold mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            GO-OUT
          </p>
          <p className="text-xs text-white/30 mb-8" style={{ fontFamily: "var(--font-mono)" }}>
            By Highland Laboratories &middot; Mt. Angel, Oregon &middot; Since 2006
          </p>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
            <a href="/daily-maintenance" className="text-sm text-white/50 hover:text-white transition-colors">Daily Maintenance</a>
            <a href="/extra-strength" className="text-sm text-white/50 hover:text-white transition-colors">Extra Strength</a>
            <a href="/now" className="text-sm text-white/50 hover:text-white transition-colors">NOW!</a>
            <a href="https://go-out.life" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Visit go-out.life</a>
          </div>

          {/* FDA Disclaimer */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-[11px] text-white/25 leading-relaxed max-w-xl mx-auto">
              {FDA_DISCLAIMER}
            </p>
            <p className="text-[11px] text-white/20 mt-4">
              &copy; {new Date().getFullYear()} Highland Laboratories, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

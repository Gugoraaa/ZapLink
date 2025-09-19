'use client'
import { redirect } from "next/navigation";

export default function Navbar() {

  function toggleMenu() {
    redirect("/login"); 
  }

  return (
    <nav className="sticky top-0 z-30 w-full bg-[#0c1220]/80 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-wide text-white/90">
            ZapLink
          </span>
        </div>
        <button className="h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/10" onClick={toggleMenu}>

        </button>
      </div>
    </nav>
  );
}

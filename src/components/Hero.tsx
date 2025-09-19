


export default function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(59,130,246,0.25),rgba(12,18,32,0))]" />
      <div className="relative mx-auto max-w-3xl px-4 pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="text-white">The Ultimate </span>
          <span className="text-white">Link Shortener</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/70">
          Create clean, memorable links. Track every click. Gain insights to
          grow your brand. All with unparalleled simplicity and elegance.
        </p>
      </div>

      <div className="relative mx-auto mt-10 max-w-3xl px-4">
        <div className="rounded-2xl border border-white/10 bg-[#0f172a]/60 p-5 shadow-2xl shadow-blue-500/10">
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus-within:border-blue-500/60">
              <input
                type="url"
                placeholder="Paste a long URL"
                className="w-full bg-transparent text-sm placeholder-white/40 outline-none"
              />
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus-within:border-blue-500/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 text-white/50"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <input
                placeholder="Optional custom slug (e.g., my-awesome-link)"
                className="w-full bg-transparent text-sm placeholder-white/40 outline-none"
              />
            </div>
            <button className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-500/25 transition hover:opacity-95 active:opacity-90">
              Shorten URL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

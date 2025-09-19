export default function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:shadow-blue-500/10">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
          <div className="opacity-80">{icon}</div>
        </div>
        <h3 className="text-sm font-semibold tracking-wide">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

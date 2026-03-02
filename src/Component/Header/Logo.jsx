export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-linear-to-br from-rose-400 to-orange-300 flex items-center justify-center text-white font-bold">
        TH
      </div>
      <div className="flex flex-col">
        <a
          href="/"
          className="text-xl font-semibold text-slate-900 tracking-tight"
        >
          TechHub
        </a>
        <span className="text-xs text-slate-500">
          Gear for builders & dreamers
        </span>
      </div>
    </div>
  );
}

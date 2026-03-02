export default function SearchBar() {
  return (
    <div className="hidden sm:block">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
        </svg>
        <input
          type="text"
          placeholder="Search laptops, GPUs, desktops..."
          className="bg-transparent text-sm placeholder:text-slate-400 focus:outline-none w-64"
        />
      </div>
    </div>
  );
}

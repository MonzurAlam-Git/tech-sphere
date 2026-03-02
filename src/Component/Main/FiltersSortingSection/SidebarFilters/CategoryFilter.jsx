export default function CategoryFilter() {
  return (
    <div className="mb-6">
      <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
      <div className="space-y-2">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" defaultChecked className="w-4 h-4 text-rose-500 rounded border-slate-300" />
          <span className="ml-3 text-sm text-slate-700">Apple Mac Pro</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-rose-500 rounded border-slate-300" />
          <span className="ml-3 text-sm text-slate-700">Gaming Laptop</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-rose-500 rounded border-slate-300" />
          <span className="ml-3 text-sm text-slate-700">Workstation</span>
        </label>
      </div>
    </div>
  );
}

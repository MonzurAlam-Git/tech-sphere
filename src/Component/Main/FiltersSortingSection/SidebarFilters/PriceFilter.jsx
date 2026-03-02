export default function PriceFilter() {
  return (
    <div className="mb-6">
      <h4 className="font-medium text-sm mb-3 text-slate-700">Price Range</h4>
      <div className="space-y-2">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" name="price" className="w-4 h-4 text-rose-500" />
          <span className="ml-3 text-sm text-slate-700">$0 - $2000</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" name="price" className="w-4 h-4 text-rose-500" />
          <span className="ml-3 text-sm text-slate-700">$2000 - $5000</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" name="price" defaultChecked className="w-4 h-4 text-rose-500" />
          <span className="ml-3 text-sm text-slate-700">$5000+</span>
        </label>
      </div>
    </div>
  );
}

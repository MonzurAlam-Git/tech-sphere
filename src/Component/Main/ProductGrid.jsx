import FiltersSortingSection from "./FiltersSortingSection/FiltersSortingSection";
import Hero from "./Hero/Hero";

export default function ProductGrid() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {/* Hero */}
      <Hero />

      {/* Filters & Sorting Section */}
      <FiltersSortingSection />
    </main>
  );
}

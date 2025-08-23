export default function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  search,
  onSearch,
  pageSize,
  onPageSize,
  filteredCount, // NEW
}) {
  const handleChange = (e) => {
    const val = e.target.value;
    onPageSize(isNaN(Number(val)) ? "auto" : Number(val));
  };

  return (
    <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              activeCategory === cat ? "tab-active" : ""
            }`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          type="search"
          placeholder="Search by title..."
          className="w-64 max-w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring focus:ring-indigo-200"
        />
        <label className="text-sm text-gray-600">
          Per page:
          <select
            value={pageSize}
            onChange={handleChange}
            className="ml-1 rounded border border-gray-300 px-2 py-1 text-sm"
            title="Auto adjusts to available posts"
          >
            <option value="auto">Auto</option>
            {[6, 9, 12, 18].map((n) => (
              <option key={n} value={n} disabled={filteredCount > 0 && filteredCount < n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import { posts as allPosts, categories as allCategories } from "./data/posts";

export default function App() {
  const saved = localStorage.getItem("pageSize") || "auto";
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(isNaN(Number(saved)) ? "auto" : Number(saved));

  const filtered = useMemo(() => {
    return allPosts
      .filter((p) => (category === "All" ? true : p.category === category))
      .filter((p) => (search ? p.title.toLowerCase().includes(search.toLowerCase()) : true))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [category, search]);

  // Auto page size = min(12, count) but at least 1 to keep math simple
  const effectivePageSize =
    pageSize === "auto" ? Math.max(1, Math.min(12, filtered.length)) : pageSize;

  const totalPages = Math.max(1, Math.ceil(filtered.length / effectivePageSize));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * effectivePageSize, safePage * effectivePageSize);

  function onCategoryChange(cat) {
    setCategory(cat);
    setPage(1);
  }
  function onSearch(val) {
    setSearch(val);
    setPage(1);
  }
  function onPageSize(n) {
    setPageSize(n);
    localStorage.setItem("pageSize", String(n));
    setPage(1);
  }

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Filters
          categories={allCategories}
          activeCategory={category}
          onCategoryChange={onCategoryChange}
          search={search}
          onSearch={onSearch}
          pageSize={pageSize}
          onPageSize={onPageSize}
          filteredCount={filtered.length} // NEW
        />

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {pageItems.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">No posts found.</div>
          )}
        </section>

        {/* Show pagination only when there are multiple pages */}
        {totalPages > 1 && (
          <Pagination
            page={safePage}
            totalPages={totalPages}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        )}

        {/* Friendly info when a category has few posts */}
        {filtered.length > 0 && filtered.length <= effectivePageSize && (
          <p className="mt-6 text-center text-sm text-gray-500">
            Only {filtered.length} post{filtered.length !== 1 ? "s" : ""} in this category.
          </p>
        )}
      </main>

      <footer className="mt-16 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} <strong>Aisha Kotob</strong> — built with React + Tailwind.
        </div>
      </footer>
    </>
  );
}

export default function Pagination({ page, totalPages, onPrev, onNext }) {
  return (
    <section className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        onClick={onPrev}
        disabled={page <= 1}
        className="rounded border px-3 py-1.5 text-sm disabled:opacity-40"
      >
        Prev
      </button>
      <span className="text-sm px-2">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={page >= totalPages}
        className="rounded border px-3 py-1.5 text-sm disabled:opacity-40"
      >
        Next
      </button>
    </section>
  );
}

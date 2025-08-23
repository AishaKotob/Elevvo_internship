import { useState } from "react";

export default function PostCard({ post }) {
  const [src, setSrc] = useState(post.image);
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(
    post.title
  )}/640/420`;

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <article className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <img
        src={src}
        alt={post.title}
        className="h-44 w-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setSrc(fallback)}
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
            {post.category}
          </span>
          <time className="text-xs text-gray-500">{formatDate(post.date)}</time>
        </div>
        <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
        <a href="#" className="mt-3 inline-block text-sm font-medium text-indigo-700 hover:underline">
          Read more →
        </a>
      </div>
    </article>
  );
}

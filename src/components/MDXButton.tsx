'use client';

export default function MDXButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-xl">
      {children}
    </button>
  );
}
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold mt-8 mb-3" {...props} />,
    p: (props) => <p className="leading-7 text-white/85 my-4" {...props} />,
    a: (props) => <a className="text-primary-400 underline" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 my-4 space-y-1" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6 my-4 space-y-1" {...props} />,
    code: (props) => <code className="px-1 py-0.5 rounded bg-white/10" {...props} />,
    pre: (props) => (
      <pre className="my-4 overflow-auto rounded-xl border border-white/10 bg-black/40 p-4" {...props} />
    ),
    ...components,
  };
}
import { DocumentRenderer } from '@keystatic/core/renderer'
import type { DocumentElement } from '@keystatic/core'

interface Props {
  document: DocumentElement[]
}

const componentBlocks = {
  pullQuote: ({ text, attribution }: { text: string; attribution?: string }) => (
    <blockquote className="my-8 border-l-4 border-[#00A896] pl-6">
      <p className="text-xl font-light italic leading-relaxed">{text}</p>
      {attribution && (
        <footer className="mt-3 text-sm text-[#6B6B6B] not-italic">— {attribution}</footer>
      )}
    </blockquote>
  ),

  statCallout: ({ stats }: { stats: { value: string; label: string }[] }) => (
    <div
      className="my-8 grid gap-px bg-[#E8E8E8] border border-[#E8E8E8]"
      style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
    >
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 text-center">
          <p className="text-4xl font-black">{stat.value}</p>
          <p className="text-sm text-[#6B6B6B] mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  ),

  optionsList: ({ items }: { items: { title: string; body: string }[] }) => (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <div key={i} className="border border-[#E8E8E8] p-5">
          <p className="text-sm font-semibold mb-2">{item.title}</p>
          <p className="text-sm text-[#444] leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  ),
}

const renderers = {
  block: {
    paragraph: ({ children, textAlign }: any) => (
      <p className="mb-4 leading-relaxed" style={{ textAlign }}>{children}</p>
    ),
    heading: ({ children, level }: any) => {
      const id = (typeof children === 'string' ? children : '')
        .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      if (level === 2) return <h2 id={id} className="text-2xl font-bold mt-12 mb-4">{children}</h2>
      if (level === 3) return <h3 id={id} className="text-xl font-semibold mt-8 mb-3">{children}</h3>
      return <h4 className="text-lg font-semibold mt-6 mb-2">{children}</h4>
    },
    divider: () => <hr className="my-10 border-[#E8E8E8]" />,
    list: ({ children, type }: any) =>
      type === 'ordered'
        ? <ol className="mb-4 pl-6 list-decimal space-y-1">{children}</ol>
        : <ul className="mb-4 pl-6 list-disc space-y-1">{children}</ul>,
    listItem: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    image: ({ src, alt, title }: any) => (
      <figure className="my-8">
        <img src={src} alt={alt ?? ''} className="w-full" loading="lazy" />
        {title && <figcaption className="mt-2 text-sm text-[#6B6B6B] text-center">{title}</figcaption>}
      </figure>
    ),
  },
  inline: {
    bold: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    italic: ({ children }: any) => <em>{children}</em>,
    underline: ({ children }: any) => <u>{children}</u>,
    code: ({ children }: any) => (
      <code className="bg-[#F5F5F5] border border-[#E8E8E8] px-1.5 py-0.5 text-sm font-mono">{children}</code>
    ),
    link: ({ children, href }: any) => (
      <a
        href={href}
        className="text-[#00A896] underline underline-offset-2 hover:no-underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

export default function ArticleBody({ document }: Props) {
  return (
    <div className="text-base text-[#1A1A1A]">
      <DocumentRenderer
        document={document}
        renderers={renderers}
        componentBlocks={componentBlocks}
      />
    </div>
  )
}

import { useEffect, useState } from 'react'

interface Section {
  id: string
  title: string
}

export default function StickyToC({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string | null>(sections[0]?.id ?? null)

  useEffect(() => {
    const onScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i].id)
          return
        }
      }
      setActive(sections[0]?.id ?? null)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <nav aria-label="Tabla de contenidos" className="hidden xl:block">
      <p className="text-[11px] uppercase tracking-widest text-[#6B6B6B] mb-4">En este artículo</p>
      <ol className="flex flex-col gap-1">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`flex items-start gap-3 py-1.5 text-sm transition-colors ${
                active === s.id
                  ? 'text-[#00A896] font-semibold'
                  : 'text-[#6B6B6B] hover:text-black'
              }`}
            >
              <span className={`mt-1 text-[10px] shrink-0 ${active === s.id ? 'text-[#00A896]' : 'text-[#CCC]'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

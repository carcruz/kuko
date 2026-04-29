import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import { Search, Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 bg-white border-b border-black transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-3xl font-black tracking-tight leading-none">KUKO</span>
          <span className="text-[11px] text-[#6B6B6B] uppercase tracking-[0.08em] mt-0.5 hidden sm:block">
            Pensamiento crítico para Costa Rica
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Investigaciones', to: '/investigaciones' },
            { label: 'Contexto', to: '/contexto-internacional' },
            { label: 'Datos', to: '/datos' },
            { label: 'Propuestas', to: '/propuestas' },
            { label: 'Acerca de', to: '/acerca-de' },
          ].map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide transition-colors relative group ${
                  isActive ? 'text-[#00A896]' : 'text-black hover:text-[#00A896]'
                }`
              }
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00A896] transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-black hover:text-[#00A896] transition-colors" aria-label="Buscar">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            className="md:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E8E8] px-6 py-6 flex flex-col gap-5">
          {[
            { label: 'Investigaciones', to: '/investigaciones' },
            { label: 'Contexto Internacional', to: '/contexto-internacional' },
            { label: 'Datos', to: '/datos' },
            { label: 'Propuestas', to: '/propuestas' },
            { label: 'Acerca de', to: '/acerca-de' },
          ].map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive ? 'text-[#00A896]' : 'text-black hover:text-[#00A896]'
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

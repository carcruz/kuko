import { useState, useMemo } from 'react'
import { Link } from 'react-router'
import { Search, X, ChevronRight, SlidersHorizontal } from 'lucide-react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { name: 'Movilidad & Transporte', color: '#00A896' },
  { name: 'Salud Pública', color: '#E85D75' },
  { name: 'Educación', color: '#5B8DEE' },
  { name: 'Economía & Finanzas', color: '#F5A623' },
  { name: 'Política & Gobernanza', color: '#7B68EE' },
  { name: 'Ambiente & Sostenibilidad', color: '#50C878' },
  { name: 'Urbanismo & Vivienda', color: '#FF6B35' },
  { name: 'Tecnología & Innovación', color: '#9B59B6' },
  { name: 'Justicia & Seguridad', color: '#34495E' },
]

const TYPES = [
  'Análisis Profundo',
  'Contexto Internacional',
  'Análisis de Datos',
  'Explicador',
  'Propuesta Concreta',
]

const ARTICLES = [
  {
    id: 1, slug: 'sistema-numeracion-buses',
    title: 'Sistema de Numeración de Buses: El Caos que Pagamos Cada Día',
    category: 'Movilidad & Transporte', categoryColor: '#00A896',
    type: 'Análisis Profundo', readTime: '25 min', date: 'Ene 2025',
    excerpt: 'Con 476 rutas sin lógica geográfica, Costa Rica tiene uno de los sistemas de transporte más confusos de la región. Analizamos los datos y presentamos opciones reales.',
  },
  {
    id: 2, slug: null,
    title: 'Listas de Espera CCSS: +68% en Cinco Años',
    category: 'Salud Pública', categoryColor: '#E85D75',
    type: 'Análisis Profundo', readTime: '18 min', date: 'Ene 2025',
    excerpt: 'Las listas de espera quirúrgicas han aumentado de 42,000 a 68,000 personas desde 2020. Causas, comparación regional y opciones.',
  },
  {
    id: 3, slug: null,
    title: 'Chile y su Transantiago: Lecciones para Costa Rica',
    category: 'Movilidad & Transporte', categoryColor: '#00A896',
    type: 'Contexto Internacional', readTime: '12 min', date: 'Dic 2024',
    excerpt: '¿Qué podemos aprender de la mayor reforma de transporte público en la historia de Chile? Un análisis de viabilidad para CR.',
  },
  {
    id: 4, slug: null,
    title: 'Canasta Básica: Evolución del Costo de Vida 2020–2025',
    category: 'Economía & Finanzas', categoryColor: '#F5A623',
    type: 'Análisis de Datos', readTime: '8 min', date: 'Dic 2024',
    excerpt: 'Cinco años de datos sobre el costo de la canasta básica y su impacto diferenciado por nivel de ingreso y región.',
  },
  {
    id: 5, slug: null,
    title: '¿Qué son las Pruebas PISA y Por Qué Importan?',
    category: 'Educación', categoryColor: '#5B8DEE',
    type: 'Explicador', readTime: '10 min', date: 'Nov 2024',
    excerpt: 'Desmitificamos las evaluaciones internacionales de educación y lo que realmente dicen sobre el sistema educativo costarricense.',
  },
  {
    id: 6, slug: null,
    title: 'Gestión de Residuos en San José: El Problema que no Vemos',
    category: 'Ambiente & Sostenibilidad', categoryColor: '#50C878',
    type: 'Análisis Profundo', readTime: '20 min', date: 'Nov 2024',
    excerpt: 'El 34% de los residuos sólidos de San José no llegan a reciclaje. Qué hacen otras ciudades latinoamericanas.',
  },
  {
    id: 7, slug: null,
    title: 'Transparencia Presupuestaria: CR vs. América Latina',
    category: 'Política & Gobernanza', categoryColor: '#7B68EE',
    type: 'Análisis de Datos', readTime: '14 min', date: 'Oct 2024',
    excerpt: 'Comparamos los índices de transparencia fiscal de Costa Rica con 10 países de la región usando datos del FMI.',
  },
  {
    id: 8, slug: null,
    title: 'Crisis de Vivienda en el GAM: Datos, Causas y Opciones',
    category: 'Urbanismo & Vivienda', categoryColor: '#FF6B35',
    type: 'Análisis Profundo', readTime: '22 min', date: 'Oct 2024',
    excerpt: 'El déficit habitacional en la Gran Área Metropolitana supera las 100,000 unidades. Evidencia y alternativas.',
  },
  {
    id: 9, slug: null,
    title: 'Brecha Digital en Costa Rica: ¿Quién queda afuera?',
    category: 'Tecnología & Innovación', categoryColor: '#9B59B6',
    type: 'Análisis de Datos', readTime: '11 min', date: 'Sep 2024',
    excerpt: 'El 28% de los hogares costarricenses no tienen acceso a internet de banda ancha. Los factores geográficos y económicos detrás.',
  },
  {
    id: 10, slug: null,
    title: 'Amsterdam y la Movilidad Activa: ¿Qué podría adaptar CR?',
    category: 'Movilidad & Transporte', categoryColor: '#00A896',
    type: 'Contexto Internacional', readTime: '13 min', date: 'Sep 2024',
    excerpt: '800 km de ciclovías y el 63% de viajes activos. Qué elementos del modelo neerlandés son trasladables al contexto costarricense.',
  },
  {
    id: 11, slug: null,
    title: 'Hacinamiento Penitenciario: Más Allá de la Capacidad',
    category: 'Justicia & Seguridad', categoryColor: '#34495E',
    type: 'Análisis Profundo', readTime: '19 min', date: 'Ago 2024',
    excerpt: 'El 42% de hacinamiento en centros penales no es solo un problema de espacio. Reincidencia, factores de fondo y comparación regional.',
  },
  {
    id: 12, slug: null,
    title: 'Salario Mínimo: Historia, Impacto y Debate en CR',
    category: 'Economía & Finanzas', categoryColor: '#F5A623',
    type: 'Explicador', readTime: '9 min', date: 'Ago 2024',
    excerpt: 'El sistema de salario mínimo costarricense en perspectiva regional y el debate técnico sobre su impacto en el empleo.',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function InvestigacionesPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeType, setActiveType] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return ARTICLES.filter((a) => {
      const matchSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      const matchCat = !activeCategory || a.category === activeCategory
      const matchType = !activeType || a.type === activeType
      return matchSearch && matchCat && matchType
    })
  }, [query, activeCategory, activeType])

  const hasFilters = query || activeCategory || activeType

  const clearAll = () => {
    setQuery('')
    setActiveCategory(null)
    setActiveType(null)
  }

  const toggleCategory = (name: string) =>
    setActiveCategory((c) => (c === name ? null : name))

  const toggleType = (name: string) =>
    setActiveType((t) => (t === name ? null : name))

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Page header ── */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-3">
            Archivo
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
            Investigaciones
          </h1>
          <p className="text-[#2D2D2D] text-lg max-w-xl">
            Análisis basados en datos para entender los desafíos de Costa Rica.
          </p>
        </div>
      </div>

      {/* ── Search + filters ── */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 border-b border-[#E8E8E8]">
        {/* Search bar */}
        <div className="relative max-w-2xl mb-6">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7A7A]"
            strokeWidth={1.5}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por tema, categoría o palabra clave…"
            className="w-full h-[52px] pl-11 pr-10 border border-black text-sm placeholder:text-[#7A7A7A] focus:outline-none focus:border-[#00A896] bg-white"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A7A7A] hover:text-black transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none mb-3">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#7A7A7A] shrink-0" strokeWidth={1.5} />
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 h-8 px-3.5 text-[12px] font-medium uppercase tracking-wide border transition-colors ${
              !activeCategory
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-[#E8E8E8] hover:border-black'
            }`}
          >
            Todas
          </button>
          {CATEGORIES.map(({ name, color }) => (
            <button
              key={name}
              onClick={() => toggleCategory(name)}
              className={`shrink-0 h-8 px-3.5 text-[12px] font-medium border transition-colors flex items-center gap-1.5 ${
                activeCategory === name
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-[#E8E8E8] hover:border-black'
              }`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: activeCategory === name ? 'white' : color }}
              />
              {name}
            </button>
          ))}
        </div>

        {/* Type pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] uppercase tracking-[0.08em] text-[#7A7A7A] shrink-0 w-3.5 h-3.5" />
          {TYPES.map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`shrink-0 h-7 px-3 text-[11px] border transition-colors ${
                activeType === type
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-[#6B6B6B] border-[#E8E8E8] hover:text-black hover:border-[#BDBDBD]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results header ── */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-[#E8E8E8]">
        <p className="text-[13px] text-[#7A7A7A]">
          {filtered.length === ARTICLES.length
            ? `${ARTICLES.length} investigaciones`
            : `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''}`}
          {activeCategory && (
            <span className="text-black font-medium"> en {activeCategory}</span>
          )}
          {query && (
            <span className="text-black font-medium"> para "{query}"</span>
          )}
        </p>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-[12px] text-[#7A7A7A] hover:text-black transition-colors underline underline-offset-2"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          // Empty state
          <div className="text-center py-24 border border-[#E8E8E8]">
            <p className="text-4xl font-black tracking-tight mb-3 text-[#E8E8E8]">∅</p>
            <p className="text-lg font-semibold mb-2">Sin resultados</p>
            <p className="text-sm text-[#7A7A7A] mb-6 max-w-xs mx-auto">
              No encontramos investigaciones con esos filtros. Intenta con términos más generales.
            </p>
            <button
              onClick={clearAll}
              className="px-5 py-2.5 border border-black text-sm hover:bg-black hover:text-white transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

type Article = (typeof ARTICLES)[number]

function ArticleCard({ article }: { article: Article }) {
  const content = (
    <div className="border border-[#E8E8E8] p-6 h-full flex flex-col hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 group">
      {/* Category + type */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: article.categoryColor }}
          />
          <span className="text-[11px] font-medium uppercase tracking-[0.07em] text-black">
            {article.category}
          </span>
        </span>
        <span className="text-[#E8E8E8]">·</span>
        <span
          className="text-[11px] uppercase tracking-[0.06em] px-2 py-0.5"
          style={{
            backgroundColor: article.categoryColor + '18',
            color: article.categoryColor,
          }}
        >
          {article.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-black tracking-tight leading-snug mb-3 flex-none">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p
        className="text-[14px] text-[#6B6B6B] leading-relaxed mb-5 flex-1"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {article.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#F0F0F0] mt-auto">
        <span className="text-[12px] text-[#7A7A7A]">
          {article.date} · {article.readTime}
        </span>
        <ChevronRight
          className="w-4 h-4 text-[#BDBDBD] group-hover:text-black transition-colors"
          strokeWidth={1.5}
        />
      </div>
    </div>
  )

  return article.slug ? (
    <Link to={`/articulo/${article.slug}`} className="block">
      {content}
    </Link>
  ) : (
    <div className="cursor-pointer">{content}</div>
  )
}

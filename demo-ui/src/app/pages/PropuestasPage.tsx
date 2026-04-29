import { Link } from 'react-router'
import { ArrowUpRight, Clock, CheckCircle, FlaskConical } from 'lucide-react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

// ─── Data ────────────────────────────────────────────────────────────────────

const PUBLISHED_PROPOSALS = [
  {
    id: 1,
    slug: 'sistema-numeracion-buses',
    title: 'Sistema de Numeración para el Transporte Público de Costa Rica',
    category: 'Movilidad & Transporte',
    categoryColor: '#00A896',
    summary: 'Proponemos un sistema de numeración geográfico por rangos para las 476 rutas de buses del país. La propuesta contempla tres opciones de diferente profundidad y costo, basadas en los casos de Barcelona, Auckland y Bogotá.',
    keyPoints: [
      'Reasignación geográfica de 476 rutas sin cambiar recorridos',
      'Señalética en las 200 paradas de mayor flujo del GAM',
      'Inversión estimada: ₡2,400 millones en 18 meses',
      'Requiere voluntad política del CTP, no reforma legal',
    ],
    published: 'Enero 2025',
    readTime: '25 min',
    confidence: 'Alta',
    evidenceSources: 8,
  },
]

const IN_ANALYSIS = [
  {
    id: 2,
    title: 'Reforma del Sistema de Listas de Espera CCSS',
    category: 'Salud Pública',
    categoryColor: '#E85D75',
    status: 'En análisis',
    eta: 'Estimado Q2 2025',
    description: 'Exploramos modelos de priorización clínica y opciones de capacidad complementaria usados en sistemas de salud similares.',
    completionPct: 45,
  },
  {
    id: 3,
    title: 'Política de Vivienda Asequible para el GAM',
    category: 'Urbanismo & Vivienda',
    categoryColor: '#FF6B35',
    status: 'En análisis',
    eta: 'Estimado Q3 2025',
    description: 'Analizamos modelos de vivienda asequible de Viena, Singapur y Medellín para identificar elementos aplicables al contexto costarricense.',
    completionPct: 20,
  },
  {
    id: 4,
    title: 'Sistema de Reciclaje con Responsabilidad Extendida',
    category: 'Ambiente & Sostenibilidad',
    categoryColor: '#50C878',
    status: 'En scoping',
    eta: 'Sin fecha estimada',
    description: 'Evaluamos si el modelo alemán de Responsabilidad Extendida del Productor es legal y políticamente viable en Costa Rica.',
    completionPct: 10,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PropuestasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Page header ── */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-3">Solo cuando hay evidencia suficiente</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
            Propuestas
          </h1>
          <p className="text-[#2D2D2D] text-lg max-w-2xl">
            Solo publicamos propuestas concretas cuando la evidencia es sólida, el análisis de viabilidad es exhaustivo, y el equipo tiene alta confianza en la dirección recomendada. Son el 5% de lo que publicamos.
          </p>
        </div>
      </div>

      {/* ── What makes a propuesta ── */}
      <div className="border-b border-[#E8E8E8] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📊', title: 'Evidencia sólida', text: 'Múltiples fuentes verificables, análisis de datos propio, y casos internacionales con contexto de aplicabilidad.' },
              { icon: '🔍', title: 'Viabilidad analizada', text: 'Legal, económica, política y temporalmente. No proponemos lo que no es implementable en el corto o mediano plazo.' },
              { icon: '⚖️', title: 'Alta confianza', text: 'Solo cuando el equipo tiene alta confianza en la dirección. Reconocemos explícitamente las limitaciones e incertidumbres.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className="text-[14px] font-semibold mb-1">{title}</p>
                  <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Published proposals ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#E8E8E8]">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="w-4 h-4 text-[#00A896]" strokeWidth={1.5} />
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A]">
            Propuestas publicadas · {PUBLISHED_PROPOSALS.length}
          </p>
        </div>

        {PUBLISHED_PROPOSALS.map((p) => (
          <Link
            key={p.id}
            to={`/articulo/${p.slug}`}
            className="block border border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group mb-6"
          >
            <div className="grid md:grid-cols-[1fr_300px]">
              {/* Left */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black">
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="text-[11px] font-medium uppercase tracking-[0.07em] px-2.5 py-0.5"
                    style={{ backgroundColor: p.categoryColor + '18', color: p.categoryColor }}
                  >
                    {p.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#00A896] font-medium">
                    <CheckCircle className="w-3 h-3" strokeWidth={2} />
                    Publicada
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-4">
                  {p.title}
                </h2>

                <p className="text-[16px] text-[#2D2D2D] leading-relaxed mb-6">
                  {p.summary}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {p.keyPoints.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[14px] text-[#2D2D2D] leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00A896] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 font-medium text-sm group-hover:text-[#00A896] transition-colors">
                  Leer propuesta completa
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </div>

              {/* Right: metadata */}
              <div className="p-8 bg-[#FAFAFA] flex flex-col justify-between">
                <div className="space-y-5">
                  <MetaItem label="Publicada" value={p.published} />
                  <MetaItem label="Lectura" value={p.readTime} />
                  <MetaItem label="Confianza" value={p.confidence} accent />
                  <MetaItem label="Fuentes de datos" value={`${p.evidenceSources} fuentes`} />
                </div>
                <div className="mt-8 border-t border-[#E8E8E8] pt-5">
                  <p className="text-[11px] text-[#7A7A7A] leading-relaxed">
                    Esta propuesta incluye análisis de viabilidad legal, económica y política, y sección explícita de limitaciones y supuestos.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── In analysis ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#E8E8E8]">
        <div className="flex items-center gap-3 mb-8">
          <FlaskConical className="w-4 h-4 text-[#7A7A7A]" strokeWidth={1.5} />
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A]">
            En análisis · {IN_ANALYSIS.length}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {IN_ANALYSIS.map((p) => (
            <div
              key={p.id}
              className="border border-dashed border-[#BDBDBD] p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4 gap-2">
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.07em] px-2.5 py-0.5"
                  style={{ backgroundColor: p.categoryColor + '18', color: p.categoryColor }}
                >
                  {p.category}
                </span>
                <span className="text-[10px] uppercase tracking-[0.07em] text-[#7A7A7A] shrink-0 flex items-center gap-1">
                  <Clock className="w-3 h-3" strokeWidth={1.5} />
                  {p.status}
                </span>
              </div>

              <h3 className="text-[16px] font-black tracking-tight leading-snug mb-3 flex-1">
                {p.title}
              </h3>

              <p className="text-[13px] text-[#6B6B6B] leading-relaxed mb-5">
                {p.description}
              </p>

              {/* Progress bar */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] text-[#7A7A7A] uppercase tracking-[0.06em]">
                    Análisis completado
                  </span>
                  <span className="text-[11px] font-semibold">{p.completionPct}%</span>
                </div>
                <div className="h-1.5 bg-[#E8E8E8]">
                  <div
                    className="h-full bg-[#1A1A1A]"
                    style={{ width: `${p.completionPct}%` }}
                  />
                </div>
                <p className="text-[11px] text-[#7A7A7A] mt-2">{p.eta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Philosophy ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-5">Por qué publicamos pocas propuestas</p>
            <h2 className="text-3xl font-black tracking-tight mb-5">
              La honestidad importa más que la apariencia de tener respuestas
            </h2>
            <p className="text-[17px] text-[#2D2D2D] leading-relaxed mb-5">
              Publicar propuestas sin evidencia sólida es fácil. Lo difícil es resistir la tentación de dar una respuesta clara cuando la evidencia no la justifica.
            </p>
            <p className="text-[17px] text-[#2D2D2D] leading-relaxed">
              KUKO prefiere decir "estas son las opciones con sus respectivas ventajas y desventajas" en lugar de "esta es LA solución". La mayoría de los problemas complejos no tienen una sola respuesta correcta.
            </p>
          </div>
          <div className="space-y-0 border border-[#E8E8E8]">
            {[
              ['5%', 'de nuestras publicaciones son propuestas concretas'],
              ['3+', 'fuentes de datos independientes requeridas mínimo'],
              ['100%', 'de propuestas incluyen análisis de viabilidad y limitaciones'],
            ].map(([n, label]) => (
              <div key={n} className="flex items-center gap-6 p-6 border-b border-[#E8E8E8] last:border-b-0">
                <div className="text-3xl font-black tracking-tight text-black shrink-0">{n}</div>
                <p className="text-[14px] text-[#2D2D2D] leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function MetaItem({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.08em] text-[#7A7A7A] mb-0.5">{label}</p>
      <p className={`text-[15px] font-semibold ${accent ? 'text-[#00A896]' : 'text-black'}`}>{value}</p>
    </div>
  )
}

import { useState } from 'react'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import NewsletterSection from '../components/shared/NewsletterSection'

// ─── Data ────────────────────────────────────────────────────────────────────

const CASE_STUDIES = [
  {
    id: 1,
    country: 'Chile',
    flag: '🇨🇱',
    city: 'Santiago',
    topic: 'Movilidad & Transporte',
    topicColor: '#00A896',
    slug: 'chile-transantiago',
    articleSlug: null,
    title: 'Transantiago: La Reforma más Ambiciosa de América Latina',
    stat: '−35%',
    statLabel: 'en tiempos de espera tras la reforma (2007–2019)',
    description: 'La reestructuración completa del sistema de transporte público de Santiago es el caso de referencia más estudiado de la región: sus éxitos, sus fracasos iniciales, y lo que finalmente funcionó.',
    tags: ['Transporte público', 'Reforma institucional', 'Integración tarifaria'],
  },
  {
    id: 2,
    country: 'Países Bajos',
    flag: '🇳🇱',
    city: 'Amsterdam',
    topic: 'Movilidad & Transporte',
    topicColor: '#00A896',
    slug: 'amsterdam-movilidad-activa',
    articleSlug: null,
    title: 'Amsterdam: Movilidad Activa como Política Pública',
    stat: '63%',
    statLabel: 'de los viajes urbanos son a pie o en bici',
    description: 'Décadas de inversión consistente en infraestructura para peatones y ciclistas convirtieron a Amsterdam en referencia mundial. Las lecciones van más allá de las ciclovías.',
    tags: ['Movilidad activa', 'Ciclismo urbano', 'Diseño vial'],
  },
  {
    id: 3,
    country: 'Singapur',
    flag: '🇸🇬',
    city: 'Singapur',
    topic: 'Salud Pública',
    topicColor: '#E85D75',
    slug: 'singapur-sistema-salud',
    articleSlug: null,
    title: 'El Sistema de Salud de Singapur: Eficiencia con Equidad',
    stat: '3.5%',
    statLabel: 'del PIB en salud — mejores resultados que EEUU (9%)',
    description: 'El modelo de "Medisave + Medishield" combina cuentas de ahorro individual con seguro catastrófico público. Un caso de estudio sobre cómo hacer más con menos.',
    tags: ['Financiamiento de salud', 'Cuentas de salud', 'Resultados clínicos'],
  },
  {
    id: 4,
    country: 'Finlandia',
    flag: '🇫🇮',
    city: 'Helsinki',
    topic: 'Educación',
    topicColor: '#5B8DEE',
    slug: 'finlandia-educacion',
    articleSlug: null,
    title: 'Finlandia: Por qué su Modelo Educativo No Es Directamente Exportable',
    stat: '1er',
    statLabel: 'lugar en PISA durante 15 años consecutivos',
    description: 'El modelo finlandés es admirado globalmente, pero hay factores estructurales que condicionan su reproducibilidad. Un análisis honesto de qué sí y qué no aplica a Costa Rica.',
    tags: ['Calidad educativa', 'PISA', 'Formación docente'],
  },
  {
    id: 5,
    country: 'Nueva Zelanda',
    flag: '🇳🇿',
    city: 'Auckland',
    topic: 'Movilidad & Transporte',
    topicColor: '#00A896',
    slug: 'auckland-reforma-buses',
    articleSlug: null,
    title: 'Auckland: Reforma de Nomenclatura de Buses en 18 Meses',
    stat: '+23%',
    statLabel: 'en satisfacción de usuarios en un año',
    description: 'Auckland implementó un sistema de numeración inteligible para sus buses en menos de dos años, sin cambiar los recorridos físicos. El proceso y las lecciones para Costa Rica.',
    tags: ['Numeración de buses', 'Reforma gradual', 'Señalética'],
  },
  {
    id: 6,
    country: 'España',
    flag: '🇪🇸',
    city: 'Barcelona',
    topic: 'Movilidad & Transporte',
    topicColor: '#00A896',
    slug: 'barcelona-nomenclatura',
    articleSlug: null,
    title: 'Barcelona: Nomenclatura por Zonas sin Cambiar Rutas',
    stat: '8',
    statLabel: 'meses para implementar la nueva nomenclatura completa',
    description: 'La TMB reorganizó la numeración de sus rutas bajo un esquema geográfico simple en menos de un año. Sin cambiar recorridos, solo nombres. Un modelo para Costa Rica.',
    tags: ['Nomenclatura', 'TMB', 'Rediseño de red'],
  },
  {
    id: 7,
    country: 'Uruguay',
    flag: '🇺🇾',
    city: 'Montevideo',
    topic: 'Política & Gobernanza',
    topicColor: '#7B68EE',
    slug: 'uruguay-transparencia',
    articleSlug: null,
    title: 'Uruguay y la Transparencia Fiscal: Un Modelo para la Región',
    stat: '#1',
    statLabel: 'en transparencia presupuestaria en América Latina (IBP 2023)',
    description: 'Uruguay lidera los índices de transparencia fiscal de la región. Qué hizo diferente y si sus mecanismos son replicables en el sistema político costarricense.',
    tags: ['Transparencia', 'Datos abiertos', 'Presupuesto público'],
  },
  {
    id: 8,
    country: 'Alemania',
    flag: '🇩🇪',
    city: 'Múnich',
    topic: 'Ambiente & Sostenibilidad',
    topicColor: '#50C878',
    slug: 'alemania-residuos',
    articleSlug: null,
    title: 'Gestión de Residuos en Alemania: El Sistema Dual y sus Lecciones',
    stat: '68%',
    statLabel: 'de residuos municipales reciclados o aprovechados',
    description: 'El sistema de responsabilidad extendida del productor en Alemania logró tasas de reciclaje impensables hace 30 años. Un análisis de trasladabilidad al contexto costarricense.',
    tags: ['Reciclaje', 'Responsabilidad del productor', 'Residuos sólidos'],
  },
]

const ALL_TOPICS = [...new Set(CASE_STUDIES.map((c) => c.topic))]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContextoPage() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null)

  const filtered = activeTopic
    ? CASE_STUDIES.filter((c) => c.topic === activeTopic)
    : CASE_STUDIES

  const [featured, ...rest] = CASE_STUDIES

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Page header ── */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-3">
            Aprendizaje comparado
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
            Contexto Internacional
          </h1>
          <p className="text-[#2D2D2D] text-lg max-w-2xl">
            Estudiamos experiencias internacionales para entender qué podría funcionar en Costa Rica — y qué no. Sin copias ni recetas, con análisis de aplicabilidad real.
          </p>
        </div>
      </div>

      {/* ── Editorial note ── */}
      <div className="border-b border-[#E8E8E8] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="border-l-[3px] border-[#00A896] pl-4 max-w-3xl">
            <p className="text-[14px] text-[#2D2D2D] leading-relaxed">
              <strong className="text-black">Sobre estos análisis:</strong> Los casos internacionales no son "la solución" para Costa Rica. Son casos de estudio con contextos distintos. Siempre analizamos explícitamente qué es trasladable y qué no, considerando las diferencias institucionales, culturales y económicas.
            </p>
          </div>
        </div>
      </div>

      {/* ── Featured case ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#E8E8E8]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-6">Caso destacado</p>
        <div className="grid md:grid-cols-2 border border-black group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{featured.flag}</span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-[#7A7A7A]">{featured.country} · {featured.city}</p>
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.07em] px-2 py-0.5 inline-block mt-1"
                  style={{ backgroundColor: featured.topicColor + '18', color: featured.topicColor }}
                >
                  {featured.topic}
                </span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-4">
              {featured.title}
            </h2>
            <p className="text-[16px] text-[#2D2D2D] leading-relaxed mb-6">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tags.map((tag) => (
                <span key={tag} className="text-[11px] border border-[#E8E8E8] px-2.5 py-1 text-[#7A7A7A]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium group-hover:text-[#00A896] transition-colors">
              Leer análisis completo
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>
          <div className="p-8 md:p-12 bg-[#FAFAFA] flex items-center justify-center">
            <div className="text-center">
              <div className="text-[80px] md:text-[100px] font-black tracking-tight leading-none text-black mb-3">
                {featured.stat}
              </div>
              <p className="text-[14px] text-[#6B6B6B] leading-snug max-w-[200px] mx-auto">
                {featured.statLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter + grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Topic filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          <button
            onClick={() => setActiveTopic(null)}
            className={`shrink-0 h-8 px-4 text-[12px] font-medium border transition-colors ${
              !activeTopic ? 'bg-black text-white border-black' : 'bg-white text-black border-[#E8E8E8] hover:border-black'
            }`}
          >
            Todos los temas
          </button>
          {ALL_TOPICS.map((topic) => {
            const color = CASE_STUDIES.find((c) => c.topic === topic)?.topicColor ?? '#000'
            return (
              <button
                key={topic}
                onClick={() => setActiveTopic((t) => (t === topic ? null : topic))}
                className={`shrink-0 h-8 px-4 text-[12px] font-medium border transition-colors flex items-center gap-1.5 ${
                  activeTopic === topic
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-[#E8E8E8] hover:border-black'
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: activeTopic === topic ? 'white' : color }}
                />
                {topic}
              </button>
            )
          })}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTopic ? filtered : rest).map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>

        {activeTopic && filtered.length === 0 && (
          <div className="text-center py-16 text-[#7A7A7A]">
            <p className="text-sm">No hay casos publicados en este tema aún.</p>
          </div>
        )}
      </div>

      {/* ── Why international context ── */}
      <div className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-4">
                Nuestra metodología
              </p>
              <h2 className="text-3xl font-black tracking-tight mb-5">
                ¿Por qué estudiamos otros países?
              </h2>
              <p className="text-[#E5E5E5] leading-relaxed text-[16px]">
                Los problemas de Costa Rica no son únicos. Otros países han enfrentado desafíos similares y han probado diferentes enfoques. Algunos funcionaron, otros fallaron. Estudiar esas experiencias nos da una base de evidencia más amplia para analizar opciones.
              </p>
            </div>
            <div className="space-y-5">
              {[
                ['Lo que SÍ hacemos', 'Analizar contexto, factores de éxito y fallo, y explicitar qué condiciones serían necesarias para aplicarlo en CR.'],
                ['Lo que NO hacemos', 'Decir "en país X funciona, entonces CR debe hacer lo mismo". Cada contexto es diferente.'],
                ['Nuestra regla', 'Cada caso internacional incluye una sección explícita de "Aplicabilidad a Costa Rica" con factores favorables y obstáculos.'],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-[#333333] pt-4">
                  <p className="text-[13px] font-semibold mb-1">{title}</p>
                  <p className="text-[14px] text-[#BDBDBD] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E8E8E8]">
        <NewsletterSection />
      </div>

      <Footer />
    </div>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

type CaseStudy = (typeof CASE_STUDIES)[number]

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className="border border-[#E8E8E8] hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer flex flex-col">
      {/* Stat band */}
      <div className="bg-[#FAFAFA] border-b border-[#E8E8E8] px-6 py-5 flex items-center justify-between">
        <div>
          <span className="text-3xl font-black tracking-tight">{cs.stat}</span>
          <p className="text-[11px] text-[#7A7A7A] leading-snug mt-1 max-w-[160px]">{cs.statLabel}</p>
        </div>
        <span className="text-3xl">{cs.flag}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-[11px] font-medium uppercase tracking-[0.07em] px-2 py-0.5"
            style={{ backgroundColor: cs.topicColor + '18', color: cs.topicColor }}
          >
            {cs.topic}
          </span>
          <span className="text-[11px] text-[#7A7A7A]">{cs.country}</span>
        </div>

        <h3 className="text-[16px] font-black tracking-tight leading-snug mb-3 flex-1">
          {cs.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {cs.tags.map((tag) => (
            <span key={tag} className="text-[10px] border border-[#F0F0F0] px-2 py-0.5 text-[#7A7A7A]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0] mt-auto">
          <span className="text-[12px] text-[#7A7A7A]">Análisis completo</span>
          <ChevronRight className="w-4 h-4 text-[#BDBDBD] group-hover:text-black transition-colors" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

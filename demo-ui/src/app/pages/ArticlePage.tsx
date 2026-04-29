import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { ChevronRight, Link2, Check, Download, ArrowLeft } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import NewsletterSection from '../components/shared/NewsletterSection'

// ─── Data ────────────────────────────────────────────────────────────────────

const routesByZone = [
  { zone: 'San José', rutas: 142 },
  { zone: 'Alajuela', rutas: 87 },
  { zone: 'Cartago', rutas: 68 },
  { zone: 'Heredia', rutas: 54 },
  { zone: 'Guanacaste', rutas: 45 },
  { zone: 'Pacífico', rutas: 38 },
  { zone: 'Limón', rutas: 32 },
  { zone: 'Zona Sur', rutas: 10 },
]

const tocSections = [
  { id: 'el-problema', label: 'El Problema' },
  { id: 'los-datos', label: 'Los Datos' },
  { id: 'contexto-internacional', label: 'Contexto Internacional' },
  { id: 'opciones', label: 'Opciones para CR' },
  { id: 'viabilidad', label: 'Viabilidad' },
]

const relatedArticles = [
  {
    id: 1,
    title: 'Listas de Espera CCSS: Análisis de Datos 2020–2025',
    category: 'SALUD PÚBLICA',
    categoryColor: '#E74C3C',
    type: 'Análisis Profundo',
    readTime: '18 min',
  },
  {
    id: 2,
    title: 'Chile y su Transantiago: Lecciones para Costa Rica',
    category: 'MOVILIDAD & TRANSPORTE',
    categoryColor: '#00D9C0',
    type: 'Contexto Internacional',
    readTime: '12 min',
  },
  {
    id: 3,
    title: 'Canasta Básica: Evolución del Costo de Vida 2020–2025',
    category: 'ECONOMÍA & FINANZAS',
    categoryColor: '#FFB629',
    type: 'Análisis de Datos',
    readTime: '8 min',
  },
]

// ─── X / Twitter icon (not in lucide) ────────────────────────────────────────
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25z" />
    </svg>
  )
}

// ─── Share buttons (reused inline and floating) ───────────────────────────────
function ShareButtons({
  onTwitter,
  onCopy,
  copied,
  size = 'md',
}: {
  onTwitter: () => void
  onCopy: () => void
  copied: boolean
  size?: 'sm' | 'md'
}) {
  const btn = size === 'sm'
    ? 'w-8 h-8 border border-[#E8E8E8] flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-200'
    : 'w-9 h-9 border border-[#E8E8E8] flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-200'
  const iconSz = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'

  return (
    <div className="flex items-center gap-2">
      <button onClick={onTwitter} className={btn} aria-label="Compartir en X / Twitter">
        <XIcon className={iconSz} />
      </button>
      <button
        onClick={onCopy}
        className={`flex items-center gap-1.5 px-3 border border-[#E8E8E8] text-xs hover:border-black transition-colors ${
          size === 'sm' ? 'h-8' : 'h-9'
        }`}
      >
        {copied ? (
          <><Check className={`${iconSz} text-[#00A896]`} strokeWidth={1.5} /><span className="text-[#00A896]">¡Copiado!</span></>
        ) : (
          <><Link2 className={iconSz} strokeWidth={1.5} /><span>Copiar enlace</span></>
        )}
      </button>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ArticlePage() {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('el-problema')
  const [copied, setCopied] = useState(false)
  const [showFloatingShare, setShowFloatingShare] = useState(false)
  const articleRef = useRef<HTMLElement>(null)

  // Reading progress + floating share visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return
      const rect = articleRef.current.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      setProgress(total > 0 ? Math.max(0, Math.min(100, (-rect.top / total) * 100)) : 100)
      setShowFloatingShare(window.scrollY > 520)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active ToC section tracking
  useEffect(() => {
    const handleScroll = () => {
      const OFFSET = 120
      let active = tocSections[0].id
      for (const { id } of tocSections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= OFFSET) active = id
      }
      setActiveSection(active)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const shareOnTwitter = () => {
    const text = 'Sistema de Numeración de Buses: El Caos que Pagamos Cada Día — @kukocr'
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#E8E8E8]">
        <div
          className="h-full bg-[#00A896]"
          style={{ width: `${progress}%`, transition: 'width 60ms linear' }}
        />
      </div>

      <Header />

      {/* ── Article header ──────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#7A7A7A] hover:text-black transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.5} />
          Todas las investigaciones
        </Link>

        {/* Category + type */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00D9C0] shrink-0" />
          <span className="text-[12px] font-medium uppercase tracking-[0.08em]">
            Movilidad & Transporte
          </span>
          <span className="text-[#E8E8E8]">·</span>
          <span className="text-[12px] text-[#7A7A7A] uppercase tracking-[0.06em]">Análisis Profundo</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-[52px] font-black tracking-tight leading-[1.08] mb-6">
          Sistema de Numeración de Buses: El Caos que Pagamos Cada Día
        </h1>

        {/* Deck */}
        <p className="text-[19px] md:text-xl text-[#2D2D2D] leading-relaxed mb-8">
          Con 476 rutas y sin lógica geográfica, Costa Rica tiene uno de los sistemas de transporte público más confusos de América Latina. Analizamos los datos, exploramos precedentes internacionales, y presentamos opciones reales.
        </p>

        {/* Metadata + share */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-b border-[#E8E8E8] py-4">
          <div className="flex items-center gap-2 text-sm text-[#7A7A7A]">
            <span className="font-semibold text-black">Carlos Cruz</span>
            <span>·</span>
            <span>Enero 2025</span>
            <span>·</span>
            <span>25 min lectura</span>
          </div>
          <ShareButtons onTwitter={shareOnTwitter} onCopy={copyLink} copied={copied} size="sm" />
        </div>
      </div>

      {/* ── Hero image ──────────────────────────────────────────────────── */}
      <div className="w-full h-[380px] md:h-[500px] bg-[#111111] flex items-end">
        <p className="px-6 pb-5 text-[#3A3A3A] text-[11px] uppercase tracking-widest">
          Fotografía editorial · Sistema de buses del Gran Área Metropolitana
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-6 mt-3">
        <p className="text-[13px] text-[#7A7A7A] text-center">
          La mayoría de las paradas del GAM carecen de señalización que indique número de ruta.
        </p>
      </div>

      {/* ── Body: ToC + article ─────────────────────────────────────────── */}
      <div className="max-w-[1120px] mx-auto px-6 py-14">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16 xl:gap-20">

          {/* Table of contents (desktop sticky) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[100px]">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-5 font-medium">
                En este artículo
              </p>
              <nav className="space-y-0.5">
                {tocSections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`block text-[13px] py-1.5 pl-3 border-l-2 transition-all duration-200 leading-snug ${
                      activeSection === id
                        ? 'border-[#00A896] text-black font-semibold'
                        : 'border-[#E8E8E8] text-[#7A7A7A] hover:text-black hover:border-[#BDBDBD]'
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {/* Estimated reading progress */}
              <div className="mt-8 pt-6 border-t border-[#E8E8E8]">
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-2">Progreso</p>
                <div className="h-1 bg-[#E8E8E8]">
                  <div
                    className="h-full bg-[#00A896]"
                    style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
                  />
                </div>
                <p className="text-[11px] text-[#7A7A7A] mt-1.5">{Math.round(progress)}%</p>
              </div>
            </div>
          </aside>

          {/* Article */}
          <article ref={articleRef} className="min-w-0">

            {/* TL;DR / En Resumen */}
            <div className="border-l-[3px] border-[#00A896] bg-[#FAFAFA] px-6 py-5 mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3 text-black">
                En resumen
              </p>
              <ul className="space-y-3">
                {[
                  'El sistema actual tiene 476 rutas numeradas de forma arbitraria, sin ninguna lógica geográfica.',
                  'Ciudades como Londres, Barcelona y Bogotá reformaron sus sistemas con mejoras del 15–30% en tiempos de viaje.',
                  'Una reforma gradual (Opción B) es técnicamente viable en 18–24 meses con inversión estimada en ₡2,400 millones.',
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[#2D2D2D]">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#00A896] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lede */}
            <div className="max-w-[680px]">
              <p className="text-[19px] leading-[1.75] text-[#1A1A1A] font-medium mb-7">
                Son las 7:15 de la mañana en la parada del Paseo Colón. Hay cinco personas mirando sus teléfonos, tratando de descifrar cuál de los cuatro buses que se acercan va hacia Desamparados. Ninguna parada tiene mapa. Ningún bus tiene número visible desde 50 metros. Este es el estado del transporte público costarricense en 2025.
              </p>

              {/* ── Sección 1 ── */}
              <h2
                id="el-problema"
                className="text-2xl md:text-[30px] font-black tracking-tight mt-14 mb-5 scroll-mt-[100px]"
              >
                El Problema
              </h2>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                El Consejo de Transporte Público (CTP) administra actualmente 476 rutas en todo el país. Esos números fueron asignados históricamente, sin criterio geográfico, sin coherencia regional, y sin ningún sistema que permita al pasajero inferir destino o recorrido a partir del número de la ruta.
              </p>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                La ruta 200 no guarda ninguna relación lógica con la 201. La ruta 400 no está cerca de la 401. Muchas tienen números de cuatro cifras sin lógica zonal. El resultado: un sistema que solo puede navegarse con conocimiento local previo o con una aplicación móvil, excluyendo a adultos mayores, turistas y personas que se mudan a nuevas zonas.
              </p>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                Este no es un problema estético. Es una barrera de acceso. Estudios en ciudades comparables muestran que la legibilidad del sistema de transporte tiene correlación directa con su adopción, especialmente entre los grupos que más dependen de él.
              </p>
            </div>

            {/* ── Chart ── */}
            <div className="my-10 border border-[#E8E8E8] p-6 bg-[#FAFAFA]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] mb-1">
                Rutas de bus por provincia
              </p>
              <p className="text-[13px] text-[#7A7A7A] mb-5">
                Total de 476 rutas activas registradas ante el CTP (2024)
              </p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={routesByZone} layout="vertical" margin={{ left: 0, right: 24, top: 0, bottom: 0 }}>
                  <XAxis
                    type="number"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: '#7A7A7A' }}
                  />
                  <YAxis
                    type="category"
                    dataKey="zone"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#2D2D2D' }}
                    width={82}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #000', borderRadius: 0, fontSize: 12 }}
                    formatter={(v) => [`${v} rutas`, '']}
                    cursor={{ fill: '#F5F5F5' }}
                  />
                  <Bar dataKey="rutas" radius={0}>
                    {routesByZone.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? '#000000' : '#2D2D2D'} opacity={1 - i * 0.07} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[12px] text-[#7A7A7A] mt-4">
                Fuente: Consejo de Transporte Público, solicitud SAIP #2024-0341
              </p>
            </div>

            <div className="max-w-[680px]">

              {/* ── Sección 2 ── */}
              <h2
                id="los-datos"
                className="text-2xl md:text-[30px] font-black tracking-tight mt-14 mb-5 scroll-mt-[100px]"
              >
                Los Datos: Un Sistema Sin Lógica
              </h2>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                De las 476 rutas activas, KUKO analizó los criterios de numeración disponibles en los registros públicos del CTP. El 73% tiene un número asignado antes de 1990, cuando el criterio principal era la fecha de concesión, no la geografía. El 18% tiene números de cuatro cifras, asignados en los 2000 para nuevas rutas periféricas.
              </p>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                Solo el 9% de las rutas tiene algún patrón numérico que permita inferir zona geográfica. Para comparación, el sistema de Londres clasifica el 100% de sus rutas bajo esquemas comprensibles: rutas con número bajo (&lt;100) operan en el centro, prefijos de letra indican corredores específicos.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-[3px] border-[#E8E8E8] pl-7 my-10">
                <p className="text-[22px] font-light leading-[1.45] text-[#000000]">
                  "Un sistema de numeración incoherente no es solo un inconveniente: es una barrera de acceso que afecta desproporcionadamente a quienes más dependen del transporte público."
                </p>
                <cite className="block mt-4 text-[12px] text-[#7A7A7A] not-italic uppercase tracking-[0.06em]">
                  Informe de Movilidad Urbana · BID, 2023
                </cite>
              </blockquote>

              {/* ── Sección 3 ── */}
              <h2
                id="contexto-internacional"
                className="text-2xl md:text-[30px] font-black tracking-tight mt-14 mb-5 scroll-mt-[100px]"
              >
                Contexto Internacional
              </h2>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                Antes de proponer soluciones, es necesario entender cómo lo resolvieron otros. Tres casos son especialmente relevantes por sus similitudes con Costa Rica: Bogotá (reforma estructural de red completa), Barcelona (rediseño de nomenclatura con red existente), y Auckland (reforma gradual en 18 meses).
              </p>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-4">
                Lo que tienen en común los tres casos exitosos:
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  {
                    city: 'Bogotá (TransMilenio)',
                    point: 'Reorganizó las rutas por corredores con prefijos de letra + número, reduciendo el tiempo de aprendizaje del sistema a menos de una semana para usuarios frecuentes.',
                  },
                  {
                    city: 'Barcelona (TMB)',
                    point: 'Usó rangos numéricos por zona (1–99 centro, 100–199 norte, etc.) sin cambiar los recorridos físicos. Adoptado en 8 meses con resistencia mínima.',
                  },
                  {
                    city: 'Auckland (NZ)',
                    point: 'Implementó un sistema de "inteligibilidad por color + número" en paradas físicas y digitales, con mejora del 23% en satisfacción de usuarios en 12 meses.',
                  },
                ].map(({ city, point }) => (
                  <li key={city} className="flex gap-3 text-[17px] leading-[1.7] text-[#2D2D2D]">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#00A896] shrink-0" />
                    <span>
                      <strong className="text-black font-semibold">{city}: </strong>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                El factor común no es el presupuesto: es la decisión política de priorizar la legibilidad del sistema. En todos los casos, el costo de implementación fue menor a lo estimado porque los cambios se hicieron gradualmente, aprovechando renovaciones de señalética ya programadas.
              </p>

              {/* ── Sección 4 ── */}
              <h2
                id="opciones"
                className="text-2xl md:text-[30px] font-black tracking-tight mt-14 mb-5 scroll-mt-[100px]"
              >
                Opciones para Costa Rica
              </h2>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-6">
                KUKO identifica tres opciones de diferente profundidad y costo. Las presentamos sin prescribir: cada una tiene ventajas y limitaciones reales, y la elección óptima depende de factores políticos y presupuestarios que van más allá del análisis técnico.
              </p>

              {/* Options */}
              {[
                {
                  label: 'Opción A — Nomenclatura sin cambio de ruta',
                  text: 'Reasignar números bajo un esquema geográfico (p.ej. 100–199 para rutas del GAM norte, 200–299 para GAM sur) sin modificar los recorridos físicos. Menor impacto operativo pero requiere campaña de comunicación masiva. Costo estimado: ₡180 millones.',
                },
                {
                  label: 'Opción B — Nomenclatura + señalética integrada',
                  text: 'La Opción A más actualización de señalética en las 200 paradas de mayor flujo del GAM. Costo estimado: ₡2,400 millones. Período de implementación: 18 meses. La mejor relación costo-impacto según los casos internacionales revisados.',
                },
                {
                  label: 'Opción C — Reforma estructural completa',
                  text: 'Rediseño completo de la red con nuevos corredores, nueva nomenclatura e integración tarifaria. Similar al modelo Bogotá. Alta complejidad política y técnica, horizonte de 5–8 años, pero el único cambio que aborda el problema de raíz.',
                },
              ].map(({ label, text }) => (
                <div key={label} className="mb-6">
                  <p className="text-[17px] font-semibold text-black mb-2">{label}</p>
                  <p className="text-[17px] leading-[1.75] text-[#2D2D2D]">{text}</p>
                </div>
              ))}

              {/* ── Sección 5 ── */}
              <h2
                id="viabilidad"
                className="text-2xl md:text-[30px] font-black tracking-tight mt-14 mb-5 scroll-mt-[100px]"
              >
                Viabilidad: ¿Es Posible?
              </h2>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                Técnicamente, la Opción B es viable en el plazo indicado. El CTP tiene potestad legal para modificar la nomenclatura de rutas sin necesidad de cambiar los contratos de concesión vigentes. La ARESEP debe ser notificada pero no tiene poder de veto sobre cambios de nomenclatura.
              </p>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-5">
                El obstáculo real no es legal ni técnico: es político. Cualquier cambio en el número de una ruta requiere notificación a los operadores con al menos 90 días de anticipación. Con 476 rutas distribuidas entre cientos de operadores, esto exige coordinación a una escala que el CTP históricamente no ha demostrado capacidad de gestionar.
              </p>
              <p className="text-[17px] leading-[1.75] text-[#2D2D2D] mb-10">
                La pregunta no es si Costa Rica puede tener un mejor sistema. Claramente puede. La pregunta es si existe voluntad de construir la coordinación institucional necesaria para implementarlo. Eso, lamentablemente, está fuera del alcance del análisis de datos.
              </p>
            </div>

            {/* ── Sources section ── */}
            <div className="bg-[#FAFAFA] border border-[#E8E8E8] px-6 py-8 mt-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.06em] mb-1">
                Fuentes y Metodología
              </p>
              <div className="w-full h-px bg-[#E8E8E8] mb-6" />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[13px] font-medium text-black mb-3">Datos utilizados</p>
                  <ul className="space-y-2">
                    {[
                      'CTP — Registro de rutas activas, SAIP #2024-0341',
                      'INEC — Encuesta de Hogares 2023, módulo movilidad',
                      'BID — Informe de Movilidad Urbana América Latina, 2023',
                      'Transport for London — Annual Report 2023',
                      'Auckland Transport Satisfaction Survey, 2023',
                    ].map((s, i) => (
                      <li key={i} className="text-[14px] text-[#2D2D2D] leading-relaxed flex gap-2">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#7A7A7A] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-black mb-3">Nota metodológica</p>
                  <p className="text-[14px] text-[#2D2D2D] leading-relaxed">
                    Los datos de rutas del CTP fueron obtenidos vía solicitud SAIP en octubre de 2024. Los datos de satisfacción de Auckland corresponden al Auckland Transport Satisfaction Survey 2023. Las estimaciones de costo de la Opción B son propias, basadas en cotizaciones de señalética vial industrial y proyectos similares ejecutados en Costa Rica entre 2022–2024.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-black text-sm hover:bg-black hover:text-white transition-colors">
                  <Download className="w-4 h-4" strokeWidth={1.5} />
                  Descargar datos (CSV)
                </button>
              </div>
            </div>

            {/* ── Share at end ── */}
            <div className="border-t border-[#E8E8E8] pt-7 mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12px] text-[#7A7A7A] uppercase tracking-[0.08em]">
                Compartir este análisis
              </p>
              <ShareButtons onTwitter={shareOnTwitter} onCopy={copyLink} copied={copied} />
            </div>
          </article>
        </div>
      </div>

      {/* Floating share sidebar — desktop only, after scroll */}
      {showFloatingShare && (
        <div className="hidden xl:flex fixed left-[max(1.5rem,calc(50%-590px))] top-1/2 -translate-y-1/2 flex-col items-center gap-2.5 z-30">
          <button
            onClick={shareOnTwitter}
            className="w-9 h-9 bg-white border border-[#E8E8E8] flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-200"
            aria-label="Compartir en X / Twitter"
          >
            <XIcon className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={copyLink}
            className="w-9 h-9 bg-white border border-[#E8E8E8] flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-200"
            aria-label="Copiar enlace"
          >
            {copied
              ? <Check className="w-3.5 h-3.5 text-[#00A896]" strokeWidth={1.5} />
              : <Link2 className="w-3.5 h-3.5" strokeWidth={1.5} />}
          </button>
          <div className="w-px h-5 bg-[#E8E8E8]" />
          <span
            className="text-[9px] text-[#7A7A7A] uppercase tracking-[0.12em] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Compartir
          </span>
        </div>
      )}

      {/* Newsletter */}
      <div className="border-t border-[#E8E8E8]">
        <NewsletterSection />
      </div>

      {/* Related articles */}
      <section className="max-w-7xl mx-auto px-6 pb-16 border-t border-[#E8E8E8] pt-12">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-8">
          Más Investigaciones
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((art) => (
            <article
              key={art.id}
              className="border border-[#E8E8E8] p-6 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="inline-block px-2.5 py-0.5 text-[11px] uppercase tracking-wide font-medium"
                  style={{ backgroundColor: art.categoryColor + '20', color: art.categoryColor }}
                >
                  {art.type}
                </span>
              </div>
              <h4 className="text-[17px] font-black tracking-tight leading-snug mb-3">
                {art.title}
              </h4>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[12px] text-[#7A7A7A]">{art.readTime} lectura</span>
                <ChevronRight className="w-4 h-4 text-[#7A7A7A] group-hover:text-black transition-colors" strokeWidth={1.5} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

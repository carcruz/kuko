import { useState } from 'react'
import { Download, ExternalLink, ChevronRight } from 'lucide-react'
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell,
} from 'recharts'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

// ─── Chart data ───────────────────────────────────────────────────────────────

const waitlistData = [
  { year: '2020', cirugias: 42, consultas: 125 },
  { year: '2021', cirugias: 51, consultas: 148 },
  { year: '2022', cirugias: 58, consultas: 165 },
  { year: '2023', cirugias: 64, consultas: 189 },
  { year: '2024', cirugias: 71, consultas: 210 },
  { year: '2025', cirugias: 68, consultas: 205 },
]

const canastaBásicaData = [
  { year: '2020', canasta: 108390, salario: 315588 },
  { year: '2021', canasta: 114200, salario: 328180 },
  { year: '2022', canasta: 129500, salario: 340962 },
  { year: '2023', canasta: 140800, salario: 365204 },
  { year: '2024', canasta: 148200, salario: 381442 },
  { year: '2025', canasta: 145600, salario: 398000 },
]

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

const digitalBrechaSeries = [
  { year: '2019', acceso: 62, sinAcceso: 38 },
  { year: '2020', acceso: 65, sinAcceso: 35 },
  { year: '2021', acceso: 69, sinAcceso: 31 },
  { year: '2022', acceso: 71, sinAcceso: 29 },
  { year: '2023', acceso: 72, sinAcceso: 28 },
]

// ─── Dataset metadata ─────────────────────────────────────────────────────────

const DATASETS = [
  {
    id: 1,
    title: 'Rutas de Bus por Provincia',
    description: 'Registro completo de 476 rutas activas del CTP con número, nombre, origen, destino y operador.',
    source: 'CTP — SAIP #2024-0341',
    updated: 'Oct 2024',
    rows: '476 registros',
    format: 'CSV',
    category: 'Movilidad',
    categoryColor: '#00A896',
  },
  {
    id: 2,
    title: 'Listas de Espera CCSS 2020–2025',
    description: 'Datos mensuales de espera quirúrgica y consulta especializada por especialidad y centro de salud.',
    source: 'CCSS — Transparencia',
    updated: 'Ene 2025',
    rows: '8,640 registros',
    format: 'CSV + JSON',
    category: 'Salud',
    categoryColor: '#E85D75',
  },
  {
    id: 3,
    title: 'Canasta Básica y Salarios 2018–2025',
    description: 'Serie histórica de canasta básica alimentaria y no alimentaria vs. salario mínimo por categoría.',
    source: 'INEC + MTSS',
    updated: 'Dic 2024',
    rows: '2,880 registros',
    format: 'CSV',
    category: 'Economía',
    categoryColor: '#F5A623',
  },
  {
    id: 4,
    title: 'Acceso a Internet por Región',
    description: 'Porcentaje de hogares con acceso a internet de banda ancha por región y quintil de ingreso.',
    source: 'MICITT + INEC',
    updated: 'Sep 2024',
    rows: '1,260 registros',
    format: 'CSV',
    category: 'Tecnología',
    categoryColor: '#9B59B6',
  },
]

const UPCOMING = [
  {
    title: 'Déficit Habitacional GAM por Cantón',
    eta: 'Feb 2025',
    category: 'Urbanismo',
    categoryColor: '#FF6B35',
  },
  {
    title: 'Rendimiento PISA por Tipo de Centro Educativo',
    eta: 'Mar 2025',
    category: 'Educación',
    categoryColor: '#5B8DEE',
  },
  {
    title: 'Recaudación Tributaria por Sector 2010–2024',
    eta: 'Mar 2025',
    category: 'Economía',
    categoryColor: '#F5A623',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

const CHART_TABS = ['Listas de Espera', 'Canasta Básica', 'Rutas de Bus', 'Brecha Digital']

export default function DatosPage() {
  const [activeChart, setActiveChart] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Page header ── */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-3">Bases de datos</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">Datos</h1>
          <p className="text-[#2D2D2D] text-lg max-w-xl">
            Todos los datos que usamos en nuestros análisis son públicos y descargables. La transparencia metodológica no es opcional.
          </p>
        </div>
      </div>

      {/* ── Interactive charts ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#E8E8E8]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-6">
          Explorador de datos
        </p>

        {/* Chart tabs */}
        <div className="flex gap-0 border-b border-[#E8E8E8] mb-8 overflow-x-auto">
          {CHART_TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveChart(i)}
              className={`shrink-0 px-5 py-3 text-[13px] font-medium border-b-2 -mb-px transition-colors ${
                activeChart === i
                  ? 'border-black text-black'
                  : 'border-transparent text-[#7A7A7A] hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chart panel */}
        <div className="border border-[#E8E8E8] p-6 md:p-8 bg-[#FAFAFA]">
          {activeChart === 0 && (
            <ChartPanel
              title="Listas de espera CCSS"
              subtitle="Miles de personas en espera quirúrgica y de consulta especializada (2020–2025)"
              source="CCSS — Transparencia institucional"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={waitlistData}>
                  <CartesianGrid stroke="#F0F0F0" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#7A7A7A' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#7A7A7A' }} unit="k" />
                  <Tooltip
                    contentStyle={{ border: '1px solid #000', borderRadius: 0, fontSize: 12, background: '#fff' }}
                    formatter={(v, name) => [
                      `${v}k personas`,
                      name === 'cirugias' ? 'Espera quirúrgica' : 'Consulta especializada',
                    ]}
                  />
                  <Line type="monotone" dataKey="cirugias" stroke="#E85D75" strokeWidth={2.5} dot={{ r: 4, fill: '#E85D75' }} name="cirugias" />
                  <Line type="monotone" dataKey="consultas" stroke="#1A1A1A" strokeWidth={2.5} strokeDasharray="5 4" dot={{ r: 4, fill: '#1A1A1A' }} name="consultas" />
                </LineChart>
              </ResponsiveContainer>
            </ChartPanel>
          )}

          {activeChart === 1 && (
            <ChartPanel
              title="Canasta básica vs. salario mínimo"
              subtitle="Colones corrientes — canasta básica no alimentaria vs. salario mínimo genérico (2020–2025)"
              source="INEC + Ministerio de Trabajo"
            >
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={canastaBásicaData}>
                  <CartesianGrid stroke="#F0F0F0" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#7A7A7A' }} />
                  <YAxis
                    axisLine={false} tickLine={false}
                    tick={{ fontSize: 12, fill: '#7A7A7A' }}
                    tickFormatter={(v) => `₡${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{ border: '1px solid #000', borderRadius: 0, fontSize: 12, background: '#fff' }}
                    formatter={(v) => [`₡${Number(v).toLocaleString('es-CR')}`, '']}
                  />
                  <Area type="monotone" dataKey="salario" stroke="#1A1A1A" fill="#F5F5F5" strokeWidth={2} name="Salario mínimo" />
                  <Area type="monotone" dataKey="canasta" stroke="#F5A623" fill="#F5A62322" strokeWidth={2} name="Canasta básica" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartPanel>
          )}

          {activeChart === 2 && (
            <ChartPanel
              title="Rutas de bus por provincia"
              subtitle="Distribución de las 476 rutas activas registradas ante el CTP (2024)"
              source="CTP — Solicitud SAIP #2024-0341"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={routesByZone} layout="vertical" margin={{ left: 0, right: 24 }}>
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#7A7A7A' }} />
                  <YAxis type="category" dataKey="zone" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#2D2D2D' }} width={82} />
                  <Tooltip
                    contentStyle={{ border: '1px solid #000', borderRadius: 0, fontSize: 12, background: '#fff' }}
                    formatter={(v) => [`${v} rutas`, '']}
                    cursor={{ fill: '#F5F5F5' }}
                  />
                  <Bar dataKey="rutas" radius={0}>
                    {routesByZone.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? '#000' : '#2D2D2D'} opacity={1 - i * 0.07} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartPanel>
          )}

          {activeChart === 3 && (
            <ChartPanel
              title="Acceso a internet de banda ancha"
              subtitle="Porcentaje de hogares costarricenses con y sin acceso a internet (2019–2023)"
              source="MICITT — Informe de Telecomunicaciones anual"
            >
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={digitalBrechaSeries}>
                  <CartesianGrid stroke="#F0F0F0" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#7A7A7A' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#7A7A7A' }} unit="%" />
                  <Tooltip
                    contentStyle={{ border: '1px solid #000', borderRadius: 0, fontSize: 12, background: '#fff' }}
                    formatter={(v) => [`${v}%`, '']}
                  />
                  <Area type="monotone" dataKey="acceso" stroke="#1A1A1A" fill="#F5F5F5" strokeWidth={2} name="Con acceso" stackId="1" />
                  <Area type="monotone" dataKey="sinAcceso" stroke="#9B59B6" fill="#9B59B618" strokeWidth={2} name="Sin acceso" stackId="1" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartPanel>
          )}
        </div>
      </div>

      {/* ── Datasets ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#E8E8E8]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-10">
          Bases de datos descargables
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {DATASETS.map((ds) => (
            <div
              key={ds.id}
              className="border border-[#E8E8E8] p-6 hover:border-black transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.07em] px-2.5 py-0.5"
                  style={{ backgroundColor: ds.categoryColor + '18', color: ds.categoryColor }}
                >
                  {ds.category}
                </span>
                <span className="text-[11px] text-[#7A7A7A] uppercase tracking-[0.06em] bg-[#F5F5F5] px-2 py-0.5">
                  {ds.format}
                </span>
              </div>
              <h3 className="text-[18px] font-black tracking-tight mb-2">{ds.title}</h3>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-5">{ds.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[12px] text-[#7A7A7A]">
                    Fuente: <span className="text-black">{ds.source}</span>
                  </span>
                  <span className="text-[12px] text-[#7A7A7A]">
                    {ds.rows} · Actualizado {ds.updated}
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#E8E8E8] text-[13px] group-hover:border-black hover:bg-black hover:text-white transition-all">
                  <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Descargar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Upcoming ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#E8E8E8]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-8">
          Próximas publicaciones
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {UPCOMING.map((item) => (
            <div key={item.title} className="border border-dashed border-[#E8E8E8] p-6">
              <span
                className="text-[11px] font-medium uppercase tracking-[0.07em] px-2.5 py-0.5 inline-block mb-4"
                style={{ backgroundColor: item.categoryColor + '18', color: item.categoryColor }}
              >
                {item.category}
              </span>
              <p className="text-[16px] font-semibold tracking-tight mb-2">{item.title}</p>
              <p className="text-[12px] text-[#7A7A7A] uppercase tracking-[0.06em]">
                Publicación estimada: {item.eta}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── API note ── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="border border-[#E8E8E8] p-8 bg-[#FAFAFA] flex flex-col md:flex-row gap-6 items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-3">API pública</p>
            <h3 className="text-xl font-black tracking-tight mb-2">Acceso programático</h3>
            <p className="text-[14px] text-[#2D2D2D] leading-relaxed max-w-lg">
              Todos los datasets de KUKO están disponibles como JSON a través de nuestra API pública. Sin autenticación, sin límites de uso razonables.
            </p>
          </div>
          <button className="shrink-0 flex items-center gap-2 px-5 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
            Ver documentación
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// ─── Chart panel wrapper ──────────────────────────────────────────────────────

function ChartPanel({
  title, subtitle, source, children,
}: {
  title: string
  subtitle: string
  source: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-[17px] font-semibold tracking-tight">{title}</p>
          <p className="text-[13px] text-[#7A7A7A] mt-1">{subtitle}</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E8E8E8] text-[12px] text-[#7A7A7A] hover:border-black hover:text-black transition-colors">
          <Download className="w-3 h-3" strokeWidth={1.5} />
          CSV
        </button>
      </div>
      {children}
      <p className="text-[12px] text-[#7A7A7A] mt-4">Fuente: {source}</p>
    </div>
  )
}

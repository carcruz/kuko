import { Link } from 'react-router'
import { Mail, ChevronRight } from 'lucide-react'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

const healthWaitlistData = [
  { year: '2020', cirugias: 42000 },
  { year: '2021', cirugias: 51000 },
  { year: '2022', cirugias: 58000 },
  { year: '2023', cirugias: 64000 },
  { year: '2024', cirugias: 71000 },
  { year: '2025', cirugias: 68000 },
]

const busWaitTimeData = [
  { route: 'SJ-Heredia', tiempo: 18 },
  { route: 'SJ-Cartago', tiempo: 25 },
  { route: 'SJ-Alajuela', tiempo: 15 },
]

const investigations = [
  {
    id: 2,
    slug: null,
    title: 'Chile y su Transantiago: Lecciones para Costa Rica',
    category: 'MOVILIDAD & TRANSPORTE',
    categoryColor: '#00D9C0',
    excerpt: '¿Qué podemos aprender de la implementación del sistema de transporte público integrado en Santiago?',
    readTime: '12 min',
    type: 'Contexto Internacional',
  },
  {
    id: 3,
    slug: null,
    title: 'Canasta Básica: Evolución del Costo de Vida 2020–2025',
    category: 'ECONOMÍA & FINANZAS',
    categoryColor: '#FFB629',
    excerpt: 'Visualización de datos sobre el incremento del costo de la canasta básica y su impacto en diferentes sectores.',
    readTime: '8 min',
    type: 'Análisis de Datos',
  },
  {
    id: 4,
    slug: null,
    title: '¿Qué son las Pruebas PISA y Por Qué Importan?',
    category: 'EDUCACIÓN',
    categoryColor: '#4ECDC4',
    excerpt: 'Desmitificamos las evaluaciones internacionales de educación y su relevancia para el sistema educativo costarricense.',
    readTime: '10 min',
    type: 'Explicador',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero: Featured Data Story */}
      <section className="max-w-7xl mx-auto px-6 py-12" id="investigaciones">
        <Link
          to="/articulo/sistema-numeracion-buses"
          className="block border border-black mb-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black">
              <div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs uppercase tracking-wide font-medium bg-[#E74C3C]/20 text-[#E74C3C]">
                    Salud Pública
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] mb-4">
                  Listas de Espera CCSS: +68% en Cinco Años
                </h2>
                <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6">
                  Las listas de espera para cirugías han aumentado de 42,000 a 68,000 personas desde 2020. Analizamos las causas, comparamos con sistemas regionales, y exploramos soluciones implementadas en otros países.
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#6B6B6B]">
                <span>Enero 2025</span>
                <span>·</span>
                <span>18 min lectura</span>
                <ChevronRight className="w-4 h-4 ml-auto text-[#6B6B6B] group-hover:text-black transition-colors" />
              </div>
            </div>

            <div className="p-8 md:p-12 bg-[#FAFAFA] flex items-center">
              <div className="w-full">
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={healthWaitlistData}>
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} tickFormatter={(v) => `${v / 1000}k`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'white', border: '1px solid #000', borderRadius: 0, fontSize: 12 }}
                      formatter={(v) => [Number(v).toLocaleString(), 'Cirugías']}
                    />
                    <Line type="monotone" dataKey="cirugias" stroke="#E74C3C" strokeWidth={3} dot={{ fill: '#E74C3C', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs text-[#6B6B6B] mt-3 text-center">
                  Personas en lista de espera quirúrgica (2020–2025)
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Three-column grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Bus article → links to the article page */}
          <Link
            to="/articulo/sistema-numeracion-buses"
            className="block border border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-wide font-medium bg-[#00D9C0]/20 text-[#00D9C0]">
                Movilidad & Transporte
              </span>
            </div>
            <h3 className="text-xl font-black tracking-tight mb-3 leading-tight">
              Sistema de Numeración de Buses: El Caos que Pagamos Cada Día
            </h3>
            <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">
              Exploramos sistemas internacionales y opciones viables para Costa Rica.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B6B6B]">25 min</span>
              <ChevronRight className="w-4 h-4 text-[#6B6B6B] group-hover:text-black transition-colors" />
            </div>
          </Link>

          {/* Economy mini story */}
          <article className="border border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer">
            <div className="p-6 border-b border-black">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs uppercase tracking-wide font-medium bg-[#FFB629]/20 text-[#FFB629]">
                  Economía & Finanzas
                </span>
              </div>
              <h3 className="text-xl font-black tracking-tight leading-tight">
                Canasta Básica: +34% desde 2020
              </h3>
            </div>
            <div className="p-4 bg-[#FAFAFA]">
              <ResponsiveContainer width="100%" height={110}>
                <BarChart data={busWaitTimeData}>
                  <Bar dataKey="tiempo" fill="#FFB629" radius={0} />
                  <XAxis dataKey="route" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B6B6B' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          {/* Education story */}
          <article className="border border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-wide font-medium bg-[#4ECDC4]/20 text-[#4ECDC4]">
                Educación
              </span>
            </div>
            <h3 className="text-xl font-black tracking-tight mb-3 leading-tight">
              {investigations[2].title}
            </h3>
            <p className="text-sm text-[#6B6B6B] mb-4 leading-relaxed">
              {investigations[2].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B6B6B]">{investigations[2].readTime}</span>
              <ChevronRight className="w-4 h-4 text-[#6B6B6B] group-hover:text-black transition-colors" />
            </div>
          </article>
        </div>
      </section>

      {/* More investigations */}
      <section className="max-w-7xl mx-auto px-6 py-12" id="datos">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">Más Investigaciones</h3>
          <p className="text-[#6B6B6B]">Análisis basados en datos para entender Costa Rica</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {investigations.slice(0, 2).map((inv) => (
            <article
              key={inv.id}
              className="border border-black p-8 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="inline-block px-3 py-1 text-xs uppercase tracking-wide font-medium"
                  style={{ backgroundColor: inv.categoryColor + '20', color: inv.categoryColor }}
                >
                  {inv.category}
                </span>
                <span className="text-xs text-[#6B6B6B] uppercase tracking-wide">{inv.type}</span>
              </div>
              <h4 className="text-2xl font-black tracking-tight mb-4">{inv.title}</h4>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">{inv.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B6B6B]">{inv.readTime} lectura</span>
                <ChevronRight className="w-5 h-5 text-[#6B6B6B] group-hover:text-black transition-colors" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors font-medium text-sm">
            Ver Todas las Investigaciones
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl md:text-6xl font-black tracking-tight mb-4">476</div>
              <p className="text-[#E5E5E5] leading-relaxed">
                Rutas de bus registradas sin sistema de numeración geográfico coherente
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black tracking-tight mb-4">68%</div>
              <p className="text-[#E5E5E5] leading-relaxed">
                Aumento en listas de espera quirúrgica en CCSS desde 2020
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black tracking-tight mb-4">24k</div>
              <p className="text-[#E5E5E5] leading-relaxed">
                Horas de tráfico perdidas anualmente por conductor promedio en San José
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-10 h-10 mx-auto mb-6" strokeWidth={1.5} />
          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Análisis en tu Bandeja
          </h3>
          <p className="text-lg text-[#1A1A1A] mb-8">
            Recibe nuestras investigaciones quincenalmente. Sin spam, solo pensamiento crítico.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 h-[52px] px-5 border border-black sm:border-r-0 focus:outline-none focus:border-[#00A896] text-sm placeholder:text-[#7A7A7A]"
            />
            <button
              type="submit"
              className="h-[52px] bg-black text-white px-6 border border-black hover:bg-[#1A1A1A] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
          <p className="text-xs text-[#6B6B6B] mt-4">
            Puedes cancelar tu suscripción en cualquier momento.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

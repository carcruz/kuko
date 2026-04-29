import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

const PRINCIPLES = [
  {
    n: '01',
    title: 'Evidencia primero',
    text: 'Toda afirmación está sustentada en datos verificables y fuentes públicamente accesibles.',
  },
  {
    n: '02',
    title: 'Transparencia metodológica',
    text: 'Mostramos cómo llegamos a nuestras conclusiones. Los datos y el código analítico son descargables.',
  },
  {
    n: '03',
    title: 'Contexto sobre prescripción',
    text: 'Presentamos opciones y escenarios, no "LA solución". Los problemas complejos merecen análisis plural.',
  },
  {
    n: '04',
    title: 'Honestidad intelectual',
    text: 'Decimos "no sabemos" cuando aplica. Reconocemos las limitaciones de los datos y los sesgos posibles.',
  },
  {
    n: '05',
    title: 'Actualización continua',
    text: 'Revisamos nuestros análisis cuando hay nuevos datos. Las investigaciones no se "congelan".',
  },
  {
    n: '06',
    title: 'Independencia editorial',
    text: 'No aceptamos financiamiento de partidos políticos ni de empresas con conflicto de interés en los temas que cubrimos.',
  },
]

const VALUES = [
  { label: 'Rigor', desc: 'Metodología científica y transparente' },
  { label: 'Claridad', desc: 'Accesible sin perder profundidad' },
  { label: 'Honestidad', desc: 'Reconocemos limitaciones' },
  { label: 'Contexto', desc: 'No hay soluciones copy-paste' },
  { label: 'Independencia', desc: 'Sin agenda política' },
  { label: 'Humildad', desc: 'No pretendemos tener todas las respuestas' },
]

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Hero statement ── */}
      <div className="border-b border-black">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-6">
            Acerca de KUKO
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-8">
            Pensamiento crítico para Costa Rica.
          </h1>
          <p className="text-xl md:text-2xl text-[#2D2D2D] leading-relaxed max-w-3xl">
            KUKO es un medio digital costarricense de periodismo de investigación basado en datos. Investigamos problemas complejos con rigor, exploramos opciones y contextos internacionales, y presentamos evidencia sin imponer soluciones únicas.
          </p>
        </div>
      </div>

      {/* ── Origin ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#E8E8E8]">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-5">El nombre</p>
            <h2 className="text-3xl font-black tracking-tight mb-5">¿Por qué KUKO?</h2>
            <p className="text-[17px] text-[#2D2D2D] leading-[1.7] mb-5">
              <strong className="text-black">KUKO</strong> viene del idioma <strong className="text-black">cabécar</strong>, una de las lenguas indígenas de Costa Rica. Significa <em>pensamiento</em>, <em>mente</em>.
            </p>
            <p className="text-[17px] text-[#2D2D2D] leading-[1.7]">
              Elegimos este nombre porque representa lo que queremos fomentar: pensamiento crítico, análisis profundo, y la disposición a cuestionar para entender mejor. Antes de comprometer el nombre, consultamos con lingüistas de la UCR y con representantes de las comunidades cabécares sobre el uso respetuoso del término.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-5">La filosofía</p>
            <blockquote className="border-l-[3px] border-[#00A896] pl-6 mb-8">
              <p className="text-xl font-light leading-[1.45] text-black">
                "El pensamiento crítico no es contradecir por contradecir, es cuestionar para entender mejor."
              </p>
            </blockquote>
            <blockquote className="border-l-[3px] border-[#E8E8E8] pl-6">
              <p className="text-xl font-light leading-[1.45] text-black">
                "No todas las preguntas tienen respuestas fáciles. Eso las hace más importantes, no menos."
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* ── Somos / No somos ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#E8E8E8]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-10">Identidad editorial</p>
        <div className="grid md:grid-cols-2 gap-0 border border-black">
          {/* Somos */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black">
            <h3 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3">
              <span className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center font-medium">✓</span>
              Lo que KUKO ES
            </h3>
            <ul className="space-y-3.5">
              {[
                ['Basado en evidencia', 'Todo sustentado en datos verificables y reproducibles.'],
                ['Riguroso pero accesible', 'Profundo sin ser aburrido. Técnico sin ser inaccesible.'],
                ['Honesto sobre limitaciones', 'Decimos "no sabemos" cuando aplica.'],
                ['Contextual', 'Estudiamos casos internacionales para aprender, no para copiar.'],
                ['Constructivo', 'Crítico con propósito de mejorar, no de demoler.'],
                ['Actualizable', 'Revisamos análisis cuando hay datos nuevos.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3 items-start">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00A896] shrink-0" />
                  <span className="text-[15px] text-[#2D2D2D] leading-relaxed">
                    <strong className="text-black">{title}: </strong>{desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* No somos */}
          <div className="p-8 md:p-12 bg-[#FAFAFA]">
            <h3 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3">
              <span className="w-6 h-6 border border-black text-black text-xs flex items-center justify-center font-medium">✕</span>
              Lo que KUKO NO ES
            </h3>
            <ul className="space-y-3.5">
              {[
                ['No somos noticias de última hora', 'Somos análisis profundo que toma el tiempo que necesita.'],
                ['No tenemos "LA solución"', 'Exploramos opciones. Los problemas complejos rara vez tienen una sola respuesta.'],
                ['No copiamos soluciones', 'Los modelos internacionales siempre requieren análisis de aplicabilidad local.'],
                ['No simplificamos por clicks', 'Respetamos la complejidad de los problemas que abordamos.'],
                ['No hacemos activismo político', 'No estamos afiliados a partidos ni movimientos políticos.'],
                ['No pretendemos ser expertos en todo', 'Colaboramos con especialistas y citamos sus limitaciones.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3 items-start">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#E8E8E8] shrink-0" />
                  <span className="text-[15px] text-[#2D2D2D] leading-relaxed">
                    <strong className="text-black">{title}: </strong>{desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Principios editoriales ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#E8E8E8]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-10">Cómo trabajamos</p>
        <h2 className="text-3xl font-black tracking-tight mb-10">Principios Editoriales</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRINCIPLES.map(({ n, title, text }) => (
            <div key={n} className="border-t-2 border-black pt-6">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-3">{n}</p>
              <h3 className="text-[18px] font-black tracking-tight mb-3">{title}</h3>
              <p className="text-[14px] text-[#2D2D2D] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Values ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#E8E8E8]">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-10">Valores de marca</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E8E8E8] border border-[#E8E8E8]">
          {VALUES.map(({ label, desc }) => (
            <div key={label} className="bg-white p-6 flex flex-col gap-2 hover:bg-[#FAFAFA] transition-colors">
              <p className="text-[17px] font-black tracking-tight">{label}</p>
              <p className="text-[12px] text-[#7A7A7A] leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {[
            { n: '12', label: 'Investigaciones publicadas' },
            { n: '47', label: 'Fuentes de datos analizadas' },
            { n: '9', label: 'Temas de cobertura' },
            { n: '0', label: 'Afiliaciones políticas' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="text-5xl font-black tracking-tight mb-2">{n}</div>
              <p className="text-[#E5E5E5] text-sm leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-5">Contacto</p>
          <h2 className="text-3xl font-black tracking-tight mb-5">¿Tienes datos, correcciones o sugerencias?</h2>
          <p className="text-[17px] text-[#2D2D2D] leading-relaxed mb-8">
            Valoramos el feedback y los datos de primera mano. Si tienes información que corrija o complemente alguno de nuestros análisis, o si quieres proponer un tema de investigación, nos interesa escucharte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:hola@kuko.cr"
              className="inline-flex items-center justify-center h-[52px] px-8 bg-black text-white text-sm font-medium hover:bg-[#00A896] transition-colors"
            >
              hola@kuko.cr
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center h-[52px] px-8 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              @kukocr en redes
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

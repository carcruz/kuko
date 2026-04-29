export default function Footer() {
  return (
    <footer className="border-t border-black bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-2xl font-black tracking-tight mb-4">KUKO</h4>
            <p className="text-sm text-[#E5E5E5] leading-relaxed">
              Pensamiento crítico para Costa Rica. Investigación basada en datos.
            </p>
          </div>
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.1em] font-medium mb-4 text-[#7A7A7A]">Contenido</h5>
            <ul className="space-y-2.5 text-sm text-[#E5E5E5]">
              <li><a href="#" className="hover:text-white transition-colors">Investigaciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contexto Internacional</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Propuestas</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.1em] font-medium mb-4 text-[#7A7A7A]">Recursos</h5>
            <ul className="space-y-2.5 text-sm text-[#E5E5E5]">
              <li><a href="#" className="hover:text-white transition-colors">Metodología</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparencia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lo que NO hacemos</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] uppercase tracking-[0.1em] font-medium mb-4 text-[#7A7A7A]">Contacto</h5>
            <ul className="space-y-2.5 text-sm text-[#E5E5E5]">
              <li>
                <a href="mailto:hola@kuko.cr" className="hover:text-white transition-colors">
                  hola@kuko.cr
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">@kukocr</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6B6B6B]">
          <p>© 2025 KUKO. Investigación independiente para Costa Rica.</p>
          <p className="text-xs">"KUKO" del cabécar: pensamiento, mente</p>
        </div>
      </div>
    </footer>
  )
}

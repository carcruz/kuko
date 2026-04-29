import { Mail } from 'lucide-react'

export default function NewsletterSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-10 h-10 mx-auto mb-6" strokeWidth={1.5} />
        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
          Análisis en tu Bandeja
        </h3>
        <p className="text-lg text-[#1A1A1A] mb-8 leading-relaxed">
          Recibe nuestras investigaciones quincenalmente. Sin spam, solo pensamiento crítico.
        </p>

        <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 h-[52px] px-5 border border-black sm:border-r-0 focus:outline-none focus:border-[#00A896] text-sm placeholder:text-[#7A7A7A] bg-white"
          />
          <button
            type="submit"
            className="h-[52px] bg-black text-white px-6 border border-black hover:bg-[#00A896] hover:border-[#00A896] transition-colors text-sm font-medium whitespace-nowrap"
          >
            Suscribirme
          </button>
        </form>

        <p className="text-xs text-[#7A7A7A] mt-4">
          Puedes cancelar tu suscripción en cualquier momento.
        </p>
      </div>
    </section>
  )
}

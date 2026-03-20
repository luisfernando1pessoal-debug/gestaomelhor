import Link from "next/link";
import { niches } from "@/lib/niches";
import HeroTitle from "@/components/HeroTitle";
import ToolsComparison from "@/components/ToolsComparison";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="stripe-gradient relative overflow-hidden px-6 pb-20 pt-24 text-center sm:pb-28 sm:pt-32">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
        <div className="relative mx-auto max-w-[800px]">
          <p className="animate-fade-up stagger-1 mb-5 font-display text-sm font-600 uppercase tracking-[0.15em] text-[var(--accent)]">
            Comparativo Inteligente
          </p>
          <div className="animate-fade-up stagger-2">
            <HeroTitle />
          </div>
          <p className="animate-fade-up stagger-3 mx-auto mb-10 max-w-[560px] text-[18px] leading-[1.7] text-[var(--text-secondary)]">
            Análises detalhadas de CRM, automação e gestão — específicas para o
            seu nicho. Sem achismo.
          </p>
          <div className="animate-fade-up stagger-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="#nichos" className="btn-primary">
              Escolher meu nicho
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Comparison Table */}
      <ToolsComparison />

      {/* Niches Grid */}
      <section id="nichos" className="mx-auto max-w-[1080px] px-6 py-20 sm:py-28">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-700 tracking-[-0.02em] text-[var(--text)]">
            Escolha o seu segmento
          </h2>
          <p className="text-[17px] text-[var(--text-secondary)]">
            Cada nicho tem sua própria análise, comparativos e estratégias de crescimento.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {niches.map((niche, i) => (
            <Link
              key={niche.slug}
              href={`/${niche.slug}`}
              className={`animate-fade-up stagger-${Math.min(i % 6 + 1, 6)} glass-card group relative`}
            >
              <h3 className="mb-2 font-display text-[17px] font-700 text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                {niche.name}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-[var(--text-muted)]">
                {niche.pain}
              </p>
              <span className="inline-flex items-center gap-1.5 font-display text-[13px] font-600 text-[var(--accent)]">
                Ver análise completa
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)] px-6 py-10 text-center text-[13px] leading-relaxed text-[var(--text-muted)]">
        <p>
          Este site contém links de afiliados. Podemos receber uma comissão por
          compras realizadas, sem custo adicional para você.
        </p>
      </footer>
    </main>
  );
}

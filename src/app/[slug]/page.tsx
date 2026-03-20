import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getNicheBySlug,
  getAllNicheSlugs,
  AFFILIATE_LINK,
} from "@/lib/niches";

export function generateStaticParams() {
  return getAllNicheSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const niche = getNicheBySlug(params.slug);
  if (!niche) return {};
  return {
    title: `${niche.heroTitle} | ${niche.name}`,
    description: niche.painDetail.slice(0, 155) + "...",
    openGraph: {
      title: niche.heroTitle,
      description: niche.heroSubtitle,
      type: "article",
      locale: "pt_BR",
    },
    alternates: { canonical: `/${niche.slug}` },
  };
}

export default function NichePage({ params }: { params: { slug: string } }) {
  const niche = getNicheBySlug(params.slug);
  if (!niche) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: niche.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[var(--bg)]">
        {/* ─── HERO ─── */}
        <section className="stripe-gradient relative overflow-hidden px-6 pb-20 pt-24 text-center sm:pb-28 sm:pt-36">
          {/* Animated floating orbs */}
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          {/* Grid overlay */}
          <div className="hero-grid" />

          <div className="relative mx-auto max-w-[780px]">
            <span className="animate-fade-up stagger-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-1.5 font-display text-[12px] font-600 text-[var(--text-secondary)] shadow-sm backdrop-blur-sm">
              <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)]">
                <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping" />
              </span>
              {niche.name}
            </span>

            <h1 className="animate-fade-up stagger-2 mb-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-800 leading-[1.1] tracking-[-0.03em] text-[var(--text)] text-balance">
              {niche.heroTitle}
            </h1>

            <p className="animate-fade-up stagger-3 mx-auto mb-10 max-w-[580px] text-[18px] leading-[1.7] text-[var(--text-secondary)]">
              {niche.heroSubtitle}
            </p>

            <div className="animate-fade-up stagger-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-glow"
              >
                Testar grátis por 14 dias
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#comparativo" className="btn-secondary">
                Ver comparativo
              </a>
            </div>

            <p className="animate-fade-up stagger-5 mt-6 text-[13px] text-[var(--text-muted)]">
              Sem cartão de crédito &middot; Cancele quando quiser
            </p>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <section className="border-b border-[var(--border)] bg-[var(--bg-soft)]/60 px-6 py-5">
          <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <p className="text-[13px] font-500 text-[var(--text-muted)]">
              +60.000 empresas já utilizam
            </p>
            <div className="flex items-center gap-5">
              {["CRM", "Automação", "Funis", "E-mail", "Chat"].map((label) => (
                <span key={label} className="rounded-md bg-[var(--border)]/60 px-3 py-1 text-[11px] font-600 uppercase tracking-wider text-[var(--text-muted)]">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DOR / PROBLEMA ─── */}
        <section className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
          <div className="animate-fade-up rounded-[var(--radius-xl)] border border-red-300/30 bg-red-500/[0.07] p-8 shadow-lg shadow-red-500/[0.06] backdrop-blur-xl sm:p-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-red-500/15 backdrop-blur-sm">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </span>
              <h2 className="font-display text-[22px] font-700 text-red-600">
                Você se identifica com isso?
              </h2>
            </div>
            <p className="text-[16px] leading-[1.8] text-red-950/70">
              {niche.painDetail}
            </p>
          </div>
        </section>

        {/* ─── SOLUÇÃO + BENEFÍCIOS ─── */}
        <section className="bg-[var(--bg-soft)] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-14 text-center">
              <p className="animate-fade-up stagger-1 mb-3 font-display text-[13px] font-600 uppercase tracking-[0.12em] text-[var(--accent)]">
                A solução
              </p>
              <h2 className="animate-fade-up stagger-2 mb-5 font-display text-[clamp(1.5rem,3vw,2.4rem)] font-700 tracking-[-0.02em] text-[var(--text)] text-balance">
                Tudo que seu negócio precisa em uma plataforma
              </h2>
              <p className="animate-fade-up stagger-3 mx-auto max-w-[560px] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
                {niche.solution}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {niche.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={`animate-fade-up stagger-${Math.min(i % 6 + 1, 6)} glass-card-sm flex items-start gap-4`}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--success-bg)]">
                    <svg className="h-3.5 w-3.5 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-[1.6] text-[var(--text-secondary)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TABELA COMPARATIVA ─── */}
        <section id="comparativo" className="mx-auto max-w-[900px] px-6 py-16 sm:py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 font-display text-[13px] font-600 uppercase tracking-[0.12em] text-[var(--accent)]">
              Comparativo
            </p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.4rem)] font-700 tracking-[-0.02em] text-[var(--text)]">
              Antes vs. Depois
            </h2>
          </div>

          {/* Mobile: two-column layout */}
          <div className="md:hidden">
            {/* Column headers */}
            <div className="mb-3 grid grid-cols-2 gap-3 px-1">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--danger)]" />
                <span className="font-display text-[11px] font-600 uppercase tracking-wider text-[var(--danger)]">Sem sistema</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
                <span className="font-display text-[11px] font-600 uppercase tracking-wider text-[var(--success)]">Com o sistema</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {niche.comparisons.map((comp, i) => (
                <div
                  key={i}
                  className={`animate-fade-up stagger-${Math.min(i + 1, 6)}`}
                >
                  <p className="mb-1.5 px-1 font-display text-[13px] font-700 text-[var(--text)]">
                    {comp.feature}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-red-200/40 bg-red-50/60 px-3 py-3 backdrop-blur-sm">
                      <p className="text-[13px] leading-[1.5] text-[var(--text-muted)]">{comp.withoutGHL}</p>
                    </div>
                    <div className="rounded-xl border border-emerald-200/40 bg-emerald-50/60 px-3 py-3 backdrop-blur-sm">
                      <p className="text-[13px] leading-[1.5] text-[var(--text-secondary)]">{comp.withGHL}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: tabela */}
          <div className="comparison-wrapper animate-scale-in hidden md:block">
            <table className="stripe-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th className="text-[var(--danger)]">Sem sistema</th>
                  <th className="text-[var(--success)]">Com o sistema</th>
                </tr>
              </thead>
              <tbody>
                {niche.comparisons.map((comp, i) => (
                  <tr key={i}>
                    <td className="font-display font-600 text-[var(--text)]">
                      {comp.feature}
                    </td>
                    <td className="text-[var(--text-muted)]">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--danger)]/60" />
                        {comp.withoutGHL}
                      </span>
                    </td>
                    <td className="text-[var(--text-secondary)]">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--success)]" />
                        {comp.withGHL}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── DEPOIMENTO ─── */}
        <section className="bg-[var(--bg-soft)] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[680px]">
            <div className="animate-fade-up glass-card relative !p-8 sm:!p-10">
              {/* Accent top bar */}
              <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-[var(--radius-lg)] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--cyan)]" />

              <svg className="mb-5 h-8 w-8 text-[var(--accent)]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="mb-8 text-[19px] italic leading-[1.8] text-[var(--text-secondary)]">
                &ldquo;{niche.testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] font-display text-[14px] font-700 text-white">
                  {niche.testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-display text-[15px] font-600 text-[var(--text)]">
                    {niche.testimonial.name}
                  </p>
                  <p className="text-[13px] text-[var(--text-muted)]">
                    {niche.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ROI ─── */}
        <section className="mx-auto max-w-[680px] px-6 py-16 sm:py-24">
          <div className="animate-fade-up glass-card text-center !p-8 sm:!p-10">
            <p className="mb-2 font-display text-[13px] font-600 uppercase tracking-[0.12em] text-[var(--accent)]">
              A conta é simples
            </p>
            <p className="mb-6 font-display text-[clamp(1.3rem,3vw,1.8rem)] font-800 tracking-[-0.02em] text-[var(--text)] text-balance">
              {niche.roi.action} = sistema pago por {niche.roi.payback}
            </p>
            <div className="mx-auto flex max-w-[400px] items-center justify-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-6 py-4">
              <div className="text-center">
                <p className="font-display text-[24px] font-800 text-[var(--accent)]">{niche.roi.value}</p>
                <p className="text-[12px] text-[var(--text-muted)]">receita extra</p>
              </div>
              <span className="text-[24px] text-[var(--text-muted)]">&gt;</span>
              <div className="text-center">
                <p className="font-display text-[24px] font-800 text-[var(--text)]">~R$ 500</p>
                <p className="text-[12px] text-[var(--text-muted)]">custo mensal</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA PRINCIPAL ─── */}
        <section className="stripe-gradient-dark relative overflow-hidden px-6 py-20 text-center sm:py-28">
          {/* Animated orbs */}
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />

          <div className="relative mx-auto max-w-[640px]">
            <h2 className="mb-5 font-display text-[clamp(1.6rem,4vw,2.8rem)] font-800 tracking-[-0.02em] text-white text-balance">
              Pronto para transformar seu negócio?
            </h2>
            <p className="mb-10 text-[18px] leading-[1.7] text-white/60">
              Comece agora com 14 dias grátis. Veja resultados antes de pagar.
            </p>

            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-display text-[16px] font-600 text-[var(--text)] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              Começar teste grátis
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <p className="mt-5 text-[13px] text-white/50">
              Sem cartão de crédito. Configuração em 5 minutos.
            </p>
            <p className="mt-1 text-[12px] text-white/30">
              +60.000 empresas já confiam nesta plataforma
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="mx-auto max-w-[680px] px-6 py-16 sm:py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 font-display text-[13px] font-600 uppercase tracking-[0.12em] text-[var(--accent)]">
              FAQ
            </p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-700 tracking-[-0.02em] text-[var(--text)]">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {niche.faq.map((item, i) => (
              <details
                key={i}
                className="group glass-card-sm !p-0 transition-all duration-200"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-display text-[16px] font-600 text-[var(--text)]">
                  {item.question}
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-200 group-open:border-[var(--accent)] group-open:bg-[var(--accent-bg)]">
                    <svg
                      className="h-3 w-3 text-[var(--text-muted)] transition-transform duration-200 group-open:rotate-180 group-open:text-[var(--accent)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-[var(--border)] px-6 py-5 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)] px-6 py-10 text-center text-[13px] leading-relaxed text-[var(--text-muted)]">
          <p className="mb-1">
            Este site contém links de afiliados. Comissão sem custo adicional
            para você.
          </p>
          <p>
            Não afiliado ao GoHighLevel LLC. Marcas pertencem a seus
            respectivos proprietários.
          </p>
        </footer>
      </main>
    </>
  );
}

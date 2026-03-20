"use client"

import { AFFILIATE_LINK } from "@/lib/niches"

const tools = [
  { feature: "CRM e Pipeline", replaces: "Salesforce, HubSpot", otherCost: "R$ 250+" },
  { feature: "E-mail Marketing", replaces: "Mailchimp, ActiveCampaign", otherCost: "R$ 150+" },
  { feature: "Funis e Landing Pages", replaces: "ClickFunnels, Leadpages", otherCost: "R$ 500+" },
  { feature: "Agendamento Online", replaces: "Calendly, Acuity", otherCost: "R$ 80+" },
  { feature: "Automação", replaces: "Zapier, Make", otherCost: "R$ 100+" },
  { feature: "Chat e WhatsApp", replaces: "ManyChat, Intercom", otherCost: "R$ 200+" },
  { feature: "Reputação Online", replaces: "Podium, Birdeye", otherCost: "R$ 300+" },
  { feature: "Construtor de Sites", replaces: "WordPress, Wix", otherCost: "R$ 50+" },
  { feature: "Formulários", replaces: "Typeform, JotForm", otherCost: "R$ 80+" },
  { feature: "Cursos e Comunidades", replaces: "Hotmart, Kajabi", otherCost: "R$ 200+" },
]

export default function ToolsComparison() {
  return (
    <section className="mx-auto max-w-[800px] px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="animate-scale-in glass-card !p-0 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[2fr_2fr_1fr] items-end border-b border-[var(--border)] bg-[var(--bg-soft)]/80 px-3 py-3 sm:grid-cols-[1fr_180px_120px] sm:px-6 sm:py-4">
          <span className="font-display text-[10px] font-600 uppercase tracking-wider text-[var(--text-muted)] sm:text-[11px]">
            Funcionalidade
          </span>
          <span className="font-display text-[10px] font-600 uppercase tracking-wider text-[var(--text-muted)] text-center sm:text-[11px]">
            Substitui
          </span>
          <span className="font-display text-[10px] font-600 uppercase tracking-wider text-[var(--text-muted)] text-right sm:text-[11px]">
            Custo
          </span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[var(--border)]">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="grid grid-cols-[2fr_2fr_1fr] items-center px-3 py-2.5 transition-colors hover:bg-[var(--accent-bg)] sm:grid-cols-[1fr_180px_120px] sm:px-6 sm:py-3"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 sm:h-5 sm:w-5">
                  <svg className="h-2.5 w-2.5 text-[var(--accent)] sm:h-3 sm:w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[12px] font-500 text-[var(--text)] sm:text-[14px]">
                  {tool.feature}
                </span>
              </div>
              <span className="text-center text-[11px] text-[var(--text-muted)] sm:text-[13px]">
                {tool.replaces}
              </span>
              <span className="text-right text-[11px] text-[var(--text-muted)] line-through decoration-[var(--danger)]/40 sm:text-[13px]">
                {tool.otherCost}
              </span>
            </div>
          ))}
        </div>

        {/* Footer total */}
        <div className="grid grid-cols-[2fr_2fr_1fr] items-center border-t-2 border-[var(--accent)]/20 bg-[var(--accent-bg)] px-3 py-3 sm:grid-cols-[1fr_180px_120px] sm:px-6 sm:py-4">
          <span className="font-display text-[12px] font-700 text-[var(--text)] sm:text-[14px]">
            Total mensal
          </span>
          <span className="text-center text-[12px] font-700 text-[var(--danger)] line-through sm:text-[14px]">
            R$ 1.910+
          </span>
          <span className="text-right font-display text-[12px] font-800 text-[var(--accent)] sm:text-[14px]">
            ~R$ 500
          </span>
        </div>

        {/* CTA */}
        <div className="border-t border-[var(--border)] bg-[var(--bg-soft)]/50 px-4 py-5 text-center sm:px-6">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-glow text-[14px]"
          >
            Testar tudo grátis por 14 dias
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-3 text-[12px] text-[var(--text-muted)]">
            Uma plataforma. Sem precisar de 10 ferramentas separadas.
          </p>
        </div>
      </div>
    </section>
  )
}

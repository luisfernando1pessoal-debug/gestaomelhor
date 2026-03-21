"use client";

import { useState } from "react";

const OFFERS: Record<string, string> = {
  "clinicas-estetica":
    "Baixe o Blueprint Grátis: Como automatizar confirmações de consulta e reduzir faltas em 40%.",
  "escritorios-advocacia":
    "Grátis — Guia Prático: O fluxo de triagem automática que separa curiosos de clientes ideais.",
};

const FALLBACK =
  "Blueprint de Automação: Os 3 fluxos que toda empresa precisa para escalar gratuitamente.";

function getOffer(slug: string): string {
  for (const [key, offer] of Object.entries(OFFERS)) {
    if (slug.startsWith(key) || slug.includes(key.replace("s-", "-").replace("s-", "-"))) {
      return offer;
    }
  }
  if (slug.includes("clinica") || slug.includes("estetica")) return OFFERS["clinicas-estetica"];
  if (slug.includes("advocacia")) return OFFERS["escritorios-advocacia"];
  return FALLBACK;
}

interface LeadMagnetProps {
  slug: string;
  nicho: string;
  origem?: "Inline" | "Exit-Intent";
  onSuccess?: () => void;
}

export default function LeadMagnet({ slug, nicho, origem = "Inline", onSuccess }: LeadMagnetProps) {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const offer = getOffer(slug);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !contato.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, contato, nicho, slug, origem }),
      });
      if (res.ok) {
        setStatus("success");
        onSuccess?.();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card mx-auto max-w-lg p-8 text-center">
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="font-display text-xl font-700 text-[var(--text)]">
          Pronto! Verifique seu e-mail.
        </h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Enviamos o material para o contato informado.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card mx-auto max-w-lg p-8">
      <div className="mb-1 text-center">
        <span className="inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-600 text-[var(--accent)]">
          Material Gratuito
        </span>
      </div>
      <h3 className="mt-3 text-center font-display text-lg font-700 leading-snug text-[var(--text)] md:text-xl">
        {offer}
      </h3>
      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full rounded-xl border border-[var(--border-glass)] bg-white/60 px-4 py-3 text-sm text-[var(--text)] outline-none backdrop-blur-sm transition-all placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
        />
        <input
          type="text"
          placeholder="WhatsApp ou E-mail"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          required
          className="w-full rounded-xl border border-[var(--border-glass)] bg-white/60 px-4 py-3 text-sm text-[var(--text)] outline-none backdrop-blur-sm transition-all placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-glow w-full rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-600 text-white shadow-lg transition-all hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" ? "Enviando..." : "Quero Receber Grátis"}
        </button>
        {status === "error" && (
          <p className="text-center text-xs text-red-500">Erro ao enviar. Tente novamente.</p>
        )}
      </form>
      <p className="mt-3 text-center text-[11px] text-[var(--text-tertiary)]">
        Sem spam. Seus dados estão seguros.
      </p>
    </div>
  );
}

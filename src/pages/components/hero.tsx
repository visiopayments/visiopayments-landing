import { ChartNoAxesCombined, ChevronRight, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import eth from "@/assets/tokens/ethereum.png";
import usdc from "@/assets/tokens/usdc.png";
import usdt from "@/assets/tokens/usdt.png";
import { TokenSOL } from "@web3icons/react";

const HERO_WORDS = ["cripto", "Ethereum", "Solana", "USDT", "USDC"];

const tokens: { token: string; color: string }[] = [
  { token: "ETH", color: "#627eea" },
  { token: "SOL", color: "#9945ff" },
  { token: "USDC", color: "#2775ca" },
  { token: "USDT", color: "#26a17b" },
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % HERO_WORDS.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative border-b border-border/70 pt-24 sm:pt-18"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size[56px_56px]" />
      <div className="mx-auto grid min-h-[62svh] max-w-7xl items-center gap-10 px-6 pb-12 sm:min-h-[70svh] sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Venda em{" "}
            <span className="inline-block overflow-hidden align-bottom">
              <span
                key={wordIndex}
                className="inline-block text-primary animate-word-slide-up"
              >
                {HERO_WORDS[wordIndex]}
              </span>
            </span>
            .
            <br />
            Receba sem fronteiras.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A Vi$io Payments é a infraestrutura para empresas receberem em
            cripto com checkout, API e conciliação em um só lugar.
          </p>
          <div className="mt-3 flex flex-row gap-3 justify-center lg:justify-start">
            {tokens.map(({ token, color }) => (
              <span
                key={token}
                style={{
                  backgroundColor: color,
                }}
                className="inline-block select-none rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-white hover:opacity-70 transition-all duration-150"
              >
                {token}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-row justify-center gap-2 sm:gap-3 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-10 flex-1 px-3 text-sm sm:h-12 sm:flex-none sm:px-6 sm:text-base"
            >
              <a href="#">
                Começar agora
                <ChevronRight className="size-4 sm:size-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 flex-1 border-border/80 bg-card/50 px-3 text-sm sm:h-12 sm:flex-none sm:px-6 sm:text-base"
            >
              <a href="#suporte">Suporte</a>
            </Button>
          </div>
        </div>

        <div className="hidden lg:block lg:scale-90 lg:justify-self-end xl:scale-[0.86]">
          <div className="soft-float">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const periodOptions = [
    "Hoje",
    "Últimos 7 dias",
    "Últimos 30 dias",
    "Últimos 90 dias",
    "Todo o período",
    "Personalizado",
  ];

  return (
    <div className="relative mx-auto w-full max-w-130 select-none">
      <div className="rounded-[1.1rem] border border-border/70 bg-background/90 p-4 sm:p-5">
        <div className="rounded-2xl bg-linear-to-t from-[#584828] to-[#C1933D] p-5 text-white">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-white/80">SALDO TOTAL</p>
              <p className="mt-2 text-3xl font-bold">$86.421,32</p>
            </div>
            <Eye className="size-7 text-white/90" />
          </div>
          <div className="mt-5 flex gap-2 overflow-hidden">
            {[
              [eth, "ETH", "8.420"],
              [null, "SOL", "124.50"],
              [usdc, "USDC", "31,240.20"],
              [usdt, "USDT", "42,680.90"],
            ].map(([icon, token, amount]) => (
              <div
                key={token as string}
                className="flex min-w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2"
              >
                {token === "SOL" ? (
                  <TokenSOL size={20} variant="branded" />
                ) : (
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full">
                    <img
                      src={icon as string}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                      draggable={false}
                    />
                  </span>
                )}
                <span className="text-xs font-medium text-white/75">
                  {token as string}
                </span>
                <span className="text-sm font-semibold">
                  {amount as string}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="my-2 rounded-xl border border-border/70 bg-card/60 p-3">
          <div className="flex gap-2 overflow-x-hidden">
            {periodOptions.map((period) => (
              <button
                key={period}
                type="button"
                className={[
                  "min-w-fit rounded-md border px-3 py-2 text-xs font-medium shadow-sm transition-colors",
                  period === "Últimos 7 dias"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground",
                ].join(" ")}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 py-1 sm:grid-cols-4">
          {[
            ["Vendas", "$48.260"],
            ["Pagamentos", "1.284"],
            ["Ticket médio", "$37,58"],
            ["Conversão", "87,4%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-border/60 bg-card/70 p-3"
            >
              <p className="text-[11px] text-muted-foreground">{label}</p>
              <p className="mt-2 text-lg font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1.35fr_0.85fr]">
          <div className="rounded-xl border border-border/70 bg-card/60 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Volume de Vendas</p>
                <p className="text-xs text-muted-foreground">
                  Total convertido em USD
                </p>
              </div>
              <ChartNoAxesCombined className="size-5 text-primary" />
            </div>
            <div className="relative h-36 overflow-hidden rounded-lg border border-border/50 bg-background/40 p-3">
              <div className="absolute inset-x-3 top-1/4 border-t border-border/50" />
              <div className="absolute inset-x-3 top-1/2 border-t border-border/40" />
              <div className="absolute inset-x-3 top-3/4 border-t border-border/30" />
              <svg
                viewBox="0 0 260 104"
                className="relative h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M4 82 C30 74, 36 40, 60 48 S96 90, 122 58 S156 18, 184 36 S220 84, 256 28"
                  fill="none"
                  stroke="#c0903b"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M4 82 C30 74, 36 40, 60 48 S96 90, 122 58 S156 18, 184 36 S220 84, 256 28 L256 104 L4 104 Z"
                  fill="rgba(192,144,59,0.12)"
                />
                {[4, 60, 122, 184, 256].map((x, index) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={[82, 48, 58, 36, 28][index]}
                    r="3.5"
                    fill="#c0903b"
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-border/70 bg-card/60 p-4">
            <div className="mb-4">
              <p className="text-sm font-medium">Distribuição por Token</p>
              <p className="text-xs text-muted-foreground">
                Participação no volume
              </p>
            </div>
            <div className="flex h-36 items-center justify-center">
              <div className="relative size-28 rounded-full bg-[conic-gradient(#627eea_0_22%,#9945ff_22%_38%,#2775ca_38%_64%,#26a17b_64%_100%)]"></div>
            </div>
            <div className="mt-3 flex  gap-2 text-[11px] text-muted-foreground">
              {[
                ["ETH", "#627eea"],
                ["SOL", "#9945ff"],
                ["USDC", "#2775ca"],
                ["USDT", "#26a17b"],
              ].map(([token, color]) => (
                <span key={token} className="flex items-center gap-1.5">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  {token}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

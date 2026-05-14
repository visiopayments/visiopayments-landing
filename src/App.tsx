import {
  ArrowRight,
  BanknoteArrowDown,
  Building,
  ChartNoAxesCombined,
  ChevronRight,
  Code2,
  CreditCard,
  Eye,
  Fingerprint,
  Gamepad2,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { TokenSOL } from "@web3icons/react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import investnewsBackground from "@/assets/investnews-background.png";
import investnewsLogo from "@/assets/investnews.png";
import valorBackground from "@/assets/valoreconomico-background.png";
import valorLogo from "@/assets/valoreconomico.png";
import eth from "@/assets/tokens/ethereum.png";
import usdc from "@/assets/tokens/usdc.png";
import usdt from "@/assets/tokens/usdt.png";

const HERO_WORDS = ["cripto", "Ethereum", "Solana", "USDT", "USDC"];

const flows = [
  {
    icon: CreditCard,
    title: "Checkout e invoices",
    text: "Cobranças rápidas com expiração, QR Code, carteira dedicada e status em tempo real.",
  },
  {
    icon: Code2,
    title: "API e webhooks",
    text: "Integre pagamentos ao seu produto e receba atualizações sem processos manuais.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Dashboard financeiro",
    text: "Acompanhe volume, conversão, tokens, saldos e pagamentos em uma visão executiva.",
  },
  {
    icon: BanknoteArrowDown,
    title: "Saques e operação",
    text: "Controle retiradas, histórico e rastreabilidade do dinheiro depois que ele entra.",
  },
];

const useCases: { name: string; icon: LucideIcon }[] = [
  { name: "Infoprodutos e comunidades", icon: Globe2 },
  { name: "SaaS", icon: Code2 },
  { name: "Marketplaces e afiliados", icon: ShoppingCart },
  { name: "E-commerce", icon: CreditCard },
  { name: "iGaming", icon: Gamepad2 },
  { name: "Operações B2B", icon: Building },
];

const pressArticles = [
  {
    publication: "VALOR ECONOMICO",
    logo: valorLogo,
    image: valorBackground,
    title:
      "Brasileiros mais que dobraram compra de criptoativos no exterior no 1º trimestre, diz BC",
    subtitle:
      "Do valor registrado no primeiro trimestre deste ano, US$ 6,8 bilhões são relacionados a operações de stablecoins.",
    link: "https://valor.globo.com/financas/criptomoedas/noticia/2026/04/24/brasileiros-mais-que-dobraram-compra-de-criptoativos-no-exterior-no-1-trimestre-diz-bc.ghtml",
  },
  {
    publication: "INVEST NEWS",
    logo: investnewsLogo,
    image: investnewsBackground,
    title:
      "Mais da metade dos brasileiros pretende investir em criptomoedas no futuro",
    subtitle:
      "Pesquisa mostra que a geração Z, grupo de pessoas entre 18 e 29 anos, aparece como a mais interessada nesse tipo de investimento.",
    link: "https://investnews.com.br/investimentos/mais-da-metade-dos-brasileiros-pretende-investir-em-criptomoedas-aponta-pesquisa/",
  },
];

const security = [
  {
    icon: ShieldCheck,
    title: "Monitoramento on-chain",
    text: "Eventos de pagamento são acompanhados continuamente para atualizar cada invoice com precisão.",
  },
  {
    icon: Fingerprint,
    title: "Auditoria operacional",
    text: "Cada invoice, carteira e saque deixa uma trilha clara para suporte, financeiro e gestão.",
  },
  {
    icon: LockKeyhole,
    title: "Chaves e acessos",
    text: "Estrutura preparada para credenciais de API e permissões por operação sensível.",
  },
];

const faqs = [
  {
    question: "A Vi$io Payments cobra mensalidade?",
    answer:
      "Não. A proposta é simples: taxa fixa de 1% por pagamento aprovado, sem mensalidade escondida.",
  },
  {
    question: "Quais criptos posso aceitar?",
    answer:
      "A plataforma trabalha com USDT, USDC, ETH e SOL, respeitando a rede e o token definidos na criação da invoice.",
  },
  {
    question:
      "Qual a vantagem da Vi$io em relação às máquinas e gateways tradicionais?",
    answer:
      "Liberdade financeira e segurança. No sistema tradicional, você sofre com o risco constante de fraudes por chargeback e fica refém do modelo D+30 das adquirentes. Com a Vi$io Payments, as transações em blockchain são irreversíveis, zero chargeback, e o saldo fica disponível e visível no seu painel em segundos, acabando com a burocracia bancária.",
  },
  {
    question: "Como acompanho o status do pagamento?",
    answer:
      "Cada invoice possui status, endereço, QR Code, expiração e callbackUrl para receber atualizações no seu sistema.",
  },
  {
    question: "Como e quando eu recebo o dinheiro das minhas vendas?",
    answer:
      "O controle é 100% seu. Quando uma venda é concluída, o saldo entra instantaneamente no seu dashboard. A partir de lá, você realiza o saque sob demanda direto para a sua carteira no momento que for mais estratégico para o seu fluxo de caixa, permitindo otimizar o pagamento de taxas de rede e centralizar seus recebimentos.",
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <UseCases />
      <PressSection />
      <PricingSection />
      <ProductFlow />
      <ApiSection />
      <SecuritySection />
      <SupportSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Vi$io Payments"
        >
          <img src={logo} alt="" className="size-9 rounded-md" />
          <span className="text-base hidden md:block font-semibold">
            Vi$io Payments
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#taxas">
            Taxas
          </a>
          <a className="transition-colors hover:text-foreground" href="#api">
            Documentação
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#suporte"
          >
            Suporte
          </a>
        </nav>

        <Button asChild className="h-10 px-4">
          <a href="#">
            Acessar Plataforma
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
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
            {["Ethereum", "Solana", "USDC", "USDT"].map((item) => (
              <span
                key={item}
                className="inline-block select-none rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20"
              >
                {item}
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

function PricingSection() {
  return (
    <section
      id="taxas"
      className="relative border-b border-border/70 bg-cover bg-center px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600562718259-5cae2c9d2235?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="absolute inset-0 bg-background/72 backdrop-blur-[2px]" />
      <div className="reveal-up relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-background/78 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-md sm:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 text-primary select-none"
          >
            Taxa simples
          </Badge>
          <h2 className="text-5xl font-semibold leading-none text-primary sm:text-7xl lg:text-8xl">
            1%
          </h2>
          <p className="mt-5 text-2xl font-semibold leading-tight sm:text-4xl">
            de taxa por invoice paga.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A cobrança acontece somente quando o pagamento é confirmado. Sem
            setup, sem mensalidade e sem variação por volume.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductFlow() {
  return (
    <section className="border-b border-border/70 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 text-center lg:flex-row lg:items-end lg:text-left">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary select-none"
            >
              Produto completo
            </Badge>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:mx-0">
              Do checkout à conciliação, tudo conectado.
            </h2>
          </div>
          <p className="mx-auto max-w-md text-sm leading-6 text-muted-foreground lg:mx-0">
            Uma estrutura completa para vender em cripto: checkout, invoices,
            carteiras, API, webhooks, dashboard e saques em um só lugar.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {flows.map((flow) => {
            const Icon = flow.icon;
            return (
              <Card
                key={flow.title}
                className="soft-lift reveal-up border-border/70 bg-linear-to-t from-primary/5 to-card select-none"
              >
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg leading-6">
                    {flow.title}
                  </CardTitle>
                  <CardDescription className="leading-6">
                    {flow.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="border-b border-border/70 bg-card/20 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="text-center lg:text-left">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary select-none"
          >
            Para vários modelos de negócio
          </Badge>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:mx-0">
            Cripto como infraestrutura para vender sem fronteiras.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
            Receba pagamentos em cripto com liquidação rápida, alcance global e
            menos barreiras de aprovação do que os meios tradicionais.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {useCases.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="soft-lift flex items-center gap-3 rounded-xl border border-border/70 bg-background/70 p-4"
            >
              <Icon className="size-5 text-primary" />
              <span className="text-sm font-medium select-none">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PressSection() {
  return (
    <section className="border-b border-border/70 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            O interesse por{" "}
            <span className="text-primary underline">cripto</span> já saiu da
            bolha.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2">
          {pressArticles.map((article, index) => (
            <article
              key={article.publication}
              className={[
                "min-w-0 pb-8 lg:px-8",
                index === 0
                  ? "border-b border-border/70 lg:border-b-0 lg:border-r"
                  : "pt-8 lg:pt-0",
              ].join(" ")}
            >
              <div className="relative h-72 rounded-2xl">
                <img
                  src={article.image}
                  alt=""
                  draggable={false}
                  className="h-full w-full rounded-2xl object-cover opacity-70"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute inset-x-0 -bottom-8 z-10 mx-auto flex max-w-72 items-center justify-center px-4">
                  <img
                    src={article.logo}
                    alt={article.publication}
                    draggable={false}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-semibold leading-tight">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {article.subtitle}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Ler notícia -&gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="border-b border-border/70 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary select-none"
          >
            Segurança operacional
          </Badge>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Controle para operar com confiança em qualquer volume.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Monitore pagamentos com clareza, acompanhe cada etapa da transação e
            dê ao seu time ferramentas para agir rápido no dia a dia.
          </p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {security.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="soft-lift reveal-up border-border/70 bg-card/60 select-none"
              >
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="leading-6">
                    {item.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ApiSection() {
  return (
    <section
      id="api"
      className="border-b border-border/70 bg-card/20 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary select-none"
          >
            API first
          </Badge>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            API simples para operações cripto complexas.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
            Integre a Vi$io Payments ao seu produto para criar checkouts,
            acompanhar invoices e automatizar atualizações via webhook com
            segurança e eficiência.
          </p>
          <Button asChild className="mt-8 h-11 border-border/80 px-5">
            <a href="#api">
              Acessar documentação
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 border-b border-border/70 bg-card/70 px-4 py-3">
            <span className="size-3 rounded-full bg-red-400/80" />
            <span className="size-3 rounded-full bg-yellow-300/80" />
            <span className="size-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-xs text-muted-foreground">
              create-invoice.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-[11px] leading-5 text-muted-foreground sm:text-xs">
            <code>
              <span className="code-token-keyword">const</span>{" "}
              <span className="code-token-property">response</span>{" "}
              <span className="code-token-operator">=</span>{" "}
              <span className="code-token-keyword">await</span>{" "}
              <span className="code-token-function">fetch</span>
              <span className="code-token-punctuation">(</span>
              <span className="code-token-string">
                "https://api.visiopayments.com/api/invoices/create"
              </span>
              <span className="code-token-punctuation">, {"{"}</span>
              {"\n  "}
              <span className="code-token-property">method</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"POST"</span>
              <span className="code-token-punctuation">,</span>
              {"\n  "}
              <span className="code-token-property">headers</span>
              <span className="code-token-punctuation">: {"{"}</span>
              {"\n    "}
              <span className="code-token-string">"Content-Type"</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"application/json"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-string">"Authorization"</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">
                "Bearer &lt;API_KEY&gt;"
              </span>
              {"\n  "}
              <span className="code-token-punctuation">{"}"},</span>
              {"\n  "}
              <span className="code-token-property">body</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-property">JSON</span>
              <span className="code-token-punctuation">.</span>
              <span className="code-token-function">stringify</span>
              <span className="code-token-punctuation">({"{"}</span>
              {"\n    "}
              <span className="code-token-property">amount</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-number">149.9</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">chain</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"SOLANA"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">token</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"SOL"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">expiresAt</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-number">1800</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">externalId</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"pedido-2048"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">callbackUrl</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">
                "https://empresa.com/webhooks/visiopayments"
              </span>
              {"\n  "}
              <span className="code-token-punctuation">{"}"})</span>
              {"\n"}
              <span className="code-token-punctuation">{"}"})</span>
              {"\n\n"}
              <span className="code-token-keyword">const</span>{" "}
              <span className="code-token-property">invoice</span>{" "}
              <span className="code-token-operator">=</span>{" "}
              <span className="code-token-keyword">await</span>{" "}
              <span className="code-token-property">response</span>
              <span className="code-token-punctuation">.</span>
              <span className="code-token-function">json</span>
              <span className="code-token-punctuation">()</span>
              {"\n"}
              <span className="code-token-keyword">return</span>{" "}
              <span className="code-token-property">invoice</span>
              <span className="code-token-punctuation">.</span>
              <span className="code-token-property">address</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section
      id="suporte"
      className="border-b border-border/70 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-2xl shadow-black/30">
          <div className="flex flex-col-reverse sm:grid items-center gap-0 sm:grid-cols-2">
            <div className="flex flex-col items-left justify-center px-6 py-8 text-left sm:px-8 sm:py-10">
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 text-primary select-none"
              >
                Suporte
              </Badge>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Conte com um time que entende sua operação.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                A Vi$io Payments ajuda sua equipe a operar pagamentos em cripto
                com clareza, segurança e eficiência desde o primeiro
                recebimento.
              </p>

              <Button
                asChild
                className="mt-5 h-12 sm:w-50 px-8 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="#contato">Falar com Suporte</a>
              </Button>
            </div>
            <div className="relative h-96 overflow-hidden sm:h-125">
              <img
                src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Atendimento ao cliente"
                draggable={false}
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-b border-border/70 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <div className="sticky top-24 text-center lg:text-left">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary select-none"
            >
              Perguntas frequentes
            </Badge>
            <h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight sm:text-4xl lg:mx-0">
              O essencial antes de colocar cripto na sua operação.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground lg:mx-0">
              Perguntas comuns sobre integração, operação e segurança para
              ajudar seu time a se sentir confortável com pagamentos em cripto.
              Se sua dúvida não estiver aqui, fale com a gente.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border/70 bg-card/55 p-5 open:bg-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-medium select-none">{faq.question}</span>
                <span className="flex text-2xl select-none size-8 shrink-0 items-center justify-center text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-muted-foreground select-none">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-7xl rounded-2xl shadow-2xl shadow-black/30">
        <img
          src="https://images.unsplash.com/photo-1585856141833-ca095e957dd3?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Empreendedor olhando para o futuro"
          draggable={false}
          className="h-[360px] w-full rounded-2xl object-cover opacity-80 sm:h-[390px]"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute inset-x-0 -bottom-9 z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:-bottom-10">
          <h2 className="text-3xl font-extrabold leading-tight text-primary drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] sm:text-5xl">
            Comece a aceitar cripto na sua operação.
          </h2>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center text-center sm:mt-20">
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Receba pagamentos de clientes globais com checkout cripto, confirmação
          automática e controle financeiro em um só lugar.
        </p>

        <Button asChild className="mt-6 h-12 px-6 text-base">
          <a href="#">
            Ir para cadastro
            <ArrowRight className="size-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-border/70 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="size-8 rounded-md" />
          <span>Vi$io Payments</span>
        </div>
        <p>Gateway cripto para negócios digitais.</p>
      </div>
    </footer>
  );
}

export default App;

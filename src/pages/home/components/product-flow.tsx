import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BanknoteArrowDown,
  ChartNoAxesCombined,
  Code2,
  CreditCard,
} from "lucide-react";

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
export function ProductFlow() {
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

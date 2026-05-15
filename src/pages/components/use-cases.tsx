import { Badge } from "@/components/ui/badge";

import {
  Building,
  Code2,
  CreditCard,
  Gamepad2,
  Globe2,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const useCases: { name: string; icon: LucideIcon }[] = [
  { name: "Infoprodutos e comunidades", icon: Globe2 },
  { name: "SaaS", icon: Code2 },
  { name: "Marketplaces e afiliados", icon: ShoppingCart },
  { name: "E-commerce", icon: CreditCard },
  { name: "iGaming", icon: Gamepad2 },
  { name: "Operações B2B", icon: Building },
];

export function UseCases() {
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

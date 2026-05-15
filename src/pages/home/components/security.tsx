import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Fingerprint, LockKeyhole, ShieldCheck } from "lucide-react";

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
export function Security() {
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

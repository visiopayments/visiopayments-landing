import { Badge } from "@/components/ui/badge";

export function Pricing() {
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
            de taxa por invoice pago.
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

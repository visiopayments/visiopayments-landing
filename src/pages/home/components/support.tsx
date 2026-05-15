import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Support() {
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

              <Button asChild className="mt-5 h-12 sm:w-50 px-8 text-base">
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

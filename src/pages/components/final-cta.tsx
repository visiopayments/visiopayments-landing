import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative mx-auto max-w-7xl rounded-2xl shadow-2xl shadow-black/30">
        <img
          src="https://images.unsplash.com/photo-1585856141833-ca095e957dd3?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Empreendedor olhando para o futuro"
          draggable={false}
          className="h-90 w-full rounded-2xl object-cover opacity-80 sm:h-97.5"
        />
        <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-background/90 via-background/30 to-transparent" />
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

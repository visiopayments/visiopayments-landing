import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/#top"
          className="flex items-center gap-3"
          aria-label="Vi$io Payments"
        >
          <img src={logo} alt="" className="size-9 rounded-md" />
          <span className="text-base hidden md:block font-semibold">
            Vi$io Payments
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="/#taxas">
            Taxas
          </a>
          <a className="transition-colors hover:text-foreground" href="/#api">
            Documentação
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="/#suporte"
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

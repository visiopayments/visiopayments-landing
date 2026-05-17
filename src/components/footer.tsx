import logo from "@/assets/logo.png";
import { siInstagram, siX } from "simple-icons";

const websiteLinks = [
  { label: "Taxas", href: "/#taxas" },
  { label: "Documentação", href: "/#api" },
  { label: "Suporte", href: "/#suporte" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/20 px-6 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <a
            href="/#top"
            className="inline-flex items-center gap-3"
            aria-label="Vi$io Payments"
          >
            <img src={logo} alt="" className="size-9 rounded-md" />
            <span className="text-base font-semibold text-foreground">
              Vi$io Payments
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            Gateway de pagamentos cripto para empresas que querem vender
            globalmente com checkout, API, conciliação e controle financeiro.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Suporte</h3>
          <nav className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <a
              href="mailto:contato@visiopayments.com"
              className="transition-colors hover:text-primary"
            >
              contato@visiopayments.com
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Falar com suporte
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Website</h3>
          <nav className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {websiteLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="justify-end flex max-w-7xl flex-col gap-2 pt-6 text-sm text-muted-foreground sm:flex-col sm:items-end">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/visiopayments"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siInstagram.path} />
              </svg>
            </a>
            <a
              href="https://twitter.com/visiopayments"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="X"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={siX.path} />
              </svg>
            </a>
          </div>
          <p className="mt-1">© {new Date().getFullYear()} Vi$io Payments.</p>
        </div>
      </div>
    </footer>
  );
}

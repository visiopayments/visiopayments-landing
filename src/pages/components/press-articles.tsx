import { Button } from "@/components/ui/button";

import investnewsBackground from "@/assets/investnews-background.png";
import investnewsLogo from "@/assets/investnews.png";
import valorBackground from "@/assets/valoreconomico-background.png";
import valorLogo from "@/assets/valoreconomico.png";
import { ArrowRight } from "lucide-react";

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

export function PressArticles() {
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
                <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-background/80 via-background/10 to-transparent" />
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

        <div className="flex justify-center items-center">
          <Button asChild className="mt-6 h-12 px-6 text-base">
            <a href="#">
              Criar Conta
              <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

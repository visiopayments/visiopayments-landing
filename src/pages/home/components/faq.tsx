import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "A Vi$io Payments cobra mensalidade?",
    answer:
      "Não. A proposta é simples: taxa fixa de 1% por invoice aprovado, sem mensalidade escondida.",
  },
  {
    question: "Quais criptos posso aceitar?",
    answer:
      "Atualmente, você pode aceitar as principais e mais sólidas moedas do mercado: USDT, USDC, Ethereum (ETH) e Solana (SOL). Focamos nessas opções para garantir velocidade máxima no pagamento e alta liquidez para o seu caixa.",
  },
  {
    question:
      "Qual a vantagem da Vi$io em relação às máquinas e gateways tradicionais?",
    answer:
      "Liberdade financeira e segurança. No sistema tradicional, você sofre com o risco constante de fraudes por chargeback e fica refém do modelo D+30 das adquirentes. Com a Vi$io Payments, as transações em blockchain são irreversíveis, zero chargeback, e o saldo fica disponível e visível no seu painel em segundos, acabando com a burocracia bancária.",
  },
  {
    question:
      "Minha equipe precisa entender de blockchain para operar com a Vi$io Payments?",
    answer:
      "Não. Nós lidamos com a parte 'difícil' da tecnologia para que você não precise. Para a sua equipe de tecnologia, integrar a Vi$io Payments é tão familiar quanto integrar qualquer API REST padrão de mercado. E para o seu financeiro, o painel de controle oferece uma gestão clara em dólares, sem a necessidade de entender os bastidores técnicos das redes Ethereum, Base ou Solana.",
  },
  {
    question: "Como e quando eu recebo o dinheiro das minhas vendas?",
    answer:
      "O controle é 100% seu. Quando uma venda é concluída, o saldo entra instantaneamente na sua conta e fica visível no dashboard. A partir de lá, você realiza o saque quando preferir, sem limites e sem taxas extras.",
  },
];

export function Faq() {
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
              className="group rounded-xl border border-border/70 bg-card/55 p-5 open:bg-card transition-all duration-150"
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

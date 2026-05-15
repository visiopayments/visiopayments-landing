import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "A Vi$io Payments cobra mensalidade?",
    answer:
      "Não. A proposta é simples: taxa fixa de 1% por pagamento aprovado, sem mensalidade escondida.",
  },
  {
    question: "Quais criptos posso aceitar?",
    answer:
      "A plataforma trabalha com USDT, USDC, ETH e SOL, respeitando a rede e o token definidos na criação da invoice.",
  },
  {
    question:
      "Qual a vantagem da Vi$io em relação às máquinas e gateways tradicionais?",
    answer:
      "Liberdade financeira e segurança. No sistema tradicional, você sofre com o risco constante de fraudes por chargeback e fica refém do modelo D+30 das adquirentes. Com a Vi$io Payments, as transações em blockchain são irreversíveis, zero chargeback, e o saldo fica disponível e visível no seu painel em segundos, acabando com a burocracia bancária.",
  },
  {
    question: "Como acompanho o status do pagamento?",
    answer:
      "Cada invoice possui status, endereço, QR Code, expiração e callbackUrl para receber atualizações no seu sistema.",
  },
  {
    question: "Como e quando eu recebo o dinheiro das minhas vendas?",
    answer:
      "O controle é 100% seu. Quando uma venda é concluída, o saldo entra instantaneamente no seu dashboard. A partir de lá, você realiza o saque sob demanda direto para a sua carteira no momento que for mais estratégico para o seu fluxo de caixa, permitindo otimizar o pagamento de taxas de rede e centralizar seus recebimentos.",
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
              className="group rounded-xl border border-border/70 bg-card/55 p-5 open:bg-card"
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

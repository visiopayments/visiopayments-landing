import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Api() {
  return (
    <section
      id="api"
      className="border-b border-border/70 bg-card/20 px-6 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary select-none"
          >
            API first
          </Badge>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            API simples para operações cripto complexas.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
            Integre a Vi$io Payments ao seu produto para criar checkouts,
            acompanhar invoices e automatizar atualizações via webhook com
            segurança e eficiência.
          </p>
          <Button asChild className="mt-8 h-11 border-border/80 px-5">
            <a href="#api">
              Acessar documentação
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#44475a] bg-[#282a36] shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 border-b border-[#44475a] bg-[#21222c] px-4 py-3">
            <span className="size-3 rounded-full bg-[#ff5555]" />
            <span className="size-3 rounded-full bg-[#f1fa8c]" />
            <span className="size-3 rounded-full bg-[#50fa7b]" />
            <span className="ml-3 text-xs text-[#6272a4]">
              create-invoice.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-[11px] leading-5 text-[#f8f8f2] sm:text-xs">
            <code>
              <span className="code-token-keyword">const</span>{" "}
              <span className="code-token-property">response</span>{" "}
              <span className="code-token-operator">=</span>{" "}
              <span className="code-token-keyword">await</span>{" "}
              <span className="code-token-function">fetch</span>
              <span className="code-token-punctuation">(</span>
              <span className="code-token-string">
                "https://api.visiopayments.com/api/invoices/create"
              </span>
              <span className="code-token-punctuation">, {"{"}</span>
              {"\n  "}
              <span className="code-token-property">method</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"POST"</span>
              <span className="code-token-punctuation">,</span>
              {"\n  "}
              <span className="code-token-property">headers</span>
              <span className="code-token-punctuation">: {"{"}</span>
              {"\n    "}
              <span className="code-token-string">"Content-Type"</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"application/json"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-string">"Authorization"</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">
                "Bearer &lt;API_KEY&gt;"
              </span>
              {"\n  "}
              <span className="code-token-punctuation">{"}"},</span>
              {"\n  "}
              <span className="code-token-property">body</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-property">JSON</span>
              <span className="code-token-punctuation">.</span>
              <span className="code-token-function">stringify</span>
              <span className="code-token-punctuation">({"{"}</span>
              {"\n    "}
              <span className="code-token-property">amount</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-number">1.5</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">chain</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"SOLANA"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">token</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"SOL"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">expiresAt</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-number">1800</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">externalId</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">"pedido-2048"</span>
              <span className="code-token-punctuation">,</span>
              {"\n    "}
              <span className="code-token-property">callbackUrl</span>
              <span className="code-token-punctuation">: </span>
              <span className="code-token-string">
                "https://empresa.com/webhooks/visiopayments"
              </span>
              {"\n  "}
              <span className="code-token-punctuation">{"}"})</span>
              {"\n"}
              <span className="code-token-punctuation">{"}"})</span>
              {"\n\n"}
              <span className="code-token-keyword">const</span>{" "}
              <span className="code-token-property">invoice</span>{" "}
              <span className="code-token-operator">=</span>{" "}
              <span className="code-token-keyword">await</span>{" "}
              <span className="code-token-property">response</span>
              <span className="code-token-punctuation">.</span>
              <span className="code-token-function">json</span>
              <span className="code-token-punctuation">()</span>
              {"\n"}
              <span className="code-token-keyword">return</span>{" "}
              <span className="code-token-property">invoice</span>
              <span className="code-token-punctuation">.</span>
              <span className="code-token-property">address</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

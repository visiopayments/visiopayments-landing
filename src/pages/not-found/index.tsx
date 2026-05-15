import { Button } from "@components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigator = useNavigate();

  return (
    <div className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-10 px-6 bg-background">
      <div className="relative w-full md:w-1/2 flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1549116553-fb8817f12324?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Leão"
          draggable={false}
          className="rounded-2xl shadow-2xl w-full max-w-lg object-cover animate-[fadeIn_2s_ease-in-out] transform hover:scale-105 transition-all"
        />
        <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-background/60 via-transparent to-transparent"></div>

        <p className="mt-2 text-sm text-muted-foreground text-center">
          Visio, CEO do Vi$io Payments
        </p>
      </div>

      <div className="flex flex-col items-start text-left gap-4 max-w-md">
        <h1 className="text-6xl font-extrabold text-primary">404</h1>
        <h2 className="text-3xl font-semibold text-foreground">
          Ops! Página não encontrada.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Parece que você rugiu no lugar errado.
          <br />A página que procura não existe ou foi movida.
        </p>

        <Button
          onClick={() => navigator("/")}
          className="mt-4 cursor-pointer px-6 py-3 text-lg rounded-xl shadow-lg transition-all hover:scale-105"
        >
          Voltar para o início
        </Button>
      </div>
    </div>
  );
}

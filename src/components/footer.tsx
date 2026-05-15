import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="size-8 rounded-md" />
          <span>Vi$io Payments</span>
        </div>
        <p>Gateway cripto para negócios digitais.</p>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="border-b border-hairline/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-md text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          Seu próximo match está a um perfil de distância.
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Sou candidato</Button>
          <Button size="lg" variant="outline">
            Sou empresa
          </Button>
        </div>
      </div>
    </section>
  );
}

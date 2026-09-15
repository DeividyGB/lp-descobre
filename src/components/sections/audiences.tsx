import { Button } from "@/components/ui/button";

export function Audiences() {
  return (
    <section className="border-b border-hairline/60">
      <div className="mx-auto grid max-w-6xl sm:grid-cols-2">
        <div id="candidatos" className="flex flex-col gap-6 px-6 py-20 sm:pr-14">
          <span className="text-sm font-medium text-paper-dim">
            Para candidatos
          </span>
          <h3 className="text-2xl font-medium leading-snug text-paper sm:text-3xl">
            Pare de mandar currículo pro vazio.
          </h3>
          <ul className="flex flex-col gap-3 text-[15px] text-paper-dim">
            <li>— Vagas filtradas pelo que você realmente sabe fazer</li>
            <li>— Resposta em dias, não em meses</li>
            <li>— Sem precisar decorar palavra-chave de currículo</li>
          </ul>
          <div>
            <Button variant="outline" className="mt-2">
              Criar meu perfil
            </Button>
          </div>
        </div>

        <div
          id="empresas"
          className="flex flex-col gap-6 border-t border-hairline/60 bg-surface px-6 py-20 sm:border-l sm:border-t-0 sm:pl-14"
        >
          <span className="text-sm font-medium text-flare">
            Para empresas
          </span>
          <h3 className="text-2xl font-medium leading-snug text-paper sm:text-3xl">
            Contrate quem faz, não quem só parece bem no papel.
          </h3>
          <ul className="flex flex-col gap-3 text-[15px] text-paper-dim">
            <li>— Talentos pré-alinhados com a vaga, antes da entrevista</li>
            <li>— Menos tempo de triagem, mais tempo decidindo</li>
            <li>— Publique uma vaga e comece a receber matches hoje</li>
          </ul>
          <div>
            <Button className="mt-2">Publicar vaga</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

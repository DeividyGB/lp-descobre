const steps = [
  {
    number: "1",
    title: "Monte seu perfil em minutos",
    description:
      "Conte o que você faz bem e o que procura. Sem modelo engessado de currículo.",
  },
  {
    number: "2",
    title: "A gente faz o match certo",
    description:
      "Cruzamos suas habilidades com vagas reais, ativamente abertas, das empresas certas.",
  },
  {
    number: "3",
    title: "Converse direto com quem decide",
    description:
      "Sem fila de triagem. Você fala com quem realmente vai contratar.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-hairline/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Aqui no descobre é simples.
          </h2>
          <p className="mt-4 text-lg text-paper-dim">
            Você não precisa entender de plataforma de emprego, nem ter o
            currículo mais bonito.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-4">
              <span className="text-sm font-medium text-flare">
                {step.number}
              </span>
              <h3 className="text-xl font-medium text-paper">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-paper-dim">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

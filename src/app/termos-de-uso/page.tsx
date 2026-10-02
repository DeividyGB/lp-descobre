"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    ArrowUp,
    FileText,
    CheckCircle2,
    UserCheck,
    Lock,
    Layers,
    Share2,
    ShieldAlert,
    ShieldCheck,
    MessageSquare,
    Settings,
    Puzzle,
    Scale,
    HandCoins,
    Copyright,
    CreditCard,
    RefreshCw,
    XCircle,
    Smartphone,
    Flag,
    Gavel,
    FileCheck,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Sumário (âncoras)                                                         */
/* -------------------------------------------------------------------------- */

const sections = [
    { id: "objeto", label: "1. Qualificação e objeto", Icon: FileText },
    { id: "aceite", label: "2. Aceite dos Termos", Icon: CheckCircle2 },
    { id: "elegibilidade", label: "3. Elegibilidade", Icon: UserCheck },
    { id: "cadastro", label: "4. Cadastro, conta e segurança", Icon: Lock },
    { id: "escopo", label: "5. Escopo do serviço", Icon: Layers },
    { id: "compartilhamento", label: "6. Compartilhamento de dados", Icon: Share2 },
    { id: "conduta", label: "7. Regras de uso e conduta", Icon: ShieldAlert },
    { id: "conteudo", label: "8. Conteúdo e licenças", Icon: FileText },
    { id: "privacidade", label: "9. Privacidade e proteção de dados", Icon: ShieldCheck },
    { id: "comunicacoes", label: "10. Comunicações e mensagens", Icon: MessageSquare },
    { id: "disponibilidade", label: "11. Disponibilidade e manutenção", Icon: Settings },
    { id: "terceiros", label: "12. Serviços de terceiros", Icon: Puzzle },
    { id: "responsabilidades", label: "13. Responsabilidades e limitações", Icon: Scale },
    { id: "indenizacao", label: "14. Indenização", Icon: HandCoins },
    { id: "propriedade", label: "15. Propriedade intelectual", Icon: Copyright },
    { id: "planos", label: "16. Planos, preços e funcionalidades", Icon: CreditCard },
    { id: "alteracoes", label: "17. Alterações destes Termos", Icon: RefreshCw },
    { id: "encerramento", label: "18. Suspensão e encerramento", Icon: XCircle },
    { id: "permissoes", label: "19. Permissões do aplicativo", Icon: Smartphone },
    { id: "denuncias", label: "20. Denúncias e compliance", Icon: Flag },
    { id: "foro", label: "21. Lei aplicável e foro", Icon: Gavel },
    { id: "disposicoes", label: "22. Disposições gerais", Icon: FileCheck },
];

/* -------------------------------------------------------------------------- */
/*  Componentes auxiliares (iguais aos da Política de Privacidade)            */
/* -------------------------------------------------------------------------- */

function Section({
    id,
    number,
    title,
    Icon,
    children,
}: {
    id: string;
    number: string;
    title: string;
    Icon: typeof FileText;
    children: ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-28 border-b border-hairline/15 py-10 first:pt-0 last:border-none">
            <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flare/10 text-flare">
                    <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-[20px] font-bold text-ink sm:text-[22px]">
                    <span className="mr-2 text-flare">{number}.</span>
                    {title}
                </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-paper-dim [&_strong]:font-semibold [&_strong]:text-ink">
                {children}
            </div>
        </section>
    );
}

function SubItem({ letter, children }: { letter: string; children: ReactNode }) {
    return (
        <li className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hairline/10 text-[11px] font-bold text-ink">
                {letter}
            </span>
            <span>{children}</span>
        </li>
    );
}

function InfoCard({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-2xl border border-hairline/20 bg-white/60 p-4 text-[14px] leading-relaxed text-paper-dim">
            {children}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*  Página                                                                    */
/* -------------------------------------------------------------------------- */

export default function TermosDeUsoPage() {
    return (
        <main className="bg-[#FFF8F2]">
            <header className="bg-ink px-6 py-12 text-center">
                <div className="mx-auto max-w-6xl px-6 pt-6 sm:px-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-paper-dim transition-colors hover:text-flare"
                    >
                        <ArrowLeft className="h-4 w-4" /> Voltar para o site
                    </Link>
                </div>

                <Image
                    src="/icones/DESCOBRE-ICON.svg"
                    alt="Descobre"
                    width={350}
                    height={56}
                    className="mx-auto mb-6"
                />
                <span className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-medium text-white/80">
                    <Gavel className="h-4.5 w-4.5 text-flare" /> Termos de uso · Candidatos
                </span>
                <h1 className="text-[32px] font-bold text-paper sm:text-[42px]">Termos de Uso</h1>
                <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                    Plataforma D-Escobre — Candidatos
                </p>
                <p className="mt-1 text-[13px] text-white/50">Última atualização: 02 de outubro de 2026</p>
            </header>

            <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
                <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
                    <aside className="lg:sticky lg:top-24 lg:h-fit lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-paper-dim">
                            Sumário
                        </p>
                        <nav className="space-y-1">
                            {sections.map(({ id, label, Icon }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] font-medium text-paper-dim transition-colors hover:bg-flare/10 hover:text-flare"
                                >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Conteúdo */}
                    <article className="rounded-[32px] border border-hairline/15 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
                        {/* 1. Qualificação e objeto */}
                        <Section id="objeto" number="1" title="Qualificação e objeto" Icon={FileText}>
                            <p>
                                <strong>1.1.</strong> D ESCOBRE APP LTDA., pessoa jurídica de direito privado,
                                inscrita no CNPJ sob o nº <strong>62.562.219/0001-31</strong>, com sede na Avenida
                                Doutor José Ozi nº 450, Vila Nova Itapetininga, Itapetininga, estado de São Paulo,
                                CEP 18203-265, endereço eletrônico <strong>contato@descobre.app.br</strong>,
                                proprietária e operadora da plataforma &quot;D-Escobre&quot; (site{" "}
                                <strong>https://home.descobre.app.br</strong> e aplicativo móvel), doravante
                                denominada &quot;D-Escobre&quot;, disponibiliza estes Termos de Uso aos candidatos
                                que utilizam seus serviços de intermediação entre pessoas interessadas em
                                oportunidades profissionais e empresas ofertantes de vagas.
                            </p>
                            <p>
                                <strong>1.2.</strong> Para fins de proteção de dados pessoais, a D-Escobre atua, em
                                regra, como Controladora dos dados dos Candidatos, sendo responsável por definir as
                                finalidades e meios do tratamento desses dados na plataforma. Ao se candidatar a
                                uma vaga, o Candidato concorda que seus dados serão compartilhados com a Empresa
                                ofertante da vaga, que passará a atuar como Controladora independente desses
                                dados. O canal do Encarregado (DPO) da D-Escobre é o e-mail{" "}
                                <a href="mailto:app@descobre.app.br" className="font-semibold text-flare">
                                    app@descobre.app.br
                                </a>
                                . Demais informações constam na Política de Privacidade da D-Escobre, que integra
                                estes Termos por referência.
                            </p>
                            <p>
                                <strong>1.3.</strong> Estes Termos regem o uso da plataforma por pessoas físicas
                                interessadas em se candidatar a oportunidades (&quot;Candidatos&quot;), disciplinando
                                direitos e obrigações, sem estabelecer vínculo trabalhista ou de representação entre
                                D-Escobre e os Candidatos.
                            </p>
                        </Section>

                        {/* 2. Aceite */}
                        <Section id="aceite" number="2" title="Aceite dos Termos e documentos correlatos" Icon={CheckCircle2}>
                            <p>
                                <strong>2.1.</strong> O uso da plataforma implica leitura, compreensão e aceite
                                integral destes Termos, da Política de Privacidade e, quando aplicável, de políticas
                                adicionais exibidas na interface.
                            </p>
                            <p>
                                <strong>2.2.</strong> Se o Candidato não concordar, deverá abster-se de utilizar a
                                plataforma e poderá solicitar a exclusão de sua conta nos canais indicados.
                            </p>
                            <p>
                                <strong>2.3.</strong> Em caso de conflito entre estes Termos e comunicações de
                                marketing, prevalecerão estes Termos.
                            </p>
                        </Section>

                        {/* 3. Elegibilidade */}
                        <Section id="elegibilidade" number="3" title="Elegibilidade" Icon={UserCheck}>
                            <p>
                                <strong>3.1.</strong> O uso é destinado a pessoas:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">Maiores de 18 anos; ou</SubItem>
                                <SubItem letter="b">
                                    Maiores de 16 e menores de 18 anos, desde que com a anuência de responsável
                                    legal, conforme legislação aplicável (inclusive para programas de
                                    aprendizagem/estágio).
                                </SubItem>
                            </ul>
                            <p>
                                <strong>3.2.</strong> O Candidato declara possuir capacidade civil para contratar e
                                usar a plataforma, responsabilizando-se pela veracidade dessa declaração.
                            </p>
                        </Section>

                        {/* 4. Cadastro */}
                        <Section id="cadastro" number="4" title="Cadastro, conta e segurança" Icon={Lock}>
                            <p>
                                <strong>4.1.</strong> Para se candidatar a vagas, o Candidato deverá criar conta,
                                fornecendo dados verdadeiros, completos e atualizados (incluindo, quando aplicável,
                                currículo, portfólio, competências e preferências).
                            </p>
                            <p>
                                <strong>4.2.</strong> O Candidato é responsável por:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">Manter confidenciais suas credenciais de acesso;</SubItem>
                                <SubItem letter="b">Responder por atividades realizadas em sua conta;</SubItem>
                                <SubItem letter="c">
                                    Notificar a D-Escobre imediatamente sobre acesso ou uso não autorizado.
                                </SubItem>
                            </ul>
                            <p>
                                <strong>4.3.</strong> A D-Escobre poderá, a qualquer tempo, solicitar comprovação de
                                identidade e de informações profissionais declaradas, sob pena de suspensão ou
                                encerramento da conta em caso de recusa ou fraude.
                            </p>
                        </Section>

                        {/* 5. Escopo */}
                        <Section id="escopo" number="5" title="Escopo do serviço e intermediação limitada" Icon={Layers}>
                            <p>
                                <strong>5.1.</strong> A D-Escobre:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">
                                    Disponibiliza ambiente para que Candidatos apresentem perfis e se candidatem a
                                    vagas publicadas por empresas parceiras (&quot;Empresas&quot;);
                                </SubItem>
                                <SubItem letter="b">
                                    Facilita o encaminhamento de perfis a Empresas, conforme preferências e
                                    critérios definidos pelo Candidato e/ou pela Empresa;
                                </SubItem>
                                <SubItem letter="c">Oferece recursos de triagem e comunicação na plataforma.</SubItem>
                            </ul>
                            <p>
                                <strong>5.2.</strong> A D-Escobre não:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">
                                    Garante contratação, entrevistas, remuneração, benefícios, prazos ou condições
                                    de vagas;
                                </SubItem>
                                <SubItem letter="b">
                                    Define critérios de elegibilidade ou decisão de contratação das Empresas;
                                </SubItem>
                                <SubItem letter="c">
                                    Se responsabiliza por ofertas, anúncios, condutas, decisões ou políticas das
                                    Empresas.
                                </SubItem>
                            </ul>
                            <p>
                                <strong>5.3.</strong> A relação de trabalho eventual será estabelecida diretamente
                                entre Candidato e Empresa, sem participação da D-Escobre como empregadora,
                                representante, agência de emprego ou corresponsável pelas obrigações trabalhistas.
                            </p>
                        </Section>

                        {/* 6. Compartilhamento */}
                        <Section id="compartilhamento" number="6" title="Compartilhamento de dados do Candidato com Empresas" Icon={Share2}>
                            <p>
                                <strong>6.1.</strong> Ao se candidatar, o Candidato autoriza a D-Escobre a
                                compartilhar com a Empresa os dados necessários à avaliação da candidatura (ex.:
                                dados de contato, currículo, formações, histórico profissional, resultados de
                                triagens realizadas na plataforma).
                            </p>
                            <p>
                                <strong>6.2.</strong> O Candidato poderá ajustar preferências de compartilhamento na
                                conta, inclusive retirar candidaturas, ressalvadas candidaturas já encaminhadas.
                            </p>
                            <p>
                                <strong>6.3.</strong> Uma vez recebidos pela Empresa, tais dados passam a ser
                                tratados também pela Empresa como Controladora independente, nos termos de sua
                                própria política de privacidade, cabendo à Empresa responder por esse tratamento.
                            </p>
                        </Section>

                        {/* 7. Conduta */}
                        <Section id="conduta" number="7" title="Regras de uso e conduta" Icon={ShieldAlert}>
                            <p>
                                <strong>7.1.</strong> É vedado ao Candidato:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">Fornecer informações falsas, desatualizadas ou enganosas;</SubItem>
                                <SubItem letter="b">
                                    Violar direitos de propriedade intelectual, imagem, voz ou dados de terceiros;
                                </SubItem>
                                <SubItem letter="c">
                                    Praticar qualquer forma de assédio ou discriminação contra outros usuários, com
                                    base em raça, cor, sexo, orientação sexual, identidade de gênero, origem,
                                    religião, estado civil, idade, deficiência ou qualquer outra característica
                                    protegida pela legislação, spam, fraudes, engenharia social;
                                </SubItem>
                                <SubItem letter="d">
                                    Tentar burlar sistemas de segurança, realizar scraping sem autorização ou
                                    utilizar meios automatizados que sobrecarreguem a plataforma;
                                </SubItem>
                                <SubItem letter="e">
                                    Publicar conteúdo ilícito, ofensivo, difamatório, pornográfico ou que contrarie
                                    a legislação.
                                </SubItem>
                            </ul>
                            <p>
                                <strong>7.2.</strong> O descumprimento poderá resultar em advertência, suspensão,
                                remoção de conteúdo e/ou encerramento de conta, sem prejuízo da adoção de medidas
                                legais.
                            </p>
                        </Section>

                        {/* 8. Conteúdo e licenças */}
                        <Section id="conteudo" number="8" title="Conteúdo do Candidato e licenças" Icon={FileText}>
                            <p>
                                <strong>8.1.</strong> O Candidato é titular e responsável pelo conteúdo que
                                disponibiliza (currículo, textos, arquivos, imagens, portfólios, links).
                            </p>
                            <p>
                                <strong>8.2.</strong> O Candidato concede à D-Escobre licença não exclusiva,
                                mundial, gratuita, revogável, por tempo de vigência da conta, para armazenar,
                                tratar, reproduzir tecnicamente, organizar, analisar e compartilhar tal conteúdo com
                                Empresas para viabilizar candidaturas e recursos da plataforma.
                            </p>
                            <p>
                                <strong>8.3.</strong> A D-Escobre poderá remover conteúdo que viole estes Termos ou
                                a lei, mediante moderação proporcional.
                            </p>
                            <InfoCard>
                                <p className="mb-1.5">
                                    <strong className="text-ink">8.4. Ferramentas de Capacitação e Avaliação.</strong>{" "}
                                    A plataforma poderá disponibilizar ao Candidato, de forma voluntária e opcional,
                                    acesso a ferramentas de capacitação e avaliação, como testes de conhecimento,
                                    simulados, questionários comportamentais, dinâmicas ou a possibilidade de
                                    gravação de vídeos ou áudios.
                                </p>
                                <p className="mb-1.5">
                                    <strong className="text-ink">8.5. Uso do Conteúdo Gerado.</strong> O conteúdo
                                    gerado pelo Candidato por meio dessas ferramentas (incluindo textos, gravações
                                    de voz e imagem) terá sua finalidade estritamente limitada à avaliação de sua
                                    candidatura em processos seletivos específicos e ao aprimoramento de seu perfil
                                    profissional na plataforma.
                                </p>
                                <p className="mb-1.5">
                                    <strong className="text-ink">8.5.1. Licença Específica.</strong> Ao utilizar
                                    essas ferramentas, o Candidato concede à D-Escobre licença não exclusiva,
                                    gratuita e revogável para armazenar, reproduzir, exibir e compartilhar o
                                    conteúdo gerado com as Empresas para as quais se candidatar, exclusivamente para
                                    as finalidades do processo seletivo e exibição do perfil.
                                </p>
                                <p className="mb-1.5">
                                    <strong className="text-ink">8.5.2. Uso de Imagem e Voz.</strong> Para conteúdo
                                    que envolva gravação de voz e imagem, o Candidato autoriza expressamente o uso
                                    de sua voz e imagem exclusivamente para as finalidades do item 8.5, limitado ao
                                    âmbito da plataforma e do processo seletivo em questão. A autorização pode ser
                                    revogada a qualquer tempo, podendo impactar a participação em processos que
                                    exijam tais conteúdos.
                                </p>
                                <p>
                                    <strong className="text-ink">8.6. Não Caráter Profissionalizante.</strong> As
                                    ferramentas de capacitação e avaliação têm caráter meramente auxiliar ao
                                    processo de recrutamento, não configurando curso profissionalizante,
                                    treinamento formal, certificação ou formação acadêmica/técnica reconhecida. A
                                    D-Escobre não garante resultado de empregabilidade ou qualificação profissional.
                                </p>
                            </InfoCard>
                        </Section>

                        {/* 9. Privacidade */}
                        <Section id="privacidade" number="9" title="Privacidade e proteção de dados (resumo)" Icon={ShieldCheck}>
                            <p>
                                <strong>9.1.</strong> O tratamento de dados pessoais segue a Política de
                                Privacidade, que integra estes Termos.
                            </p>
                            <p>
                                <strong>9.2.</strong> Bases legais: execução de contrato, cumprimento de obrigação
                                legal/regulatória, legítimo interesse e consentimento, conforme o caso.
                            </p>
                            <p>
                                <strong>9.3.</strong> Direitos do titular: confirmação de tratamento, acesso,
                                correção, portabilidade, anonimização, bloqueio ou eliminação de dados
                                desnecessários/excessivos, informação sobre compartilhamento e revisão de decisões
                                automatizadas, nos termos da LGPD. Solicitações devem ser direcionadas a{" "}
                                <a href="mailto:app@descobre.app.br" className="font-semibold text-flare">
                                    app@descobre.app.br
                                </a>
                                .
                            </p>
                            <p>
                                <strong>9.4.</strong> Segurança: medidas técnicas e administrativas proporcionais ao
                                risco, sem garantia de segurança absoluta da internet.
                            </p>
                            <p>
                                <strong>9.5.</strong> Retenção: os dados são mantidos pelo período necessário às
                                finalidades informadas e prazos legais; após, serão eliminados ou anonimizados,
                                conforme a Política de Privacidade.
                            </p>
                        </Section>

                        {/* 10. Comunicações */}
                        <Section id="comunicacoes" number="10" title="Comunicações e mensagens" Icon={MessageSquare}>
                            <p>
                                <strong>10.1.</strong> O Candidato concorda em receber comunicações operacionais,
                                administrativas e relacionadas a candidaturas por e-mail, SMS, WhatsApp e
                                notificações do app. Preferências poderão ser ajustadas na conta, respeitados os
                                comunicados essenciais.
                            </p>
                            <p>
                                <strong>10.2.</strong> Mensagens trocadas com Empresas por meio da plataforma podem
                                ser registradas para fins de comprovação, auditoria e prevenção a abusos, segundo a
                                Política de Privacidade.
                            </p>
                        </Section>

                        {/* 11. Disponibilidade */}
                        <Section id="disponibilidade" number="11" title="Disponibilidade, manutenção e alterações da plataforma" Icon={Settings}>
                            <p>
                                <strong>11.1.</strong> A D-Escobre envidará esforços comercialmente razoáveis para
                                manter a plataforma disponível, podendo realizar paradas programadas para
                                manutenção e melhorias.
                            </p>
                            <p>
                                <strong>11.2.</strong> Funções, recursos e interfaces podem ser alterados,
                                suspensos ou descontinuados a qualquer tempo, com comunicação quando exigida pela
                                lei.
                            </p>
                        </Section>

                        {/* 12. Terceiros */}
                        <Section id="terceiros" number="12" title="Serviços de terceiros" Icon={Puzzle}>
                            <p>
                                <strong>12.1.</strong> A plataforma pode integrar serviços de terceiros (ex.:
                                videochamadas, armazenamento, verificação de documentos). O uso desses serviços
                                pode estar sujeito a termos e políticas próprios, pelos quais o terceiro é
                                responsável.
                            </p>
                        </Section>

                        {/* 13. Responsabilidades */}
                        <Section id="responsabilidades" number="13" title="Responsabilidades e limitações" Icon={Scale}>
                            <p>
                                <strong>13.1.</strong> A D-Escobre responde por danos diretos comprovadamente
                                causados por culpa exclusiva sua no provimento da plataforma, nos limites deste
                                instrumento.
                            </p>
                            <p>
                                <strong>13.2.</strong> Na máxima extensão permitida pela lei e sem prejuízo do
                                Código de Defesa do Consumidor quando aplicável:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">
                                    A D-Escobre não responde por lucros cessantes, perda de chance, danos indiretos,
                                    especiais, punitivos ou consequenciais;
                                </SubItem>
                                <SubItem letter="b">
                                    A responsabilidade total da D-Escobre, por quaisquer demandas relacionadas ao
                                    uso da plataforma, fica limitada ao montante total eventualmente pago pelo
                                    Candidato à D-Escobre nos 12 (doze) meses anteriores ao evento que gerou a
                                    responsabilidade. Se não houver pagamento, aplica-se o limite de{" "}
                                    <strong>R$ 1.000,00</strong> (mil reais);
                                </SubItem>
                                <SubItem letter="c">Não há exclusão de responsabilidade por dolo ou culpa grave.</SubItem>
                            </ul>
                            <p>
                                <strong>13.3.</strong> A D-Escobre não garante o conteúdo, disponibilidade,
                                veracidade ou legalidade das vagas publicadas por Empresas, que respondem por seus
                                anúncios e decisões.
                            </p>
                        </Section>

                        {/* 14. Indenização */}
                        <Section id="indenizacao" number="14" title="Indenização" Icon={HandCoins}>
                            <p>
                                <strong>14.1.</strong> O Candidato concorda em indenizar e manter a D-Escobre
                                indene por reclamações de terceiros decorrentes de: (i) conteúdo que
                                disponibilizar; (ii) violação destes Termos; (iii) violação de direitos de
                                terceiros; desde que haja nexo causal com atos do Candidato e observados os limites
                                legais.
                            </p>
                        </Section>

                        {/* 15. Propriedade intelectual */}
                        <Section id="propriedade" number="15" title="Propriedade intelectual da plataforma" Icon={Copyright}>
                            <p>
                                <strong>15.1.</strong> Marcas, nomes empresariais, logotipos, código, layouts,
                                bases de dados e conteúdos da D-Escobre são protegidos por lei e não podem ser
                                utilizados sem autorização.
                            </p>
                            <p>
                                <strong>15.2.</strong> A D-Escobre concede ao Candidato uma licença pessoal,
                                limitada, revogável e intransferível para uso da plataforma conforme estes Termos.
                            </p>
                        </Section>

                        {/* 16. Planos */}
                        <Section id="planos" number="16" title="Planos, preços e novas funcionalidades" Icon={CreditCard}>
                            <p>
                                <strong>16.1.</strong> O uso pelo Candidato é, em regra, gratuito. A D-Escobre
                                poderá oferecer funcionalidades premium pagas, mediante informação prévia de
                                condições comerciais e Termos específicos.
                            </p>
                            <p>
                                <strong>16.2.</strong> Quaisquer cobranças serão previamente exibidas e dependerão
                                de aceite expresso.
                            </p>
                        </Section>

                        {/* 17. Alterações */}
                        <Section id="alteracoes" number="17" title="Alterações destes Termos" Icon={RefreshCw}>
                            <p>
                                <strong>17.1.</strong> Estes Termos podem ser alterados para refletir mudanças
                                legais, técnicas ou de negócio. A versão vigente estará disponível em{" "}
                                <strong>https://home.descobre.app.br/termos-de-uso</strong> e indicará a &quot;Última
                                atualização&quot;.
                            </p>
                            <p>
                                <strong>17.2.</strong> Alterações relevantes serão comunicadas por meio razoável. A
                                continuidade do uso após a vigência das alterações constitui aceite.
                            </p>
                        </Section>

                        {/* 18. Suspensão e encerramento */}
                        <Section id="encerramento" number="18" title="Suspensão e encerramento de conta" Icon={XCircle}>
                            <p>
                                <strong>18.1.</strong> O Candidato pode encerrar a conta a qualquer tempo,
                                observado o tratamento residual legítimo de dados (ex.: cumprimento de obrigações
                                legais).
                            </p>
                            <p>
                                <strong>18.2.</strong> A D-Escobre poderá suspender ou encerrar contas em caso de
                                descumprimento destes Termos, fraude, risco à segurança, ordem judicial ou
                                exigência legal.
                            </p>
                            <p>
                                <strong>18.3.</strong> A D-Escobre poderá conservar logs e dados mínimos
                                necessários, na forma da lei, para proteção de direitos e cumprimento de
                                obrigações.
                            </p>
                        </Section>

                        {/* 19. Permissões */}
                        <Section id="permissoes" number="19" title="Permissões do aplicativo" Icon={Smartphone}>
                            <p>
                                <strong>19.1.</strong> Para o pleno funcionamento e utilização de determinadas
                                funcionalidades, o Candidato poderá ser solicitado a conceder permissões de acesso a
                                recursos específicos de seu dispositivo móvel, incluindo:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">
                                    <strong>Câmera:</strong> para tirar fotos de perfil, gravar vídeos de
                                    apresentação ou participar de entrevistas gravadas.
                                </SubItem>
                                <SubItem letter="b">
                                    <strong>Microfone:</strong> para gravação de áudios em vídeos de apresentação ou
                                    entrevistas, quando o Candidato optar por essas funcionalidades.
                                </SubItem>
                                <SubItem letter="c">
                                    <strong>Galeria/Armazenamento:</strong> para upload de documentos, currículos,
                                    portfólios, fotos ou outros arquivos relevantes.
                                </SubItem>
                                <SubItem letter="d">
                                    <strong>Localização:</strong> para identificar a localização do Candidato e
                                    oferecer vagas próximas ou informações relevantes, sempre de forma opcional.
                                </SubItem>
                            </ul>
                            <p>
                                <strong>19.2.</strong> A concessão dessas permissões é opcional e pode ser
                                gerenciada a qualquer momento nas configurações do dispositivo. A recusa ou
                                revogação posterior poderá limitar funcionalidades que dependem desses acessos.
                            </p>
                            <p>
                                <strong>19.3.</strong> A D-Escobre utilizará os dados acessados por meio dessas
                                permissões exclusivamente para as finalidades explicitadas nesta cláusula e na
                                Política de Privacidade.
                            </p>
                        </Section>

                        {/* 20. Denúncias */}
                        <Section id="denuncias" number="20" title="Denúncias e compliance" Icon={Flag}>
                            <p>
                                <strong>20.1.</strong> Canais para denúncias de abuso, fraude, assédio ou conteúdos
                                ilícitos:{" "}
                                <a href="mailto:contato@descobre.app.br" className="font-semibold text-flare">
                                    contato@descobre.app.br
                                </a>{" "}
                                e/ou a funcionalidade &quot;Denunciar&quot; no app.
                            </p>
                            <p>
                                <strong>20.2.</strong> A D-Escobre poderá adotar medidas de investigação,
                                prevenção e cooperação com autoridades, na forma da lei.
                            </p>
                        </Section>

                        {/* 21. Foro */}
                        <Section id="foro" number="21" title="Lei aplicável e foro" Icon={Gavel}>
                            <p>
                                <strong>21.1.</strong> Aplica-se a legislação brasileira.
                            </p>
                            <p>
                                <strong>21.2.</strong> Fica eleito o foro da Comarca de Itapetininga/SP, com
                                renúncia a qualquer outro, por mais privilegiado que seja, salvo competência legal
                                específica protetiva do consumidor, quando aplicável.
                            </p>
                        </Section>

                        {/* 22. Disposições gerais */}
                        <Section id="disposicoes" number="22" title="Disposições gerais" Icon={FileCheck}>
                            <ul className="space-y-3">
                                <SubItem letter="22.1">
                                    <strong>Integralidade.</strong> Estes Termos, a Política de Privacidade e
                                    quaisquer outras políticas, anexos ou documentos complementares publicados pela
                                    D-Escobre na plataforma constituem o acordo integral entre a D-Escobre e o
                                    Candidato, prevalecendo sobre entendimentos anteriores.
                                </SubItem>
                                <SubItem letter="22.2">
                                    <strong>Nulidade parcial.</strong> A eventual nulidade ou inexequibilidade de
                                    qualquer disposição destes Termos não afetará a validade das demais cláusulas,
                                    que permanecerão em pleno vigor e efeito.
                                </SubItem>
                                <SubItem letter="22.3">
                                    <strong>Notificações.</strong> As comunicações oficiais serão consideradas
                                    válidas quando enviadas aos endereços eletrônicos cadastrados pelo Candidato ou
                                    por meio de alertas na própria plataforma. É responsabilidade do Candidato
                                    manter seus dados de contato atualizados.
                                </SubItem>
                                <SubItem letter="22.4">
                                    <strong>Prevalência.</strong> Em caso de conflito entre os documentos deste
                                    acordo, prevalecerá a seguinte ordem, do mais específico para o mais geral: (i)
                                    estes Termos de Uso; (ii) a Política de Privacidade (prevalecendo o que for mais
                                    protetivo ao Candidato quanto a dados pessoais); e (iii) demais políticas
                                    publicadas na plataforma.
                                </SubItem>
                                <SubItem letter="22.5">
                                    <strong>Tolerância.</strong> A tolerância quanto ao não exercício de quaisquer
                                    direitos não constituirá novação ou renúncia a tais direitos, nem precedente
                                    para futuras violações.
                                </SubItem>
                                <SubItem letter="22.6">
                                    <strong>Cessão.</strong> O Candidato não poderá ceder, transferir ou dispor de
                                    sua conta ou dos direitos e obrigações decorrentes destes Termos sem
                                    consentimento prévio e por escrito da D-Escobre. A D-Escobre poderá ceder ou
                                    transferir estes Termos no contexto de reorganização, fusão, aquisição ou venda
                                    de ativos, com comunicação ao Candidato quando exigida pela lei.
                                </SubItem>
                                <SubItem letter="22.7">
                                    <strong>Versão eletrônica.</strong> A aceitação eletrônica destes Termos pelo
                                    Candidato, por meio do clique no botão &quot;Aceito&quot; ou equivalente, ou pela
                                    mera utilização continuada da plataforma, tem o mesmo valor jurídico e força de
                                    assinatura em documento físico.
                                </SubItem>
                            </ul>
                        </Section>
                    </article>
                </div>
            </div>

            {/* Botão voltar ao topo */}
            <a
                href="#top"
                className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-flare text-white shadow-lg transition-transform hover:scale-105"
                aria-label="Voltar ao topo"
            >
                <ArrowUp className="h-5 w-5" />
            </a>
        </main>
    );
}
"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
    ShieldCheck,
    Database,
    Target,
    Share2,
    Lock,
    Trash2,
    UserCheck,
    Baby,
    Mail,
    RefreshCw,
    ArrowUp,
    ArrowLeft,
    Link
} from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

/* -------------------------------------------------------------------------- */
/*  Sumário (âncoras)                                                         */
/* -------------------------------------------------------------------------- */

const sections = [
    { id: "dados-coletados", label: "1. Dados pessoais coletados", Icon: Database },
    { id: "finalidades", label: "2. Finalidades e bases legais", Icon: Target },
    { id: "compartilhamento", label: "3. Compartilhamento de dados", Icon: Share2 },
    { id: "seguranca", label: "4. Armazenamento e segurança", Icon: Lock },
    { id: "exclusao", label: "5. Exclusão de conta e dados", Icon: Trash2 },
    { id: "direitos", label: "6. Direitos dos titulares", Icon: UserCheck },
    { id: "menores", label: "7. Dados de menores de idade", Icon: Baby },
    { id: "dpo", label: "8. Encarregado (DPO) e contato", Icon: Mail },
    { id: "alteracoes", label: "9. Alterações desta política", Icon: RefreshCw },
];

/* -------------------------------------------------------------------------- */
/*  Componentes auxiliares                                                    */
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
    Icon: typeof Database;
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

export default function PoliticaDePrivacidadePage() {
    return (
        <main className="bg-[#FFF8F2]">

            {/* Cabeçalho */}
            <header className="bg-ink px-6 py-12 text-center">
                <div className="mx-auto max-w-6xl px-6 pt-6 sm:px-10">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-paper-dim transition-colors hover:text-flare"
                    >
                        <ArrowLeft className="h-4 w-4" /> Voltar para o site
                    </a>
                </div>

                <Image
                    src="/icones/DESCOBRE-ICON.svg"
                    alt="Descobre"
                    width={350}
                    height={56}
                    className="mx-auto mb-6"
                />
                <span className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-medium text-white/80">
                    <ShieldCheck className="h-4.5 w-4.5 text-flare" /> Proteção de dados · LGPD
                </span>
                <h1 className="text-[32px] font-bold text-paper sm:text-[42px]">Política de Privacidade</h1>
                <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                    Plataforma D-Escobre / D-HUB Brasil
                </p>
                <p className="mt-1 text-[13px] text-white/50">Última atualização: 10 de setembro de 2026</p>
            </header>

            <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
                <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
                    {/* Sumário lateral (sticky no desktop) */}
                    <aside className="lg:sticky lg:top-24 lg:h-fit">
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
                        <p className="mb-10 text-[15px] leading-relaxed text-paper-dim">
                            A <strong>D ESCOBRE APP LTDA.</strong>, pessoa jurídica de direito privado, inscrita no
                            CNPJ/MF sob o nº <strong>62.562.219/0001-31</strong>, com sede na Avenida Doutor José Ozi
                            nº 450, Vila Nova Itapetininga, Itapetininga, estado de São Paulo, CEP 18203-265,
                            endereço eletrônico <strong>contato@descobre.app</strong> (&quot;D-Escobre&quot; /
                            &quot;D-HUB&quot;), disponibiliza esta Política de Privacidade para demonstrar seu
                            compromisso com a proteção de dados pessoais, a privacidade e a segurança das
                            informações tratadas em sua plataforma, aplicativo móvel e serviços associados. Este
                            documento foi estruturado em estrita conformidade com a Lei Geral de Proteção de Dados
                            Pessoais (Lei nº 13.709/2018 — LGPD), o Marco Civil da Internet (Lei nº 12.965/2014) e as
                            diretrizes de segurança e transparência das lojas de aplicativos Google Play Store e
                            Apple App Store.
                        </p>

                        {/* 1. Dados coletados */}
                        <Section id="dados-coletados" number="1" title="Dados pessoais coletados" Icon={Database}>
                            <p>
                                <strong>1.1.</strong> Para disponibilizar suas funcionalidades de recrutamento,
                                gestão de processos seletivos e desenvolvimento profissional, a plataforma coleta e
                                trata as seguintes categorias de dados pessoais:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">
                                    <strong>Dados Cadastrais dos Candidatos:</strong> Nome completo, endereço de
                                    e-mail, telefone/WhatsApp, número de CPF, data de nascimento, cidade/estado de
                                    residência e fotografia de perfil (opcional).
                                </SubItem>
                                <SubItem letter="b">
                                    <strong>Dados Profissionais e Curriculares:</strong> Histórico profissional,
                                    experiências anteriores, formação acadêmica, cursos, certificações, idiomas,
                                    pretensão salarial, links de portfólio, perfis profissionais (como LinkedIn) e
                                    documentos curriculares anexados pelo próprio usuário (PDF, DOC ou DOCX).
                                </SubItem>
                                <SubItem letter="c">
                                    <strong>Dados de Representantes e Usuários de Empresas:</strong> Nome completo,
                                    e-mail institucional ou comercial, telefone corporativo, cargo, função exercida e
                                    credenciais de acesso individuais vinculadas à pessoa jurídica contratante.
                                </SubItem>
                                <SubItem letter="d">
                                    <strong>Dados Técnicos e Registros de Conexão:</strong> Endereço IP, registros de
                                    data, hora e fuso horário de acesso, identificadores do dispositivo móvel, sistema
                                    operacional, versão do aplicativo e logs de atividade técnica.
                                </SubItem>
                            </ul>

                            <p className="pt-2">
                                <strong>1.2. Permissões Solicitadas no Dispositivo Móvel:</strong>
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">
                                    <strong>Câmera e Galeria de Imagens:</strong> solicitada única e exclusivamente
                                    mediante ação ativa e autorização do usuário, para incluir foto de perfil ou
                                    digitalizar documentos e currículos.
                                </SubItem>
                                <SubItem letter="b">
                                    <strong>Armazenamento e Arquivos:</strong> solicitado para permitir o upload do
                                    currículo do candidato para a plataforma.
                                </SubItem>
                                <SubItem letter="c">
                                    <strong>Notificações Push:</strong> opcionais, podem ser ativadas ou desativadas a
                                    qualquer momento nas configurações do sistema operacional do aparelho.
                                </SubItem>
                            </ul>
                        </Section>

                        {/* 2. Finalidades */}
                        <Section id="finalidades" number="2" title="Finalidades e bases legais do tratamento" Icon={Target}>
                            <p>
                                Tratamos os dados pessoais estritamente de acordo com as seguintes finalidades e
                                hipóteses legais autorizadas pela LGPD (Lei nº 13.709/2018):
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <InfoCard>
                                    <strong className="block text-ink">2.1. Criação de conta e autenticação</strong>
                                    Titulares: Candidatos e representantes de Empresas.
                                    <br />
                                    Base legal: execução de contrato ou procedimentos preliminares (art. 7º, V).
                                </InfoCard>
                                <InfoCard>
                                    <strong className="block text-ink">2.2. Conexão entre candidatos e vagas</strong>
                                    Titulares: Candidatos.
                                    <br />
                                    Base legal: execução de contrato ou procedimentos preliminares (art. 7º, V).
                                </InfoCard>
                                <InfoCard>
                                    <strong className="block text-ink">2.3. Gestão de processos seletivos</strong>
                                    Titulares: Candidatos e representantes de Empresas.
                                    <br />
                                    Base legal: execução de contrato (art. 7º, V) e legítimo interesse (art. 7º, IX).
                                </InfoCard>
                                <InfoCard>
                                    <strong className="block text-ink">2.4. Verificações adicionais (background check)</strong>
                                    Titulares: Candidatos.
                                    <br />
                                    Base legal: consentimento específico e destacado (art. 7º, I), ou base aplicável
                                    à verificação solicitada.
                                </InfoCard>
                                <InfoCard>
                                    <strong className="block text-ink">2.5. Faturamento e cobrança de planos</strong>
                                    Titulares: Representantes de Empresas.
                                    <br />
                                    Base legal: execução de contrato (art. 7º, V) e cumprimento de obrigação legal
                                    fiscal (art. 7º, II).
                                </InfoCard>
                                <InfoCard>
                                    <strong className="block text-ink">2.6. Guarda de registros de conexão</strong>
                                    Titulares: Todos os usuários.
                                    <br />
                                    Base legal: cumprimento de obrigação legal — Marco Civil da Internet (art. 7º, II).
                                </InfoCard>
                                <InfoCard>
                                    <strong className="block text-ink">2.7. Suporte técnico e segurança</strong>
                                    Titulares: Todos os usuários.
                                    <br />
                                    Base legal: legítimo interesse (art. 7º, IX) e proteção da segurança da plataforma.
                                </InfoCard>
                            </div>
                        </Section>

                        {/* 3. Compartilhamento */}
                        <Section id="compartilhamento" number="3" title="Compartilhamento de dados pessoais" Icon={Share2}>
                            <p>
                                <strong>3.1.</strong> A plataforma não comercializa nem vende dados pessoais sob
                                nenhuma hipótese.
                            </p>
                            <p>
                                <strong>3.2.</strong> O compartilhamento ocorre exclusivamente para viabilizar as
                                atividades da plataforma, limitado aos seguintes destinatários:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">
                                    <strong>Empresas Contratantes e Recrutadores:</strong> ao se candidatar a uma
                                    vaga, o Candidato autoriza que seus dados sejam visualizados e tratados pelas
                                    Empresas responsáveis pelo processo seletivo, que atuam como controladoras
                                    independentes desses dados.
                                </SubItem>
                                <SubItem letter="b">
                                    <strong>Fornecedores de Infraestrutura e Tecnologia:</strong> provedores de
                                    hospedagem em nuvem, bancos de dados, notificações, e-mails transacionais,
                                    análise técnica de performance e gateways de pagamento.
                                </SubItem>
                                <SubItem letter="c">
                                    <strong>Autoridades Públicas:</strong> quando exigido por ordem judicial
                                    fundamentada, requisição de autoridades competentes, ou para cumprimento de
                                    obrigação legal ou regulatória.
                                </SubItem>
                            </ul>
                        </Section>

                        {/* 4. Segurança */}
                        <Section id="seguranca" number="4" title="Armazenamento e segurança da informação" Icon={Lock}>
                            <p>
                                <strong>4.1.</strong> Adotamos padrões técnicos e organizacionais de segurança para
                                resguardar a integridade, sigilo e disponibilidade dos dados pessoais, incluindo:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">Protocolos seguros de transmissão de dados (criptografia TLS/HTTPS).</SubItem>
                                <SubItem letter="b">Controle estrito de acesso físico e lógico, com base no princípio do menor privilégio.</SubItem>
                                <SubItem letter="c">Armazenamento em servidores em nuvem com certificações internacionais de segurança.</SubItem>
                                <SubItem letter="d">Monitoramento periódico e rotinas de prevenção a vulnerabilidades e acessos não autorizados.</SubItem>
                            </ul>
                            <p>
                                <strong>4.2.</strong> Os dados pessoais serão retidos pelo período em que o cadastro
                                do titular estiver ativo na plataforma, ou pelo prazo estritamente necessário para
                                cumprimento de prazos de guarda legal, fiscal e de responsabilidade civil (art. 16 da
                                LGPD e art. 15 da Lei nº 12.965/2014).
                            </p>
                        </Section>

                        {/* 5. Exclusão */}
                        <Section id="exclusao" number="5" title="Exclusão de conta e eliminação de dados" Icon={Trash2}>
                            <p>
                                <strong>5.1.</strong> O titular poderá, a seu livre critério e a qualquer tempo,
                                encerrar sua conta e requerer a exclusão definitiva de seus dados pessoais.
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <InfoCard>
                                    <strong className="block text-ink">5.2. Exclusão direta pelo aplicativo</strong>
                                    Configurações do Perfil → Conta → &quot;Excluir Minha Conta&quot;.
                                </InfoCard>
                                <InfoCard>
                                    <strong className="block text-ink">5.3. Exclusão via canal de atendimento</strong>
                                    Solicitação formal ao DPO pelo e-mail{" "}
                                    <a href="mailto:dpo@descobre.app" className="font-semibold text-flare">
                                        dpo@descobre.app
                                    </a>
                                    .
                                </InfoCard>
                            </div>
                            <p>
                                <strong>5.4. Efeitos da exclusão:</strong> com a confirmação da solicitação, a conta
                                será desativada e os dados pessoais serão apagados ou anonimizados
                                irreversivelmente, ressalvada a guarda estritamente necessária daqueles dados cuja
                                retenção seja exigida para cumprimento de dever legal, fiscal ou regulatório, ou
                                para o exercício regular de direitos em processo administrativo ou judicial (art. 16
                                da LGPD).
                            </p>
                        </Section>

                        {/* 6. Direitos */}
                        <Section id="direitos" number="6" title="Direitos dos titulares de dados" Icon={UserCheck}>
                            <p>
                                <strong>6.1.</strong> Nos termos do art. 18 da LGPD, o titular pode exercer, perante
                                a D-Escobre, os seguintes direitos:
                            </p>
                            <ul className="space-y-2.5">
                                <SubItem letter="a">Confirmação da existência de tratamento e acesso aos dados pessoais.</SubItem>
                                <SubItem letter="b">Correção de dados incompletos, inexatos ou desatualizados.</SubItem>
                                <SubItem letter="c">Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</SubItem>
                                <SubItem letter="d">Portabilidade dos dados a outro fornecedor, mediante requisição expressa.</SubItem>
                                <SubItem letter="e">Eliminação dos dados tratados com base no consentimento.</SubItem>
                                <SubItem letter="f">Informação sobre entidades com as quais houve uso compartilhado de dados.</SubItem>
                                <SubItem letter="g">Informação sobre a possibilidade de não fornecer consentimento e suas consequências.</SubItem>
                                <SubItem letter="h">Revogação do consentimento a qualquer momento.</SubItem>
                            </ul>
                            <p>
                                <strong>6.2.</strong> As requisições serão atendidas de forma gratuita, mediante
                                confirmação prévia da identidade do solicitante, para resguardar a segurança das
                                informações.
                            </p>
                        </Section>

                        {/* 7. Menores */}
                        <Section id="menores" number="7" title="Dados de menores de idade" Icon={Baby}>
                            <p>
                                <strong>7.1.</strong> A plataforma não tem como público-alvo e não realiza
                                intencionalmente o cadastro de crianças (menores de 12 anos incompletos).
                            </p>
                            <p>
                                <strong>7.2.</strong> O cadastro e a participação em processos seletivos de
                                adolescentes entre 14 e 18 anos incompletos (com foco em vagas de Aprendizagem, nos
                                termos da CLT) devem ser acompanhados e assistidos por seus respectivos pais ou
                                responsáveis legais.
                            </p>
                        </Section>

                        {/* 8. DPO */}
                        <Section id="dpo" number="8" title="Encarregado de Proteção de Dados (DPO) e contato" Icon={Mail}>
                            <p>
                                <strong>8.1.</strong> Para o exercício dos direitos previstos na LGPD, esclarecimento
                                de dúvidas sobre esta Política ou envio de comunicações sobre o tratamento de dados
                                pessoais, o titular poderá contatar o Encarregado:
                            </p>
                            <InfoCard>
                                <p className="mb-1">
                                    <strong className="text-ink">Encarregado (DPO):</strong> Encarregado de Proteção
                                    de Dados D-Escobre / D-HUB
                                </p>
                                <p className="mb-1">
                                    <strong className="text-ink">E-mail de privacidade:</strong>{" "}
                                    <a href="mailto:dpo@descobre.app" className="font-semibold text-flare">
                                        dpo@descobre.app
                                    </a>
                                </p>
                                <p className="mb-1">
                                    <strong className="text-ink">E-mail de suporte geral:</strong>{" "}
                                    <a href="mailto:contato@descobre.app" className="font-semibold text-flare">
                                        contato@descobre.app
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-ink">Endereço:</strong> Avenida Doutor José Ozi nº 450,
                                    Vila Nova Itapetininga, Itapetininga/SP, CEP 18203-265.
                                </p>
                            </InfoCard>
                        </Section>

                        {/* 9. Alterações */}
                        <Section id="alteracoes" number="9" title="Alterações desta Política de Privacidade" Icon={RefreshCw}>
                            <p>
                                <strong>9.1.</strong> Esta Política poderá ser alterada a qualquer momento para
                                refletir atualizações nas funcionalidades da plataforma, adequações técnicas ou
                                mudanças na legislação aplicável.
                            </p>
                            <p>
                                <strong>9.2.</strong> Caso ocorram modificações materiais nos termos deste documento,
                                os usuários serão informados com antecedência por meio de aviso de destaque na
                                própria plataforma ou via comunicação enviada ao e-mail cadastrado.
                            </p>
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
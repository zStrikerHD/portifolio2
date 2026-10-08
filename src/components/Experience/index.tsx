import { InternalLayout } from "../common/InternalLayout";
import {
  Container,
  HeaderHero,
  Badge,
  PageTitle,
  PageSubtitle,
  TimelineWrapper,
  TimelineItem,
  TimelineDot,
  ExperienceCard,
  CardTop,
  RoleTitle,
  CompanyName,
  PeriodBadge,
  BulletList,
  BulletItem,
  SectionTitle,
} from "./styled";
import {
  Briefcase,
  Terminal,
  TrendingUp,
  Cpu,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const professionalExperience = [
  {
    title: "Freelance – Desenvolvedor Back-End & Integrações",
    company: "Projeto Corporativo de E-commerce",
    period: "02/2024 – 03/2024",
    icon: Terminal,
    details: [
      "Desenvolvimento de API de sincronização de estoque de itens de papelaria a partir do site da empresa em React, utilizando Node.js e integrando diretamente com o ERP Bling.",
      "Otimização do processo de vendas e controle de estoque, consolidando produtos em múltiplos canais e reduzindo tempo operacional manual.",
      "Criação de webhooks e endpoints para monitoramento em tempo real de pedidos e atualizações de inventário.",
    ],
  },
  {
    title: "Vendas Técnicas & Gestão Comercial",
    company: "Comércio de Materiais para Construção Maria Luiza LTDA",
    period: "06/2023 – 10/2025",
    icon: TrendingUp,
    details: [
      "Atendimento consultivo especializado em soluções técnicas de construção, garantindo alta retenção de clientes.",
      "Responsável por vendas com volume superior a R$ 180.000 mensais, representando mais de 50% dos resultados da equipe.",
      "Emissão ágil de 20 a 30 pedidos por dia com controle apurado no sistema de estoque e faturamento.",
      "Intermediação direta entre clientes, equipes de logística e fornecedores com foco em metas rigorosas.",
    ],
  },
  {
    title: "Operador de Maquinário Industrial (Prensista)",
    company: "FK Grupo S/A",
    period: "10/2022 – 03/2023",
    icon: Cpu,
    details: [
      "Operação de prensas industriais de precisão com padrões de controle de qualidade milimétricos.",
      "Proatividade em rotinas de melhoria contínua, segurança operacional e trabalho em equipe.",
    ],
  },
  {
    title: "Entrevistador Censitário",
    company: "IBGE (Instituto Brasileiro de Geografia e Estatística)",
    period: "07/2022 – 11/2022",
    icon: Briefcase,
    details: [
      "Coleta e consolidação de dados estatísticos em campo, assegurando veracidade amostral e cumprimento de prazos.",
      "Comunicação empática com diferentes perfis de público e manuseio de equipamentos eletrônicos de coleta segura.",
    ],
  },
];

const academicProjects = [
  {
    title: "Barbearia Online com Integração ao Banco de Dados",
    company: "Prova Final de React · EBAC",
    period: "03/2026 – 04/2026",
    icon: GraduationCap,
    details: [
      "Aplicação completa com agendamento de horários, autenticação de clientes, gerenciamento de barbeiros e persistência em banco de dados.",
      "Interface autoral com Styled Components, animações fluidas e arquitetura limpa de componentes.",
    ],
  },
  {
    title: "LumiluPet – Sistema de Agendamento Pet",
    company: "Projeto Autoral de Gestão",
    period: "2025",
    icon: Sparkles,
    details: [
      "Plataforma intuitiva para clínicas e pet shops gerenciarem consultas, banhos e procedimentos veterinários.",
      "Design responsivo com foco em simplicidade para tutores e painel de controle operacional para funcionários.",
    ],
  },
];

const Experience = () => (
  <InternalLayout>
    <Container>
      <HeaderHero>
        <Badge>
          <Briefcase size={14} />
          <span>Trajetória & Vivência</span>
        </Badge>
        <PageTitle>Experiência & Histórico</PageTitle>
        <PageSubtitle>
          Minha jornada une desenvolvimento de software, integração de sistemas,
          visão comercial consultiva e disciplina operacional para entregar resultados reais.
        </PageSubtitle>
      </HeaderHero>

      <section>
        <SectionTitle>
          <Briefcase size={22} color="#A78BFA" />
          Atuação Profissional
        </SectionTitle>

        <TimelineWrapper>
          {professionalExperience.map((item) => {
            const Icon = item.icon;
            return (
              <TimelineItem key={item.title}>
                <TimelineDot>
                  <Icon size={18} />
                </TimelineDot>
                <ExperienceCard>
                  <CardTop>
                    <div>
                      <RoleTitle>{item.title}</RoleTitle>
                      <CompanyName>{item.company}</CompanyName>
                    </div>
                    <PeriodBadge>{item.period}</PeriodBadge>
                  </CardTop>
                  <BulletList>
                    {item.details.map((bullet, i) => (
                      <BulletItem key={i}>{bullet}</BulletItem>
                    ))}
                  </BulletList>
                </ExperienceCard>
              </TimelineItem>
            );
          })}
        </TimelineWrapper>
      </section>

      <section>
        <SectionTitle>
          <GraduationCap size={22} color="#A78BFA" />
          Projetos de Destaque Acadêmico
        </SectionTitle>

        <TimelineWrapper>
          {academicProjects.map((item) => {
            const Icon = item.icon;
            return (
              <TimelineItem key={item.title}>
                <TimelineDot>
                  <Icon size={18} />
                </TimelineDot>
                <ExperienceCard>
                  <CardTop>
                    <div>
                      <RoleTitle>{item.title}</RoleTitle>
                      <CompanyName>{item.company}</CompanyName>
                    </div>
                    <PeriodBadge>{item.period}</PeriodBadge>
                  </CardTop>
                  <BulletList>
                    {item.details.map((bullet, i) => (
                      <BulletItem key={i}>{bullet}</BulletItem>
                    ))}
                  </BulletList>
                </ExperienceCard>
              </TimelineItem>
            );
          })}
        </TimelineWrapper>
      </section>
    </Container>
  </InternalLayout>
);

export default Experience;

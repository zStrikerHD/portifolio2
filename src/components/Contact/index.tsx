import { Link } from "react-router-dom";
import {
  BackLink,
  CommCard,
  CommText,
  CommTitle,
  ContactForm,
  ContactLink,
  ContentFrame,
  Description,
  Eyebrow,
  FieldGroup,
  FormCard,
  HeaderBlock,
  HeroPanel,
  Input,
  PageShell,
  SendButton,
  SplitGrid,
  Textarea,
  Title,
  TopBar,
} from "./styled";

const EMAIL = "sanchezgiovani045@gmail.com";
const PHONE_1 = "14996264003";
const PHONE_2 = "11915927534";

const Contact = () => (
  <PageShell>
    <ContentFrame>
      <TopBar>
        <BackLink as={Link} to="/" state={{ from: "/contact" }}>Voltar</BackLink>
      </TopBar>

      <HeaderBlock>
        <Eyebrow>Contato</Eyebrow>
        <Title>Contato</Title>
        <Description>
          Se quiser falar sobre um projeto, uma oportunidade ou apenas trocar uma ideia, pode me chamar por qualquer um dos canais abaixo. Bariri/SP, disponível para mudança.
        </Description>
        <HeroPanel>
          Desenvolvedor Full Stack Java disponível para propostas de trabalho remoto ou presencial. Resposta rápida por e-mail ou telefone.
        </HeroPanel>
      </HeaderBlock>

      <SplitGrid>
        <FormCard>
          <CommTitle>Enviar mensagem</CommTitle>
          <CommText>
            Este formulário abre o seu cliente de e-mail com os dados preenchidos.
          </CommText>

          <ContactForm
            action={`mailto:${EMAIL}`}
            encType="text/plain"
            method="post"
          >
            <FieldGroup>
              Nome
              <Input name="Nome" placeholder="Seu nome" type="text" />
            </FieldGroup>

            <FieldGroup>
              Email
              <Input name="Email" placeholder="seuemail@exemplo.com" type="email" />
            </FieldGroup>

            <FieldGroup>
              Mensagem
              <Textarea
                name="Mensagem"
                placeholder="Me conte sobre o projeto, prazo e objetivo."
              />
            </FieldGroup>

            <SendButton type="submit">Enviar por e-mail</SendButton>
          </ContactForm>
        </FormCard>

        <CommCard>
          <CommTitle>Email direto</CommTitle>
          <CommText>Se preferir, pode me chamar sem passar pelo formulário.</CommText>
          <ContactLink href={`mailto:${EMAIL}`}>{EMAIL}</ContactLink>
        </CommCard>

        <CommCard>
          <CommTitle>Telefone</CommTitle>
          <CommText>Disponível para contato rápido por chamada ou mensagem.</CommText>
          <ContactLink href={`tel:+55${PHONE_1}`}>(14) 99626-4003</ContactLink>
          <ContactLink href={`tel:+55${PHONE_2}`}>(11) 91592-7534</ContactLink>
        </CommCard>

        <CommCard>
          <CommTitle>LinkedIn</CommTitle>
          <CommText>Conecte-se comigo para acompanhar minha trajetória profissional.</CommText>
          <ContactLink
            href="https://linkedin.com/in/giovani-g-sanchez"
            rel="noreferrer"
            target="_blank"
          >
            Giovani G. Sanchez
          </ContactLink>
        </CommCard>

        <CommCard>
          <CommTitle>GitHub</CommTitle>
          <CommText>Repositórios públicos com código-fonte dos projetos.</CommText>
          <ContactLink
            href="https://github.com/zStrikerHD"
            rel="noreferrer"
            target="_blank"
          >
            github.com/zStrikerHD
          </ContactLink>
        </CommCard>
      </SplitGrid>
    </ContentFrame>
  </PageShell>
);

export default Contact;

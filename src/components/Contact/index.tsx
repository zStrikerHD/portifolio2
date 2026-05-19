import Portifolio from "../Portifolio";
import {
  ContactForm,
  ContactLink,
  FieldGroup,
  FormCard,
  InfoCard,
  InfoText,
  InfoTitle,
  Input,
  SplitGrid,
  SubmitButton,
  Textarea,
} from "../Portifolio/styled";

const EMAIL = "sanchezgiovani045@gmail.com";
const PHONE_1 = "14996264003";
const PHONE_2 = "11915927534";

const Contact = () => (
  <Portifolio
    accent="#0afaeb"
    description="Se quiser falar sobre um projeto, uma oportunidade ou apenas trocar uma ideia, pode me chamar por qualquer um dos canais abaixo. Bariri/SP, disponível para mudança."
    label="Contato"
    note="Desenvolvedor Full Stack Java disponível para propostas de trabalho remoto ou presencial. Resposta rápida por e-mail ou telefone."
    title="Contato"
  >
    <SplitGrid>
      <FormCard $accent="#0afaeb">
        <InfoTitle>Enviar mensagem</InfoTitle>
        <InfoText>
          Este formulário abre o seu cliente de e-mail com os dados preenchidos.
        </InfoText>

        <ContactForm
          action={`mailto:${EMAIL}`}
          encType="text/plain"
          method="post"
        >
          <FieldGroup>
            Nome
            <Input $accent="#0afaeb" name="Nome" placeholder="Seu nome" type="text" />
          </FieldGroup>

          <FieldGroup>
            Email
            <Input
              $accent="#0afaeb"
              name="Email"
              placeholder="seuemail@exemplo.com"
              type="email"
            />
          </FieldGroup>

          <FieldGroup>
            Mensagem
            <Textarea
              $accent="#0afaeb"
              name="Mensagem"
              placeholder="Me conte sobre o projeto, prazo e objetivo."
            />
          </FieldGroup>

          <SubmitButton $accent="#0afaeb" type="submit">
            Enviar por email
          </SubmitButton>
        </ContactForm>
      </FormCard>

      <InfoCard $accent="#0afaeb">
        <InfoTitle>Email direto</InfoTitle>
        <InfoText>
          Se preferir, pode me chamar sem passar pelo formulário.
        </InfoText>
        <ContactLink $accent="#0afaeb" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </ContactLink>
      </InfoCard>

      <InfoCard $accent="#0afaeb">
        <InfoTitle>Telefone</InfoTitle>
        <InfoText>
          Disponível para contato rápido por chamada ou mensagem.
        </InfoText>
        <ContactLink $accent="#0afaeb" href={`tel:+55${PHONE_1}`}>
          (14) 99626-4003
        </ContactLink>
        <ContactLink $accent="#0afaeb" href={`tel:+55${PHONE_2}`}>
          (11) 91592-7534
        </ContactLink>
      </InfoCard>

      <InfoCard $accent="#0afaeb">
        <InfoTitle>LinkedIn</InfoTitle>
        <InfoText>
          Conecte-se comigo para acompanhar minha trajetória profissional.
        </InfoText>
        <ContactLink $accent="#0afaeb" href="https://linkedin.com/in/giovani-g-sanchez" rel="noreferrer" target="_blank">
          Giovani G. Sanchez
        </ContactLink>
      </InfoCard>

      <InfoCard $accent="#0afaeb">
        <InfoTitle>GitHub</InfoTitle>
        <InfoText>
          Repositórios públicos com código-fonte dos projetos.
        </InfoText>
        <ContactLink $accent="#0afaeb" href="https://github.com/zStrikerHD" rel="noreferrer" target="_blank">
          github.com/zStrikerHD
        </ContactLink>
      </InfoCard>
    </SplitGrid>
  </Portifolio>
);

export default Contact;

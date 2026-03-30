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

const EMAIL = "giovani_sanchez08@hotmail.com";
const PHONE = "14996264003";

const Contact = () => (
  <Portifolio
    accent="#0afaeb"
    description="Uma pagina de contato nao precisa ser neutra. Ela pode fechar a experiencia com a mesma clareza visual e a mesma assinatura da entrada."
    label="Contact"
    note="Se quiser falar comigo, voce pode mandar mensagem pelo formulario abaixo, abrir seu e-mail direto ou me chamar por telefone."
    title="Contato"
  >
    <SplitGrid>
      <FormCard $accent="#0afaeb">
        <InfoTitle>Enviar mensagem</InfoTitle>
        <InfoText>
          Este formulario abre o seu cliente de e-mail com os dados preenchidos.
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
          Se preferir, pode me chamar sem passar pelo formulario.
        </InfoText>
        <ContactLink $accent="#0afaeb" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </ContactLink>
      </InfoCard>

      <InfoCard $accent="#0afaeb">
        <InfoTitle>Telefone</InfoTitle>
        <InfoText>
          Tambem disponivel para contato rapido por chamada ou mensagem.
        </InfoText>
        <ContactLink $accent="#0afaeb" href={`tel:+55${PHONE}`}>
          14 99626-4003
        </ContactLink>
      </InfoCard>
    </SplitGrid>
  </Portifolio>
);

export default Contact;

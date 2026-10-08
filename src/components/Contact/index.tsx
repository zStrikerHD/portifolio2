import { useState } from "react";
import { InternalLayout } from "../common/InternalLayout";
import {
  Container,
  HeaderHero,
  Badge,
  PageTitle,
  PageSubtitle,
  SplitLayout,
  DirectChannels,
  ChannelCard,
  ChannelIcon,
  ChannelInfo,
  ChannelTitle,
  ChannelDetail,
  FormCard,
  FormTitle,
  FormDescription,
  ContactForm,
  FieldGroup,
  Input,
  Textarea,
  SubmitButton,
} from "./styled";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const EMAIL = "sanchezgiovani045@gmail.com";
const PHONE_WHATSAPP = "14996264003";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    // Permite que o formulário submeta normalmente para o mailto:
    setSent(true);
  };

  return (
    <InternalLayout>
      <Container>
        <HeaderHero>
          <Badge>
            <Sparkles size={14} />
            <span>Fale com a Duck.IA</span>
          </Badge>
          <PageTitle>Contato & Parcerias</PageTitle>
          <PageSubtitle>
            Tem uma ideia de projeto, precisa de uma interface autoral ou quer
            integrar novas ferramentas ao seu negócio? Vamos conversar.
          </PageSubtitle>
        </HeaderHero>

        <SplitLayout>
          <DirectChannels>
            <ChannelCard
              href={`https://wa.me/55${PHONE_WHATSAPP}?text=Ol%C3%A1%20Giovani%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20Duck.IA!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChannelIcon>
                <MessageCircle size={22} />
              </ChannelIcon>
              <ChannelInfo>
                <ChannelTitle>WhatsApp Direto</ChannelTitle>
                <ChannelDetail>(14) 99626-4003 · Atendimento Rápido</ChannelDetail>
              </ChannelInfo>
            </ChannelCard>

            <ChannelCard href={`mailto:${EMAIL}`}>
              <ChannelIcon>
                <Mail size={22} />
              </ChannelIcon>
              <ChannelInfo>
                <ChannelTitle>E-mail Profissional</ChannelTitle>
                <ChannelDetail>{EMAIL}</ChannelDetail>
              </ChannelInfo>
            </ChannelCard>

            <ChannelCard href="tel:5514996264003">
              <ChannelIcon>
                <Phone size={22} />
              </ChannelIcon>
              <ChannelInfo>
                <ChannelTitle>Telefone Comercial</ChannelTitle>
                <ChannelDetail>(14) 99626-4003 / (11) 91592-7534</ChannelDetail>
              </ChannelInfo>
            </ChannelCard>

            <ChannelCard as="div" style={{ cursor: "default" }}>
              <ChannelIcon>
                <MapPin size={22} />
              </ChannelIcon>
              <ChannelInfo>
                <ChannelTitle>Localização</ChannelTitle>
                <ChannelDetail>Bariri - SP · Disponível para viagens e mudança</ChannelDetail>
              </ChannelInfo>
            </ChannelCard>
          </DirectChannels>

          <FormCard>
            <FormTitle>Enviar Mensagem</FormTitle>
            <FormDescription>
              Preencha o formulário abaixo para iniciar uma conversa diretamente
              com o fundador da Duck.IA.
            </FormDescription>

            <ContactForm
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
              onSubmit={handleSubmit}
            >
              <FieldGroup>
                Seu Nome ou Empresa
                <Input
                  type="text"
                  name="nome"
                  required
                  placeholder="Ex: Carlos Oliveira (Empresa X)"
                />
              </FieldGroup>

              <FieldGroup>
                Seu E-mail ou Telefone
                <Input
                  type="text"
                  name="contato"
                  required
                  placeholder="Ex: carlos@empresa.com.br ou (11) 99999-9999"
                />
              </FieldGroup>

              <FieldGroup>
                Sobre o que gostaria de falar?
                <Textarea
                  name="mensagem"
                  required
                  placeholder="Conte um pouco sobre a sua ideia, necessidade ou oportunidade..."
                />
              </FieldGroup>

              <SubmitButton type="submit">
                <Send size={16} />
                <span>Enviar Mensagem</span>
              </SubmitButton>

              {sent && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#a78bfa",
                    fontSize: "0.85rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Seu cliente de e-mail foi acionado com os dados preenchidos!</span>
                </div>
              )}
            </ContactForm>
          </FormCard>
        </SplitLayout>
      </Container>
    </InternalLayout>
  );
};

export default Contact;

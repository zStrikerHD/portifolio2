import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

export const HeaderHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(196, 181, 253, 0.25);
  color: #c4b5fd;
  font-family: 'Figtree', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
`;

export const PageTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const PageSubtitle = styled.p`
  font-family: 'Figtree', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #94a3b8;
  max-width: 65ch;
`;

export const SplitLayout = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 880px) {
    grid-template-columns: 1fr 1.3fr;
  }
`;

export const DirectChannels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ChannelCard = styled.a`
  padding: 1.6rem;
  border-radius: 16px;
  background: rgba(18, 18, 26, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.4);
    background: rgba(22, 22, 32, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }
`;

export const ChannelIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.15);
  color: #c4b5fd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ChannelTitle = styled.div`
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
`;

export const ChannelDetail = styled.div`
  font-size: 0.86rem;
  color: #94a3b8;
  word-break: break-all;
`;

export const FormCard = styled.div`
  padding: 2.2rem 2rem;
  border-radius: 20px;
  background: rgba(18, 18, 26, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
`;

export const FormDescription = styled.p`
  font-size: 0.88rem;
  line-height: 1.6;
  color: #94a3b8;
  margin-top: -0.8rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FieldGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: #cbd5e1;
`;

export const Input = styled.input`
  padding: 0.85rem 1.1rem;
  border-radius: 10px;
  background: rgba(10, 10, 15, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-family: 'Figtree', sans-serif;
  font-size: 0.92rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
  }

  &::placeholder {
    color: #64748b;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.85rem 1.1rem;
  border-radius: 10px;
  background: rgba(10, 10, 15, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-family: 'Figtree', sans-serif;
  font-size: 0.92rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
  }

  &::placeholder {
    color: #64748b;
  }
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.95rem 1.8rem;
  border-radius: 10px;
  background: #7c3aed;
  border: none;
  color: #ffffff;
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 0.5rem;

  &:hover {
    background: #6d28d9;
    box-shadow: 0 0 24px rgba(124, 58, 237, 0.45);
    transform: translateY(-1px);
  }
`;

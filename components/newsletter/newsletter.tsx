import * as React from "react";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    transform: translateY(24px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

//Styled Components
const NewsletterContainer = styled.div`
  transform: translateY(24px);
  opacity: 0;
  animation: ${appear} 0.4s 0.2s ease forwards;
  margin-top: 96px;
  @media (max-width: 768px) {
    margin: 48px 24px 0 24px;
  }
`;

const NewsletterDefault = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  max-width: 750px;
  margin: 0 auto 48px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.paragraph};
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px 16px;
  margin: 0;
  border-radius: 6px;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.paragraph};
  -webkit-appearance: none;
  transition: border 0.3s ease;
  -webkit-transition: border 0.3s ease;
  -moz-transition: border 0.3s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.paragraph};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 992px) {
    margin-bottom: 12px;
  }
`;

const Spacer = styled.div`
  width: 16px;
  @media (max-width: 992px) {
    display: none;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary12};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary24};
  }
`;

const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
`;

const Error = styled.div`
  padding: 20px 48px;
  background: #ff475725;
  border: 0.5px solid #ff4757;
  border-radius: 4px;
  width: 100%;
  margin-top: 24px;
`;

const ErrorMsg = styled.p`
  color: #ff4757;
  text-align: center;
`;

const Success = styled.div`
  padding: 35px;
  background: #00c37d25;
  border: 0.5px solid #00c37d;
  border-radius: 4px;
  max-width: 750px;
  margin: 0 auto 50px auto;
`;

const SuccessText = styled.p`
  color: #00c37d;
  text-align: center;
`;

export default function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [errorMessage, setErrorMessage] = React.useState("");

  function onChange(e) {
    if (status !== "pending") setStatus("pending");
    return setEmail(e.target.value.trim());
  }

  async function submit(e) {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setStatus("error");
      setErrorMessage(error);
      return;
    }

    setEmail("");
    setStatus("succeeded");
  }

  return (
    <NewsletterContainer id="newsletter">
      {status === "succeeded" ? (
        <Success>
          <SuccessText>Thank you! You've been subscribed.</SuccessText>
        </Success>
      ) : (
        <NewsletterDefault>
          <Title>Subscribe to my newsletter</Title>
          <Description>
            Get emails about design, development, and tech.
          </Description>

          <Form name="newsletter" onSubmit={submit}>
            <input type="hidden" name="form-name" value="newsletter" />
            <InputWrapper>
              <Input
                value={email}
                disabled={status === "loading"}
                onChange={onChange}
                placeholder="Email address"
                type="email"
                name="email"
                required
                aria-label="Email for newsletter"
              />
            </InputWrapper>
            <Spacer />
            <Button
              onClick={submit}
              disabled={status === "submitting" || !email}
              type="submit"
            >
              <ButtonText>Subscribe</ButtonText>
            </Button>
          </Form>
          {status === "error" && (
            <Error>
              <ErrorMsg>{errorMessage}</ErrorMsg>
            </Error>
          )}
        </NewsletterDefault>
      )}
    </NewsletterContainer>
  );
}

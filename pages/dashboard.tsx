import styled, { keyframes } from "styled-components";
import { NextSeo } from "next-seo";

//Components
import PageTitle from "../components/pagetitle/pagetitle";
import Unsplash from '../components/metrics/unsplash';

//Motion
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
const Wrapper = styled.main`
  padding: 0 24px;
`;

const MetricsWrapper = styled.div`
  animation: ${appear} 0.4s 0.2s ease forwards;
  opacity: 0;
  max-width: 1064px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr; 
  gap: 32px;

  @media (max-width: 992px) {
    gap: 16px;
  }
`

const SEO = {
  title: "Dashboard - Sigurdarson — Brand & Product Designer (UI/UX)",
  canonical: "https://sigurdarson.is/photography",

  openGraph: {
    url: "https://sigurdarson.is/photography",
    title: "Photography - Sigurdarson — Brand & Product Designer (UI/UX)",
  },
};

export default function DashboardPage() {

 
  return (
    <>
      <NextSeo {...SEO} />
      <Wrapper>
        <PageTitle
          title="Dashboard"
          extra="(Metrics)"
          description="This is my personal dashboard, built with Next.js API routes deployed as serverless functions. Inspired by "
          link="https://leerob.io/dashboard"
          linkText="Lee Robinson"
        />
        <MetricsWrapper>
        <Unsplash />
        </MetricsWrapper>
        
      </Wrapper>
    </>
  );
}

import styled from "styled-components";
import { NextSeo } from "next-seo";

//Components
import Photography from "../components/photography/photography";
import PageTitle from "../components/pagetitle/pagetitle";

//Styled Components
const Wrapper = styled.main`
  padding: 0 24px;
`;

const SEO = {
  title: "Photography - Sigurdarson — Brand & Product Designer (UI/UX)",
  canonical: "https://sigurdarson.is/photography",

  openGraph: {
    url: "https://sigurdarson.is/photography",
    title: "Photography - Sigurdarson — Brand & Product Designer (UI/UX)",
  },
};

export default function PhotographyPage() {
  return (
    <>
      <NextSeo {...SEO} />
      <Wrapper>
        <PageTitle
          title="Darkroom"
          extra="(Photography)"
          description="In my free time I like to take photographs that includes everything from nature, people or tech."
        />
        <Photography />
      </Wrapper>
    </>
  );
}

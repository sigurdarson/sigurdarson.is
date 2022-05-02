import Link from 'next/link';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';

//Styled components
const FourohFour = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Ufo = styled.a`
  padding-top: 24px;
  margin-bottom: 12px;
  font-size: 72px;
  animation: fly 2.5s ease-in-out infinite;
  cursor: pointer;
`;

const Info = styled.p`
  position: absolute;
  bottom: 48px;
  left: 48px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.paragraph};
`;

export default function FourOhFour() {
  const SEO = {
    title: '404 - Nothing here!',
    canonical: 'https://sigurdarson.is/404',

    openGraph: {
      url: 'https://sigurdarson.is/404',
      title: '404 - Nothing here!',
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <FourohFour>
        <Link href='/'>
          <Ufo>🛸</Ufo>
        </Link>
        <Info>Click the UFO</Info>
      </FourohFour>
    </>
  );
}

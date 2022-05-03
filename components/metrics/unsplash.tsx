import useSWR from 'swr';
import styled from "styled-components";

import fetcher from 'lib/fetcher';
import { Unsplash } from 'lib/types';
import MetricCard from './card';

//Styled-components
const MetricGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 32px;

@media (max-width: 992px) {
  grid-template-columns: 1fr;
  gap: 16px;
}
`

export default function UnsplashCard() {
  const { data } = useSWR<Unsplash>('/api/unsplash', fetcher);

  const downloads = new Number(data?.downloads);
  const views = new Number(data?.views);
  const link = 'https://unsplash.com/@sigurdarson';

  return (
    <MetricGrid >
      <MetricCard
        header="Unsplash Downloads"
        link={link}
        metric={downloads}
      />
      <MetricCard
        header="Unsplash Views"
        link={link}
        metric={views}
      />
    </MetricGrid>
  );
}
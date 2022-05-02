import styled from 'styled-components';

//Styled Components
const PhotoContainer = styled.div`
  margin-bottom: 32px;

  @media (max-width: 992px) {
    margin-bottom: 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Linked = styled.a`
  background: #22222250;
  color: #fff;
  padding: 10px 20px;
  position: absolute;
  border-radius: 6px;
  bottom: 24px;
  left: 24px;
  -webkit-backdrop-filter: saturate(100%) blur(10px);
  backdrop-filter: saturate(100%) blur(10px);
  transition: 0.2s ease;
  opacity: 0;
  transform: translateY(24px);
  cursor: pointer;
  z-index: 5;
`;

const Photo = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  width: 100%;
  padding-top: 60%;
  &:hover ${Linked} {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export default function photo(props) {
  return (
    <PhotoContainer>
      <Container>
        <Photo
          style={{
            backgroundImage: `url(${props.image})`,
          }}>
          <Linked href={props.link} target='_blank' rel='noreferrer'>
            Go to Unsplash
          </Linked>
        </Photo>
      </Container>
    </PhotoContainer>
  );
}

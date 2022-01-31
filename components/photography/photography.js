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

//Components
import Photo from "./photo";

//Styled Components
const Wrapper = styled.div`
  transform: translateY(24px);
  opacity: 0;
  animation: ${appear} 0.4s 0.2s ease forwards;
  max-width: 1200px;
  margin: 48px auto;
`;

export default function photo(props) {
  return (
    <Wrapper>
      <Photo
        image="https://images.unsplash.com/photo-1550224099-a13e268093e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        link="https://unsplash.com/photos/h0Mzj9t3BLg"
      />

      <Photo
        image="https://images.unsplash.com/photo-1550151103-0135d8e13537?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        link="https://unsplash.com/photos/pNOgpcPC9No"
      />

      <Photo
        image="https://images.unsplash.com/photo-1551619050-9272919f6672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        link="https://unsplash.com/photos/sRkWHHWAnkc"
      />

      <Photo
        image="https://images.unsplash.com/photo-1552037902-8e03e36ba0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
        link="https://unsplash.com/photos/nzff_emVOfE"
      />

      <Photo
        image="https://images.unsplash.com/photo-1551440875-38b450559358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
        link="https://unsplash.com/photos/Ath9YMNFcfU"
      />

      <Photo
        image="https://images.unsplash.com/photo-1554906003-0393f41a0a34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        link="https://unsplash.com/photos/rK17iHea6sQ"
      />
      <Photo
        image="https://images.unsplash.com/photo-1554644732-335e0df8615e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
        link="https://unsplash.com/photos/FmW0q-zL0pk"
      />
      <Photo
        image="https://images.unsplash.com/photo-1552833512-73993f903b37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        link="https://unsplash.com/photos/2psunlIdj94"
      />
      <Photo
        image="https://images.unsplash.com/photo-1547489401-fcada4966052?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        link="https://unsplash.com/photos/l-EssfCmQ_s"
      />
      <Photo
        image="https://images.unsplash.com/photo-1547755280-3171f5e75218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        link="https://unsplash.com/photos/1CTzgELAetQ"
      />
    </Wrapper>
  );
}

import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  min-height: 100vh;
  z-index: -1;
  position: absolute;
  background-size: auto;
`;

export const BackgroundImageDark = styled.img`
  display: ${(props) => (props.isDark ? null : 'none')};
  width: 100vw;
  height: 32rem;
  min-width: 80rem;
  @media (max-width: 650px) {
    height: 19rem;
    min-width: 50rem;
  }
`;

export const BackgroundImageLight = styled.img`
  display: ${(props) => (props.isDark ? 'none' : null)};
  width: 100vw;
  height: 32rem;
  min-width: 100rem;

  @media (max-width: 650px) {
    height: 19rem;
    min-width: 50rem;
  }
`;

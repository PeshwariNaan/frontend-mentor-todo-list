import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  margin: 8rem 30% 2rem 30%;
  width: 63rem;
  height: 8rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    margin: 3rem 30% 1.5rem 30%;
    width: 35rem;
    height: 5rem;
  }
`;

export const Title = styled.h1`
  letter-spacing: 1rem;
  font-size: 4rem;
  font-weight: 600;
  padding: 0 0 1rem 0;
  text-transform: uppercase;
  color: #fff;

  @media (max-width: 650px) {
    font-size: 3rem;
    padding: 0 0 0 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  height: 5rem;
  width: 5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 650px) {
    justify-content: flex-end;
    height: 3rem;
    width: 3rem;
  }
`;

export const IconImage = styled.img`
  width: 3rem;
  height: 3rem;

  @media (max-width: 650px) {    
    height: 2rem;
    width: 2rem;
  }
`;

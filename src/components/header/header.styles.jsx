import styled from 'styled-components';
import { ReactComponent as Sun } from '../../assets/icon-sun.svg';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';

export const HeaderContainer = styled.div`
  display: flex;
  //position: absolute;
  margin: 15rem auto 0 auto;
  width: 45rem;
  height: 8rem;
  justify-content: space-between;
  align-items: center;

  z-index: 100;
`;

export const Title = styled.h1`
  letter-spacing: 1rem;
  font-size: 4rem;
  font-weight: 400;
  padding: 0 0 1rem 0;
  text-transform: uppercase;
  color: #fff;
  
`;

export const IconContainer = styled.div`
  display: flex;
  height: 5rem;
  width: 5rem;
  align-items: center;
  justify-items: center;
  cursor: pointer;
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

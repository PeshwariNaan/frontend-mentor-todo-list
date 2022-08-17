import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 63rem;
  height: 7rem;
  border-radius: 0.5rem;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 650px) {
    width: 35rem;
    height: 4.5rem;
  }
`;

export const StyledInput = styled.input`
  display: block;
  height: auto;
  width: 100%;
  color: ${(props) => (props.isDark ? '#fff' : '#333')};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.75rem;
  background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
  border-style: none;
  padding-left: 2rem;

  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  height: 100%;
  width: 8rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
`;

export const ClearTextCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 2px solid #444;
`;

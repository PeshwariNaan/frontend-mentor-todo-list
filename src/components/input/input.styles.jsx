import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 45rem;
  height: 5rem;
  border-radius: .5rem;
  justify-content: space-between;
  overflow: hidden;
`;

export const StyledInput = styled.input`
  display: block;
  height: auto;
  width: 100%;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.75rem;
  background-color: #333;
  border-style: none;
  padding-left: 2rem;
  
`;

export const CircleContainer = styled.div`
  display: flex;
  height: 100%;
  width: 8rem;
  align-items: center;
  justify-content: center;
  background-color: #333;

`;

export const ClearTextCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 2px solid #444;
  color: white;
`;

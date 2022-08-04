import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 45rem;
  height: 5rem;
  justify-content: space-between;
  overflow: hidden;
`;

export const TaskText = styled.p`
  height: auto;
  width: 100%;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.75rem;
  background-color: #333;
`;

export const CheckboxContainer = styled.div`
    height: auto;
    width: 6rem;
    background-color: #333;
`

export const DeleteContainer = styled.div`
    height: auto;
    width: 5rem;
    background-color: #333;
`

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 2px solid #444;
  padding: auto 0;
`;

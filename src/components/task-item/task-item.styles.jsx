import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 45rem;
  height: 5rem;
  justify-content: space-between;
  overflow: hidden;
  background-color: #333;
  border-bottom: 1px solid #444;
  justify-items: center;
`;

export const TaskText = styled.p`
  height: 5rem;
  width: 100%;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.75rem;
  padding-left: 2rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  height: auto;
  width: 8rem;
  align-items: center;
  justify-content: center;
`;

export const DeleteContainer = styled.div`
  height: auto;
  width: 5rem;
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 2px solid #444;
  //padding: auto 0;
`;

import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 45rem;
  height: 5rem;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
  border-bottom: 1px solid #444;
  justify-items: center;
`;

export const TaskText = styled.p`
  height: 5rem;
  width: 100%;
  color: ${(props) => (props.isDark ? 'white' : 'black')};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.75rem;
  padding-left: 2rem;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : null)};
  text-decoration-color: ${(props) => (props.isDone ? '#333' : null)};
`;

export const CheckboxContainer = styled.div`
  display: flex;
  height: auto;
  width: 8rem;
  align-items: center;
  justify-content: center;
`;

export const DeleteContainer = styled.div`
  display: flex;
  height: auto;
  width: 8rem;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 2px solid #444;

  &:hover {
    background-clip: padding-box;
    border: solid 2px transparent;
    ${(props) => {
      if (props.isDark) {
        return `
        background: linear-gradient(#333, #333) padding-box,
         linear-gradient(to top left, #cf1af4, #40dff1) border-box;`;
      } else {
        return `
        background: linear-gradient(#fff, #fff) padding-box,
         linear-gradient(to top left, #cf1af4, #40dff1) border-box;`;
      }
    }}
  }
`;


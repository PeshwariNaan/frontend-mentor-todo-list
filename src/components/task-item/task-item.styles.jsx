import styled from 'styled-components';
import check  from '../../assets/icon-check.svg'

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

  ${props => {
    if(props.isDone) {
      return `
      color: #777;
      text-decoration: line-through;
      `
    }
  }}
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
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: ${(props) => (props.isDone ? null : '2px solid #444')};
  background-image: ${(props) =>
    props.isDone ? 'linear-gradient(to top left, #cf1af4, #40dff1 )' : null};


  &:hover {
    ${(props) => {
      if ((props.isDone && props.isDark) || (!props.isDark && props.isDone)) {
        return `
        null
        `;
      } else {
        if (props.isDark) {
          return `
          background-clip: padding-box;
        border: solid 2px transparent;
       background: linear-gradient(#333, #333) padding-box,
        linear-gradient(to top left, #cf1af4, #40dff1) border-box;`;
        }
        if (!props.isDark) {
          return `
          background-clip: padding-box;
        border: solid 2px transparent;
       background: linear-gradient(#fff, #fff) padding-box,
        linear-gradient(to top left, #cf1af4, #40dff1) border-box;`;
        }
      }
    }}
  }
`;

export const CheckContainer = styled.div`
  display: ${props => props.isDone? 'flex' : 'none'};
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`



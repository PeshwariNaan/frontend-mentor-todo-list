import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 63rem;
  height: 6rem;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${(props) => (props.isDark ? 'hsl(235, 24%, 19%)' : '#fff')};
  border-bottom: 1px solid #444;
  justify-items: center;

  @media (max-width: 650px) {
    width: 35rem;
    height: 5rem;
  }
`;

export const TaskText = styled.p`
  width: 100%;
  color: ${(props) => (props.isDark ? '#DCDCDC' : 'black')};
  font-size: 2rem;
  padding-left: 2rem;

  ${(props) => {
    if (props.isDone) {
      return `
      color: #777;
      text-decoration: line-through;
      `;
    }
  }}
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
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
  display: ${(props) => (props.isDone ? 'flex' : 'none')};
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const CheckImage = styled.img`
  display: none;
  transition: display 0.5s ease-in-out;
  width: 1.75rem;
  height: 1.75rem;

  ${TaskContainer}:hover & {
    display: block;
    
  }

  @media (max-width: 650px) {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

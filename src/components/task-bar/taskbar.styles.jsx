import styled from 'styled-components';

export const TaskBarContainer = styled.div`
  display: flex;
  width: 45rem;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
  box-shadow: ${(props) => (props.isDark ? null : '0px .5rem 1rem  #777, -.5rem .5rem 1rem  #777, .5rem .5rem 1rem  #777')};
  z-index: 100;

  @media (max-width: 600px) {
    width: 35rem;
    height: 4rem;    
  }
`;

export const RemainingItemsContainer = styled.div`
  display: flex;
  width: max-content;
  padding: 0 2rem 0 3rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ClearItemsContainer = styled.div`
  display: flex;
  width: max-content;
  justify-items: flex-end;
  padding: 0 1rem 0 3rem;
`;

export const Filter = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  height: 100%;  
  width: max-content;
  border: none;
  color: ${(props) => (props.isDark ? '#666' : '#555')};
  background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    color: #1E90FF;
  `}
    &:hover {
      ${props => {
      if(props.active){
        return`
        null
        `
      }
        if(props.isDark){
          return`
          color: #fff;
          `
        }if(!props.isDark) {
          return`
          color: #000000;          
          ` }
      }}      
    }
`;
//color: #C71585;

export const Text = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  color: ${(props) => (props.isDark ? '#666' : '#333')};
`;

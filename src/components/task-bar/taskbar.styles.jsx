import styled from 'styled-components';

export const TaskBarContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr min-content;
  width: 63rem;
  height: 6rem;
  align-items: center;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
  box-shadow: ${(props) =>
    props.isDark
      ? null
      : '0px .5rem 1rem  #D3D3D3, -.5rem .5rem 1rem  #D3D3D3, .5rem .5rem 1rem  #D3D3D3'};
  z-index: 100;

  @media (max-width: 650px) {
    grid-template-rows: repeat(2, 4rem);
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 3rem;
    width: 35rem;
  }
`;

export const RemainingItemsContainer = styled.div`
  display: grid;
  grid-column: 1 / 2;
  width: max-content;
  padding: 0 2rem 0 3rem;

  @media (max-width: 650px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding-top: 2rem;
  }
`;

export const FilterContainer = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;  
  padding: 0 7rem;

  @media (max-width: 650px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
    height: 4rem;    
    border-radius: 0.5rem;
    box-shadow: ${(props) =>
    props.isDark
      ? null
      : '0px .5rem 1rem  #D3D3D3, -.5rem .5rem 1rem  #D3D3D3, .5rem .5rem 1rem  #D3D3D3'};
      padding: 0 6rem;
  }
`;

export const ClearItemsContainer = styled.div`
  display: grid;
  grid-column: 3 / 4;
  width: max-content;
  justify-items: flex-end;
  padding: 0 2rem 0 3rem;

  @media (max-width: 650px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding-top: 2rem;
  }
`;

export const Filter = styled.button`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  height: 100%;
  width: max-content;
  border: none;
  color: ${(props) => (props.isDark ? '#666' : '#555')};
  background-color: ${(props) => (props.isDark ? '#333' : '#fff')};
  cursor: pointer;
  ${({ active }) =>
    active &&
    ` color: #1E90FF;
  `}
  &:hover {
    ${(props) => {
      if (props.active) {
        return `
        null
        `;
      }
      if (props.isDark) {
        return `
          color: #fff;
          `;
      }
      if (!props.isDark) {
        return `
          color: #000000;          
          `;
      }
    }}
  }
  @media (max-width: 650px) {
    padding: 0 0 0 0;
  }
`;

export const Text = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  color: ${(props) => (props.isDark ? '#666' : '#333')};
`;

import styled from 'styled-components';

export const TaskBarContainer = styled.div`
  display: flex;
  width: 45rem;
  height: 5rem;
  align-items: center;
  background-color: ${props => props.isDark? '#333' : '#fff'};
  box-shadow: ${props => props.isDark? null: '0 0.5rem 1rem 0.5rem #777'};
  z-index: 100;
`;

export const RemainingItemsContainer = styled.div`
  display: flex;
  width: max-content;
  padding: 0 2rem 0 3rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ClearItemsContainer = styled.div`
  display: flex;
  width: max-content;
  padding: 0 1rem 0 3rem;
`;

export const Filter = styled.button`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  height: 100%;
  width: max-content;
  border: none;
  color: ${props => props.isDark? '#fff' : '#333'};
  background-color: ${props => props.isDark? '#333' : '#fff'};
  cursor: pointer;
`;

export const Text = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  color: ${props => props.isDark? '#fff' : '#333'};
`;

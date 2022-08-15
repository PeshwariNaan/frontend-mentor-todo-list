import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-top: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: ${props => props.isDark ? null : '0 1rem 1rem 0.5rem #777'};
`;

export const NoticeText = styled.h2`
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.75rem;
`;

export const NoticeContainer = styled.div`
    display: flex;
    width: 45rem;
    height: 2rem;
    background-color: #333;
`

import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-top: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  box-shadow: ${props => props.isDark ? null : '0 1rem 1rem 0.5rem #777'};
`;

export const NoticeText = styled.h2`
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.75rem;
  text-align: center;
`;

export const NoticeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45rem;
    height: 5rem;
`

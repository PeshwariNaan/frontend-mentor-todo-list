import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin-top: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: ${props => props.isDark ? null : '0 5rem 1rem 0.5rem #D3D3D3'};
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

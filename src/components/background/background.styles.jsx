import styled from "styled-components";
import BgDarkDesktop from '../../assets/bg-desktop-dark.jpg'
import BgDarkMobile from '../../assets/bg-mobile-dark.jpg'
import BgLightDesktop from '../../assets/bg-desktop-light.jpg'
import BgLightMobile from '../../assets/bg-mobile-light.jpg'

export const BackgroundContainer = styled.div`
    display: flex;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: absolute;
    background: ${props => props.isDark? `url(${BgDarkDesktop})`: `url(${BgLightDesktop})`} no-repeat;
    background-size: contain;
    background-color: ${props => props.isDark? 'black': 'white'};
`

// export const BackgroundImage = styled.img`
//     width: 100vw;    
//     height: 30rem;
    
// `
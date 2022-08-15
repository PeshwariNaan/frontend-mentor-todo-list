import { useContext } from 'react';
import { BackgroundContainer, BackgroundImageDark, BackgroundImageLight } from './background.styles';
import BgDarkDesktop from '../../assets/bg-desktop-dark.jpg';
import BgDarkMobile from '../../assets/bg-mobile-dark.jpg';
import BgLightDesktop from '../../assets/bg-desktop-light.jpg';
import BgLightMobile from '../../assets/bg-mobile-light.jpg';
import { ThemeContext } from '../../contexts/theme.context';

const Background = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <BackgroundContainer isDark={darkMode}>
      <BackgroundImageDark isDark={darkMode} src={BgDarkDesktop}/>
      <BackgroundImageLight isDark={darkMode} src={BgLightDesktop} />
    </BackgroundContainer>
  );
};

export default Background;

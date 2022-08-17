import { useContext } from 'react';
import { BackgroundContainer, BackgroundImageDark, BackgroundImageLight } from './background.styles';
import BgDarkDesktop from '../../assets/bg-desktop-dark.jpg';
import BgLightDesktop from '../../assets/bg-desktop-light.jpg';
import { ThemeContext } from '../../contexts/theme.context';

const Background = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <BackgroundContainer isDark={darkMode}>
      <BackgroundImageDark isDark={darkMode} src={BgDarkDesktop} alt="building picture"/>
      <BackgroundImageLight isDark={darkMode} src={BgLightDesktop} alt="mountains" />
    </BackgroundContainer>
  );
};

export default Background;

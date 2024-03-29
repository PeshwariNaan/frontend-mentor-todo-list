import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context';
import { HeaderContainer, IconContainer, Title, IconImage } from './header.styles';
import sun from '../../assets/icon-sun.svg'
import moon from '../../assets/icon-moon.svg'
import { actiontypes } from '../../contexts/theme.context';

const Header = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
  
  
  const toggleThemeHandler = () => {
      if(darkMode) {
        theme.dispatch({type: actiontypes.LIGHTMODE})
      }else {
        theme.dispatch({type: actiontypes.DARKMODE})
      }
  
  }
  
    return (
      <HeaderContainer>
        <Title>todo</Title>
        <IconContainer >
          {darkMode ? (
            <IconImage src={sun} onClick={toggleThemeHandler} alt='sun icon' />
          ) : (
            <IconImage src={moon} onClick={toggleThemeHandler} alt='moon icon'/>
          )}
        </IconContainer>
      </HeaderContainer>
    );
  };
  
  export default Header;
 
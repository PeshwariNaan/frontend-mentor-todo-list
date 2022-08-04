import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context';
import { HeaderContainer, IconContainer, Title } from './header.styles';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../../assets/icon-sun.svg';
import { actiontypes } from '../../contexts/theme.context';

const Header = (props) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
  
  
  const toggleThemeHandler = () => {
      console.log('clicked')
      if(darkMode) {
        theme.dispatch({type: actiontypes.LIGHTMODE})
      }else {
        theme.dispatch({type: actiontypes.DARKMODE})
      }
  
  }
  
    return (
      <HeaderContainer>
        <Title >todo</Title>
        <IconContainer >
          {darkMode ? (
            <Sun onClick={toggleThemeHandler} />
          ) : (
            <Moon onClick={toggleThemeHandler} />
          )}
        </IconContainer>
      </HeaderContainer>
    );
  };
  
  export default Header;

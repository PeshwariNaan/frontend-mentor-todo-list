import { useContext } from 'react';
import Background from './components/background/background.component';
import Layout from './components/layout/layout.component';
import { ThemeContext } from './contexts/theme.context';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.darkmode ? 'black' : 'white')};
  }
`;

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <GlobalStyle darkmode={darkMode} />
      <Layout />
      <Background />
    </>
  );
}

export default App;

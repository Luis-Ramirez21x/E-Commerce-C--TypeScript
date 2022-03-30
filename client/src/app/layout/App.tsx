
import { Container, CssBaseline, Switch, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Catalog from '../../features/catalog/catalog';

import Header from './header';


function App() {

  const [darkMode, setDarkMode] = useState(true);
 const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  
function handleThemeChange(){
    setDarkMode(!darkMode);
}
 

  return (
      <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header darkMode= {darkMode} handleThemeChange={handleThemeChange}/>
        <Container>
        <Catalog/>
        </Container>
      </ThemeProvider>
      </>
  );
}

export default App;

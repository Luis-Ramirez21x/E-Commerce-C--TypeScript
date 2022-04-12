

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutPage from '../../features/about/aboutPage';

import Catalog from '../../features/catalog/catalog';
import ProductDetails from '../../features/catalog/productDetails';
import ContactPage from '../../features/contact/contactPage';
import HomePage from '../../features/home/homePage';
import Header from './header';
import ServerError from '../errors/serverError';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, Container } from '@mui/material';
import NotFound from '../errors/notFound';


function App() {
 const [currentPage, setCurrentPage] = useState('catalog');
 const [darkMode, setDarkMode] = useState(false);
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
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline/>
      <Header darkMode= {darkMode} handleThemeChange={handleThemeChange} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        
      <Container>
          <Routes>
          <Route path='/'element= {<HomePage/>}/>
          <Route path='/catalog'element= {<Catalog/>}/>
          <Route path='/catalog/:id'element= {<ProductDetails/>}/>
          <Route path='/about'element= {<AboutPage/>}/>
          <Route path='/contact'element= {<ContactPage/>}/>
          <Route path='/serverError'element= {<ServerError/>}/>
          <Route path='*'element= {<NotFound/>}/>
          </Routes>
      </Container>
        
      </ThemeProvider>
      </>
  );
}

export default App;

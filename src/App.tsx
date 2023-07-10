import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Home from './components/pages/Home';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Skills from './components/pages/Skills';
import Certifications from './components/pages/Certifications';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Layout from './components/templates/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/certifications' element={<Certifications />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/script/mailform/contact/'/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React,{Fragment} from 'react';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Skills from './components/Skills';
import Recent from './components/Recent';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <Fragment>
    <Navigation/>
    <Content/>
    <Skills/>
    <Recent/>
    <Portfolio/>
    <Contact/>
    </Fragment>
  );
}

export default App;

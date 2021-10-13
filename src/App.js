import Header from './components/header/Header'
import Page from './components/page/Page'
import styled from 'styled-components'
import {size} from './components/params/color'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accueil from './components/page/accueil/Accueil'
import Projet from './components/page/projet/Projet'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/projet'>
            <Page path='/projet'>
              <Projet />
            </Page>
          </Route>
          <Route path='/'>
            <Page path='/'>
              <Accueil />
            </Page>
          </Route>

        </Switch>
        <Footer>
          CGU et Mention légales
          <ul>
            <li>Paris</li>
            <li>Lyon</li>
            <li>Bordeaux</li>
            <li>Lille</li>
          </ul>
        </Footer>

      </Router>
    </div>
  );
}
const Footer = styled.div`
  position:fixed;
  display:flex;
  justify-content:space-between;

  bottom:0;
  width:100vw;
  padding:1em;
  ul{
    display:flex;
    list-style-type:none;;
    gap:1em;
  }
  @media(max-width:${size.mobile}){
    position:static;
  }
`

export default App;

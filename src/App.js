import Header from './components/header/Header'
import Page from './components/page/Page'
import Section from './components/page/Section'
import { PresIllu, Pres } from './components/presentation/Pres'
import { PromiseIllu, Promise } from './components/promise/Promise'
import Expert from './components/expertise/Expert'
import styled from 'styled-components'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Page>
        <Section width='100vw'>
            <PresIllu />
            <Pres />
        </Section>
        <Section>
            <PromiseIllu/>
            <Promise/>
        </Section>
        <Section width='100vw'>
          <Expert/>
        </Section>
      </Page>
      <Footer>
        CGU et Mention légales
        <ul>
          <li>Paris</li>
          <li>Lyon</li>
          <li>Bordeaux</li>
          <li>Lille</li>
        </ul>
      </Footer>

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
`

export default App;

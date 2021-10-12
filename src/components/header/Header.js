import React  from "react"
import styled from 'styled-components'
import color from '../params/color'


function Header(){
  return(
    <Container>
      <h1>abbeal</h1>
      <nav>
        <div>À propos</div>
        <div>Projets</div>
        <div>Valley</div>
        <div>Contact</div>
        <div>Jobs</div>
      </nav>

      <div>
        <span className='active'>fr</span>
        <span>en</span>
      </div>
    </Container>
    )
}
const Container = styled.header`
  position:fixed;
  display:flex;
  left:0;right:0;
  flex-direction:row;
  color:${color.fonts};
  justify-content:space-between;
  align-items:center;
  padding:0 4vw;
  height:5.5rem;
  user-select:none;
  background-color:transparent;
  z-index:1;

  @media(max-width:300px){

  background-color:${color.background};
  }
  h1{
    cursor:pointer;
  }
  nav{
    display:flex;
    flex-direction:row;
    gap:4rem;
    div{
      cursor:pointer;
    }
  }
  div{
    span{
        text-transform:uppercase;
        margin:5px;
        color:grey;
        cursor:pointer;

        &.active{
          color:${color.fonts};
        }
    }
  }
`

export default Header

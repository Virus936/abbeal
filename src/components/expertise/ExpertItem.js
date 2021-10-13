import React, {useState} from "react"
import styled from 'styled-components'
import color,{size} from '../params/color'

function ExpertItem({title, expert}){
  return(
    <Container>
      <h2>{title}</h2>
      <ul>
        {expert.map(e => <li key={e}>{e}</li>)}
      </ul>
    </Container>
    )
}
const Container = styled.div`
  display:flex;
  justify-content:flex-end;
  white-space:nowrap;

  @media(max-width:${size.mobile}){
    flex-direction:column;
  }

  h2{
  margin-right:2em;
  }
  ul{
    display:flex;
    align-items:center;
    background-color:${color.fonts};
    list-style-type:none;
    border-radius: 100vh 0 0 100vh;
    padding:0 1em;
    gap:2em;
    &>*{
      cursor:pointer;
    }
    
  }
`

export default ExpertItem

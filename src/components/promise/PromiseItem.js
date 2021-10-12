import React, {useState} from "react"
import styled from 'styled-components'
import color from '../params/color'

function PromiseItem({content, index}){
  return(
    <Container>
      <h1>
        {index} 
      </h1>
      <p>
      {content}
      </p>

    </Container>
    )
}
const Container = styled.div`
  position:relative;
  &:nth-of-type(3n+1){
    transform:translateX(-50%);
  }
  &:nth-of-type(3n+2){
    transform:translateX(-25%);
  }

  &:nth-of-type(3n){
    transform:translateX(0%);
  }
  h1{
    color:${color.background};
    font-size:3em;
  }
  p{
   margin-left:2em; 
   white-space:nowrap;
  }
  &::after{
    position:absolute;
    content:'';

    width:15em;
    height:10em;
    top:0;
    right:2em;
    z-index:-1;
    background:${color.background};

  }

`

export default PromiseItem

import React  from "react"
import styled from 'styled-components'
import color from '../params/color'

function Section({children, width}){
  return(
    <Container width={width}>
      <div>
        {children}
      </div>
    </Container>
    )
}
const Container = styled.section`
  position:relative;
  overflow:hidden;
  width:${props => props.width};
  &>div{
      padding: 5rem 4vw;
      &:nth-child(1){
        display:flex;
        height:90vh;
      }
  }

  &:nth-of-type(2n+1){
    &>div{
      &:nth-child(1){
        background:${color.background};
      }
    }
  }
  &:nth-of-type(2n){
    background:${color.background};
    &>div{
      &:nth-child(1){
        background:white;
      }
    }
  }
`

export default Section

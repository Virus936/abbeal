import React  from "react"
import styled from 'styled-components'
import color, {size} from '../params/color'

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
  @media(max-width:${size.mobile}){
    width:100vw;
    height:auto;
    &:last-of-type{
      margin-bottom:40px;
    }
  }
  &>div{
      padding: 5rem 4vw;
      &:nth-child(1){
        display:flex;
        height:90vh;
        @media(max-width:${size.mobile}){
          height:auto;
          padding: 5rem 2vw;
        }
        
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

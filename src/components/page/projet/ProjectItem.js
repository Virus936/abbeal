import React, {useState} from "react"
import styled from 'styled-components'
import color,{size} from '../../params/color'

function ProjectItem({illu, title}){
  return(
    <Container>

      <img src={illu} alt="" />
      <h3>{title}</h3>
    </Container>
    )
}
const Container = styled.article`
  width:500px;
  @media(max-width:${size.mobile}){
    width:100%;
  }
  img{
    width:100%;
    aspect-ratio:4/3;
    background:${color.fonts};
  }
`

export default ProjectItem

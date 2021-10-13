import React, {useState} from "react"
import styled from 'styled-components'
import color from '../../params/color'

function ProjectItem({illu, title}){
  return(
    <Container>

      <img src={illu} alt="" />
      <h3>{title}</h3>
    </Container>
    )
}
const Container = styled.article`
  img{
    width:500px;
    aspect-ratio:4/3;
    background:${color.fonts};
  }
`

export default ProjectItem

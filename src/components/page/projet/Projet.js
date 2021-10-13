import React, {useState} from "react"
import styled from 'styled-components'
import color, {size} from '../../params/color'
import archipel from '../../image/archipels.png'
import monde from '../../image/le-monde.png'
import pichet from '../../image/pichet.svg'
import fork from '../../image/the-fork.png'

import ProjectItem from './ProjectItem.js'

const projects = [
  {
    'img':archipel,
    'name':'Archipels'
  },
  {
    'img':monde,
    'name':'Le Monde'
  },
  {
    'img':pichet,
    'name':'Pichet'
  },
  {
    'img':fork,
    'name':'The Fork'
  },
]

function  Projet(){
  return(
    <SectionProject>
      <div>
        <div>
          <h1>Nos Projet</h1>
          <h2>Ils nous font confiance !</h2>
        </div>


        {projects.map( project => <ProjectItem key={project.name} illu={project.img} title={project.name}/>)}

      </div>
    </SectionProject>
    )
}
const SectionProject = styled.section`

  background: linear-gradient(90deg, white 0%, white 50%, ${color.background} 50%, ${color.background} 100%);
  height:100vh;
  
  &>div{
    display:flex;
    padding: 5rem 4vw;
    align-items:center;
    background: linear-gradient(90deg, ${color.background} 0%, ${color.background} 50%, white 50%, white 100%);
    height:90vh;
    gap:50px;
    &>div{
      width:700px;
      h1{
        font-size:6em;
      }
    }

  }

`

export default Projet

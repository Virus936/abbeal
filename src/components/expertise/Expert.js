import React, {useState} from "react"
import styled from 'styled-components'
import ExpertItem from './ExpertItem'
import color from '../params/color'

function Expert(){
  return(
    <Container>
      <h1>
        Nos domaines d'expertise
      </h1>
      <div>
        <ExpertItem title="Front End" expert={['ReactJS','VueJS','Angular']}/>
        <ExpertItem title="Back End" expert={['NodeJS', 'Java','Symfony','.Net Core','Go']}/>
          <ExpertItem title="Mobile" expert={['Swift','Kotlin','React Native','Flutter']}/>
          <ExpertItem title="DevOP" expert={['AWS','Azure', 'GCP','Kubernetes']}/>
      </div>
    </Container>
    )
}

const Container = styled.div`
  display:flex;
  width:100%;
  align-items:center;

  h1{
    width:50%;
    font-size:6em;
    color:${color.fonts};
  }
  &>div{
    display:flex;
    flex-direction:column;
    flex:1;
    position:absolute;
    gap:2em;
    right:0;
  }

`
export default Expert

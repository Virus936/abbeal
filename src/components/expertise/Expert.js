import React, {useState} from "react"
import styled from 'styled-components'
import ExpertItem from './ExpertItem'
import color, {size} from '../params/color'

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

  @media(max-width:${size.mobile}){
    flex-direction:column;
  }

  h1{
    width:50%;
    font-size:6em;
    color:${color.fonts};

    @media(max-width:${size.mobile}){

      width:auto;
      font-size:3em;
    }
  }
  &>div{
    display:flex;
    flex-direction:column;
    flex:1;
    position:absolute;
    gap:2em;
    right:0;
    @media(max-width:${size.mobile}){
      width:100vw;
      position:static;
    }
  }

`
export default Expert

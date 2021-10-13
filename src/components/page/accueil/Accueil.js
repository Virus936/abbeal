import React, {useState} from "react"
import Section from '../Section'
import { PresIllu, Pres } from '../../presentation/Pres'
import { PromiseIllu, Promise } from '../../promise/Promise'
import Expert from '../../expertise/Expert'


function Accueil(){
  return(
    <>
      <Section width='100vw'>
        <PresIllu />
        <Pres />
      </Section>
      <Section>
        <PromiseIllu/>
        <Promise/>
      </Section>
      <Section width='100vw'>
        <Expert/>
      </Section>
    </>
    )
}

export default Accueil

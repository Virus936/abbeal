import React from "react"
import styled from 'styled-components'
import pic1 from '../image/1.jpg'
import pic8 from '../image/8.jpg'
import pic13 from '../image/13.jpg'
import color from '../params/color'
import PromiseItem from './PromiseItem'

const pics = [pic1, pic8, pic13]

const promesses = [
  'Expertise sur des technos modernes',
  'Équipe proactive et passionnée',
  'Communauté : meetups, conférences, BBL...',
  'Accompagnemet sur la montée en compétences',
  'Formation & workshop',
  'Développement de produits par notre startup'
]
export function Promise(){
  return(
    <Container>
      {promesses.map( ( promesse , index) => <PromiseItem index = {( index+1 ).toString().padStart(2,'0')} content={promesse}/>)}
    </Container>
    )
}
export function PromiseIllu(){
  return(
    <Container2>
      <h1>Notre promesse</h1>
      {pics.map(pic => <img src={pic} alt="" />)}
    </Container2>
    )
}
const Container = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr 1fr;
  grid-auto-flow:column;
  align-items:center;
  margin-left:10%;
  grid-gap:90px;

`

const Container2 = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  width:900px;
  h1{
    z-index:1;
    font-size:4em;
    text-shadow: 0 0 20px white;
    color:${color.fonts};
  }

  img{
    display:block;
    position:absolute;
    filter:grayscale(1);
    width:40vh;
    height:auto;
    &:nth-of-type(1){
      bottom:0;
      right:0;
    }
    &:nth-of-type(2){
      bottom:50%;
      left:0;
      transform:translate(-50%, 50%);
    }
    &:nth-of-type(3){
      top:30px;;
      right:50%;;
      transform:translate(50%, 5%);
    }
  }

`
export default Promise

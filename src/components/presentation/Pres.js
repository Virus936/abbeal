import React, {useState} from "react"
import styled from 'styled-components'
import pic1 from '../image/1.jpg'
import pic8 from '../image/8.jpg'
import pic13 from '../image/13.jpg'
import color from '../params/color'
import  {LightButton, DarkButton} from '../page/Button'

const pics = [pic1, pic8, pic13]

export function PresIllu(){
  return(
    <Container >
      {pics.map( pic => <img src={ pic } alt="" />)}
      <div>
        A
      </div>
    </Container>
    )
}
export function Pres() {
  return (
    <Container2>
      <h1>abbeal</h1>
      <h2>Equipe de développeurs experts et passionnés.</h2>
      <p>Nous concevons vos applicaations web et mobiles.</p>
      <div className='buttons' >
        <LightButton>je rejoins l'équipe !</LightButton >
        <DarkButton>je crée une équipe !</DarkButton>
      </div>
    </Container2>
  )
}

const Container2 = styled.div`
  color:${color.fonts};
  flex:1.3; 
  text-align:right;
  min-width:600px;
  z-index:2;
  h1{
    font-size:6em;
  }
  h2{
    font-size:2.2em;
    line-height:1em;
  }
  .buttons{
    display:flex;
    flex-direction:column;
    button:nth-of-type(1){

      align-self:flex-end;
    @media(max-width:900px){
      align-self:flex-start;;
    }
    }
    button:nth-of-type(2){
      align-self:flex-start;;
    }
  }
  @media(max-width:900px){
    text-align:left;
  }

`
const Container = styled.div`
  position:relative;
  display:flex;
  flex:2;
  justify-content:center; 
  align-items:center;
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
  div{
    position:absolute;
    color:rgba(0,0,0,.7);
    font-size:46em;

  }
  @media(max-width:900px){
    display:none;
  }

`


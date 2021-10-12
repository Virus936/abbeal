import React, {useState} from "react"
import styled from 'styled-components'
import color from '../params/color'

export function LightButton({children}){
  return(
    <Light>
      {children}
    </Light>
    )
}
export function DarkButton({children}){
  return(
    <Dark>
      {children}
    </Dark>
    )
}
const Light = styled.button`
  display:flex;
  padding:.2em 4em;
  text-transform:uppercase;
  border-radius:7em;
  border:none;
  font-size:1.3em;
  color:${color.fonts};
  background-color:white;
  box-shadow:none;
  transition: box-shadow .2s;
  margin:1em;
  line-height:2em;
  cursor:pointer;
  &:hover{
    box-shadow:-.2em -.2em 0 ;
  }
`
const Dark = styled(Light)`
  color:white;
  background-color:${color.fonts};
`


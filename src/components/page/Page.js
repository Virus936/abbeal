import React, {useRef, useEffect}  from "react"
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


function Page({children}){
  const ref = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()  
    tl.to(
      ref.current,
      {x:window.innerWidth -ref.current.clientWidth }
      )
    ScrollTrigger.create({
      animation:tl,
      trigger:ref.current,
      start:'top top',
      end:'+=3650',
      scrub:true,
      pin:true,
      anticipatePin:1,
    })
  })
  return(
    <Container id='toScroll' ref={ref}>
      {children}
    </Container>
    )
}

const Container  = styled.main`
  display:flex;
  flex-direction:row;
  height:100vh;
  width:max-content;
`

export default Page

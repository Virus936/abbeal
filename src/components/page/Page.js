import React, {useRef, useEffect, useState}  from "react"
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {size} from '../params/color.js'


function Page({children, path}){
  const ref = useRef(null)
  const changePage = useRef(null)

  useEffect(() => {
    let mobile = parseInt( size.mobile.split('p')[0])
    let screen = window.innerWidth
    console.log(screen, 'window.innerWidth')
    console.log(ref.current.clientWidth, ' ref.current')

    if (screen > mobile) {  
      let tween = gsap.fromTo(
        changePage.current, 
        {y:-9, x:0, opacity:0,duration:.9, paused:true },
        {x:0,y:0,opacity:1,duration:.4, paused:true}
      )
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline()  
      tl.to(
        ref.current,
        {x:window.innerWidth - ref.current.clientWidth }
        )
      ScrollTrigger.create({
        animation:tl,
        trigger:ref.current,
        start:'top top',
        end:'+=3650',
        scrub:true,
        pin:true,
        anticipatePin:1,
        onToggle: self =>{  !self.isActive?tween.play():tween.reverse() }
      })

      return () => {
        ScrollTrigger.getAll().forEach((instance) => {
          instance.kill();
        });
        gsap.killTweensOf(window);
      }
    }
  })
  return(
    <>
      <Container  ref={ref}>
        {children}
      </Container>
      <Link ref={changePage}>Nos Projets</Link>
    </>
    )
}

const Container  = styled.main`
  display:flex;
  flex-direction:row;
  height:100vh;
  width:max-content;
  @media(max-width:${size.mobile}){
    flex-direction:column;
    height:auto;
  }

`

const Link = styled.a`
    display:hidden;
    flex-direction:column;
    align-items:center;
    position:fixed;
    right:50%;
    bottom:10vh;

    @media(max-width:${size.mobile}){
      position:relative;
    }
`

export default Page

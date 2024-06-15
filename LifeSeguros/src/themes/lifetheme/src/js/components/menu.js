import gsap from 'gsap'

import { utils, store } from '@/core'
import { lenis } from '../app'

const { qs, qsa } = utils
const { dom, device } = store

export default function () {
	const Menu = qs('.menu')
    const logoMenu = qs('.header_logo')
    const switcher = qs('.header_switcher')
    const buttonMenu = qs('.header_burger')
    const navMenu = qs('.menu_nav')
    const itemsMenu = qsa('.menu_nav-item')

    const tl = gsap.timeline({ paused: true })

    buttonMenu.addEventListener('click', () => {
        !buttonMenu.classList.contains('disabled') &&
        buttonMenu.classList.contains('open') ? Close() : Open()
    })

    function Open(){
        buttonMenu.classList.add('disabled')
        buttonMenu.classList.add('open')

        tl.clear()
        .to(switcher, { duration: 0, opacity: 0, ease: 'none' })
        .to(logoMenu, { duration: .5, opacity: 0, ease: 'Power3.easeInOut' })
        .to(Menu,{ duration: 1, x: 0, ease: 'expo.inOut' }, .2)
        .to(navMenu,{ duration: .6, scaleX: 1, ease: 'expo.inOut', onComplete: () => {
            navMenu.classList.add('done')
            buttonMenu.classList.remove('disabled')
            lenis.stop()
        }}, .6)
        .to(itemsMenu, { duration: 1, opacity: 1, y: 0, stagger: 0.05, ease: 'Power4.easeInOut' }, .8)
        .restart()
    }
    function Close(){
        buttonMenu.classList.add('disabled')
        lenis.start()
        tl.clear()
        .to(itemsMenu, {
            duration: 1,
            opacity: 0,
            y: 60,
            stagger: { from: "end", each: 0.05 },
            ease: 'Power4.easeInOut',
            onStart: ()=>{
                navMenu.classList.remove('done')
                buttonMenu.classList.remove('open')
                buttonMenu.classList.remove('disabled')
            }}
        )
        .to(navMenu, { duration: .6, scaleX: 0, ease: 'expo.inOut' }, .68)
        .to(Menu, { duration: .8, x: '100%', ease: 'expo.inOut' }, .84)
        .to(switcher, { duration: .3, delay:.2, opacity: 1, ease: 'Power3.easeOut', onComplete: () => { lenis.start() } }, 1.3)
        .to(logoMenu, { duration: .3, opacity: 1, ease: 'Power3.easeOut', onComplete: () => { lenis.start() } }, 1.3)
        .restart()
    }
}
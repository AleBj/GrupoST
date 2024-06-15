import Highway from '@dogstudio/highway'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Lenis from '@studio-freight/lenis'

import { evt, utils, store } from '@/core'

const { dom, flags, device } = store
const { qs, qsa } = utils

import {
    scrollAnim,
    circleText,
    //Menu,
} from '@/components'

import { lenis } from '../app'

export default class extends Highway.Renderer {
    setup() {
        this.onEnter()

        device.isMobile && dom.body.classList.add('is-mobile')

        window.onload = () => this.load()
    }

    onEnter() {
        this.el = this.wrap.lastElementChild

        this.handleActive()
        lenis.scrollTo(0)
        lenis.start()
        //circleText(this.el)

        //Menu(this.el)
    }

    onEnterCompleted() {
        lenis.scrollTo(0)
        lenis.start()

        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            evt.emit('scroll', {
                scrollY: scroll,
                velocity
            })
        })

        qsa(".scrollButton").forEach(button => {
            button.addEventListener("click", () => {
                lenis.scrollTo(window.innerHeight)
            })
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
        
        setTimeout(() => {
            //scrollAnim(this.el)
        }, 500)
        //new Cursor()
    }

    onLeave() {
        lenis.scrollTo(0)
        lenis.start()
        // if(qs('.header_burger').classList.contains('open')){
        //     qs('.header_burger').dispatchEvent(new Event('click'))
        // }
    }

    onLeaveCompleted() {
        lenis.scrollTo(0)
        lenis.start()
        ScrollTrigger.getAll().forEach(inst => inst.kill())
    }

    load() {
        this.onEnterCompleted()
        lenis.scrollTo(0)
        lenis.start()
        gsap.to(dom.mask, {
            autoAlpha: 0,
            duration: .75,
            ease: 'power1'
        })

        evt.emit('first')
    }

    /** Init components **/

    /** Handle misc **/

    handleActive() {
        qsa('.js-site-link').forEach(el => {
            el.href === location.href
                ? el.classList.add('is-active')
                : el.classList.remove('is-active')
        })
    }
}
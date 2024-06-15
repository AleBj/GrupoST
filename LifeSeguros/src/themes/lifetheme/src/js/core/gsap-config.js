import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import DrawSVGPlugin from '@/lib/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, DrawSVGPlugin)

gsap.config({
    defaults: {
        ease: 'none'
    }
})
import gsap from 'gsap'

import { utils, store } from '@/core'

const { qs, qsa } = utils
const { dom, device } = store

export default function (el = dom.body) {
    const textCircles = qsa('.textCircle')
    gsap.from(textCircles, {
        scale: 0,
        duration: 1,
        delay: 1,
        ease: "Power4.easeInOut"
    })
    textCircles.forEach(tc => {
        const rotate = +tc.getAttribute("data-rotate") || 8
        let circleArray = tc.textContent.split('')
        tc.textContent = ''
        for (let i = 0; i < circleArray.length; i++) {
            tc.innerHTML += `<span style="transform:rotate(${i*rotate}deg)">${circleArray[i]}</span>`

        }
        gsap.to(tc,{
            duration:10,
            rotate:720,
            ease:'linear',
            repeat:-1
        })
    });
    
}
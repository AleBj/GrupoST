import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { utils, store } from '@/core'
import SplitText from '@/lib/SplitText'

const { qs, qsa, isInViewportDom } = utils
const { dom, device } = store

export default function (el) {
    ScrollTrigger.defaults({
        // markers: true,
        start: "top 90%"
    })

    let getInTouch = qs('.js-s-item-y')
    getInTouch && gsap.fromTo(getInTouch, {
        yPercent: -80,
    }, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: getInTouch.parentNode,
            end: 'bottom bottom',
            scrub: true
        }
    })
    ///circlesHome
    let circlesHome = qsa('.dashed-circles')
    let contentCirclesWay = qs('.frasers-way')
    circlesHome && gsap.to(circlesHome, {
        //yPercent:`+=20 * ${this}`,
        yPercent: (i)=>(i+1)*20,
        xPercent:(i)=>(i+1)*-20,
        scale:(i)=>1-((i+1)/10),
        opacity:1,
        stagger: 0.05,
        ease: 'Power2.easeIn',
        scrollTrigger: {
            trigger: contentCirclesWay,
            end: 'bottom bottom',
            scrub: true
        }
    })
    // Lines
    let linesTitles = qsa('.js-s-lines', el)
    linesTitles.length && linesTitles.forEach(elem => {
        const split = new SplitText(elem, { type: 'lines' }).lines

        gsap.from(split, {
            scrollTrigger: {
                trigger: elem
            },
            duration: 1.5,
            yPercent: 150,
            alpha: 0,
            rotation: 3,
            stagger: 0.1,
            ease: 'expo',
            delay: 0.1
        })
    })
    //Fade
    let elemsFade = qsa('.js-s-fade', el)
    elemsFade.length && elemsFade.forEach(elem => {
        const delay = +elem.getAttribute("data-delay") || 0.2
        gsap.fromTo(elem, {
            alpha: 0,
        }, {
            scrollTrigger: {
                trigger: elem,
                y: '3rem',
            },
            stagger: 0.1,
            alpha: 1,
            duration: 2,
            ease: 'expo',
            delay: delay,
            onComplete:()=>{
                let span = elem.querySelector('span')
                if(span){
                    span.classList.add('view')
                }
                let i = elem.querySelector('i')
                if(i){
                    i.classList.add('view')
                }
            }
        })
    })
    ///Marquee
    let marquee = qsa('.marquee')
   
    window.addEventListener('scroll', e=>{
        marquee.forEach(m=>{
            let wv = window.innerWidth
            let dir = m.dataset.direction
            let x = (dir == 'left') ? wv - window.scrollY : (wv - window.scrollY)*-1
            let p = m.querySelectorAll('p')
            if(isInViewportDom(m, 0)){
                p.forEach(e => e.style.transform = 'translateX('+x*0.9+'px)');
            }
        })
    })
    ///imagesDetail
    // let imagesDetail = qsa('.detail-images_single')
    // let contentImageDetail = qs('.images-project')
    // imagesDetail.length && imagesDetail.forEach(elem => {
    //     let speed = elem.dataset.speed
    //     // gsap.to(elem, {
    //     //     yPercent:`-${speed}`,
    //     //     scrollTrigger: {
    //     //         trigger: elem,
    //     //         end: 'bottom bottom',
    //     //         scrub: true
    //     //     },
    //     //     onStart: () => {
	// 	// 		gsap.fromTo(elem, {
    //     //             clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    //     //         },{
    //     //             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //     //             duration: 1.2,
    //     //             ease: "Power4.easeInOut",
    //     //             scrollTrigger: elem
    //     //         })
	// 	// 	}
    //     // })
    // })
    // Logos
    const logos = qsa(".logo img")
    let logoContainer = qs('.grid-logos')

    logos.forEach((elem, idx) => {
        gsap.from(elem, {
            opacity: 0,
            duration: .8,
            scale: .7,
            delay: .08 * idx,
            scrollTrigger: logoContainer,
            ease: 'expo',
        })
    })

    // let last = 0;
    // const header = qs(".header")
    // window.addEventListener("scroll", () => {
    //     let Pos = window.scrollY
    //     if (Pos > last ){
    //         // console.log("down")
    //         header.classList.add("hide")
    //     } else {
    //         // console.log("up")
    //         header.classList.remove("hide")
    //     }
    //     last = Pos;
    // })

    const masks = qsa(".js-s-mask")
    masks.forEach(mask => {
        gsap.fromTo(mask, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            alpha: 0,
        },{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            alpha: 1,
            duration: 1.2,
            ease: "Power4.easeInOut",
            scrollTrigger: {
                trigger: mask,
            }
        })
        if (mask.querySelector('img')) {
            gsap.from(
                mask.querySelector('img'),
                {
                    scale: 1.2,
                    duration: 1.8,
                    delay: 0.25,
                    ease: 'expo.out',
                })
        }
    })

    const imagesScale = qsa('.js-s-image-reveal', el)
    imagesScale.length && ScrollTrigger.batch(imagesScale, {
        onEnter: (batch) => {
            batch.forEach((item, index) => {
                const masks = qsa('.js-image-mask', item)
                const scaleImgs = qsa('.js-image-scale', item)
                const tl = gsap.timeline({
                        defaults: {
                            stagger: 0.1,
                            delay: index * 0.1,
                        },
                    })
                    .to(masks, {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        duration: 1.8,
                        ease: 'expo.out',
                    }, 0.25)
                    if (scaleImgs.length > 0) {
                        tl.from(
                            scaleImgs,
                            {
                                scale: 1.2,
                                duration: 1.8,
                                ease: 'expo.out',
                            }, 0.25)
                    }
            })
        },
        once: true,
    })
}
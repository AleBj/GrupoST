import Base from './Base'
import gsap from 'gsap'
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

import { evt, utils, store } from '@/core'

const { qs, qsa } = utils
const { dom, bounds } = store

export default class extends Base {
	onEnter() {
		super.onEnter()

		new Swiper("#swiper", {
			slidesPerView: 1,
            spaceBetween: 200,
            speed: 800,
			loop: true
		})

		const swiper = document.querySelector('#swiper')?.swiper

		this.buttons = qsa(".js-slider-buttons")

		this.buttons.forEach(el => {
			el.addEventListener("click", () => {
				const next = el.getAttribute("data-button") === "next"
				if(next) {
					swiper.slideNext()
				} else {
					swiper.slidePrev()
				}
			})
		})
	}

	onLeave() {
		super.onLeave()
	}

	onEnterCompleted() {
		super.onEnterCompleted()

		let circle = qs('.hero .textCircle')
        let h1 = qs('.hero h1').getBoundingClientRect()
		
        circle.style.top = h1.top - 60 + 'px'
        circle.style.left = h1.width - 150 + 'px'
		
		const imageSlide = document.querySelectorAll('.imageslide')
		this._slideShow(imageSlide)

		// bar content percentbarChargeBar
		const barPercent = qs(".percent-content")
		const barPercentNumber = qs(".number")
	
		const twen = gsap.to(barPercentNumber, {
			duration: 1,
			scrollTrigger: {
				trigger: barPercent,
				start: "top 80%",
				end: "center center"
			},
			onUpdate: update
		})
	
		function update() {
			// barPercentNumber.textContent = `${Math.floor(twen.totalProgress() * 100)}%`
		}
	}

	onLeaveCompleted() {
		super.onLeaveCompleted()
	}

	_DetectImageOrientation(imgs){
		imgs.forEach(i => (i.naturalWidth > i.naturalHeight) ? i.classList.add('landscape') : i.classList.add('portrait') );
	}

	_slideShow(images){	
		let counter	= 0
		setInterval(function(){
			gsap.to(images,{duration:.3,autoAlpha:0})

			gsap.to(images[counter],{duration:.7,autoAlpha:1})
			counter++;
			
			(counter > images.length-1) ? counter = 0 : counter
		},2000)
	
	}
}
import Base from './Base'
import gsap from 'gsap'
import EmblaCarousel from 'embla-carousel'
import { evt, utils, store } from '@/core'

const { qs, qsa } = utils
const { dom, bounds } = store

export default class extends Base {
	onEnter() {
		super.onEnter()	
	}

	onLeave() {
		super.onLeave()
	}

	onEnterCompleted() {
		super.onEnterCompleted()

		const heroContent = qs('.hero-image')
		gsap.to(heroContent, {
			yPercent:'-=20',
			scrollTrigger: {
				trigger: heroContent,
				end: 'bottom bottom',
				scrub: true
			}
		})
		
		const imagenes = qsa('.detail-images_single')

		this._DetectImageOrientation(imagenes)


		const contentImages = qs('.images-project')
		let contentHeight = 0
		imagenes && imagenes.forEach( i => contentHeight += i.clientHeight)
		// contentImages.style.height = (contentHeight *  .7) + 'px'

		
		
		//carousel
		const emblaNode = document.querySelector('.embla')
		const options = { loop: false }

		emblaNode && EmblaCarousel(emblaNode, options)
		
		//animation

		///imagenesDetail
		imagenes.length && imagenes.forEach(elem => {
			let speed = elem.dataset.speed
			gsap.from(elem, {
				yPercent: window.innerWidth > 992 ? `-=${25}` :'',
				scrollTrigger: {
					trigger: elem,
					// end: 'bottom bottom',
					scrub: true
				}
			})
		})

		///next-project
		let newxtPorject = qs('.js-np-item-y')
		newxtPorject && gsap.fromTo(newxtPorject, {
			yPercent: -80,
		}, {
			yPercent: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: newxtPorject.parentNode,
				end: 'bottom bottom',
				scrub: true
			}
		})

		// bar content percent
		const barChargeBar = qs(".bar__charge-bar")
		const barPercent = qs(".bar__percent")
		
		const twen = barChargeBar && gsap.to(barChargeBar, {
			duration: 1,
			expo: "expo.easeInOut",
			scrollTrigger: {
				trigger: barChargeBar,
				start: "top 80%",
				end: "center center"
			},
			onUpdate: update
		})
	
		function update() {
			barPercent.textContent = `${twen.totalProgress().toFixed(1) * 100}%`
			barChargeBar.style.width = `${twen.totalDuration().toFixed(1) * 100}%`
		}
	}

	onLeaveCompleted() {
		super.onLeaveCompleted()
	}

	_DetectImageOrientation(imgs){
		imgs.forEach(i => (i.naturalWidth > i.naturalHeight) ? i.classList.add('landscape') : i.classList.add('portrait') );
	}
}
import '../css/app.scss';

import Highway from '@dogstudio/highway'

import '@/core/gsap-config'
import { evt, utils, store, ge } from '@/core'

const { qs, qsa } = utils
const { device } = store

const geResize = ge.resize()
const geMouse = ge.mouse()

import * as R from './renderers'
import * as T from './transitions'
import Lenis from '@studio-freight/lenis'

if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual'
}

export const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

const H = new class extends Highway.Core {
	constructor() {
		super({
			renderers: {
				default: R.Home,
				about: R.About,
				detail: R.Detail,
				contact: R.Contact,
				legals: R.Legals,
				overview: R.Overview
			},
			transitions: {
				default: T.Base,
			},
		})

		const form = qs(".suscribe > form")
		const suscribe = qs(".suscribe")
		const message = document.createElement( 'p' )
		message.className = "message"

		// form.addEventListener("submit", e => {
		// 	e.preventDefault()

		// 	const emailInput = qs('input[name="email"]')
		// 	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

		// 	if(pattern.test(emailInput.value)) {
		// 		console.log("email matchs")
		// 		message.innerHTML = `
		// 			<span>EXCELENT!</span> YOU ARE SUBSCRIBED
		// 		`
		// 		suscribe.appendChild(message)
		// 	} else {
		// 		console.log("no match")
		// 		message.innerHTML = `
		// 			<span>!</span> THE ADDRESS MUST INCLUDE AN @. TRY AGAIN
		// 		`
		// 		suscribe.appendChild(message)
		// 	}
		// })
	}

	navigate(e) {
		store.dom.lastClicked = e.currentTarget
		super.navigate(e)
	}
}

export {
	geResize,
	geMouse,
	H
}

store.Highway = H
import Highway from '@dogstudio/highway'
import gsap from 'gsap'

import { utils, evt, store } from '@/core'
import SplitText from '@/lib/SplitText'

const { qs, qsa } = utils
const { dom, flags } = store

let tl = null

export default class extends Highway.Transition {
	in({ from, to, done }) {
		from.remove()
		document.body.style.overflow = ""
        document.body.style.height = ""
		window.scrollTo(0, 0);
		gsap.to(
			[qs('main')],
		{
			duration: 1, 
			alpha: 1,
			ease: 'PowerInOut',
		})
		done()
	}

	out({ done }) {
		document.body.style.overflow = ""
        document.body.style.height = ""
		gsap.to(
			[qs('main')],
		{
			duration: .5, 
			alpha: 0, 
			ease: 'PowerInOut',
			onComplete:() => done()
		})
		// done()
	}
}
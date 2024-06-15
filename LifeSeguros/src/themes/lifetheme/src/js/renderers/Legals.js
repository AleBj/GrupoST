import Base from './Base'
import gsap from 'gsap'

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
	}

	onLeaveCompleted() {
		super.onLeaveCompleted()
	}

	_DetectImageOrientation(imgs){
		imgs.forEach(i => (i.naturalWidth > i.naturalHeight) ? i.classList.add('landscape') : i.classList.add('portrait') );
	}
}
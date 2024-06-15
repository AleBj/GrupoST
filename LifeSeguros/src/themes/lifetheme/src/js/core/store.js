import { qs } from './utils'

const dom = {
	body: document.body,
	sh: qs('.js-sh'),
	mask: qs('.js-mask')
}

const bounds = {
	ww: window.innerWidth,
	wh: window.innerHeight,
	maxScroll: 0
}

const flags = {
	locked: false,
	scrolling: false,
	isMenuOpen: false
}

const device = {
	isFirefox: navigator.userAgent.indexOf('Firefox') > -1,
	isMobile: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ||
	(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),  
	isSmall: window.matchMedia('(max-width: 649px)').matches,
	isPortrait: window.matchMedia('(orientation: portrait)').matches
}

const features = {
	hasWheelEvent: 'onwheel' in document,
	hasMouseWheelEvent: 'onmousewheel' in document,
	hasTouch: 'ontouchstart' in document,
	hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
	hasPointer: !!window.navigator.msPointerEnabled,
	hasKeyDown: 'onkeydown' in document,
	hasSmoothScroll: !device.isMobile 
}

const scroll = null

export default {
	dom, bounds, flags, device, features, scroll
}
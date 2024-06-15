import debounce from 'lodash.debounce'

import { evt, store } from '../index'

const { bounds, device, dom } = store
const { isMobile } = device

export default function () {

    function resize() {
        let ww = window.innerWidth
        let wh = window.innerHeight

        bounds.maxScroll = dom.body.getBoundingClientRect().height - wh
    
        bounds.ww = ww
        bounds.wh = wh

        device.isSmall = window.matchMedia('(max-width: 649px)').matches
        device.isPortrait = window.matchMedia('(orientation: portrait)').matches
    
        svhp()
    
        evt.emit('resize')
    }

    function svhp() {
        document.documentElement.style.setProperty('--vh', `${bounds.wh / 100}px`)
    }

    function mount() {
        const o = new ResizeObserver(resize)
        o.observe(dom.body)

        resize()
    }

    resize()
    mount()
}
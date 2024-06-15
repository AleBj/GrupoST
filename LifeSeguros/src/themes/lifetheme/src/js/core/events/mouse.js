import { evt, store } from '../index'

const { isMobile } = store.device

export default function () {
    let x = 0
    let y = 0
    let on = 0
    let target = null

    const events = {
        move: isMobile ? 'touchmove' : 'mousemove',
        down: isMobile ? 'touchstart' : 'mousedown',
        up: isMobile ? 'touchend' : 'mouseup',
    }

    function updatePosition(e) {
        x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
        y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY

        target = e.target
    }

    function onMouseMove(e) {
        updatePosition(e)

        evt.emit('mousemove', { x, y, target, e })
    }
    
    function onMouseDown(e) {
        updatePosition(e)

        on = x

        evt.emit('mousedown', { x, y, target })
    }
    
    function onMouseUp(e) {
        updatePosition(e)
        
        evt.emit('mouseup', { x, y, target, click: Math.abs(x - on) < 10 })
      }

    function mount() {
        const { move, down, up } = events

        evt.on(move, window, onMouseMove)
        evt.on(down, window, onMouseDown)
        evt.on(up, window, onMouseUp)
    }

    mount()
}
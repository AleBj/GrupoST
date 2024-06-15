import { utils, store, evt } from '@/core'
const { qs, qsa, isInViewportDom } = utils
const { dom, device } = store
import gsap from 'gsap';

export default class Cursor {
    constructor() {
        this.cursor = qs('.cursor');
        this.cursorInner = qs('.cursor-move-inner');
        this.cursorOuter = qs('.cursor-move-outer');
        this.cursorOuterText = qs('.cursor-move-outer-text');
        this.links = qsa('[data-cursor]');
        this.noCircles = qsa('[data-not-cursor]');
        this.grabs = qsa('[data-cursor-drag]');

        this.state = {
            mouseX: 0,
            mouseY: 0,
            mouseA: 0,
            innerX: 0,
            innerY: 0,
            outerX: 0,
            outerY: 0,
            loop: null,
            cursor: {
                angle: 0,
                skwish: 0,
            }
        }

        this.init()
    }

    init() {
        this.addEvents();
        setTimeout(() => {
            this.cursor.classList.add('c-active')
        }, 200);
        //evt.on('mousemove',(e)=> this.move(e))
        // window.addEventListener('mousemove', (e) =>{
        //     this.move(e)
        // })
    }

    run = () => {
        this.state.loop = null;
  
        this.state.innerX = this.lerp(this.state.innerX, this.state.mouseX, 0.15);
        this.state.innerY = this.lerp(this.state.innerY, this.state.mouseY, 0.15);
        
        this.state.outerX = this.lerp(this.state.outerX, this.state.mouseX, 0.13);
        this.state.outerY = this.lerp(this.state.outerY, this.state.mouseY, 0.13);
        
        this.state.cursor.angle = Math.atan2(this.state.mouseY - this.state.outerY, this.state.mouseX - this.state.outerX) * 180 / Math.PI;
        
        const normalX = Math.min(Math.floor((Math.abs(this.state.mouseX - this.state.outerX) / this.state.outerX) * 1000) / 1000, 1);
        const normalY = Math.min(Math.floor((Math.abs(this.state.mouseY - this.state.outerY) / this.state.outerY) * 1000) / 1000, 1);
        this.state.cursor.normal = normalX + normalY * .5;
        this.state.cursor.skwish = this.state.cursor.normal * .7;

        this.transformDeforming()

        if (this.state.cursor.normal !== 0) {
            this.state.loop = gsap.ticker.add(this.run);
        }
    }

    transformDeforming = () => {
        const { innerX, innerY, outerX, outerY, cursor } = this.state;
        const { angle, skwish } = cursor;
        this.cursorInner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
        this.cursorOuter.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${1 + skwish}, ${1 - skwish})`;
        this.cursorOuterText.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
    }

    in = () => {
        this.cursor.classList.add('cursor--hover');
    }

    out = () => {
        this.cursor.classList.remove('cursor--hover');
    }

    inNotCircle = () => {
        this.cursor.classList.add('cursor--remove');
    }

    outNotCircle = () => {
        this.cursor.classList.remove('cursor--remove');
    }

    inDrag = () => {
        this.cursor.classList.add('cursor--drag');
    }

    outDrag = () => {
        this.cursor.classList.remove('cursor--drag');
    }

    move = ({ e }) => {
        
        this.state.mouseX = e.clientX;
        this.state.mouseY = e.clientY;

        if (!this.state.loop) {
            this.state.loop = gsap.ticker.add(this.run);
        }
    }
    // move(n){
    //     this.state.mouseX = n.clientX;
    //     this.state.mouseY = n.clientY;

    //     if (!this.state.loop) {
    //         this.state.loop = gsap.ticker.add(this.run);
    //     }
    // }

    addEvents() {
        evt.on('mousemove', this.move)
            
        this.links.forEach(link => {
            link.addEventListener('mouseenter', this.in);
            link.addEventListener('mouseleave', this.out);
        })
        this.noCircles.forEach(noCircle => {
            noCircle.addEventListener('mouseenter', this.inNotCircle);
            noCircle.addEventListener('mouseleave', this.outNotCircle);
        })
        this.grabs.forEach(grab => {
            grab.addEventListener('mouseenter', this.inDrag);
            grab.addEventListener('mouseleave', this.outDrag);
        })
    }
    lerp (start, end, amt){
        return (1-amt)*start+amt*end
    }
    destroy() {
    }
}
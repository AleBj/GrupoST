import gsap from 'gsap'

export const qs = (s, o = document) => o.querySelector(s)
export const qsa = (s, o = document) => [...o.querySelectorAll(s)]

export const rect = (el) => el.getBoundingClientRect()

export const isInViewportDom = ($el, offset) => {
    var rect = $el.getBoundingClientRect();
    var x, y, w, h;
    x = rect.left;
    y = rect.top + (offset !== undefined ? offset : 0);

    w = rect.width;
    h = rect.height;

    var ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return ((y < hw && y + h > 0) && (x < ww && x + w > 0));
}
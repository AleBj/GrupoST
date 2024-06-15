import gsap from 'gsap'

export default class SimpleDrag {
  
    constructor( DOMElement, onDrag ) {
      this.useTouch = this.isTouch();
      this.dragging = false;
      this.lastX = 10;
      this.lastY = 10;
      this.tween = undefined;
      this.prevVelocity = 0;
      this.DOMElement = DOMElement;
      this.onDragCallback = onDrag;
      this.bind();
    }
    
    onMove( e ) {
      if ( this.dragging ) {
        e = e.type == "touchmove" ? e.touches[ 0 ] : e;
        let xDelta = e.clientX - this.lastX;
        let yDelta = e.clientY - this.lastY;
        let velocity = Math.abs( xDelta * yDelta );
        if ( velocity > 50 ) {
          //this.dragging = false;
          let v = { x: xDelta * 1.6, y: yDelta * 1.6 };
          if ( this.tween ) this.tween.kill();
          this.tween = gsap.to( v, {
            x: 0, y: 0, duration: 0.6,
            onUpdate: ()=> {
              this.onDragCallback( v.x, v.y );
            }
          } );
        }
        
        this.onDragCallback( xDelta, yDelta );
        this.lastX = e.clientX;
        this.lastY = e.clientY;  
        
      }
    }
    
    onStart( e ) {
      e = e.type == "touchstart" ? e.touches[ 0 ] : e;
      this.lastX = e.clientX;
      this.lastY = e.clientY;  
      this.dragging = true;
    }
    
    onEnd( e ) {
      this.dragging = false;
    }
    
    isTouch() {
      return ('ontouchstart' in window) ||
       ( navigator.maxTouchPoints > 0) ||
       ( navigator.msMaxTouchPoints > 0);
    }
    
    bind() {
      let el = this.DOMElement;
      if ( this.useTouch ) {
        el.addEventListener( 'touchstart', this.onStart.bind( this ), false );
        el.addEventListener( 'touchmove', this.onMove.bind( this ), false );
        el.addEventListener( 'touchend', this.onEnd.bind( this ), false );
      } else {
        el.addEventListener( 'mousedown', this.onStart.bind( this ), false )  
        el.addEventListener( 'mousemove', this.onMove.bind( this ), false );
        el.addEventListener( 'mouseup', this.onEnd.bind( this ), false );
      }
    }
  }
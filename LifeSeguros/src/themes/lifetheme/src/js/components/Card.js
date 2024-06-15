
export default class Card {
    constructor( descriptor ) {
      this.descriptor = descriptor;
      this.createDOMElement(); 
      this.x = 0;
      this.y = 0;
    }
    
    createDOMElement() {
      
      const lang = document.getElementsByTagName('html')[0].getAttribute('lang')

      let label = lang == 'en' ? 'See case study' : 'Zum Beispiel' ;

      this.imgElementLink = document.createElement( 'a' );
      this.imgElementLink.setAttribute('href', this.descriptor.link)
      this.imgElementLink.setAttribute('class', 'overlap')

      this.rootElement = document.createElement( 'div' );
      this.imgElement = document.createElement( 'img' );
      this.rootElement.className = 'card';
      this.imgElement.setAttribute('alt',this.descriptor.title)
      this.imgElement.src = this.descriptor.thumb_src;  
      
      this.titleElement = document.createElement( 'div' );
      
      this.titleElement.className = 'card_title';
      this.titleElement.innerHTML = `
      <label class="label noBar">${this.descriptor.category || ''}</label>
      <h2 class="title title-t5 bar"><a href="${this.descriptor.link}">${this.descriptor.title}</a></h2>
      <a href="${this.descriptor.link}" class="primary-button">
          <i>${label}</i>
          <span>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.64232 8.65642C7.25179 9.04694 6.61863 9.04694 6.2281 8.65642L0.74281 3.17112C0.352286 2.7806 0.352286 2.14744 0.74281 1.75691L1.79271 0.707015C2.18323 0.316491 2.8164 0.316491 3.20692 0.707015L8.69221 6.19231C9.08274 6.58283 9.08274 7.216 8.69221 7.60652L7.64232 8.65642Z" fill="#11CA83"/>
                  <path d="M8.69222 6.19255C9.08274 6.58308 9.08274 7.21624 8.69222 7.60677L3.20692 13.0921C2.8164 13.4826 2.18323 13.4826 1.79271 13.0921L0.742812 12.0422C0.352288 11.6516 0.352289 11.0185 0.742812 10.6279L6.22811 5.14265C6.61863 4.75213 7.25179 4.75213 7.64232 5.14265L8.69222 6.19255Z" fill="#11CA83"/>
              </svg>
          </span>
      </a>
      `;
      this.rootElement.appendChild( this.imgElement );
      this.rootElement.appendChild( this.titleElement );
      this.rootElement.appendChild( this.imgElementLink );
    }
    
    load() {
      let { imgElement } = this;      
      //imgElement.src = this.descriptor.thumb_src;
      this.update();
      this.rootElement.classList.toggle( 'hidden', false );
      // if ( imgElement.src !== this.descriptor.thumb_src ) {
      //   imgElement.src = this.descriptor.thumb_src;
      //   imgElement.onload = ()=> {
      //     this.update();
      //     this.rootElement.classList.toggle( 'hidden', false );
      //   }
      // }
    }
    
    appendTo( el ) {
      if ( this.rootElement.parentElement !== el ) {
        //console.log('append');
        el.appendChild( this.rootElement );
        this.load();
      }
    }
    
    removeSelf() {
      if ( this.rootElement.parentElement ) {
        this.rootElement.classList.toggle( 'hidden', true );
        //this.imgElement.src = '';
        this.rootElement.parentElement.removeChild( this.rootElement );
      }
    }
    
    update() {
      let cssBatch = '';
      cssBatch += `transform: translate3d(${this.x}px, ${this.y}px, 0);`;
      //cssBatch += 'display:' + ( this._visible ? 'block;' : 'none;' );
  
      this.rootElement.setAttribute( 'style', cssBatch );
    }
  }
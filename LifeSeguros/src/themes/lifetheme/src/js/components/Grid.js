import Card from './Card';
import SimpleDrag from './SimpleDrag';

const CARD_WIDTH = 900;
const CARD_HEIGHT = 578;
const FIXED_ROWS = 3;
const FIXED_COLS = 2;

const NEIGHBOURS = [
    [ 0, -1 ], // up
    [ 0, 1 ], // down
    [ 1, 0 ], // right
    [ -1, 0 ], // left
    [ 1, 1 ], // bottom right
    [ -1, 1 ], // bottom left
    [ -1, -1 ], // upper left
    [ 1, -1 ] // upper right
];

export default class Grid {
  
    constructor( DOMElement, JSONGallery ) {
      this.descriptors = JSONGallery;
      this.DOMElement = DOMElement;
      
      this.picks = {};
      
      this.cards = {};
      
      this.cardsPool = [];
      this.offsetX = 0;
      this.offsetY = 0;
      this.viewCols = 0;
      this.viewRows = 0;
      this.viewWidth = 0;
      this.viewHeight = 0;
    }
    
    init() {
      window.addEventListener( 'resize', this.onResize.bind( this ) );
      this.onResize();
      let d = new SimpleDrag( this.DOMElement, this.onDrag.bind( this ) );
    }
    
    getGalleryDescriptor( index ) {
      return this.descriptors[ index % this.descriptors.length ];
    }
    
    onDragEnd() {
      //this.DOMElement.classList.remove( "hover-enabled" );
      //this.DOMElement.classList.add( "hover-enabled" );
    }
    
    onDrag( deltaX, deltaY ) {
      //this.DOMElement.classList.remove( "hover-enabled" );
      //console.log( e );
      this.offsetX += deltaX * 1.1;
      this.offsetY += deltaY * 1.1;
      this.updateGrid();
    }
    
    onResize() {
      this.viewHeight = this.DOMElement.offsetHeight;
      this.viewWidth = this.DOMElement.offsetWidth;
      this.updateViewColRows();
      this.updateGrid();
    }
    
    updateViewColRows() {
      this.viewCols = Math.ceil( this.viewWidth / CARD_WIDTH ) + 2;
      this.viewRows = Math.ceil( this.viewHeight / CARD_HEIGHT ) + 2;
    }
    
    isVisible( x, y ) {
      return ( ( x + CARD_WIDTH > 0 && y + CARD_HEIGHT > 0 ) && 
        ( x < this.viewWidth && y < this.viewHeight ) );
    }
    
    getRandomSafe( col, row ) {
      let pick;
      let tries = 0;
      let i = 0;
      
      while ( pick === undefined ) {
  
        let rnd = ~~( Math.random() * 10000 );
        let item = this.getGalleryDescriptor( rnd );
        for ( i = 0; i < NEIGHBOURS.length; i++ ) {
          let offsets = NEIGHBOURS[ i ];
          let key = `${col + offsets[ 0 ]}:${row + offsets[ 1 ]}`;
          if ( this.picks[ key ] === item ) {
            break;
          }
        }
        
        if ( tries++ > 20 || i === NEIGHBOURS.length ) {
          pick = item;  
        }
      }
      return pick;
    }
    
    getRandomDescriptor( col, row ) {
      let key = `${col}:${row}`;
      if ( ! this.picks[ key ] ) {
        let item = this.getRandomSafe(col, row);
        this.picks[ key ] = item;
      }
      return this.picks[ key ];
    }
    
    getCardPos( col, row ) {
      let offsetX = this.offsetX % CARD_WIDTH;
      let offsetY = this.offsetY % CARD_HEIGHT;
      let x = col * CARD_WIDTH + offsetX - CARD_WIDTH;
      let y = row * CARD_HEIGHT + offsetY - CARD_HEIGHT;
      return [ Math.round(x), Math.round(y) ];
    }
    
    updateGrid() {
      let newCards = {};
      let colOffset = ~~( this.offsetX / CARD_WIDTH ) * -1;
      let rowOffset = ~~( this.offsetY / CARD_HEIGHT ) * -1;
      for ( let row = -1; row < this.viewRows; row++ ) {
        for ( let col = -1; col < this.viewCols; col++ ) {
          
          let desc = undefined;
          let tCol = colOffset + col;
          let tRow = rowOffset + row;
          if ( tCol > 0 && tRow > 0 &&
              tCol < FIXED_COLS && tRow < FIXED_ROWS ) {
            let index = tRow * FIXED_COLS + tCol;
            desc = this.getGalleryDescriptor( index );
          } else {
            desc = this.getRandomDescriptor( tCol, tRow );  
          }
  
          let [ x, y ] = this.getCardPos( col, row );
  
          if ( this.isVisible( x, y ) ) {
            let index = tCol + "" + tRow;
            let card = this.cards[ index ] || this.getCard( desc );
            delete this.cards[ index ];
            card.x = x;
            card.y = y;
            card.appendTo( this.DOMElement );
            card.update();
            newCards[ index ] = card;
          }
        }
      }
      this.cleanupCards();
      this.cards = newCards;
    }
    
    cleanupCards() {
      let keys = Object.keys( this.cards );
      for ( let i = 0; i < keys.length; i++ ) {
        let card = this.cards[ keys[ i ] ];
        card.removeSelf();
        this.cardsPool.push( card );
      }
      this.cards = null;
    }
    
    getCard( descriptor ) {
      if ( this.cardsPool.length > 0 ) {
        let card = this.cardsPool.pop();
        card.descriptor = descriptor;
       // console.log(descriptor)
        return card;
      } else {
        return new Card( descriptor );
      }
    }
  }
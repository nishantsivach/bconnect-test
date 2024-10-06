import { LitElement, html, css } from 'lit';
import '@shoelace-style/shoelace/dist/components/textarea/textarea'; // Importing Shoelace's textarea

export class WebTextarea extends LitElement {
    static styles = css`
   

    sl-textarea::part(base) {
      /* Custom styles for the Shoelace textarea */
      border: 1px solid #E0E0E0;; 
      border-radius: 6px; 
    }

    sl-textarea::part(textarea)::placeholder {
      font-size: 14px; 
      color: #000;
      opacity:0.5
    }

  

    
  `;

    static properties = {
        placholder: { type: String },
        border: { type: String }
    };

    constructor() {
        super();
        this.placholder = 'Type here...'
    }

    render() {
        return html`
 
        <sl-textarea rows="2" placeholder="${this.placholder}" resize="none"
        
        ></sl-textarea>

    `;
    }
}

customElements.define('web-textarea', WebTextarea);

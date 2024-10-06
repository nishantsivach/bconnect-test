import { html, css, LitElement } from 'lit';
import "@shoelace-style/shoelace/dist/components/button/button"

class Button extends LitElement {

  static styles = css`
    sl-button {
        width: var(--width, 100%);
    }

    ::part(base){
        background-color:var(--background, #131464);
        color:var(--color, #fff);
        width:var(--width, 100%);
        height: var(--height);
        display: flex; 
        justify-content: center; 
        align-items: center; 
        background: var(--background, #131464);
        border: var(--outline);
        box-shadow:var(--boxShadow);
    }


    ::part(label){
        font-size: var(--fontsize, 10px)
    }
    `;

  static properties = {
    height: { type: String },
    pill: { type: Boolean },
    pulse: { type: Boolean },
    size: { type: String },
    width: { type: String },
    disabled: { type: Boolean },
    background: { type: String },
    color: { type: String },
    fontsize: { type: String },
    outline: { type: String },
    boxShadow: { type: String },
  }

  constructor() {
    super();
    this.pill = true //set default value of pill
    this.pulse = false //set default value of pluse
    this.background = "#131464"
    this.color = '#fff'
    this.padding = "10px 50px"
    this.width = "100%"
    this.disabled = false


  }

  render() {
    return html`
        <sl-button
        ?outline=${!!this.outline || false}
         ?pill=${this.pill} ?pulse=${this.pulse} size=${this.size || "medium"} ?disabled=${this.disabled} style="
        --background: ${this.background};
         --color:${this.color}; 
         --padding:${this.padding};
         --width:${this.width};
         --height:${this.height};
         --fontsize:${this.fontsize};
         --outline: ${this.outline};
         --boxShadow:${this.boxShadow};
         ">
        <slot>data</slot> 
        </sl-button>
        `;
  }

}

customElements.define('web-button', Button);


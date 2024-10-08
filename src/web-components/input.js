import { html, css, LitElement } from 'lit';
import '@shoelace-style/shoelace/dist/components/input/input.js';

class WebInput extends LitElement {
    static styles = css`
    sl-input::part(base) {
      height: var(--input-height);
      padding:var(--padding,0px);
      display:flex;
      align-items: center;
      background: var(--backGround, #FFF);

    }
    sl-input::part(input) {
      height: 100%;
      font-size: var(--fontsize, 10px);
      font-family:var(--fontfamily);
      padding:var(--inputPadding);
      width: 173px;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
  `;

    static properties = {
        size: { type: String },
        placeholder: { type: String },
        pill: { type: Boolean },
        label: { type: String },
        height: { type: Number },
        fontsize: { type: String },
        value: { type: String },
        type: { type: String },
        fontfamily: { type: String },
        autofocus: { type: Boolean },
        padding: { type: String },
        disabled: { type: Boolean },
        inputPadding: { type: String },
        filled: { type: Boolean },
        backGround: { type: String }
    };

    constructor() {
        super();
        this.pill = false;
        this.placeholder = 'Search...';
        this.value = '';
        this.text = 'text'
        this.autofocus = false;
        this.disabled = false;
        this.filled = false;
    }


    connectedCallback() {
        super.connectedCallback();
    }


    firstUpdated() {
        if (this.autofocus) {
            const input = this.shadowRoot.querySelector('input');
            if (input) {
                input.focus();
            }
        }
    }


    handleInput(event) {
        const value = event.target.value;
        this.value = value;
        this.dispatchValueChange(value, 'inputChange');
    }


    dispatchValueChange(value, event) {
        const options = {
            detail: value,
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent(event, options));
    }
    clearInputValue() {
        const input = this.shadowRoot.querySelector('sl-input');
        input.value = '';

    }


    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render() {
        return html`
      <sl-input
        ?disabled=${this.disabled}
        type=${this.type}
        label=${this.label}
        value=${this.value}
        style="--input-height: ${this.height + 2}px; --fontsize: ${this.fontsize || '14px'};--fontfamily:${this.fontfamily};
        --padding:${this.padding};--inputPadding:${this.inputPadding};--backGround:${this.backGround}"
        size=${this.size || "medium"}
        placeholder=${this.placeholder}
        ?pill=${this.pill}
        ?autofocus=${this.autofocus}
        ?filled=${this.filled}
        @input=${this.handleInput} 
        @blur=${this.handBlurleInput} 
        @sl-focus =${this.handleFocus}
      >
        <slot name="prefix" slot="prefix"></slot>
        <slot name="suffix" slot="suffix"></slot>
      </sl-input>
    `;
    }
    handBlurleInput(event) {
        const value = event.target.value;
        // console.log("blur", value)
        this.dispatchValueChange(value, 'blurEvent');
    }

    handleFocus(event) {
        const value = event.target.value;
        // console.log("focus", value)
    }
}



customElements.define('web-input', WebInput);

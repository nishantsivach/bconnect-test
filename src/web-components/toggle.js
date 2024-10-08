import { html, css, LitElement } from 'lit';
import "@shoelace-style/shoelace/dist/components/switch/switch.js"

class WebToggle extends LitElement {
    static styles = css`
    sl-switch[checked]::part(control){
        background: green;
        border-color: green;
    }
    sl-switch::part(control){
      background-color: var(--background);
      border: var(--border);
    }

    sl-switch::part(thumb){
      border: var(--borderColor);
    }
  `;

    static properties = {
        width: { type: String },
        height: { type: String },
        thumbSize: { type: String },
        checked: { type: Boolean },
        background: { type: String },
        border: { type: String },
        borderColor: { type: String }
    };

    constructor() {
        super();
        this.width = "34px";
        this.height = '18px'
        this.thumbSize = '18px';
        this.checked = false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('sl-change', this.handleSwitchChange);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('sl-change', this.handleSwitchChange);
    }

    handleSwitchChange(event) {
        event.stopPropagation();
        const switchElement = event.target;
        const checked = switchElement.checked;
        this.dispatchEvent(new CustomEvent('switchChange', {
            detail: checked,
            bubbles: true,
            composed: true,
        }));
    }


    render() {
        return html`
    <sl-switch 
    .checked=${this.checked}
    @sl-change=${this.handleSwitchChange}
    style="--width: ${this.width || '34px'}; --height: ${this.height || '18px'}; --thumb-size: ${this.thumbSize || '18px'};--background:${this.background || 'var(--sl-color-neutral-400)'};--border:${this.border || 'solid var(--sl-input-border-width) var(--sl-color-neutral-400)'};--borderColor:${this.borderColor || 'solid var(--sl-input-border-width) var(--sl-color-neutral-400)'}"
    >
        <slot></slot>
    </sl-switch>
    `;
    }
}

customElements.define('web-toggle', WebToggle);
import { html, css, LitElement } from 'lit';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';

class WebTabs extends LitElement {
    static properties = {
        active: true,
        padding: { type: String },
        color: { type: String },
        disable: { type: Boolean }
    };

    static styles = css`
       sl-tab::part(base) {
      padding: var(--padding);
    }

    sl-tab::part(base)  {
      color: #04086A
    }

    sl-tab[active]::part(base)  {
      font-weight: bolder
    }
    `


    constructor() {
        super();
        this.active = false;
        this.disable = true;
    }

    render() {
        return html`<sl-tab style="--padding: ${this.padding};" ?active=${this.active} ?disabled=${this.disable}>
        <slot></slot>
     </sl-tab>
        `
    }
}

customElements.define('web-tabs', WebTabs)
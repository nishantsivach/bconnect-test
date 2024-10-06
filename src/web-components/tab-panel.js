import { html, css, LitElement } from 'lit';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js'

class WebTabPanel extends LitElement {
    static styles = css`
    /* Add your custom styles for the tab panel */
  `;

    static properties = {
        active: { type: Boolean },
    };

    constructor() {
        super();
        this.active = false;
    }

    render() {
        return html`
      <sl-tab-panel ?active=${this.active}>
        <slot></slot>
      </sl-tab-panel>
    `;
    }
}

customElements.define('web-tab-panel', WebTabPanel);

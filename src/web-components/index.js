import { html, css, LitElement } from "lit";
import './button';
import './details';
import './input';
import './select';
import './tab';
import './tab-panel';
import './textarea';
import './toggle'

class CustomWebComponent extends LitElement {
    async connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html`
    <web-button></web-button>
    <web-detail></web-detail>
    <web-input></web-input>
    <web-select></web-select>
    <web-tabs></web-tabs>
    <web-tab-panel></web-tab-panel>
    <web-textarea></web-textarea>
    <web-toggle></web-toggle>
    `
    }
}


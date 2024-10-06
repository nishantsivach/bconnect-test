import { LitElement, html, css } from 'lit';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

class DetailsComponent extends LitElement {

    static styles = css`
    .details-wrapper {
      width: 100%;
    }

    .summary-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap:12px;
      cursor: pointer;
      font-size: 0.75rem;
      background-color: transparent;
      border: none;
      padding: 8px;
      color:var(--color);
      font-family:var(--fontFamily);
    }

    .icon {
      transition: transform 0.3s ease;
      width:20%;
    }

    .icon.open {
        /* Rotate icon when open */
      transform: rotate(180deg); 
    }

    details {
      border: none;
      padding: 0;
    }

    .content {
      padding: 8px;
      background-color: #fcfcfc;
      border-radius:6px;
    }

    .title-wrapper{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%
    }
    .title-name{
        width:80%;
        padding-top:3px;
    }
    .before-summary-slot{
        display:flex;
        justify-content:center;
        align-items:center;
    }
  `;

    static properties = {
        open: { type: Boolean },
        detailTitle: { type: String },
        color: { type: String },
        fontFamily: { type: String }

    };

    constructor() {
        super();
        this.open = false;
        this.detailTitle = 'Details Title'
    }

    handleToggle(e) {// Automatically tracks whether the details element is open
        this.open = e.target.open;
    }

    render() {
        return html`
      <details class="details-wrapper" @toggle="${this.handleToggle}">
        <summary class="summary-header" style="--color:${this.color};--fontFamily:${this.fontFamily}">
        <span class="before-summary-slot">
            <slot name="icon-summary"></slot>
          </span>
          <div class="title-wrapper">
          <span class="title-name">${this.detailTitle}</span>
          <!-- Add 'open' class dynamically based on this.open state -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="#04086A"
            class="icon ${this.open ? 'open' : ''}"
            viewBox="0 0 16 16"
            part="svg"
          >
            <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            />
          </svg>
    </div>
        </summary>
        <div class="content">
          <slot></slot> 
        </div>
      </details>
    `;
    }
}

customElements.define('web-detail', DetailsComponent);

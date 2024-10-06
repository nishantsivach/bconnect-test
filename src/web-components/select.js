import { html, css, LitElement } from 'lit';
import "@shoelace-style/shoelace/dist/components/select/select.js"
import "@shoelace-style/shoelace/dist/components/skeleton/skeleton"
import "@shoelace-style/shoelace/dist/components/option/option.js"
import "@shoelace-style/shoelace/dist/components/icon/icon.js"

class Select extends LitElement {
  static styles = css`
    sl-select::part(combobox) {
      height: var(--height);
      min-height: var(--height);
      font-size: var(--fontsize);
      font-family: var(--fontFamily);
    }
    
    sl-option::part(base) {
      font-size: var(--fontsize);
      padding: 3px;
      font-family: var(--fontFamily);
      --sl-color-primary-600:#04086A;
    }

    


    sl-select::part(expand-icon) {
      margin-inline-start: 0;
    }

    sl-select::part(listbox){
      margin-top:5px;
      bottom:var(--bottom);
      width:var(--width);
      margin-bottom:var(--marginBottom);
      right:var(--right);
      border-radius:var(--borderRadius);
      position:var(--position);
      padding:var(--padding);
      box-shadow:var(--boxShadow);
    }

    
   
    sl-select::part(listbox)::before {

  content: '';
  position: absolute;
  top: var(--top);
  display:var(--display);
   left:var(--left);
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #FCFCFC;
}

.expand-icon {
      font-size: 10px;
    }
    .custom-option{
        padding:5px
    }
  `;

  static properties = {
    placeholder: { type: String },
    height: { type: String },
    options: { type: Array },
    pill: { type: Boolean },
    fontsize: { type: String },
    value: { type: String },
    placement: { type: String },
    width: { type: String },
    marginBottom: { type: String },
    right: { type: String },
    borderRadius: { type: String },
    position: { type: String },
    padding: { type: String },
    top: { type: String },
    left: { type: String },
    display: { type: String },
    boxShadow: { type: String },
    paddingLeft: { type: String },
    fontFamily: { type: String },
    color: { type: String },
    clearable: false
  };

  constructor() {
    super();
    this.placeholder = 'Search...';
    this.height = '32px';
    this.options = [];
    this.pill = false;
    this.value = '1'; // Set default value for the value property
  }

  handleInputChange(event) {
    // Handle input change here
  }

  clearInputValue() {
    // Clear input value here
  }

  render() {
    return html`
      <sl-select
      ?clearable=${this.clearable || false}
       placement=${this.placement || 'bottom'}
        placeholder=${this.placeholder}
        style="--display:${this.display || 'none'}; 
        --height: ${this.height};
         --fontsize: ${this.fontsize || '10px'};
         --width:${this.width || '100%'};
         --marginBottom:${this.marginBottom || '0px'};
         --right:${this.right || '0px'};
         --borderRadius:${this.borderRadius || '0px'};
         --position:${this.position || 'relative'};
         --top:${this.top || '100%'};--left:${this.left || '50%'};
         --padding:${this.padding || '0px'};
         --boxShadow:${this.boxShadow};
         --paddingLeft:${this.paddingLeft};
         --fontFamily:${this.fontFamily};
         --color:${this.color}"
        ?pill=${this.pill}
        .value=${this.value} 
        @sl-change=${this.handleSelectChange}

      >
        <span class="expand-icon" slot="expand-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="#04086A" class="bi bi-caret-down-fill" viewBox="0 0 16 16" part="svg">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
          </svg>
        </span>
          <slot></slot>
        ${this.options.map((option) => html`
          <sl-option class="custom-option" style="--fontsize: ${this.fontsize || '12px'};" value=${option.id}>
            ${option.name}
          </sl-option>
        `)}
      </sl-select>
    `;
  }

  handleSelectChange(event) {
    const value = event.target.value;
    this.dispatchEvent(new CustomEvent('change', { detail: value }));
  }
}

customElements.define('web-select', Select);

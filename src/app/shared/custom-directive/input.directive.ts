import { Directive, ElementRef, forwardRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const WEB_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputDirective),
  multi: true,
};

@Directive({
  selector: '[appInput,web-input[formControlName],web-input[formControl],web-input[ngModel]]',
  standalone: true,
  providers: [WEB_INPUT_VALUE_ACCESSOR]
})

export class InputDirective implements ControlValueAccessor, OnInit {
  @Input() disabled!: boolean;
  private inputElement!: HTMLInputElement;
  private onChange: any = () => { };
  private onTouched: any = () => { };
  private isInitialized: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputElement = this.elementRef.nativeElement.shadowRoot.querySelector('sl-input')
      const inputBeneathSlInput = this.inputElement?.shadowRoot?.querySelector('input')
      const baseElement = this.elementRef.nativeElement.shadowRoot.querySelector('sl-textarea')?.shadowRoot?.querySelector('[part="base"]');
      if (baseElement) {
        baseElement?.classList?.remove('textarea--focused');
      }

      if (baseElement) {
        baseElement.addEventListener('click', this.handleTestAreaClick.bind(this));
      }
      if (inputBeneathSlInput) {
        inputBeneathSlInput.id = this.inputElement?.id
      }
      this.inputElement.addEventListener('input', this.handleInput.bind(this));
      this.inputElement.addEventListener('blur', this.onTouched.bind(this));
      this.isInitialized = true;
      this.onChange(this.inputElement.value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      console.log("Disabled changed to:", changes['disabled'].currentValue);
      this.setDisabledState(changes['disabled'].currentValue);
    }
  }

  private handleTestAreaClick(event: MouseEvent): void {
    const getClass = this.elementRef.nativeElement.shadowRoot.querySelector('sl-textarea')?.shadowRoot?.querySelector('[part="base"]');

    if (getClass) {
      getClass.classList.replace('textarea--focused', 'your-css-class');
      // getClass?.style?.borderColor = 'your_color_here';
      getClass.classList.remove('textarea--focused');
      getClass.style.borderColor = 'lightgray';
      getClass.style.setProperty('border-color', 'lightgray', 'important');
    }
  }
  writeValue(value: any): void {
    if (this.isInitialized && this.inputElement) {
      this.inputElement.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    console.log("check the diable", isDisabled)
    if (this.inputElement) {
      this.inputElement.disabled = isDisabled;
    }
  }

  private handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  validate(): { [key: string]: any } | null {
    const value = this.inputElement.value;
    if (this.inputElement.required && !value) {
      return { required: true };
    }
    return null;
  }
}

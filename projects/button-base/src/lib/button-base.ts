import { Directive, ElementRef, inject, input, Renderer2 } from "@angular/core";

@Directive()
export class ButtonBase {
    // Inputs
    public width = input<string>();
    public height = input<string>();
    public padding = input<string>();
    public borderWidth = input<string>();
    public borderRadius = input<string>();

    // Private
    private _width!: string;
    private _height!: string;
    private _padding!: string;
    protected content!: string;
    private _borderWidth!: string;
    protected buttonType!: string;
    private _borderRadius!: string;
    private border!: HTMLDivElement;
    protected style!: HTMLStyleElement;
    private button = inject(ElementRef);
    protected background!: HTMLDivElement;
    protected renderer = inject(Renderer2);
    protected existingStyle!: HTMLElement;



    private ngOnInit(): void {
        this.setContent();
        this.setProperties();
        this.createElements();
        this.addClasses();
        this.addStyles();
    }



    private setContent(): void {
        this.content = this.button.nativeElement.textContent.trim();
        this.renderer.setProperty(this.button.nativeElement, 'innerHTML', '');
    }



    protected setProperties(): void {
        this._width = this.setProperty('width', this.width(), 'width', true);
        this._height = this.setProperty('height', this.height(), 'height', true);
        this._padding = this.setProperty('padding', this.padding(), 'padding');
        this._borderWidth = this.setProperty('borderWidth', this.borderWidth(), 'border-width');
        this._borderRadius = this.setProperty('borderRadius', this.borderRadius(), 'border-radius');
    }



    protected createElements(): void {
        this.border = this.createElement(this.button.nativeElement);
        this.background = this.createElement(this.border);
    }



    protected addClasses(): void {
        this.renderer.addClass(this.button.nativeElement, this.buttonType + '-button');
        this.renderer.addClass(this.border, this.buttonType + '-button-border');
        this.renderer.addClass(this.background, this.buttonType + '-button-background');
    }



    private addStyles(): void {
        this.addClassStyles();
        this.addInlineStyles();
    }



    protected createElement(parent: HTMLDivElement): HTMLDivElement {
        const element = this.renderer.createElement('div');
        this.renderer.appendChild(parent, element);
        return element;
    }



    protected setProperty(nativeStyleProperty: string, inputProperty: string | undefined, cssProperty: string, noDefaultValue?: boolean): string {
        const nativeValue = this.button.nativeElement.style[nativeStyleProperty];
        const inputValue = inputProperty;
        const cssValue = getComputedStyle(document.documentElement).getPropertyValue(`--${this.buttonType}-button-${cssProperty}`);
        const defaultValue = !noDefaultValue ? getComputedStyle(this.button.nativeElement)[nativeStyleProperty as any] : null;
        return nativeValue || inputValue || cssValue || defaultValue;
    }



    protected addClassStyles(): void {
        const styleId = `${this.buttonType}-button-style`;
        this.existingStyle = document.getElementById(styleId)!;

        if (!this.existingStyle) {
            this.style = this.renderer.createElement('style');
            this.renderer.setAttribute(this.style, 'id', styleId);
            this.renderer.appendChild(document.head, this.style);

            this.addButtonStyles();
            this.addBorderStyles();
            this.addBackgroundStyles();
        }
    }



    private addButtonStyles(): void {
        this.style.innerHTML = `.` + this.buttonType + `-button {
          padding: 0;
          background: none;
          user-select: none;
          width: fit-content;
          height: fit-content;
          cursor: var(--` + this.buttonType + `-button-cursor);
          box-shadow: var(--` + this.buttonType + `-button-drop-shadow);`;

        this.addHoverStyles();
        this.addActiveStyles();
        this.addFocusStyles();
        this.addFocusVisibleStyles();
        this.addDisabledStyles();
    }



    protected addHoverStyles(): void {
        this.style.innerHTML += `
          &:hover:not(:disabled) {
              .` + this.buttonType + `-button-border {
                  background: var(--` + this.buttonType + `-button-border-hover-color);
              }
    
              .` + this.buttonType + `-button-background {
                  background: var(--` + this.buttonType + `-button-background-hover-color);`;
    }



    protected addActiveStyles(): void {
        this.style.innerHTML += `
          &:active:not(:disabled) {
              box-shadow: var(--` + this.buttonType + `-button-active-drop-shadow);
    
              .` + this.buttonType + `-button-border {
                  background: var(--` + this.buttonType + `-button-border-active-color);
              }
    
              .` + this.buttonType + `-button-background {
                  background: var(--` + this.buttonType + `-button-background-active-color);`;
    }



    private addFocusStyles(): void {
        this.style.innerHTML += `
          &:focus {
              outline-width: var(--` + this.buttonType + `-button-focus-outline-width);
              outline-style: var(--` + this.buttonType + `-button-focus-outline-style);
              outline-color: var(--` + this.buttonType + `-button-focus-outline-color);
              outline-offset: var(--` + this.buttonType + `-button-focus-outline-offset);
          }`;
    }



    private addFocusVisibleStyles(): void {
        this.style.innerHTML += `
          &:focus-visible {
              outline-width: var(--` + this.buttonType + `-button-focus-visible-outline-width);
              outline-style: var(--` + this.buttonType + `-button-focus-visible-outline-style);
              outline-color: var(--` + this.buttonType + `-button-focus-visible-outline-color);
              outline-offset: var(--` + this.buttonType + `-button-focus-visible-outline-offset);
          }`;
    }



    protected addDisabledStyles(): void {
        this.style.innerHTML += `
          &:disabled {
              cursor: var(--` + this.buttonType + `-button-disabled-cursor);
              box-shadow: var(--` + this.buttonType + `-button-disabled-drop-shadow);
    
              .` + this.buttonType + `-button-border {
                  background: var(--` + this.buttonType + `-button-border-disabled-color);
              }
    
              .` + this.buttonType + `-button-background {
                  background: var(--` + this.buttonType + `-button-background-disabled-color);`;
    }



    private addBorderStyles(): void {
        this.style.innerHTML += `.` + this.buttonType + `-button-border {
            box-sizing: border-box;
            background: var(--` + this.buttonType + `-button-border-color);
        }`;
    }



    private addBackgroundStyles(): void {
        this.style.innerHTML += `.` + this.buttonType + `-button-background {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          justify-content: center;
          background: var(--` + this.buttonType + `-button-background-color);
        }`;
    }



    protected addInlineStyles(): void {
        // Button
        this.renderer.setStyle(this.button.nativeElement, 'border-width', this._borderWidth);
        this.renderer.setStyle(this.button.nativeElement, 'border-radius', this._borderRadius);

        // Border
        this.renderer.setStyle(this.border, 'width', this._width);
        this.renderer.setStyle(this.border, 'height', this._height);
        this.renderer.setStyle(this.border, 'padding', this._borderWidth);
        this.renderer.setStyle(this.border, 'border-radius', this._borderRadius);

        // Background
        const borderTopWidth = parseInt(getComputedStyle(this.button.nativeElement).borderTopWidth);
        const borderRightWidth = parseInt(getComputedStyle(this.button.nativeElement).borderRightWidth);
        const borderBottomWidth = parseInt(getComputedStyle(this.button.nativeElement).borderBottomWidth);
        const borderLeftWidth = parseInt(getComputedStyle(this.button.nativeElement).borderLeftWidth);
        
        this.renderer.setStyle(this.background, 'padding', this._padding);
        this.renderer.setStyle(this.button.nativeElement, 'border', 'none');
        this.renderer.setStyle(this.background, 'border-top-left-radius', (parseInt(getComputedStyle(this.button.nativeElement).borderTopLeftRadius) - borderTopWidth) + 'px');
        this.renderer.setStyle(this.background, 'border-top-right-radius', (parseInt(getComputedStyle(this.button.nativeElement).borderTopRightRadius) - borderRightWidth) + 'px');
        this.renderer.setStyle(this.background, 'border-bottom-right-radius', (parseInt(getComputedStyle(this.button.nativeElement).borderBottomRightRadius) - borderBottomWidth) + 'px');
        this.renderer.setStyle(this.background, 'border-bottom-left-radius', (parseInt(getComputedStyle(this.button.nativeElement).borderBottomLeftRadius) - borderLeftWidth) + 'px');
    }
}
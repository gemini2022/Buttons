import { Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[primaryIconButton]',
  standalone: true
})
export class PrimaryIconButtonDirective {
  // Inputs
  public width = input<string>();
  public height = input<string>();
  public cursor = input<string>();
  public padding = input<string>();
  public iconSize = input<string>();
  public dropShadow = input<string>();
  public borderWidth = input<string>();
  public borderRadius = input<string>();
  public disabledCursor = input<string>();
  public activeDropShadow = input<string>();
  public focusOutlineWidth = input<string>();
  public focusOutlineStyle = input<string>();
  public focusOutlineColor = input<string>();
  public focusOutlineOffset = input<string>();
  public focusVisibleOutlineWidth = input<string>();
  public focusVisibleOutlineStyle = input<string>();
  public focusVisibleOutlineColor = input<string>();
  public focusVisibleOutlineOffset = input<string>();

  // Private
  private _width!: string;
  private _height!: string;
  private content!: string;
  private _cursor!: string;
  private _padding!: string;
  private _dropShadow!: string;
  private _borderWidth!: string;
  private _borderRadius!: string;
  private _disabledCursor!: string;
  private style!: HTMLStyleElement;
  private _activeDropShadow!: string;
  private button = inject(ElementRef);
  private renderer = inject(Renderer2);
  private _focusOutlineWidth!: string;
  private _focusOutlineStyle!: string;
  private _focusOutlineColor!: string;
  private _focusOutlineOffset!: string;
  private _focusVisibleOutlineWidth!: string;
  private _focusVisibleOutlineStyle!: string;
  private _focusVisibleOutlineColor!: string;
  private _focusVisibleOutlineOffset!: string;
  protected buttonType: string = 'primary-icon';



  private ngOnInit(): void {
    this.setContent();
    this.createElements();
    this.setProperties();
    this.addClasses();
  }



  private setContent(): void {
    this.content = this.button.nativeElement.textContent.trim();
    this.renderer.setProperty(this.button.nativeElement, 'innerHTML', '');
  }



  private createElements(): void {
    this.style = this.renderer.createElement('style');
    this.renderer.appendChild(document.head, this.style);
    this.renderer.addClass(this.button.nativeElement, this.buttonType + '-button');
    const border = this.createElementAndClass(this.button.nativeElement, 'border');
    const background = this.createElementAndClass(border, 'background');
    const svg = this.createSvgElementAndClass(background);
    this.createPathElement(svg);
  }



  private setProperties(): void {
    this._width = this.setProperty('width', this.width(), 'width', true);
    this._height = this.setProperty('height', this.width(), 'height', true);
    this._cursor = this.setProperty('cursor', this.cursor(), 'cursor');
    this._padding = this.setProperty('padding', this.padding(), 'padding');
    this._dropShadow = this.setProperty('boxShadow', this.dropShadow(), 'drop-shadow');
    this._borderWidth = this.setProperty('borderWidth', this.borderWidth(), 'border-width');
    this._borderRadius = this.setProperty('borderRadius', this.borderRadius(), 'border-radius');
    this._focusOutlineWidth = this.setProperty('outlineWidth', this.focusOutlineWidth(), 'focus-outline-width');
    this._focusOutlineStyle = this.setProperty('outlineStyle', this.focusOutlineStyle(), 'focus-outline-style');
    this._focusOutlineColor = this.setProperty('outlineColor', this.focusOutlineColor(), 'focus-outline-color');
    this._focusOutlineOffset = this.setProperty('outlineOffset', this.focusOutlineOffset(), 'focus-outline-offset');
    this._focusVisibleOutlineWidth = this.setProperty('outlineWidth', this.focusVisibleOutlineWidth(), 'focus-visible-outline-width');
    this._focusVisibleOutlineStyle = this.setProperty('outlineStyle', this.focusVisibleOutlineStyle(), 'focus-visible-outline-style');
    this._focusVisibleOutlineColor = this.setProperty('outlineColor', this.focusVisibleOutlineColor(), 'focus-visible-outline-color');
    this._focusVisibleOutlineOffset = this.setProperty('outlineOffset', this.focusVisibleOutlineOffset(), 'focus-visible-outline-offset');
    this._disabledCursor = this.disabledCursor() ? this.disabledCursor()! : getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-disabled-cursor');
    this._activeDropShadow = this.activeDropShadow() ? this.activeDropShadow()! : getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-active-drop-shadow');
  }



  private addClasses(): void {
    this.addContainerClass();
    this.addBorderClass();
    this.addBackgroundClass();
    this.addSvgClass();
  }


  
  private createElementAndClass(parent: HTMLDivElement, className: string): HTMLDivElement {
    const element = this.renderer.createElement('div');
    this.renderer.appendChild(parent, element);
    this.renderer.addClass(element, this.buttonType + '-button-' + className);
    return element;
  }



  private createSvgElementAndClass(background: HTMLDivElement): SVGElement {
    const iconSize = this.iconSize() ? this.iconSize()! : getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-icon-size');
    const svg = this.renderer.createElement('svg', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(svg, 'height', iconSize);
    this.renderer.setAttribute(svg, 'viewBox', '0 -960 960 960');
    this.renderer.setAttribute(svg, 'width', iconSize);
    this.renderer.appendChild(background, svg);
    this.renderer.addClass(svg, this.buttonType + '-' + 'button-svg');
    return svg;
  }



  private createPathElement(svg: SVGElement): void {
    const path = this.renderer.createElement('path', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(path, 'd', this.content);
    this.renderer.appendChild(svg, path);
  }



  private setProperty(nativeStyleProperty: string, inputProperty: string | undefined, cssProperty: string, noDefaultValue?: boolean): string {
    const nativeValue = this.button.nativeElement.style[nativeStyleProperty];
    const inputValue = inputProperty;
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue(`--${this.buttonType}-button-${cssProperty}`);
    const defaultValue = !noDefaultValue ? getComputedStyle(this.button.nativeElement)[nativeStyleProperty as any] : null;
    return nativeValue || inputValue || cssValue || defaultValue;
  }



  private addContainerClass(): void {
    this.addButtonClass();
    this.addHoverPseudoClass();
    this.addActivePseudoClass();
    this.addFocusPseudoClass();
    this.addFocusVisiblePseudoClass();
    this.addDisabledPseudoClass();
  }



  private addBorderClass(): void {
    let borderStyles = `.` + this.buttonType + `-button-border { box-sizing: border-box;`;
    if (this._width) borderStyles += `width: ` + this._width + `;`;
    if (this._height) borderStyles += `height: ` + this._height + `;`;

    borderStyles += `
      padding: ` + this._borderWidth + `;
      border-radius: ` + this._borderRadius + `;
      background: var(--` + this.buttonType + `-button-border-color);
    }`;
    this.style.innerHTML += borderStyles;
  }



  private addBackgroundClass(): void {
    const borderTopWidth = parseInt(getComputedStyle(this.button.nativeElement).borderTopWidth);
    const borderRightWidth = parseInt(getComputedStyle(this.button.nativeElement).borderRightWidth);
    const borderBottomWidth = parseInt(getComputedStyle(this.button.nativeElement).borderBottomWidth);
    const borderLeftWidth = parseInt(getComputedStyle(this.button.nativeElement).borderLeftWidth);
    this.renderer.setStyle(this.button.nativeElement, 'border', 'none')

    this.style.innerHTML += `.` + this.buttonType + `-button-background {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      padding: ` + this._padding + `;
      background: var(--` + this.buttonType + `-button-background-color);
      border-top-left-radius: ` + (parseInt(getComputedStyle(this.button.nativeElement).borderTopLeftRadius) - borderTopWidth) + 'px' + `;
      border-top-right-radius: ` + (parseInt(getComputedStyle(this.button.nativeElement).borderTopRightRadius) - borderRightWidth) + 'px' + `;
      border-bottom-right-radius: ` + (parseInt(getComputedStyle(this.button.nativeElement).borderBottomRightRadius) - borderBottomWidth) + 'px' + `;
      border-bottom-left-radius: ` + (parseInt(getComputedStyle(this.button.nativeElement).borderBottomLeftRadius) - borderLeftWidth) + 'px' + `;
    }`;
  }



  private addSvgClass(): void {
    this.style.innerHTML += `.` + this.buttonType + `-button-svg {
      fill: var(--` + this.buttonType + `-button-icon-color);
    }`;
  }



  private addButtonClass(): void {
    this.style.innerHTML = `.` + this.buttonType + `-button {
      padding: 0;
      background: none;
      cursor: ` + this._cursor + `;
      box-shadow: ` + this._dropShadow + `;
      border-width: ` + this._borderWidth + `; 
      border-radius: ` + this._borderRadius + `;`
  }



  private addHoverPseudoClass(): void {
    this.style.innerHTML += `
      &:hover:not(:disabled) {
          .` + this.buttonType + `-button-border {
              background: var(--` + this.buttonType + `-button-border-hover-color);
          }

          .` + this.buttonType + `-button-background {
              background: var(--` + this.buttonType + `-button-background-hover-color);

              .` + this.buttonType + `-button-svg {
                fill: var(--` + this.buttonType + `-button-icon-hover-color);
              }
          }
      }`
  }



  private addActivePseudoClass(): void {
    this.style.innerHTML += `
      &:active:not(:disabled) {
          box-shadow: ` + this._activeDropShadow + `;

          .` + this.buttonType + `-button-border {
              background: var(--` + this.buttonType + `-button-border-active-color);
          }

          .` + this.buttonType + `-button-background {
              background: var(--` + this.buttonType + `-button-background-active-color);

              .` + this.buttonType + `-button-svg {
                fill: var(--` + this.buttonType + `-button-icon-active-color);
              }
          }
      }`
  }



  private addFocusPseudoClass(): void {
    this.style.innerHTML += `
      &:focus {
          outline-width: ` + this._focusOutlineWidth + `;
          outline-style: ` + this._focusOutlineStyle + `;
          outline-color: ` + this._focusOutlineColor + `;
          outline-offset: ` + this._focusOutlineOffset + `;
      }`
  }



  private addFocusVisiblePseudoClass(): void {
    this.style.innerHTML += `
      &:focus-visible {
          outline-width: ` + this._focusVisibleOutlineWidth + `;
          outline-style: ` + this._focusVisibleOutlineStyle + `;
          outline-color: ` + this._focusVisibleOutlineColor + `;
          outline-offset: ` + this._focusVisibleOutlineOffset + `;
      }`
  }



  private addDisabledPseudoClass(): void {
    this.style.innerHTML += `
      &:disabled {
          cursor: ` + this._disabledCursor + `;
          box-shadow: var(--` + this.buttonType + `-button-disabled-drop-shadow);

          .` + this.buttonType + `-button-border {
              background: var(--` + this.buttonType + `-button-border-disabled-color);
          }

          .` + this.buttonType + `-button-background {
              background: var(--` + this.buttonType + `-button-background-disabled-color);

              .` + this.buttonType + `-button-svg {
                fill: var(--` + this.buttonType + `-button-icon-disabled-color);
              }
          }
      }
    }`
  }
}
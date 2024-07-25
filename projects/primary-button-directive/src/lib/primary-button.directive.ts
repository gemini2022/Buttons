import { Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[primaryButton]',
  standalone: true
})
export class PrimaryButtonDirective {
  // Inputs
  public width = input<string>();
  public height = input<string>();
  public cursor = input<string>();
  public padding = input<string>();
  public fontSize = input<string>();
  public fontWeight = input<string>();
  public fontFamily = input<string>();
  public dropShadow = input<string>();
  public borderWidth = input<string>();
  public borderRadius = input<string>();
  public disabledCursor = input<string>();
  public activeDropShadow = input<string>();

  // Private
  private _width!: string;
  private _height!: string;
  private _cursor!: string;
  private _padding!: string;
  private _fontSize!: string;
  private _fontWeight!: string;
  private _fontFamily!: string;
  private _dropShadow!: string;
  private _borderWidth!: string;
  private _buttonContent!: string;
  private _borderRadius!: string;
  private _disabledCursor!: string;
  private _activeDropShadow!: string;

  private style!: HTMLStyleElement;
  private button = inject(ElementRef);
  private renderer = inject(Renderer2);
  protected buttonType: string = 'primary';
  private buttonText!: HTMLDivElement;
  private buttonBorder!: HTMLDivElement;
  private buttonBackground!: HTMLDivElement;



  private ngOnInit(): void {
    this.createStyleTag();
    this.setButtonContent();
    this.createButtonClass();
    this.createButtonBorder();
    this.createButtonBackground();
    this.createButtonText();
    this.setWidth();
    this.setHeight();
    this.setCursor();
    this.setPadding();
    this.setFontSize();
    this.setFontWeight();
    this.setFontFamily();
    this.setDropShadow();
    this.setBorderWidth();
    this.setBorderRadius();
    this.setDisabledCursor();
    this.setActiveDropShadow();
    this.addButtonClass();
    this.addButtonBorderClass();
    this.addButtonBackgroundClass();
    this.addButtonTextClass();
  }



  private createStyleTag(): void {
    this.style = this.renderer.createElement('style');
    this.renderer.appendChild(document.head, this.style);
  }



  private setButtonContent(): void {
    this._buttonContent = this.button.nativeElement.textContent.trim();
    this.renderer.setProperty(this.button.nativeElement, 'innerHTML', '');
  }



  private createButtonClass(): void {
    this.renderer.addClass(this.button.nativeElement, this.buttonType + '-button');
  }



  private createButtonBorder(): void {
    this.buttonBorder = this.renderer.createElement('div');
    this.renderer.appendChild(this.button.nativeElement, this.buttonBorder);
    this.renderer.addClass(this.buttonBorder, this.buttonType + '-button-border');
  }



  private createButtonBackground(): void {
    this.buttonBackground = this.renderer.createElement('div');
    this.renderer.appendChild(this.buttonBorder, this.buttonBackground);
    this.renderer.addClass(this.buttonBackground, this.buttonType + '-button-background');
  }



  private createButtonText(): void {
    this.buttonText = this.renderer.createElement('div');
    this.buttonText.innerText = this._buttonContent;
    this.renderer.appendChild(this.buttonBackground, this.buttonText);
    this.renderer.addClass(this.buttonText, this.buttonType + '-button-text');
  }



  private setWidth(): void {
    this._width = this.button.nativeElement.style.width ? this.button.nativeElement.style.width :
      this.width() ? this.width() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-width');
  }



  private setHeight(): void {
    this._height = this.button.nativeElement.style.height ? this.button.nativeElement.style.height :
      this.height() ? this.height() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-height');
  }



  private setCursor(): void {
    this._cursor = this.button.nativeElement.style.cursor ? this.button.nativeElement.style.cursor :
      this.cursor() ? this.cursor() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-cursor') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-cursor') :
          getComputedStyle(this.button.nativeElement).cursor;
  }



  private setPadding(): void {
    this._padding = this.button.nativeElement.style.padding ? this.button.nativeElement.style.padding :
      this.padding() ? this.padding() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-padding') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-padding') :
          getComputedStyle(this.button.nativeElement).padding;
  }



  private setFontSize(): void {
    this._fontSize = this.button.nativeElement.style.fontSize ? this.button.nativeElement.style.fontSize :
      this.fontSize() ? this.fontSize() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-font-size') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-font-size') :
          getComputedStyle(this.button.nativeElement).fontSize;
  }



  private setFontWeight(): void {
    this._fontWeight = this.button.nativeElement.style.fontWeight ? this.button.nativeElement.style.fontWeight :
      this.fontWeight() ? this.fontWeight() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-font-weight') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-font-weight') :
          getComputedStyle(this.button.nativeElement).fontWeight;
  }



  private setFontFamily(): void {
    this._fontFamily = this.button.nativeElement.style.fontFamily ? this.button.nativeElement.style.fontFamily :
      this.fontFamily() ? this.fontFamily() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-font-family') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-font-family') :
          getComputedStyle(this.button.nativeElement).fontFamily;
  }



  private setDropShadow(): void {
    this._dropShadow = this.button.nativeElement.style.boxShadow ? this.button.nativeElement.style.boxShadow :
      this.dropShadow() ? this.dropShadow() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-drop-shadow') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-drop-shadow') :
          getComputedStyle(this.button.nativeElement).boxShadow;
  }



  private setBorderWidth(): void {
    this._borderWidth = this.button.nativeElement.style.borderWidth ? this.button.nativeElement.style.borderWidth :
      this.borderWidth() ? this.borderWidth() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-border-width') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-border-width') :
          getComputedStyle(this.button.nativeElement).borderWidth;
  }



  private setBorderRadius(): void {
    this._borderRadius = this.button.nativeElement.style.borderRadius ? this.button.nativeElement.style.borderRadius :
      this.borderRadius() ? this.borderRadius() :
        getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-border-radius') ? getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-border-radius') :
          getComputedStyle(this.button.nativeElement).borderRadius;
  }



  private setDisabledCursor(): void {
    this._disabledCursor = this.disabledCursor() ? this.disabledCursor()! : getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-disabled-cursor');
  }



  private setActiveDropShadow(): void {
    this._activeDropShadow = this.activeDropShadow() ? this.activeDropShadow()! : getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-active-drop-shadow');
  }



  private addButtonClass(): void {
    this.style.innerHTML = `.` + this.buttonType + `-button {
      padding: 0;
      background: none;
      cursor: ` + this._cursor + `;
      box-shadow: ` + this._dropShadow + `;
      border-width: ` + this._borderWidth + `; 
      border-radius: ` + this._borderRadius + `;

      &:hover:not(:disabled) {
          .` + this.buttonType + `-button-border {
              background: var(--` + this.buttonType + `-button-border-hover-color);
          }

          .` + this.buttonType + `-button-background {
              background: var(--` + this.buttonType + `-button-background-hover-color);

              .` + this.buttonType + `-button-text {
                color: var(--` + this.buttonType + `-button-text-hover-color);
              }
          }
      }

      &:active:not(:disabled) {
          box-shadow: ` + this._activeDropShadow + `;

          .` + this.buttonType + `-button-border {
              background: var(--` + this.buttonType + `-button-border-active-color);
          }

          .` + this.buttonType + `-button-background {
              background: var(--` + this.buttonType + `-button-background-active-color);

              .` + this.buttonType + `-button-text {
                color: var(--` + this.buttonType + `-button-text-active-color);
              }
          }
      }

      &:focus {
          outline: var(--` + this.buttonType + `-button-focus-outline);
          outline-offset: var(--` + this.buttonType + `-button-focus-outline-offset);
      }

      &:focus-visible {
          outline: var(--` + this.buttonType + `-button-focus-visible-outline);
          outline-offset: var(--` + this.buttonType + `-button-focus-visible-outline-offset);
      }

      &:disabled {
          cursor: ` + this._disabledCursor + `;
          color: var(--` + this.buttonType + `-button-text-disabled-color);
          box-shadow: var(--` + this.buttonType + `-button-disabled-drop-shadow);

          .` + this.buttonType + `-button-border {
              background: var(--` + this.buttonType + `-button-border-disabled-color);
          }

          .` + this.buttonType + `-button-background {
              background: var(--` + this.buttonType + `-button-background-disabled-color);
          }
      }
    }`;
  }



  private addButtonBorderClass(): void {
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



  private addButtonBackgroundClass(): void {
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



  private addButtonTextClass(): void {
    this.style.innerHTML += `.` + this.buttonType + `-button-text {
      font-size: ` + this._fontSize + `;
      font-weight: ` + this._fontWeight + `;
      font-family: ` + this._fontFamily + `;
      color: var(--` + this.buttonType + `-button-text-color);
    }`;
  }
}
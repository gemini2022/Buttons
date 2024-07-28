import { Directive, input } from "@angular/core";
import { ButtonBase } from "../../../button-base/src/lib/button-base";

@Directive()
export class TextButtonBase extends ButtonBase {
    // Inputs
    public fontSize = input<string>();
    public fontWeight = input<string>();
    public fontFamily = input<string>();

    // Private
    private _fontSize!: string;
    private _fontWeight!: string;
    private _fontFamily!: string;



    protected override createElements(): void {
        super.createElements();
        const text = this.createElementAndClass(this.background, 'text');
        text.innerText = this.content;
    }



    protected override setProperties(): void {
        super.setProperties();
        this._fontSize = this.setProperty('fontSize', this.fontSize(), 'font-size');
        this._fontWeight = this.setProperty('fontWeight', this.fontWeight(), 'font-weight');
        this._fontFamily = this.setProperty('fontFamily', this.fontWeight(), 'font-family');
    }



    protected override addClasses(): void {
        super.addClasses();
        this.addTextClass();
    }



    private addTextClass(): void {
        this.style.innerHTML += `.` + this.buttonType + `-button-text {
          font-size: ` + this._fontSize + `;
          font-weight: ` + this._fontWeight + `;
          font-family: ` + this._fontFamily + `;
          color: var(--` + this.buttonType + `-button-text-color);
        }`;
    }



    protected override addHoverPseudoClass(): void {
        super.addHoverPseudoClass();
        this.style.innerHTML += `.` + this.buttonType + `-button-text {
                    color: var(--` + this.buttonType + `-button-text-hover-color);
                  }
              }
          }`
    }



    protected override addActivePseudoClass(): void {
        super.addActivePseudoClass();
        this.style.innerHTML += `.` + this.buttonType + `-button-text {
                    color: var(--` + this.buttonType + `-button-text-active-color);
                  }
              }
          }`
    }



    protected override addDisabledPseudoClass(): void {
        super.addDisabledPseudoClass();
        this.style.innerHTML += `.` + this.buttonType + `-button-text {
                    color: var(--` + this.buttonType + `-button-text-disabled-color);
                  }
              }
          }
        }`
    }
}
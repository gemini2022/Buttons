import { Directive, input } from "@angular/core";
import { ButtonBase } from "button-base";

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
    private text!: HTMLDivElement;



    protected override setProperties(): void {
        super.setProperties();
        this._fontSize = this.setProperty('fontSize', this.fontSize(), 'font-size');
        this._fontWeight = this.setProperty('fontWeight', this.fontWeight(), 'font-weight');
        this._fontFamily = this.setProperty('fontFamily', this.fontWeight(), 'font-family');
    }



    protected override createElements(): void {
        super.createElements();
        this.text = this.createElement(this.background);
        this.text.innerText = this.content;
    }



    protected override addClasses(): void {
        super.addClasses();
        this.renderer.addClass(this.text, this.buttonType + '-button-text');
    }



    protected override addClassStyles(): void {
        super.addClassStyles();
        if (!this.existingStyle) {
            this.style.innerHTML += `.` + this.buttonType + `-button-text {
                color: var(--` + this.buttonType + `-button-text-color);
            }`;
        }
    }



    protected override addHoverStyles(): void {
        super.addHoverStyles();
        this.style.innerHTML += `
                .` + this.buttonType + `-button-text {
                    color: var(--` + this.buttonType + `-button-text-hover-color);
                  }
              }
          }`;
    }



    protected override addActiveStyles(): void {
        super.addActiveStyles();
        this.style.innerHTML += `
        
                .` + this.buttonType + `-button-text {
                    color: var(--` + this.buttonType + `-button-text-active-color);
                  }
              }
          }`;
    }



    protected override addDisabledStyles(): void {
        super.addDisabledStyles();
        this.style.innerHTML += `

                  .` + this.buttonType + `-button-text {
                    color: var(--` + this.buttonType + `-button-text-disabled-color);
                  }
              }
          }
        }`;
    }



    protected override addInlineStyles(): void {
        super.addInlineStyles();
        this.renderer.setStyle(this.text, 'font-size', this._fontSize);
        this.renderer.setStyle(this.text, 'font-weight', this._fontWeight);
        this.renderer.setStyle(this.text, 'font-family', this._fontFamily);
    }
}
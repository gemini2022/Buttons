import { Directive, input } from "@angular/core";
import { ButtonBase } from "button-base";

@Directive()
export class IconButtonBase extends ButtonBase {
    // Input
    public iconSize = input<string>();

    // private
    private svg!: SVGElement;


    protected override createElements(): void {
        super.createElements();
        this.svg = this.createSvgElement(this.background);
        this.createPathElement();
    }



    protected override addClasses(): void {
        super.addClasses();
        this.renderer.addClass(this.svg, this.buttonType + '-' + 'button-svg');
    }



    protected override addClassStyles(): void {
        super.addClassStyles();
        if (!this.existingStyle) {
            this.style.innerHTML += `.` + this.buttonType + `-button-svg {
                fill: var(--` + this.buttonType + `-button-icon-color);
            }`;
        }
    }



    private createSvgElement(background: HTMLDivElement): SVGElement {
        const iconSize = this.iconSize() ? this.iconSize()! : getComputedStyle(document.documentElement).getPropertyValue('--' + this.buttonType + '-button-icon-size');
        const svg = this.renderer.createElement('svg', 'http://www.w3.org/2000/svg');
        this.renderer.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
        this.renderer.setAttribute(svg, 'height', iconSize);
        this.renderer.setAttribute(svg, 'viewBox', '0 -960 960 960');
        this.renderer.setAttribute(svg, 'width', iconSize);
        this.renderer.appendChild(background, svg);
        return svg;
    }



    private createPathElement(): void {
        const path = this.renderer.createElement('path', 'http://www.w3.org/2000/svg');
        this.renderer.setAttribute(path, 'd', this.content);
        this.renderer.appendChild(this.svg, path);
    }



    protected override addHoverStyles(): void {
        super.addHoverStyles();
        this.style.innerHTML += `.` + this.buttonType + `-button-svg {
                    fill: var(--` + this.buttonType + `-button-icon-hover-color);
                  }
              }
          }`;
    }



    protected override addActiveStyles(): void {
        super.addActiveStyles();
        this.style.innerHTML += `.` + this.buttonType + `-button-svg {
                    fill: var(--` + this.buttonType + `-button-icon-active-color);
                  }
              }
          }`;
    }



    protected override addDisabledStyles(): void {
        super.addDisabledStyles();
        this.style.innerHTML += `.` + this.buttonType + `-button-svg {
                    fill: var(--` + this.buttonType + `-button-icon-disabled-color);
                  }
              }
          }
        }`;
    }
}
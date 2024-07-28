import { Directive, input } from "@angular/core";
import { ButtonBase } from "../../../button-base/src/lib/button-base";

@Directive()
export class IconButtonBase extends ButtonBase {
    // Inputs
    public iconSize = input<string>();



    protected override createElements(): void {
        super.createElements();
        const svg = this.createSvgElementAndClass(this.background);
        this.createPathElement(svg);
    }



    protected override addClasses(): void {
        super.addClasses();
        this.addSvgClass();
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



    private addSvgClass(): void {
        this.style.innerHTML += `.` + this.buttonType + `-button-svg {
          fill: var(--` + this.buttonType + `-button-icon-color);
        }`;
    }



    protected override addHoverPseudoClass(): void {
        super.addHoverPseudoClass();
        this.style.innerHTML += `.` + this.buttonType + `-button-svg {
                    fill: var(--` + this.buttonType + `-button-icon-hover-color);
                  }
              }
          }`
    }



    protected override addActivePseudoClass(): void {
        super.addActivePseudoClass();
        this.style.innerHTML += `.` + this.buttonType + `-button-svg {
                    fill: var(--` + this.buttonType + `-button-icon-active-color);
                  }
              }
          }`
    }



    protected override addDisabledPseudoClass(): void {
        super.addDisabledPseudoClass();
        this.style.innerHTML += `.` + this.buttonType + `-button-svg {
                    fill: var(--` + this.buttonType + `-button-icon-disabled-color);
                  }
              }
          }
        }`
      }
}
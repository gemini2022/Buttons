import { Directive } from '@angular/core';
import { IconButtonBase } from 'icon-button-base';

@Directive({
  selector: '[quaternaryIconButton]',
  standalone: true
})
export class QuaternaryIconButtonDirective extends IconButtonBase {
  protected override buttonType: string = 'quaternary-icon';
}
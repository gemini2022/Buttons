import { Directive } from '@angular/core';
import { IconButtonBase } from 'icon-button-base';

@Directive({
  selector: '[secondaryIconButton]',
  standalone: true
})
export class SecondaryIconButtonDirective extends IconButtonBase {
  protected override buttonType: string = 'secondary-icon';
}
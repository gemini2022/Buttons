import { Directive } from '@angular/core';
import { IconButtonBase } from 'icon-button-base';

@Directive({
  selector: '[primaryIconButton]',
  standalone: true
})
export class PrimaryIconButtonDirective extends IconButtonBase {
  protected override buttonType: string = 'primary-icon';
}
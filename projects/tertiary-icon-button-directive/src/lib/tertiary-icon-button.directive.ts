import { Directive } from '@angular/core';
import { IconButtonBase } from 'icon-button-base';

@Directive({
  selector: '[tertiaryIconButton]',
  standalone: true
})
export class TertiaryIconButtonDirective extends IconButtonBase {
  protected override buttonType: string = 'tertiary-icon';
}
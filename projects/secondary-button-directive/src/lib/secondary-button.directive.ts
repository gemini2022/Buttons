import { Directive } from '@angular/core';
import { TextButtonBase } from 'text-button-base';

@Directive({
  selector: '[secondaryButton]',
  standalone: true
})
export class SecondaryButtonDirective extends TextButtonBase {
  protected override buttonType: string = 'secondary';
}
import { Directive } from '@angular/core';
import { TextButtonBase } from 'text-button-base';

@Directive({
  selector: '[tertiaryButton]',
  standalone: true
})
export class TertiaryButtonDirective  extends TextButtonBase {
  protected override buttonType: string = 'tertiary';
}
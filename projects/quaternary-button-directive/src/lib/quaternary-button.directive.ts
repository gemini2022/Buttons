import { Directive } from '@angular/core';
import { TextButtonBase } from 'text-button-base';

@Directive({
  selector: '[quaternaryButton]',
  standalone: true
})
export class QuaternaryButtonDirective extends TextButtonBase {
  protected override buttonType: string = 'quaternary';
}
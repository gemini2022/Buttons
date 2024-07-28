import { Directive, ElementRef, inject, input, InputSignal, Renderer2 } from '@angular/core';
import { TextButtonBase } from '../../../text-button-base/src/lib/text-button-base';

@Directive({
  selector: '[primaryButton]',
  standalone: true
})
export class PrimaryButtonDirective extends TextButtonBase {
  protected override buttonType: string = 'primary';
}
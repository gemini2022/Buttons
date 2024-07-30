import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonDirective } from '../../projects/primary-button-directive/src/lib/primary-button.directive';
import { PrimaryIconButtonDirective } from '../../projects/primary-icon-button-directive/src/lib/primary-icon-button.directive';
import { SecondaryButtonDirective } from '../../projects/secondary-button-directive/src/lib/secondary-button.directive';
import { TertiaryButtonDirective } from '../../projects/tertiary-button-directive/src/lib/tertiary-button.directive';
import { QuaternaryButtonDirective } from '../../projects/quaternary-button-directive/src/lib/quaternary-button.directive';
import { SecondaryIconButtonDirective } from '../../projects/secondary-icon-button-directive/src/lib/secondary-icon-button.directive';
import { TertiaryIconButtonDirective } from '../../projects/tertiary-icon-button-directive/src/lib/tertiary-icon-button.directive';
import { QuaternaryIconButtonDirective } from '../../projects/quaternary-icon-button-directive/src/lib/quaternary-icon-button.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            PrimaryButtonDirective,
            SecondaryButtonDirective,
            TertiaryButtonDirective,
            QuaternaryButtonDirective,
            PrimaryIconButtonDirective,
            SecondaryIconButtonDirective,
            TertiaryIconButtonDirective,
            QuaternaryIconButtonDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buttons';
}
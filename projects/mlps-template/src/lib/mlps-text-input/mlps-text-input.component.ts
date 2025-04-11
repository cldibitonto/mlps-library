import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'mlps-text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mlps-text-input.component.html',
  styleUrl: './mlps-text-input.component.scss'
})
export class MLPSTextInputComponent {
  @Input() fcn: string = ''
  @Input() placeholder?: string;
  @Input() label: string = '';
  @Input() isInvalid: boolean = false;
}

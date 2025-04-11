import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'mlps-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './mlps-checkbox.component.html',
  styleUrl: './mlps-checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MLPSCheckboxComponent),
      multi: true
    }
  ]
})
export class MLPSCheckboxComponent implements ControlValueAccessor {
  @Input() fcn: string = '';
  @Input() placeholder?: string;
  @Input() label: string = '';
  @Input() isInvalid: boolean = false;

  // Valore del checkbox (booleano)
  value: boolean = false;
  disabled: boolean = false;

  // Funzioni che verranno registrate da Angular per propagare le modifiche
  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  // Metodo invocato da Angular per scrivere un nuovo valore
  writeValue(value: boolean): void {
    this.value = value;
  }

  // Metodo per registrare la funzione di callback quando il valore cambia
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Metodo per registrare la funzione di callback quando l'elemento viene toccato
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Metodo per impostare lo stato disabilitato del componente
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Metodo da chiamare quando l'utente modifica l'input (bindalo al template)
  onCheckboxChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.checked;
    this.onChange(this.value);
    this.onTouched();
  }
}

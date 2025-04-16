import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface MLPSNotifica{
  id?: any,
  titolo: string,
  contenuto: string,
  data: string,
  isLetto: boolean
}

@Component({
  selector: 'mlps-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mlps-notification.component.html',
  styleUrl: './mlps-notification.component.scss'
})
export class MLPSNotificationComponent {
  @Input() listaNotifiche!: MLPSNotifica[];
  @Output() notifica: EventEmitter<MLPSNotifica> = new EventEmitter<MLPSNotifica>;
  @Output() segnaNotificheLette: EventEmitter<any> = new EventEmitter<any>
  // gestioneLetturaNotifiche: boolean = true;

  get gestioneLetturaNotifiche(): boolean{
    return this.listaNotifiche.some(notifica => !notifica.isLetto)
  }

  segnaTutteNotificheLette() {
    this.segnaNotificheLette.emit({segnaTutteComeLette: true})
    }

    clickNotifica(notifica: any) {
      this.notifica.emit(notifica)
    }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mlps-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mlps-notification.component.html',
  styleUrl: './mlps-notification.component.scss'
})
export class MLPSNotificationComponent {
  condition: boolean = true
  @Input() listaNotifiche!: any[];
  gestioneLetturaNotifiche: boolean = true;

  segnaTutteNotificheLette() {
    }

    testoNotificheToggle(idNotifica: number, idUtente:number, titoloNotifica: string, testo: string, isLetto: boolean) {
    }
}

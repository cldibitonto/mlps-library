import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface MLPSNotifica {
  /** Identificativo univoco della notifica (opzionale) */
  id?: any;
  /** Titolo della notifica */
  titolo: string;
  /** Testo o contenuto della notifica */
  contenuto: string;
  /** Data di creazione o invio (es. ISO string) */
  data: string;
  /** Indica se la notifica è già stata letta */
  isLetto: boolean;
}

@Component({
  selector: 'mlps-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mlps-notification.component.html',
  styleUrl: './mlps-notification.component.scss'
})
export class MLPSNotificationComponent {
  /**
   * Lista delle notifiche da visualizzare.
   */
  @Input() listaNotifiche!: MLPSNotifica[];

  /**
   * Emesso quando l’utente clicca su una notifica.
   * @event notifica
   * @type MLPSNotifica
   */
  @Output() notifica: EventEmitter<MLPSNotifica> = new EventEmitter<MLPSNotifica>();

  /**
   * Emesso per segnare tutte le notifiche come lette.
   * @event segnaNotificheLette
   * @type boolean
   */
  @Output() segnaNotificheLette: EventEmitter<{segnaTutteComeLette: boolean}> = new EventEmitter<{segnaTutteComeLette: boolean}>();

  /**
   * Indica se ci sono notifiche non lette nella lista.
   * @returns `true` se esiste almeno una notifica con `isLetto === false`
   */
  get gestioneLetturaNotifiche(): boolean {
    return this.listaNotifiche.some(notifica => !notifica.isLetto);
  }

  /**
   * Segna tutte le notifiche come lette.
   * Emette l’evento `segnaNotificheLette` con payload `{ segnaTutteComeLette: true }`.
   */
  segnaTutteNotificheLette(): void {
    this.segnaNotificheLette.emit({ segnaTutteComeLette: true });
  }

  /**
   * Gestisce il click su una singola notifica.
   * Emette l’evento `notifica` con la notifica cliccata.
   * @param notifica L’oggetto notifica su cui si è cliccato
   */
  clickNotifica(notifica: MLPSNotifica): void {
    this.notifica.emit(notifica);
  }
}

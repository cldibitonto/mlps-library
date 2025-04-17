import { Injectable, signal, WritableSignal } from '@angular/core';
import { MLPSInfoModalComponent } from './mlps-info-modal.component';

/**
 * Servizio singleton per gestire un'istanza di MLPSInfoModalComponent.
 * Permette di registrare il componente modal e di esporre sia un accesso diretto
 * sia un segnale reattivo per integrarsi con la nuova API Signals di Angular.
 */
@Injectable({
  providedIn: 'root'
})
export class MLPSInfoModalService {
  /** Riferimento diretto all'istanza del componente modal registrata */
  private modalComponent!: MLPSInfoModalComponent;

  /**
   * Segnale reattivo che emette l'istanza del componente modal non appena viene registrato.
   * Utile per binding reattivi nel template o in altri servizi.
   */
  private readonly modalComponentSignal: WritableSignal<MLPSInfoModalComponent | undefined> = signal<MLPSInfoModalComponent | undefined>(undefined);

  /**
   * Registra l'istanza del componente modal nel servizio.
   * @param modal - Istanza di MLPSInfoModalComponent da memorizzare
   */
  setModalComponent(modal: MLPSInfoModalComponent): void {
    this.modalComponent = modal;
    this.modalComponentSignal.set(modal);
  }

  /**
   * Restituisce l'istanza registrata del componente modal.
   * @returns L'istanza di MLPSInfoModalComponent precedentemente registrata
   */
  getModalComponent(): MLPSInfoModalComponent {
    return this.modalComponent;
  }

  /**
   * Fornisce il valore corrente del segnale reattivo per il componente modal.
   * Permette di sottoscriversi in template o in codice per ricevere aggiornamenti.
   * @returns L'ultima istanza di MLPSInfoModalComponent emessa dal segnale (o undefined)
   */
  getModalComponentSignal(): MLPSInfoModalComponent | undefined {
    return this.modalComponentSignal();
  }
}

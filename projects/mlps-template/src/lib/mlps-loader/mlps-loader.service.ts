import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servizio per gestire lo stato di caricamento globale basato sul conteggio delle richieste HTTP in corso.
 * Espone un Observable `isLoading` che emette `true` se ci sono richieste in corso, `false` altrimenti.
 */
@Injectable({
  providedIn: 'root'
})
export class MLPSLoaderService {
  /**
   * Subject che emette lo stato di caricamento:
   * - `true` se almeno una richiesta è in corso
   * - `false` quando non ci sono richieste
   */
  public isLoading = new BehaviorSubject<boolean>(false);

  /** Array interno per tracciare le richieste HTTP attive */
  private readonly requests: HttpRequest<any>[] = [];

  /**
   * Rimuove una richiesta dal tracker e aggiorna lo stato di `isLoading`.
   * @param req - L'istanza di HttpRequest da rimuovere
   */
  removeRequest(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index >= 0) {
      this.requests.splice(index, 1);
    }
    // Se non ci sono più richieste, emetti false
    this.isLoading.next(this.requests.length > 0);
  }

  /**
   * Aggiunge una nuova richiesta al tracker e imposta `isLoading` su `true`.
   * @param req - L'istanza di HttpRequest da aggiungere
   */
  addRequest(req: HttpRequest<any>): void {
    this.requests.push(req);
    // Emit loading state true appena viene aggiunta la richiesta
    this.isLoading.next(true);
  }
}

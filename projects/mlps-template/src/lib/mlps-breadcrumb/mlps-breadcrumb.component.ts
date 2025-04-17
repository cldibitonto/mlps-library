import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, EventType, RouterLink } from '@angular/router';

/**
 * Componente per la visualizzazione del breadcrumb di navigazione.
 * Si aggiorna automaticamente in base agli eventi di navigazione di Angular Router.
 */
@Component({
  selector: 'mlps-breadcrumb',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './mlps-breadcrumb.component.html',
  styleUrl: './mlps-breadcrumb.component.scss'
})
export class MLPSBreadcrumbComponent {
  /** Array di voci breadcrumb ottenute dai dati di route */
  breadcrumbItems: any[] = [];

  /** Testo da mostrare per la voce che rappresenta la homepage */
  @Input() homepageName: string = 'Homepage';

  /** URL di destinazione per il click sulla voce homepage */
  @Input() homeUrl: string = '';

  /**
   * Sottoscrive gli eventi di navigazione per aggiornare le voci breadcrumb
   * ogni volta che la navigazione termina.
   *
   * @param router - Istanza di Angular Router per monitorare gli eventi di navigazione
   * @param route - ActivatedRoute per accedere ai dati della route figlia corrente
   */
  constructor(
    public router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.router.events.subscribe({
      next: (e) => {
        if (e.type === EventType.NavigationEnd) {
          // Se la route figlia corrente definisce breadcrumbItems nei suoi data…
          if (this.route.firstChild?.snapshot.data['breadcrumbItems']) {
            this.breadcrumbItems = [
              ...this.route.firstChild.snapshot.data['breadcrumbItems'],
            ];
          } else {
            // …altrimenti resetta a vuoto
            this.breadcrumbItems = [];
          }
        }
      },
    });
  }

  /**
   * Naviga alla homepage aprendo la URL specificata nell’input `homeUrl`.
   * Viene aperto nello stesso tab.
   */
  navigateToHome(): void {
    window.open(this.homeUrl, '_self');
  }
}

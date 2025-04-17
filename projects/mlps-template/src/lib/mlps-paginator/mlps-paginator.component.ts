import { Component, Input, OnInit } from '@angular/core';
import { ItPaginationComponent } from 'design-angular-kit';
import { Table } from 'primeng/table';


@Component({
  selector: 'mlps-paginator',
  standalone: true,
  imports: [ItPaginationComponent],
  templateUrl: './mlps-paginator.component.html',
  styleUrl: './mlps-paginator.component.scss'
})
export class MLPSPaginatorComponent implements OnInit {
  /**
   * Riferimento alla tabella PrimeNG da paginare.
   * @remarks
   * Deve essere una istanza di un componente <p-table> fornito come Input.
   */
  @Input() myTable!: Table;

  /**
   * Lunghezza totale dei dati da paginare (numero di elementi).
   */
  @Input() dataLength!: number;

  /**
   * Numero di righe per pagina iniziale.
   * @default 10
   */
  @Input() rows: number = 10;

  /**
   * Valore selezionato per il menu a tendina del cambio righe.
   * Può assumere uno dei valori: 2, 5, 10, 15, 20 oppure undefined.
   */
  @Input() changerValue: 2 | 5 | 10 | 15 | 20 | undefined = undefined;

  /** Numero totale di pagine calcolato da dataLength / rows */
  numberOfPages!: number;

  /** Indice della pagina corrente (0-based) */
  currentPage = 0;

  /** Possibili valori per il menu di selezione righe per pagina */
  changerValues: number[] = [2, 5, 10, 15, 20];

  /**
   * Inizializza il componente:
   * - calcola il numero di pagine totali
   * - imposta il numero di righe iniziali sulla tabella
   */
  ngOnInit(): void {
    this.calcRows();
    this.myTable.rows = this.rows;
  }

  /**
   * Gestisce il cambio di pagina.
   * @param pageNumber - Numero della pagina selezionata (0-based)
   */
  pageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    if (this.myTable) {
      // Aggiorna l'indice del primo elemento da mostrare
      this.myTable.first = pageNumber * this.myTable.rows!;
    }
  }

  /**
   * Gestisce l'evento di cambio righe per pagina.
   * Aggiorna le righe, il menu di selezione e ricalcola pagine e indice corrente.
   * @param value - Nuovo valore di righe per pagina scelto dall'utente
   */
  changerEvent(value: number): void {
    this.rows = value;
    this.myTable.rows = value;
    this.changerValue = value as 2 | 5 | 10 | 15 | 20 | undefined;
    this.calcRows();
    this.calcPage();
  }

  /**
   * Ricalcola la pagina corrente in base agli indici first e rows della tabella.
   */
  calcPage(): void {
    const first = this.myTable.first!;
    const rows = this.myTable.rows!;
    // pagina 1-based
    const pageOneBased = Math.floor(first / rows) + 1;
    this.currentPage = pageOneBased - 1; // converti in 0-based
    this.myTable.first = (pageOneBased - 1) * rows;
  }

  /**
   * Calcola il numero totale di pagine disponibili.
   */
  calcRows(): void {
    this.numberOfPages = Math.ceil(this.dataLength / this.rows);
  }
}

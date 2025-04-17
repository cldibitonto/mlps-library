import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';

/**
 * Definisce le proprietà di ciascuna tab nel wizard.
 */
export interface TabItem {
  /** Nome visualizzato della tab */
  name: string;
  /** Componente Angular da renderizzare quando la tab è selezionata */
  component: Type<any>;
  /** Se true, mostra un’icona di successo sulla tab */
  success?: boolean;
  /** Se true, disabilita la tab */
  disabled?: boolean;
  /** Se true, mostra un badge di spunta sulla tab */
  showCheck?: boolean;
  /** Se true, mostra un badge di avviso sulla tab */
  showWarning?: boolean;
}

@Component({
  selector: 'mlps-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mlps-wizard.component.html',
  styleUrl: './mlps-wizard.component.scss'
})
export class MLPSWizardComponent {
  /**
   * Indice della tab attualmente selezionata (0-based).
   * @default 0
   */
  @Input() selectedTab: number = 0;

  /**
   * Emesso quando l’utente cambia tab.
   * @event changeTab
   * @type number - Nuovo indice della tab selezionata
   */
  @Output() changeTab: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Lista di tab da mostrare nel wizard.
   * Ogni tab è definita da un oggetto TabItem.
   */
  @Input() tabsList: TabItem[] = [];

  /** Stato di condizione per mostrare un’icona di check globale (opzionale) */
  conditionCheck: boolean = false;

  /** Stato di condizione per mostrare un’icona di warning globale (opzionale) */
  conditionWarning: boolean = false;

  /**
   * Cambia la tab corrente e emette l’evento `changeTab`.
   * @param index - Indice della tab selezionata (0-based)
   */
  onChangeTab(index: number): void {
    this.selectedTab = index;
    this.changeTab.emit(this.selectedTab);
  }
}

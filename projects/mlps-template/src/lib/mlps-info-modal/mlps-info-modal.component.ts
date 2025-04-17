import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItModalComponent } from 'design-angular-kit';
import { MLPSInfoModalService } from './mlps-info-modal.service';

/**
 * Opzioni per la configurazione del modal informativo.
 */
export interface ModalOptions {
  /** Dimensione del modal: "sm", "lg" o "xl" */
  size: "sm" | "lg" | "xl" | undefined;
  /** Tipo di avviso (successo o avvertimento) */
  type?: 'success' | 'warning';
  /** Titolo del modal */
  title?: string;
  /** Testo principale del modal */
  text?: string;
  /** Testo aggiuntivo in un paragrafo */
  paragraphText?: string;
  /** Mostra il pulsante "Riprendi" */
  showResumeButton?: boolean;
  /** Mostra il pulsante "Abbandona" */
  showLeaveButton?: boolean;
  /** Testo del pulsante "Abbandona" */
  leaveButtonText?: string;
  /** Testo del pulsante "Riprendi" */
  resumeButtonText?: string;
  //** Mostra testo aggiuntivo */
  showExtraText?: boolean;
  /** Mostra un pulsante generico di chiusura */
  showButton?: boolean;
  /** Permette di chiudere il modal premendo Esc */
  keyboardClose?: boolean;
  /** Callback al click su "Abbandona" */
  onLeaveButton?: () => void;
  /** Callback al click su "Riprendi" */
  onResumeButton?: () => void;
}

@Component({
  selector: 'mlps-info-modal',
  standalone: true,
  imports: [ItModalComponent],
  templateUrl: './mlps-info-modal.component.html',
  styleUrl: './mlps-info-modal.component.scss'
})
export class MLPSInfoModalComponent {
  /** Dimensione corrente del modal */
  size: "sm" | "lg" | "xl" | undefined;

  /** Titolo del modal */
  title?: string;

  /** Testo aggiuntivo in paragrafo */
  paragraphText?: string;

  /** Contenuto principale del modal */
  text: string = '';

  /** Flag per abilitare la chiusura con ESC */
  keyboardClose: boolean = false;

  /** Mostra il pulsante generico di chiusura */
  @Input() showButton: boolean = false;

  /** Posizionamento del modal: center, left o right */
  @Input() position: 'centered' | 'left' | 'right' | undefined = 'centered';

  /** Tipo di avviso: successo o warning */
  type: 'success' | 'warning' = 'warning';

  /** Testo del pulsante "Abbandona" */
  leaveButtonText: string = 'abbandona';

  /** Testo del pulsante "Riprendi" */
  resumeButtonText: string = 'riprendi';

  /** Mostra il pulsante "Riprendi" */
  showResumeButton: boolean = true;

  /** Mostra il pulsante "Abbandona" */
  showLeaveButton: boolean = true;

  /** Mostra testo aggiuntivo se true */
  showAdditionalText: boolean = true;

  /** Riferimento al componente modal interno */
  @ViewChild('lgModal', { static: false })
  lgModal!: ItModalComponent;

  /** Evento emesso quando si clicca su "Riprendi" */
  @Output() resumeButton: EventEmitter<void> = new EventEmitter<void>();

  /** Evento emesso quando si clicca su "Abbandona" */
  @Output() leaveButton: EventEmitter<void> = new EventEmitter<void>();

  /** Evento emesso quando si clicca su un link interno del modal */
  @Output() linkPressed: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Inietta ChangeDetectorRef e registra questa istanza nel servizio MLPSInfoModalService.
   * @param cdref - Rilevatore di cambiamenti per forzare il refresh
   * @param infoModalService - Servizio per controllare il modal dall'esterno
   */
  constructor(
    private readonly cdref: ChangeDetectorRef,
    private readonly infoModalService: MLPSInfoModalService
  ) {
    this.infoModalService.setModalComponent(this);
  }

  /** Lifecycle hook per l'inizializzazione (non usa logica aggiuntiva). */
  ngOnInit(): void {
    // Intenzionalmente vuoto
  }

  /**  
   * AfterContentChecked viene usato per forzare il rilevamento dei cambiamenti  
   * dopo che il contenuto del modal è stato aggiornato.  
   */
  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  /**
   * Apre o chiude il modal con le opzioni specificate.
   * Se vengono passate opzioni, aggiorna le proprietà del componente.
   * @param options - Oggetto ModalOptions con le configurazioni desiderate
   */
  public toggle(options?: ModalOptions): void {
    if (options) {
      this.keyboardClose = options.keyboardClose ?? this.keyboardClose;
      this.size = options.size;
      this.type = options.type ?? this.type;
      this.title = options.title;
      this.text = options.text ?? this.text;
      this.paragraphText = options.paragraphText;
      this.showResumeButton = options.showResumeButton ?? this.showResumeButton;
      this.showLeaveButton = options.showLeaveButton ?? this.showLeaveButton;
      this.leaveButtonText = options.leaveButtonText ?? this.leaveButtonText;
      this.resumeButtonText = options.resumeButtonText ?? this.resumeButtonText;
      this.showAdditionalText = options.showExtraText ?? false
      this.showButton = options.showButton ?? this.showButton;

      // Se viene fornita una callback, la incapsuliamo e la emettiamo
      if (options.onLeaveButton) {
        this.leaveButtonPressed = () => {
          options.onLeaveButton!();
          this.leaveButton.emit();
        };
      }
      if (options.onResumeButton) {
        this.resumeButtonPressed = () => {
          options.onResumeButton!();
          this.resumeButton.emit();
        };
      }
    }

    // Apre o chiude il modal
    this.lgModal.toggle();
  }

  /**
   * Handler invocato quando si clicca sul pulsante "Abbandona".
   * Emette l'evento leaveButton.
   */
  leaveButtonPressed(): void {
    this.leaveButton.emit();
  }

  /**
   * Handler invocato quando si clicca sul pulsante "Riprendi".
   * Emette l'evento resumeButton.
   */
  resumeButtonPressed(): void {
    this.resumeButton.emit();
  }

  /**
   * Emette l'evento linkPressed con il parametro ricevuto.
   * @param event - Dati grezzi dell'evento click sul link
   */
  onLinkPressed(event: any): void {
    this.linkPressed.emit(event);
  }
}

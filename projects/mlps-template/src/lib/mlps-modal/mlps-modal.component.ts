import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItModalComponent } from 'design-angular-kit';
import { MLPSInfoModalService } from './mlps-modal.service';

export interface ModalOptions {
  size: "sm" | "lg" | "xl" | undefined;
  type?: 'success' | 'warning'; // Tipo di avviso (successo o avvertimento)
  title?: string; // Titolo dell'avviso
  leaveButtonText?: string; // Testo per il pulsante "Abbandona"
  resumeButtonText?: string; // Testo per il pulsante "Riprendi"
  text?: string; // Testo principale dell'avviso
  paragraphText?: string; // Testo aggiuntivo per il paragrafo
  showResumeButton?: boolean; // Mostra il pulsante "Riprendi"
  showLeaveButton?: boolean; // Mostra il pulsante "Abbandona"
  showExtraText?: boolean; // Mostra testo aggiuntivo
  showButton?: boolean; // Mostra un generico pulsante
  onLeaveButton?: () => void; // Funzione callback per il pulsante "Abbandona"
  onResumeButton?: () => void; // Funzione callback per il pulsante "Riprendi"
}

@Component({
  selector: 'mlps-info-modal',
  standalone: true,
  imports: [ItModalComponent],
  templateUrl: './mlps-modal.component.html',
  styleUrl: './mlps-modal.component.scss'
})
export class MLPSInfoModalComponent {
  size: "sm" | "lg" | "xl" | undefined;
  title?: string;
  paragraphText?: string
  showResumeButton: boolean = true
  showLeaveButton: boolean = true
  leaveButtonText: string ='abbandona'
  resumeButtonText: string ='riprendi'
  text: string = '';
  idIstanza: number = 12345678;
  idPratica: number = 12345678;
  @Input() showButton: boolean = false
  @Input() position: 'centered' | 'left' | 'right' | undefined = 'centered';
  showAdditionalText: boolean = true;
  type: 'success' | 'warning' = 'warning'
  @Output() resumeButton: EventEmitter<any> = new EventEmitter;
  @Output() leaveButton: EventEmitter<any> = new EventEmitter;
  @ViewChild('lgModal', { static: false }) lgModal!: ItModalComponent;
  @Output() linkPressed: EventEmitter<any> = new EventEmitter;


  constructor(private readonly cdref: ChangeDetectorRef, private readonly infoModalService: MLPSInfoModalService) { 
    this.infoModalService.setModalComponent(this)
  }

  ngOnInit() {

    return
  }
  ngAfterContentChecked(): void {
    this.cdref.detectChanges()
  }
  public toggle(options?: ModalOptions) {
    if (options) {
      this.size = options.size
      this.type = options.type ? options.type : this.type
      this.title = options.title ? options.title : undefined
      this.text = options.text ? options.text : this.text
      this.paragraphText = options.paragraphText ? options.paragraphText : undefined
      this.showResumeButton = options.showResumeButton ?? this.showResumeButton
      this.showLeaveButton = options.showLeaveButton ?? this.showLeaveButton
      this.leaveButtonText = options.leaveButtonText ? options.leaveButtonText : this.leaveButtonText
      this.resumeButtonText = options.resumeButtonText ? options.resumeButtonText : this.resumeButtonText
      this.showAdditionalText = options.showExtraText ?? false
      this.showButton = options.showButton ?? false
      // Imposta le funzioni da collegare all'evento leave e resume
      if (options.onLeaveButton) {
        this.leaveButtonPressed = () => {
          options.onLeaveButton!(); // Chiama la funzione passata
          this.leaveButton.emit(); // Emetti comunque l'evento
        };
      }
      if (options.onResumeButton) {
        this.resumeButtonPressed = () => {
          options.onResumeButton!(); // Chiama la funzione passata
          this.resumeButton.emit(); // Emetti comunque l'evento
        };
      }
    }
    this.lgModal.toggle()
  }

  leaveButtonPressed() {
    this.leaveButton.emit()
  }

  resumeButtonPressed() {
    this.resumeButton.emit()
  }

  onLinkPressed(event: any) {
    this.linkPressed.emit(event)
  }
}

import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MLPSInfoModalService } from '../mlps-info-modal/mlps-info-modal.service';
import { MLPSInfoModalComponent } from '../mlps-info-modal/mlps-info-modal.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { downloadFromBase64, convertToBase64 } from '../../utils/functions/functions';

/**
 * Corpo della richiesta di upload di un file.
 */
export interface MLPSUploadBody {
  /** Identificativo facoltativo dell’entità server */
  id?: number;
  /** Nome originale del file */
  nomeFile: string;
  /** Estensione MIME del file */
  estensione: string;
  /** Contenuto codificato in Base64 */
  contenutoBase64: string;
  /** Dimensione del file in byte (come stringa) */
  size?: string;
  /** Identificativo di dominio applicativo (opzionale) */
  idIstanzaDomanda?: number;
}

/**
 * Componente per gestire l’upload di file PDF con anteprima,
 * drag & drop e conferma di cancellazione via modal.
 */
@Component({
  selector: 'mlps-upload',
  standalone: true,
  imports: [FileUploadModule, CommonModule],
  templateUrl: './mlps-upload.component.html',
  styleUrl: './mlps-upload.component.scss'
})
export class MLPSUploadComponent {
  private readonly cdr = inject(ChangeDetectorRef);

  /** File già caricati all’avvio (preloaded) */
  @Input() preloadedFiles: MLPSUploadBody[] = [];

  /** Numero massimo di file consentito */
  @Input() fileLimit!: number;

  /**
   * Evento emesso dopo il caricamento di uno o più file.
   * Se `isMultiUpload` è false, emette un singolo oggetto MLPSUploadBody,
   * altrimenti un array di MLPSUploadBody.
   */
  @Output() filesUploaded = new EventEmitter<MLPSUploadBody | MLPSUploadBody[]>();

  /** Evento emesso quando un file viene rimosso */
  @Output() filesDeleted = new EventEmitter<MLPSUploadBody>();

  /** Se true, mostra un messaggio quando si supera il limite di file */
  @Input() showIfExeedsLimit: boolean = false;

  /** Abilita upload multiplo se true */
  @Input() isMultiUpload: boolean = false;

  /** Mostra o nasconde il titolo del componente */
  @Input() showTitle: boolean = true;

  /** Mostra o nasconde il pulsante di cancellazione */
  @Input() showButtonDelete: boolean = true;

  /** URL dei file selezionati per download/anteprima */
  fileUrls: string[] = [];

  /** Identificativo univoco generato per questo componente */
  private readonly _id: number = Math.floor(Math.random() * 50) + 1;

  /** File selezionati in questa sessione */
  selectedFiles: MLPSUploadBody[] = [];

  /** Consente selezione multipla se true */
  allowMultiple: boolean = true;

  /** Stato del drag & drop */
  isDragging = false;

  /** Riferimento al componente modal per conferme */
  modal!: MLPSInfoModalComponent;

  constructor(private readonly modalService: MLPSInfoModalService) {}

  /** Ritorna l’identificativo univoco del componente */
  get id(): number {
    return this._id;
  }

  /**
   * Lifecycle hook: registra il modal e carica eventuali file pre-esistenti.
   * Verifica anche il valore di fileLimit.
   * @throws Error se fileLimit < 1
   */
  ngOnInit(): void {
    this.modal = this.modalService.getModalComponent();

    if (this.preloadedFiles.length > 0) {
      this.preloadedFiles.forEach(file => this.selectedFiles.push(file));
    }
    if (this.fileLimit < 1) {
      this.fileLimit = 1;
      throw new Error('File Limit must be greater than 0');
    }
  }

  /**
   * Gestisce la selezione da input type="file".
   * @param event - Evento di selezione file
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.aggiungiFileAsync(Array.from(input.files)).then(values => {
        this.selectedFiles = this.selectedFiles.concat(values);
        if (values.length > 0) {
          if (this.isMultiUpload) {
            this.filesUploaded.emit(values);
          } else {
            this.filesUploaded.emit(values[0]);
          }
        }
      });
    }
  }

  /**
   * Gestisce l’evento dragover per il drop file.
   * @param event - Evento di dragover
   */
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  /**
   * Gestisce l’evento dragleave per annullare lo stato dragging.
   * @param event - Evento di dragleave
   */
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  /**
   * Gestisce il drop dei file tramite drag & drop.
   * @param event - Evento di drop
   */
  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files) {
      this.aggiungiFileAsync(Array.from(files)).then(values => {
        this.selectedFiles = this.selectedFiles.concat(values);
        if (values.length > 0) {
          if (this.isMultiUpload) {
            this.filesUploaded.emit(values);
          } else {
            this.filesUploaded.emit(values[0]);
          }
        }
      });
      this.cdr.detectChanges();
    }
  }

  /**
   * Rimuove un file selezionato dopo conferma via modal.
   * @param file - File da rimuovere
   */
  removeFile(file: MLPSUploadBody): void {
    this.modal.toggle({
      text: 'Sei sicuro di voler eliminare il documento caricato?',
      type: 'warning',
      leaveButtonText: 'NO',
      resumeButtonText: 'SI',
      showResumeButton: true,
      showLeaveButton: true,
      showButton: true,
      onLeaveButton: () => {
        this.modal.toggle();
      },
      onResumeButton: () => {
        this.filesDeleted.emit(file);
        this.modal.toggle();
      },
      size: 'lg'
    });
  }

  /**
   * Valida un file in base a tipo, dimensione e limite di upload.
   * @param file - File da validare
   * @returns true se il file è valido, false altrimenti
   */
  validateFile(file: File): boolean {
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    if (file.type !== 'application/pdf') {
      alert('Il file deve essere un PDF.');
      return false;
    }
    if (file.size > maxFileSize) {
      alert('Il file deve essere inferiore a 5MB.');
      return false;
    }
    if (this.fileLimit === 0) {
      return false;
    }
    return true;
  }

  /**
   * Converte una stringa Base64 in un oggetto File PDF.
   * @param base64 - Contenuto Base64 del file
   * @param fileName - Nome da assegnare al file di output
   * @param extension - Estensione del file (es. 'pdf')
   * @returns Instanza di File contenente i dati PDF
   */
  convertBase64ToPDF(
    base64: string,
    fileName: string,
    extension: string
  ): File {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    return new File([blob], `${fileName}.${extension}`, {
      type: 'application/pdf'
    });
  }

  /**
   * Scarica un file già caricato usando la funzione di utilità.
   * @param file - Dati del file da scaricare
   */
  downloadFile(file: MLPSUploadBody): void {
    downloadFromBase64(
      file.contenutoBase64,
      'application/' + file.estensione,
      file.nomeFile
    );
  }

  /**
   * Aggiunge file selezionati in modalità asincrona:
   * - filtra i file non validi
   * - converte i restanti in Base64
   * @param files - Array di File da elaborare
   * @returns Promise che risolve con un array di MLPSUploadBody
   */
  async aggiungiFileAsync(files: File[]): Promise<MLPSUploadBody[]> {
    const validFiles = files.filter(file => this.validateFile(file));
    const promises = validFiles.map(file =>
      convertToBase64(file).then((stringBase64: any) => ({
        contenutoBase64: stringBase64,
        estensione: file.type,
        nomeFile: file.name,
        size: file.size.toString()
      }))
    );
    const attacheds = await Promise.all(promises);
    return attacheds;
  }
}

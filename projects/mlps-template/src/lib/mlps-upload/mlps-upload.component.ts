import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MLPSInfoModalService } from '../mlps-info-modal/mlps-info-modal.service';
import { MLPSInfoModalComponent } from '../mlps-info-modal/mlps-info-modal.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { downloadFromBase64, convertToBase64 } from '../../utils/functions/functions';

export interface MLPSUploadBody {
  id?: number,
  nomeFile: string,
  estensione: string,
  contenutoBase64: string,
  size?: string,
  idIstanzaDomanda?: number
}
@Component({
  selector: 'mlps-upload',
  standalone: true,
  imports: [FileUploadModule, CommonModule],
  templateUrl: './mlps-upload.component.html',
  styleUrl: './mlps-upload.component.scss'
})
export class MLPSUploadComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  @Input() preloadedFiles: MLPSUploadBody[] = [];
  @Input() fileLimit!: number;
  @Output() filesUploaded = new EventEmitter<any>();
  @Output() filesDeleted = new EventEmitter<any>();
  @Input() showIfExeedsLimit: boolean = false;
  @Input() isMultiUpload: boolean = false;
  @Input() showTitle: boolean = true;
  @Input() showButtonDelete: boolean = true;
  fileUrls: string[] = [];
  private readonly _id: number = (Math.floor(Math.random() * (50 - 1 + 1)) + 1)
  selectedFiles: MLPSUploadBody[] = [];
  allowMultiple: boolean = true;
  isDragging = false;

  modal!: MLPSInfoModalComponent;

  constructor(private readonly modalService: MLPSInfoModalService) { }

  get id(): number {
    return this._id;
  }

  ngOnInit(): void {
    this.modal = this.modalService.getModalComponent();

    if (this.preloadedFiles && this.preloadedFiles.length > 0) {
      this.preloadedFiles.forEach((file) => {
        this.selectedFiles.push(file);
      });
    }
    if (this.fileLimit < 0) {
      this.fileLimit = 1;
      throw new Error('File Limit must be greater than 0');
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      this.aggiungiFileAsync(Array.from(input.files)).then(
        (values: MLPSUploadBody[]) => {
          this.selectedFiles = this.selectedFiles.concat(values);
          if(values.length > 0){
            if (this.isMultiUpload) {
                this.filesUploaded.emit(values);
            } else {
                this.filesUploaded.emit(values[0]);
            }
          }
        }
      );
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files) {
      this.aggiungiFileAsync(Array.from(files)).then(
        (values: MLPSUploadBody[]) => {
          this.selectedFiles = this.selectedFiles.concat(values);
          if(values.length > 0){
            if (this.isMultiUpload) {
             this.filesUploaded.emit(values);
            } else {
             this.filesUploaded.emit(values[0]);
            }
          }
        }
      );
      this.cdr.detectChanges();
    }
  }

  removeFile(file: MLPSUploadBody) {
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
      type: 'application/pdf',
    });
  }

  downloadFile(file: MLPSUploadBody) {
    downloadFromBase64(
      file.contenutoBase64,
      'application/' + file.estensione,
      file.nomeFile
    );
  }

  async aggiungiFileAsync(files: File[]): Promise<MLPSUploadBody[]> {
    const validFiles = files.filter((file) => this.validateFile(file));
    const promises = validFiles.map((file) =>
      convertToBase64(file).then((stringBase64: any) => {
        const attach: MLPSUploadBody = {
          contenutoBase64: stringBase64,
          estensione: file.type,
          nomeFile: file.name,
          size: file.size.toString(),
        };
        return attach;
      })
    );
    const attacheds = await Promise.all(promises);
    return attacheds;
  }
}

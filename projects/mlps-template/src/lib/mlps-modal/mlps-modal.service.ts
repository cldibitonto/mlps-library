import { Injectable, signal } from '@angular/core';
import { MLPSInfoModalComponent } from './mlps-modal.component';


@Injectable({
    providedIn: 'root'
})
export class MLPSModalService {
    private modalComponent!: MLPSInfoModalComponent;
    private readonly modalComponentSignal = signal<MLPSInfoModalComponent | undefined>(undefined);

    setModalComponent(modal: MLPSInfoModalComponent) {
        this.modalComponent = modal
        this.modalComponentSignal.set(modal);
    }

    getModalComponent(): MLPSInfoModalComponent {
        return this.modalComponent;
    }
    getModalComponentSignal() {
        return this.modalComponentSignal(); // Segnale reattivo per il componente
    }

}
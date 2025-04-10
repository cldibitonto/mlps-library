import { Injectable, signal } from '@angular/core';
import { MLPSModalComponent } from './mlps-modal.component';


@Injectable({
    providedIn: 'root'
})
export class MLPSModalService {
    private modalComponent!: MLPSModalComponent;
    private readonly modalComponentSignal = signal<MLPSModalComponent | undefined>(undefined);

    setModalComponent(modal: MLPSModalComponent) {
        this.modalComponent = modal
        this.modalComponentSignal.set(modal);
    }

    getModalComponent(): MLPSModalComponent {
        return this.modalComponent;
    }
    getModalComponentSignal() {
        return this.modalComponentSignal(); // Segnale reattivo per il componente
    }

}
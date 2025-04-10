import { Component, signal } from '@angular/core';
import { MLPSLoaderService } from './mlps-loader.service';

@Component({
  selector: 'mlps-loader',
  standalone: true,
  imports: [],
  templateUrl: './mlps-loader.component.html',
  styleUrl: './mlps-loader.component.scss'
})
export class MLPSLoaderComponent {
  loading= signal(false) ;
  constructor(private readonly loaderService: MLPSLoaderService) {

      this.loaderService.isLoading.subscribe((v) => {
        this.loading.set(v) ;
      });

  }
}

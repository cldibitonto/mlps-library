import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselBI } from 'bootstrap-italia';

/**
 * Interfaccia che descrive i dati di una singola card del carosello.
 */
export interface MenuCard {
  /** Identificativo opzionale del ruolo utente associato */
  idRuoloUtente?: number;
  /** Descrizione opzionale del ruolo utente */
  descrizioneRuoloUtente?: string;
  /** Percorso all’icona da visualizzare nella card */
  icona: string;
  /** Titolo della card */
  titolo: string;
  /** URL di destinazione quando si clicca sulla card */
  href: string;
  /** Testo descrittivo della card */
  testo: string;
  /** Indica se il link è esterno */
  isExternalLink?: boolean;
  /** Indica se la card è abilitata al click */
  isEnabled?: boolean;
}

/** Larghezza corrente della finestra, usata per comportamenti responsive */
let width = window.innerWidth;

@Component({
  selector: 'mlps-carousel',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './mlps-carousel.component.html',
  styleUrl: './mlps-carousel.component.scss'
})
export class MLPSCarouselComponent {
  /**
   * Setter per l’input `cards`.  
   * Salva localmente l’array di card e, se più di due, programma un aggiornamento del carosello.
   */
  @Input() set cards(value: MenuCard[]) {
    if (value) {
      this.menuCards = value;
      if (this.menuCards.length > 2) {
        // Attendi che il DOM sia pronto prima di aggiornare
        setTimeout(() => {
          this.updateCarousel();
        }, 300);
      }
    }
  }

  /** Array interno delle card da visualizzare */
  menuCards: MenuCard[] = [];

  /** Riferimento all’elemento DOM che conterrà il carosello */
  @ViewChild('carousel') private readonly carouselDiv!: ElementRef<HTMLDivElement>;

  /** Router per la navigazione interna */
  private readonly router = inject(Router);

  /** Istanza del carosello di Bootstrap Italia */
  private carousel!: CarouselBI;

  /** Opzioni personalizzate per il carosello (al momento vuote) */
  carouselOptions = {};

  /**
   * Naviga all’URL specificato se `canNavigate` è true.
   * @param url — destinazione della navigazione
   * @param canNavigate — flag che abilita/disabilita la navigazione
   */
  goTo(url: string, canNavigate?: boolean) {
    if (!canNavigate) {
      return;
    }
    this.router.navigateByUrl(url);
  }

  /**
   * Registra un listener sull’evento `resize` della finestra per
   * aggiornare le impostazioni responsive dello slider.
   */
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      setTimeout(() => {
        if (this.menuCards && this.menuCards.length > 2) {
          if (width <= 768) {
            this.carousel._splide.options.perMove = 1;
            this.carousel._splide.refresh();
          } else if (width <= 992) {
            // Nessuna modifica per schermi di dimensione media
            return;
          } else {
            this.carousel._splide.options.perMove = 2;
            this.carousel._splide.options.perPage = 2;
            this.carousel._splide.refresh();
          }
        }
      });
    });
  }

  /**
   * Dopo che la view è inizializzata, aggiorna immediatamente il carosello
   * se ci sono più di due card.
   */
  ngAfterViewInit(): void {
    if (this.menuCards.length > 2) {
      this.updateCarousel();
    }
  }

  /**
   * Inizializza o recupera l’istanza del carosello e applica un refresh.
   * Se la larghezza finestra supera 992px, imposta opzioni per mostrare due slide per volta.
   */
  updateCarousel() {
    this.carousel = CarouselBI.getOrCreateInstance(this.carouselDiv.nativeElement);
    this.carousel._splide.refresh();
    if (width > 992) {
      this.carousel._splide.options.perMove = 2;
      this.carousel._splide.options.perPage = 2;
      this.carousel._splide.refresh();
    }
  }
}

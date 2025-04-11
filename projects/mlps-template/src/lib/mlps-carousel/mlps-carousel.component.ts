import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselBI } from 'bootstrap-italia';

let width = window.innerWidth;

export interface MenuCard {
  idRuoloUtente?: number,
  descrizioneRuoloUtente?: string,
  icona: string;
  titolo: string;
  href: string;
  testo: string;
  isExternalLink?: boolean;
  isEnabled?: boolean;
}

@Component({
  selector: 'mlps-carousel',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './mlps-carousel.component.html',
  styleUrl: './mlps-carousel.component.scss'
})
export class MLPSCarouselComponent {
  @Input() set cards(value: MenuCard[]) {
    if (value) {
      this.menuCards = value;
      if (this.menuCards.length > 2) {
        setTimeout(() => {
          this.updateCarousel();
        }, 300);
      }
    }
  }

  menuCards: MenuCard[] = [];
  @ViewChild('carousel') private readonly carouselDiv!: ElementRef<HTMLDivElement>;

  private readonly router = inject(Router);

  private carousel!: CarouselBI;

  carouselOptions = {}

  goTo(url: string, canNavigate?: boolean) {
    if (canNavigate) {
      return
    }
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      width = window.innerWidth
      setTimeout(() => {
        if (this.menuCards && this.menuCards.length > 2) {
          if (width <= 768) {
            this.carousel._splide.options.perMove = 1
            this.carousel._splide.refresh();
          } else if (width <= 992) {
            return;
          } 
          else {
            this.carousel._splide.options.perMove = 2
            this.carousel._splide.options.perPage = 2
            this.carousel._splide.refresh();
          }
        }
      })
    });
  }

  ngAfterViewInit(): void {
    if (this.menuCards.length > 2)
      this.updateCarousel();
  }

  updateCarousel() {
    this.carousel = CarouselBI.getOrCreateInstance(this.carouselDiv.nativeElement);
    this.carousel._splide.refresh();
    if (width > 992) {
      this.carousel._splide.options.perMove = 2
      this.carousel._splide.options.perPage = 2
      this.carousel._splide.refresh()
    }
  }
}

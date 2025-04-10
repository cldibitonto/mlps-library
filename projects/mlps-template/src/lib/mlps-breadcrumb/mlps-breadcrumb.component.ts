import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, EventType, RouterLink } from '@angular/router';

@Component({
  selector: 'mlps-breadcrumb',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './mlps-breadcrumb.component.html',
  styleUrl: './mlps-breadcrumb.component.scss'
})
export class MLPSBreadcrumbComponent {
  breadcrumbItems: any[] = [];
  @Input() homepageName: string = 'Homepage'
  @Input() homeUrl: string = ''

  constructor(public router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.router.events.subscribe({
      next: (e) => {
        if (e.type === EventType.NavigationEnd) {
          if (
            this.route.firstChild?.snapshot.data['breadcrumbItems']
          ) {
            this.breadcrumbItems = [
              ...this.route.firstChild.snapshot.data['breadcrumbItems'],
            ];
          } else {
            this.breadcrumbItems = [];
          }
        }
      },
    });
  }

  navigateToHome(){
    window.open(this.homeUrl, '_self')
  }
}

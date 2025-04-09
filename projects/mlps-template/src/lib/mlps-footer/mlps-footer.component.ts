import { Component, Input } from '@angular/core';
import { SocialMediaItem } from '../mlps-header/mlps-header.component';


@Component({
  selector: 'mlps-footer',
  standalone: true,
  imports: [],
  templateUrl: './mlps-footer.component.html',
  styleUrl: './mlps-footer.component.scss'
})
export class MLPSFooterComponent {
  @Input() logoSrc: string = ''
  socialMediaItems: SocialMediaItem[] = [
    {
      icon: 'src/assets/img/f_facebook.png',
      label: 'Facebook',
      url: 'https://www.facebook.com/minlavoro',
    },
    {
      icon: 'src/assets/img/f_instagram.png',
      label: 'Instagram',
      url: 'https://www.instagram.com/cliclavoro/',
    },
    {
      icon: 'src/assets/img/f_x.png',
      label: 'X',
      url: 'https://x.com/cliclavoro',
    },
    {
      icon: 'src/assets/img/f_linkedin.png',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/groups/3640389/',
    },
    {
      icon: 'src/assets/img/f_youtube.png',
      label: 'Youtube',
      url: 'http://www.youtube.com/user/cliclavoro?feature=results_main;',
    },
    {
      icon: 'src/assets/img/f_rss.png',
      label: 'rss',
      url: 'https://www.cliclavoro.gov.it/Clicomunica/Pagine/Rss.aspx',
    },
  ];

  privacySocialMediaUrl: string =
    'https://www.cliclavoro.gov.it/pages/my_homepage/privacy_e_social_media_policy/';
  statisticheSitoUrl: string =
    'https://www.cliclavoro.gov.it/pages/my_homepage/statistiche_sito/';
}

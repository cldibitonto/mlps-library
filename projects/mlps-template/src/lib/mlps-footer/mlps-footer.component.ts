import { Component, Input } from '@angular/core';
import { SocialMediaItem } from '../mlps-header/mlps-header.component';

/**
 * Rappresenta una voce del footer con titolo e URL di destinazione.
 */
export interface FooterItem {
  /** Testo visualizzato per il link */
  title: string;
  /** Indirizzo a cui punta il link */
  url: string;
}

/** Alias per una lista di voci di footer */
export type FooterItems = FooterItem[];

/**
 * Componente per il footer dell’applicazione.
 * Visualizza un elenco di link personalizzati e collegamenti ai social media.
 */
@Component({
  selector: 'mlps-footer',
  standalone: true,
  imports: [],
  templateUrl: './mlps-footer.component.html',
  styleUrl: './mlps-footer.component.scss'
})
export class MLPSFooterComponent {
  /**
   * Voci di navigazione da mostrare nel footer.
   * @default []
   */
  @Input() footerItems: FooterItems = [];

  /**
   * Elenco di icone e URL dei profili social da visualizzare nel footer.
   */
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
      label: 'RSS',
      url: 'https://www.cliclavoro.gov.it/Clicomunica/Pagine/Rss.aspx',
    },
  ];

  /**
   * URL alla policy sulla privacy e social media.
   */
  privacySocialMediaUrl: string =
    'https://www.cliclavoro.gov.it/pages/my_homepage/privacy_e_social_media_policy/';

  /**
   * URL alle statistiche del sito.
   */
  statisticheSitoUrl: string =
    'https://www.cliclavoro.gov.it/pages/my_homepage/statistiche_sito/';
}

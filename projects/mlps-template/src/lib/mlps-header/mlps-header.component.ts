import { Component, Input } from '@angular/core';

export interface SocialMediaItem {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'mlps-header',
  standalone: true,
  imports: [],
  templateUrl: './mlps-header.component.html',
  styleUrl: './mlps-header.component.scss'
})
export class MLPSHeaderComponent {
  @Input() title: string = ''

  socialMediaItems: SocialMediaItem[] = [
    {
      icon: 'src/assets/img/h_email.png',
      label: 'header.contatti',
      url: 'https://www.urponline.lavoro.gov.it/s/crea-case',
    },
    {
      icon: 'src/assets/img/h_facebook.png',
      label: 'header.facebook',
      url: 'https://www.facebook.com/minlavoro',
    },
    {
      icon: 'src/assets/img/h_instagram.png',
      label: 'header.instagram',
      url: 'https://www.instagram.com/cliclavoro/',
    },
    {
      icon: 'src/assets/img/h_x.png',
      label: 'header.x',
      url: 'https://x.com/cliclavoro',
    },
    {
      icon: 'src/assets/img/h_linkedin.png',
      label: 'header.linkedin',
      url: 'https://www.linkedin.com/groups/3640389/',
    },
    {
      icon: 'src/assets/img/h_youtube.png',
      label: 'header.youtube',
      url: 'http://www.youtube.com/user/cliclavoro?feature=results_main;',
    },
    {
      icon: 'src/assets/img/h_rss.png',
      label: 'header.rss',
      url: 'https://www.cliclavoro.gov.it/Clicomunica/Pagine/Rss.aspx',
    },
  ];
  menuClicLavoroItems: any[] = [
    {
      active: false,
      children: [
        {
          active: false,
          children: null,
          description: 'Tematiche',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Tematiche',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/tematiche/',
        },
        {
          active: false,
          children: null,
          description: 'Tutele e Sostegno al reddito',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Tutele e Sostegno al reddito',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/tutele_e_sostegno_al_reddito',
        },
        {
          active: false,
          children: null,
          description: 'Sicurezza sul lavoro',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Sicurezza sul lavoro',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/sicurezza_sul_lavoro',
        },
        {
          active: false,
          children: null,
          description: 'Incentivi',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Incentivi',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/incentivi',
        },
        {
          active: false,
          children: null,
          description: 'Formazione',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Formazione',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/formazione',
        },
        {
          active: false,
          children: null,
          description: 'Stranieri in Italia',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Stranieri in Italia',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/stranieri_in_italia',
        },
        {
          active: false,
          children: null,
          description: "Lavorare all'estero",
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: "Lavorare all'estero",
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/lavorare_all_estero',
        },
        {
          active: false,
          children: null,
          description: 'Normativa',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Normativa',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/normativa',
        },
        {
          active: false,
          children: null,
          description: 'Tipologie di rapporti di lavoro',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Tipologie di rapporti di lavoro',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/tipo_di_rapporti_di_lavoro',
        },
        {
          active: false,
          children: null,
          description: 'Settori specifici',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Settori specifici',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/focus_on/settori_specifici',
        },
      ],
      description: 'Focus On',
      disabled: false,
      dropdown: true,
      iconPath: null,
      label: 'Focus On',
      megaMenu: false,
      routerLink: null,
    },
    {
      active: false,
      children: [
        {
          active: false,
          children: null,
          description: "Avviare un'impresa",
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: "Avviare un'impresa",
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/guide/avviare_un_impresa',
        },
        {
          active: false,
          children: null,
          description: 'Orientamento al lavoro',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Orientamento al lavoro',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/guide/orientamento_al_lavoro',
        },
        {
          active: false,
          children: null,
          description: 'Accedere ai finanziamenti',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Accedere ai finanziamenti',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/guide/accedere_ai_finanziamenti',
        },
        {
          active: false,
          children: null,
          description: 'Servizi Digitali con SPID',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Servizi Digitali con SPID',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/guide/servizi_digitali_con_spid',
        },
        {
          active: false,
          children: null,
          description: 'Come Fare Per',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Come Fare Per',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/guide/come_fare_per',
        },
      ],
      description: 'Guide',
      disabled: false,
      dropdown: true,
      iconPath: null,
      label: 'Guide',
      megaMenu: false,
      routerLink: null,
    },
    {
      active: false,
      children: [
        {
          active: false,
          children: null,
          description: 'Andamento Mercato del Lavoro',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Andamento Mercato del Lavoro',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/barometro_del_lavoro/andamento_mercato_del_lavoro',
        },
        {
          active: false,
          children: null,
          description: 'Calendario delle Pubblicazioni',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Calendario delle Pubblicazioni',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/barometro_del_lavoro/calendario_delle_pubblicazioni',
        },
      ],
      description: 'Barometro del lavoro',
      disabled: false,
      dropdown: true,
      iconPath: null,
      label: 'Barometro del lavoro',
      megaMenu: false,
      routerLink: null,
    },
    {
      active: false,
      children: null,
      description: 'Concorsi',
      disabled: false,
      dropdown: false,
      iconPath: null,
      label: 'Concorsi',
      megaMenu: false,
      routerLink: 'https://www.cliclavoro.gov.it/pages/my_homepage/concorsi',
    },
    {
      active: false,
      children: [
        {
          active: false,
          children: null,
          description: 'Blog',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Blog',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/news/blog',
        },
        {
          active: false,
          children: null,
          description: 'Newsletter',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Newsletter',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/news/newsletter/',
        },
        {
          active: false,
          children: null,
          description: 'Rassegna Stampa web',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Rassegna Stampa web',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/news/rassegna_stampa_web/',
        },
        {
          active: false,
          children: null,
          description: 'Sondaggi',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Sondaggi',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/news/sondaggi',
        },
        {
          active: false,
          children: null,
          description: 'News & Eventi',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'News & Eventi',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/news/news_eventi',
        },
        {
          active: false,
          children: null,
          description: 'Trend & Interviste',
          disabled: false,
          dropdown: false,
          iconPath: null,
          label: 'Trend & Interviste',
          megaMenu: false,
          routerLink:
            'https://www.cliclavoro.gov.it/pages/my_homepage/news/trend_interviste',
        },
      ],
      description: 'News',
      disabled: false,
      dropdown: true,
      iconPath: null,
      label: 'News',
      megaMenu: false,
      routerLink: null,
    },
  ];
}

import type { Locale } from './i18n';

export type ArticleImageKey = keyof typeof articleMedia;

type LocalizedText = Record<Locale, string>;

type ArticleMediaItem = {
  src: string;
  width: number;
  height: number;
  description: LocalizedText;
};

export const officialSteamGallery = 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/';

export const sourceLabels: LocalizedText = {
  en: 'Source: official Steam page',
  de: 'Quelle: offizielle Steam-Seite',
  'pt-br': 'Fonte: página oficial na Steam',
  es: 'Fuente: página oficial de Steam'
};

export const articleMedia = {
  promo: {
    src: '/images/official/carrion-city-promo.webp', width: 1170, height: 600,
    description: {
      en: 'Official Carrion City artwork for The Skin Stapler.',
      de: 'Offizielles Carrion-City-Motiv zu The Skin Stapler.',
      'pt-br': 'Arte oficial de Carrion City para The Skin Stapler.',
      es: 'Arte oficial de Carrion City para The Skin Stapler.'
    }
  },
  killer: {
    src: '/images/official/killer-closeup.webp', width: 1440, height: 810,
    description: {
      en: 'An in-game close-up of the Skin Stapler during a late-game encounter.',
      de: 'Eine Nahaufnahme des Skin Stapler bei einer späten Begegnung im Spiel.',
      'pt-br': 'Um close do Skin Stapler durante um encontro no fim do jogo.',
      es: 'Un primer plano del Skin Stapler durante un encuentro avanzado del juego.'
    }
  },
  interview: {
    src: '/images/official/detective-interview.webp', width: 1440, height: 810,
    description: {
      en: 'Dick Slater questions a character during the Carrion City investigation.',
      de: 'Dick Slater befragt während der Ermittlungen in Carrion City eine Figur.',
      'pt-br': 'Dick Slater interroga um personagem durante a investigação em Carrion City.',
      es: 'Dick Slater interroga a un personaje durante la investigación en Carrion City.'
    }
  },
  stage: {
    src: '/images/official/grindhouse-stage.webp', width: 1440, height: 810,
    description: {
      en: 'A neon-lit scene showing the game’s grindhouse horror style.',
      de: 'Eine neonbeleuchtete Szene im Grindhouse-Horrorstil des Spiels.',
      'pt-br': 'Uma cena iluminada por neon que mostra o estilo de horror grindhouse do jogo.',
      es: 'Una escena iluminada con neón que muestra el estilo de terror grindhouse del juego.'
    }
  },
  police: {
    src: '/images/official/police-station.webp', width: 1440, height: 810,
    description: {
      en: 'Dick Slater and Robbie Knox during the police-station investigation.',
      de: 'Dick Slater und Robbie Knox während der Ermittlungen auf dem Polizeirevier.',
      'pt-br': 'Dick Slater e Robbie Knox durante a investigação na delegacia.',
      es: 'Dick Slater y Robbie Knox durante la investigación en la comisaría.'
    }
  },
  chase: {
    src: '/images/official/storefront-chase.webp', width: 1440, height: 810,
    description: {
      en: 'A threatening workplace encounter from the official gameplay gallery.',
      de: 'Eine bedrohliche Begegnung am Arbeitsplatz aus der offiziellen Gameplay-Galerie.',
      'pt-br': 'Um encontro ameaçador no local de trabalho, retirado da galeria oficial.',
      es: 'Un encuentro amenazante en el lugar de trabajo, tomado de la galería oficial.'
    }
  },
  carAttack: {
    src: '/images/official/car-attack.webp', width: 1440, height: 810,
    description: {
      en: 'First-person action during one of Carrion City’s scripted danger sequences.',
      de: 'First-Person-Action während einer inszenierten Gefahrenszene in Carrion City.',
      'pt-br': 'Ação em primeira pessoa durante uma das sequências de perigo em Carrion City.',
      es: 'Acción en primera persona durante una de las secuencias de peligro de Carrion City.'
    }
  },
  bloodBank: {
    src: '/images/official/lazars-blood-bank.webp', width: 1440, height: 810,
    description: {
      en: 'The interior of Lazar’s Blood Bank in official gameplay.',
      de: 'Das Innere von Lazar’s Blood Bank im offiziellen Gameplay.',
      'pt-br': 'O interior do Lazar’s Blood Bank em uma cena oficial do jogo.',
      es: 'El interior de Lazar’s Blood Bank en una escena oficial del juego.'
    }
  },
  evidence: {
    src: '/images/official/evidence-camera.webp', width: 1440, height: 810,
    description: {
      en: 'The evidence-photography interface used during an investigation.',
      de: 'Die Fotofunktion zur Beweissicherung während einer Ermittlung.',
      'pt-br': 'A interface de fotografia de provas usada durante uma investigação.',
      es: 'La interfaz para fotografiar pruebas durante una investigación.'
    }
  },
  tape: {
    src: '/images/official/vhs-tape.webp', width: 1440, height: 810,
    description: {
      en: 'A VHS tape tied to the Skin Stapler investigation.',
      de: 'Eine VHS-Kassette, die mit den Ermittlungen zum Skin Stapler zusammenhängt.',
      'pt-br': 'Uma fita VHS ligada à investigação do Skin Stapler.',
      es: 'Una cinta VHS relacionada con la investigación del Skin Stapler.'
    }
  },
  videoStore: {
    src: '/images/official/vhs-objective.webp', width: 1440, height: 810,
    description: {
      en: 'An objective inside the game’s VHS-themed location.',
      de: 'Ein Ziel in einem VHS-Schauplatz des Spiels.',
      'pt-br': 'Um objetivo dentro do cenário do jogo inspirado em fitas VHS.',
      es: 'Un objetivo dentro del escenario del juego inspirado en cintas VHS.'
    }
  },
  customer: {
    src: '/images/official/quick-fix-customer.webp', width: 1440, height: 810,
    description: {
      en: 'A customer encounter shown in the official gameplay gallery.',
      de: 'Eine Kundenbegegnung aus der offiziellen Gameplay-Galerie.',
      'pt-br': 'Um encontro com um cliente mostrado na galeria oficial do jogo.',
      es: 'Un encuentro con un cliente mostrado en la galería oficial del juego.'
    }
  }
} satisfies Record<string, ArticleMediaItem>;

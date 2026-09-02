export type FactStatus = 'verified' | 'unconfirmed';

type GameFact<T> = {
  value: T;
  source: string;
  verifiedAt: string;
  status: FactStatus;
};

const steam = 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/';
const steamDemo = 'https://store.steampowered.com/app/4343530/The_Skin_Stapler_Demo/';
const gog = 'https://www.gog.com/en/game/the_skin_stapler';

export const gameFacts = {
  releaseDate: {
    value: '2026-08-06', source: steam, verifiedAt: '2026-08-13', status: 'verified'
  },
  demoReleaseDate: {
    value: '2026-01-30', source: steamDemo, verifiedAt: '2026-08-13', status: 'verified'
  },
  developer: {
    value: 'Tainted Pact', source: steam, verifiedAt: '2026-08-13', status: 'verified'
  },
  publisher: {
    value: 'Assemble Entertainment', source: steam, verifiedAt: '2026-08-13', status: 'verified'
  },
  platform: {
    value: 'Windows PC', source: steam, verifiedAt: '2026-08-13', status: 'verified'
  },
  stores: {
    value: ['Steam', 'GOG'] as const, source: gog, verifiedAt: '2026-08-13', status: 'verified'
  },
  mode: {
    value: 'Single-player', source: steam, verifiedAt: '2026-08-13', status: 'verified'
  },
  steamAchievements: {
    value: 16, source: steam, verifiedAt: '2026-08-13', status: 'verified'
  },
  steamReviews: {
    value: '90% Positive', source: steam, verifiedAt: '2026-09-02', status: 'verified'
  },
  steamSalesMilestone: {
    value: '10K+', source: 'https://x.com/TaintedPact', verifiedAt: '2026-09-02', status: 'verified'
  },
  officialAudioLanguage: {
    value: 'English', source: steam, verifiedAt: '2026-08-13', status: 'verified'
  }
} satisfies Record<string, GameFact<unknown>>;

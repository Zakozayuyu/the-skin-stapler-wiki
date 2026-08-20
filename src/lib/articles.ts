import Gameplay from '@/content/en/guides/the-skin-stapler-gameplay.mdx';
import HotDog from '@/content/en/guides/the-skin-stapler-hot-dog.mdx';
import ReleaseDate from '@/content/en/guides/the-skin-stapler-release-date.mdx';
import Demo from '@/content/en/guides/the-skin-stapler-demo.mdx';
import Steam from '@/content/en/guides/the-skin-stapler-steam.mdx';
import PcDownload from '@/content/en/guides/the-skin-stapler-pc-download.mdx';
import Reddit from '@/content/en/guides/the-skin-stapler-reddit.mdx';
import VoiceActors from '@/content/en/guides/the-skin-stapler-voice-actors.mdx';
import Layna from '@/content/en/guides/the-skin-stapler-layna.mdx';
import Fefe from '@/content/en/guides/the-skin-stapler-fefe.mdx';
import Scaroline from '@/content/en/guides/the-skin-stapler-scaroline.mdx';
import WhoIs from '@/content/en/guides/who-is-the-skin-stapler.mdx';
import Hexy from '@/content/en/guides/the-skin-stapler-hexy.mdx';
import Blair from '@/content/en/guides/the-skin-stapler-blair.mdx';
import Luna from '@/content/en/guides/the-skin-stapler-luna.mdx';
import Achievements from '@/content/en/guides/the-skin-stapler-achievements.mdx';
import PuzzleSolutions from '@/content/en/guides/the-skin-stapler-puzzle-solutions.mdx';
import type { ArticleImageKey } from './article-media';

export const keywordArticles = {
  'the-skin-stapler-gameplay': { keyword: 'the skin stapler gameplay', title: 'The Skin Stapler Gameplay: How It Actually Plays', description: 'The Skin Stapler gameplay centers on first-person investigation, exploration, puzzles, dialogue, and multiple playable viewpoints rather than constant combat.', category: 'Guide', summary: 'A grounded look at the investigation loop, playable viewpoints, combat, length, and demo.', Component: Gameplay },
  'the-skin-stapler-hot-dog': { keyword: 'the skin stapler hot dog', title: 'The Skin Stapler Hot Dog Scene: Full Explanation', description: 'The Skin Stapler hot dog scene happens in the Quick Fix demo chapter. Follow Hexy\'s serving steps and learn why the customer animation became a viral meme.', category: 'Guide', summary: 'The verified Quick Fix serving sequence, the viral customer animation, and what remains unconfirmed.', Component: HotDog },
  'the-skin-stapler-release-date': { keyword: 'the skin stapler release date', title: 'The Skin Stapler Release Date, Price and Platforms', description: 'The Skin Stapler release date was August 6, 2026, for Windows PC. Check the Steam and GOG launch, demo date, launch price, discount, and supported platforms.', category: 'Release', summary: 'The confirmed full-game date, launch price, demo timeline, Windows storefronts, and outdated listings to ignore.', Component: ReleaseDate },
  'the-skin-stapler-demo': { keyword: 'the skin stapler demo', title: 'The Skin Stapler Demo: Chapters, Length, Download', description: 'The Skin Stapler demo is a free 30\u201345 minute Steam download with three playable sections starring Dick Slater, Hexy, and Blair in Carrion City.', category: 'Release', summary: 'The three demo sections, official playtime, download route, and save-transfer status.', Component: Demo },
  'the-skin-stapler-steam': { keyword: 'the skin stapler steam', title: 'The Skin Stapler Steam Guide: Price, Demo, Specs', description: 'The Skin Stapler Steam version launched August 6, 2026. Find its verified features, English language support, PC requirements, demo, and store details.', category: 'Platforms', summary: 'Verified Steam release details, features, language support, demo, and system requirements.', Component: Steam },
  'the-skin-stapler-pc-download': { keyword: 'the skin stapler pc download', title: 'The Skin Stapler PC Download: Safe Official Options', description: 'The Skin Stapler PC download is officially available through Steam, GOG, and the developer\'s itch.io page, with a separate free Steam demo for Windows.', category: 'Platforms', summary: 'Official Windows download choices, the free demo, GOG offline installers, and PC specs.', Component: PcDownload },
  'the-skin-stapler-reddit': { keyword: 'the skin stapler reddit', title: 'The Skin Stapler Reddit: What Players Are Saying', description: 'The Skin Stapler Reddit discussion is centered on streamer reactions, dark comedy, short playtime, and mixed opinions about its deliberately crude humor.', category: 'Community', summary: 'A careful summary of Reddit and player discussion without treating community opinion as fact.', Component: Reddit },
  'the-skin-stapler-voice-actors': { keyword: 'the skin stapler voice actors', title: 'The Skin Stapler Voice Actors: Full Cast & Roles', description: 'Meet The Skin Stapler voice actors and full English voice cast for Dick Slater, Robbie Knox, Fefe, Hexy, Nurse Layna, Scaroline, Blair, and more.', category: 'Cast', summary: 'The cast-poster credits, confirmed role mappings, English audio, and earlier-list discrepancy.', Component: VoiceActors },
  'the-skin-stapler-layna': { keyword: 'the skin stapler layna', title: 'The Skin Stapler Layna: Nurse Layna Explained', description: 'The Skin Stapler Layna character is Nurse Layna, a confirmed playable role based on voice actor and cozy-horror VTuber Layna Lazar, who runs a blood bank.', category: 'Cast', summary: 'What is confirmed about Nurse Layna, Layna Lazar, and Lazar\'s Blood Bank.', Component: Layna },
  'the-skin-stapler-fefe': { keyword: 'the skin stapler fefe', title: 'The Skin Stapler Fefe: Character and Voice Actor', description: 'The Skin Stapler Fefe guide explains her full-game opening, apartment scene, voice actor FeFe, demo status, official spelling, and what remains unconfirmed.', category: 'Cast', summary: 'Fefe\'s full-game opening, voice performer, official spelling, demo status, and confirmed unknowns.', Component: Fefe },
  'the-skin-stapler-scaroline': { keyword: 'the skin stapler scaroline', title: 'The Skin Stapler Scaroline: Character and Voice Actor', description: 'The Skin Stapler Scaroline is the owner of Underworld VHS, based on and voiced by creator @Scarolinetv_; her exact playable role remains pending.', category: 'Cast', summary: 'Scaroline\'s confirmed store and performer, plus the unresolved question about playable status.', Component: Scaroline },
  'who-is-the-skin-stapler': { keyword: 'who is the skin stapler', title: 'Who Is The Skin Stapler? Identity, Motive & Evidence', description: 'The Skin Stapler is Elias Crow, owner of the Flesh Pit. Learn his real identity, revenge motive, twin origin, and how the investigation uncovers the truth.', category: 'Story', summary: 'The killer\'s identity as Elias Crow, the revenge motive, the twin origin, and what the investigation reveals.', Component: WhoIs },
  'the-skin-stapler-hexy': { keyword: 'the skin stapler hexy', title: 'The Skin Stapler Hexy: Quick Fix Clerk & Voice Actor', description: 'Hexy is a playable convenience store clerk at the Quick Fix in Carrion City. She serves hot dogs, owns the Jank Wagon, and encounters the Skin Stapler.', category: 'Cast', summary: 'Hexy\'s Quick Fix section, hot dog scene, Jank Wagon, and HexyIRL voice actor credit.', Component: Hexy },
  'the-skin-stapler-blair': { keyword: 'the skin stapler blair', title: 'The Skin Stapler Blair: Gutters End Bowling Employee', description: 'Blair is a playable graveyard-shift employee at Gutters End Bowling Alley, voiced by BlairVira. She is killed by the Skin Stapler in both the demo and full game.', category: 'Cast', summary: 'Blair\'s Gutters End section, Mr. Shrimp dual role, BlairVira voice credit, and confirmed fate.', Component: Blair },
  'the-skin-stapler-luna': { keyword: 'the skin stapler luna', title: 'The Skin Stapler Luna: Donut Shop Owner & Voice Actor', description: 'Luna is a playable character who runs a donut and coffee shop in Carrion City, voiced by Luna Arcana. She is killed at her shop alongside Chief O\'Brien.', category: 'Cast', summary: 'Luna\'s donut shop, Luna Arcana voice credit, shop name discrepancy, and confirmed fate.', Component: Luna }
  , 'the-skin-stapler-achievements': { keyword: 'the skin stapler achievements', title: 'The Skin Stapler Achievements: All 16 Unlocks', description: 'See all 16 The Skin Stapler achievements, their Steam requirements, the missable Thank You note, tape repair unlock, and chapter order.', category: 'Guide', summary: 'All 16 Steam achievements, the missable office note, tape repair unlock, and chapter-linked progress.', Component: Achievements }
  , 'the-skin-stapler-puzzle-solutions': { keyword: 'the skin stapler puzzle solutions', title: 'The Skin Stapler Puzzle Solutions and Codes', description: 'Solve The Skin Stapler puzzles with the verified 1979 code, Flesh Pit meat scale, tape guidance, and clearly marked tarot-card uncertainty.', category: 'Guide', summary: 'The verified 1979 code, Flesh Pit scale, damaged tapes, tarot evidence box, and Blood Puzzle search intent.', Component: PuzzleSolutions }
} as const;

export type KeywordArticleSlug = keyof typeof keywordArticles;
export const keywordArticleSlugs = Object.keys(keywordArticles) as KeywordArticleSlug[];

/** Official Steam-gallery image used for each keyword guide (schema and social sharing). */
export const keywordArticleImages: Record<KeywordArticleSlug, ArticleImageKey> = {
  'the-skin-stapler-gameplay': 'carAttack',
  'the-skin-stapler-hot-dog': 'customer',
  'the-skin-stapler-release-date': 'promo',
  'the-skin-stapler-demo': 'chase',
  'the-skin-stapler-steam': 'tape',
  'the-skin-stapler-pc-download': 'police',
  'the-skin-stapler-reddit': 'stage',
  'the-skin-stapler-voice-actors': 'interview',
  'the-skin-stapler-layna': 'bloodBank',
  'the-skin-stapler-fefe': 'chase',
  'the-skin-stapler-scaroline': 'videoStore',
  'who-is-the-skin-stapler': 'killer',
  'the-skin-stapler-hexy': 'customer',
  'the-skin-stapler-blair': 'chase',
  'the-skin-stapler-luna': 'promo'
  , 'the-skin-stapler-achievements': 'evidence'
  , 'the-skin-stapler-puzzle-solutions': 'tape'
};

type RelatedGuide = { href: string; label: string; description: string };

export const keywordArticleRelations = {
  'the-skin-stapler-gameplay': [
    { href: '/walkthrough', label: 'full The Skin Stapler walkthrough', description: 'Follow the released chapters in order.' },
    { href: '/guides/beginner', label: 'spoiler-aware beginner guide', description: 'Start with controls and interaction basics.' },
    { href: '/guides/the-skin-stapler-demo', label: 'free demo chapters', description: 'See what the separate Steam demo includes.' }
  ],
  'the-skin-stapler-hot-dog': [
    { href: '/walkthrough', label: 'Quick Fix in the full walkthrough', description: 'See where the scene appears in the full route.' },
    { href: '/guides/the-skin-stapler-demo', label: 'The Skin Stapler demo', description: 'Check all three playable demo sections.' },
    { href: '/guides/the-skin-stapler-hexy', label: 'Hexy character guide', description: 'Meet the clerk behind the hot dog scene.' }
  ],
  'the-skin-stapler-release-date': [
    { href: '/guides/the-skin-stapler-steam', label: 'The Skin Stapler on Steam', description: 'Review Steam features, language support and requirements.' },
    { href: '/guides/the-skin-stapler-pc-download', label: 'official PC download options', description: 'Compare the verified Windows storefronts.' },
    { href: '/guides/the-skin-stapler-demo', label: 'free Steam demo', description: 'Check the demo date, length and chapters.' }
  ],
  'the-skin-stapler-demo': [
    { href: '/walkthrough', label: 'full-game walkthrough', description: 'Continue beyond the three demo sections.' },
    { href: '/guides/the-skin-stapler-hexy', label: 'Hexy character guide', description: 'Meet the Quick Fix clerk from the demo.' },
    { href: '/guides/the-skin-stapler-blair', label: 'Blair character guide', description: 'Meet the Gutters End employee from the demo.' }
  ],
  'the-skin-stapler-steam': [
    { href: '/guides/the-skin-stapler-release-date', label: 'release date and platforms', description: 'Check the confirmed launch timeline.' },
    { href: '/guides/the-skin-stapler-demo', label: 'separate Steam demo', description: 'See its chapters and expected length.' },
    { href: '/guides/the-skin-stapler-pc-download', label: 'safe PC download options', description: 'Use verified storefronts and developer channels.' }
  ],
  'the-skin-stapler-pc-download': [
    { href: '/guides/the-skin-stapler-steam', label: 'Steam version details', description: 'Check features and requirements before downloading.' },
    { href: '/guides/the-skin-stapler-release-date', label: 'release date and platforms', description: 'Review the confirmed PC launch.' },
    { href: '/guides/the-skin-stapler-demo', label: 'free official demo', description: 'Try the three-section sample first.' }
  ],
  'the-skin-stapler-reddit': [
    { href: '/guides/the-skin-stapler-gameplay', label: 'how The Skin Stapler plays', description: 'Separate gameplay facts from player opinion.' },
    { href: '/guides/the-skin-stapler-voice-actors', label: 'voice actors and creator cast', description: 'See the confirmed performers behind the discussion.' },
    { href: '/walkthrough', label: 'full chapter walkthrough', description: 'Check the route without relying on community summaries.' }
  ],
  'the-skin-stapler-voice-actors': [
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' },
    { href: '/guides/the-skin-stapler-fefe', label: 'Fefe and her voice actor', description: 'Read about the opening playable character.' },
    { href: '/guides/the-skin-stapler-layna', label: 'Nurse Layna and Layna Lazar', description: "Explore the character behind Lazar's Blood Bank." },
    { href: '/guides/the-skin-stapler-scaroline', label: 'Scaroline and Underworld VHS', description: 'See the confirmed creator-to-character connection.' }
  ],
  'the-skin-stapler-layna': [
    { href: '/guides/the-skin-stapler-voice-actors', label: 'full voice cast', description: 'See Layna Lazar beside every confirmed performer.' },
    { href: '/walkthrough', label: "Lazar's Blood Bank walkthrough route", description: 'Find the chapter in the full-game order.' },
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' },
    { href: '/guides/the-skin-stapler-scaroline', label: 'Scaroline character guide', description: 'Continue through the character cluster.' }
  ],
  'the-skin-stapler-fefe': [
    { href: '/guides/the-skin-stapler-voice-actors', label: 'The Skin Stapler voice actors', description: 'See FeFe in the complete confirmed cast.' },
    { href: '/walkthrough', label: 'Fefe\'s opening chapter in the walkthrough', description: 'Follow the Burrows Apartments opening.' },
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' },
    { href: '/ending', label: 'The Skin Stapler ending explained', description: 'Continue to the spoiler-marked finale.' }
  ],
  'the-skin-stapler-scaroline': [
    { href: '/guides/the-skin-stapler-voice-actors', label: 'full voice cast', description: 'See Scaroline among the confirmed performers.' },
    { href: '/walkthrough', label: 'Underworld VHS in the walkthrough', description: 'Find the video-store chapter in the full route.' },
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' },
    { href: '/guides/the-skin-stapler-layna', label: 'Nurse Layna character guide', description: 'Explore another creator-inspired role.' }
  ],
  'who-is-the-skin-stapler': [
    { href: '/ending', label: 'ending explained', description: 'The full finale and what happens to every character.' },
    { href: '/walkthrough', label: 'full walkthrough', description: 'Follow the investigation from start to finish.' },
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' },
    { href: '/guides/the-skin-stapler-voice-actors', label: 'voice actors', description: 'See who voices Elias Crow and the rest of the cast.' }
  ],
  'the-skin-stapler-hexy': [
    { href: '/guides/the-skin-stapler-hot-dog', label: 'hot dog scene', description: 'Follow the full Quick Fix serving sequence.' },
    { href: '/guides/the-skin-stapler-demo', label: 'demo chapters', description: 'See all three playable demo sections.' },
    { href: '/walkthrough', label: 'full walkthrough', description: 'Find Hexy\'s chapter in the full-game route.' },
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' }
  ],
  'the-skin-stapler-blair': [
    { href: '/guides/the-skin-stapler-demo', label: 'demo chapters', description: 'See all three playable demo sections.' },
    { href: '/walkthrough', label: 'full walkthrough', description: 'Find Blair\'s chapter in the full-game route.' },
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' },
    { href: '/guides/the-skin-stapler-voice-actors', label: 'voice actors', description: 'See BlairVira and the full cast.' }
  ],
  'the-skin-stapler-luna': [
    { href: '/walkthrough', label: 'full walkthrough', description: 'Find Luna\'s chapter in the full-game route.' },
    { href: '/characters', label: 'all characters', description: 'Browse every confirmed character in the game.' },
    { href: '/guides/the-skin-stapler-voice-actors', label: 'voice actors', description: 'See Luna Arcana and the full cast.' },
    { href: '/ending', label: 'ending explained', description: 'How Luna\'s story connects to the finale.' }
  ],
  'the-skin-stapler-achievements': [
    { href: '/guides/the-skin-stapler-puzzle-solutions', label: 'puzzle solutions and codes', description: 'Solve the verified investigation obstacles.' },
    { href: '/walkthrough', label: 'full walkthrough', description: 'Follow the chapter route behind the progress achievements.' },
    { href: '/guides/beginner', label: 'beginner guide', description: 'Start with spoiler-aware route advice.' }
  ],
  'the-skin-stapler-puzzle-solutions': [
    { href: '/guides/the-skin-stapler-achievements', label: 'all Steam achievements', description: 'See the tape repair and missable note requirements.' },
    { href: '/walkthrough', label: 'full walkthrough', description: 'Place each puzzle inside the complete route.' },
    { href: '/guides/the-skin-stapler-gameplay', label: 'gameplay guide', description: 'Understand the investigation loop and puzzle focus.' }
  ]
} satisfies Record<KeywordArticleSlug, RelatedGuide[]>;

export function getKeywordArticle(slug: string) {
  return keywordArticles[slug as KeywordArticleSlug];
}

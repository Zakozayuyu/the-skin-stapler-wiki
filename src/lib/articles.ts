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

export const keywordArticles = {
  'the-skin-stapler-gameplay': { keyword: 'the skin stapler gameplay', title: 'The Skin Stapler Gameplay: How It Actually Plays', description: 'The Skin Stapler gameplay centers on first-person investigation, exploration, puzzles, dialogue, and multiple playable viewpoints rather than constant combat.', category: 'Guide', summary: 'A grounded look at the investigation loop, playable viewpoints, combat, length, and demo.', Component: Gameplay },
  'the-skin-stapler-hot-dog': { keyword: 'the skin stapler hot dog', title: 'The Skin Stapler Hot Dog Scene Explained', description: 'The Skin Stapler hot dog scene happens in the Quick Fix demo chapter, where Hexy serves questionable food to strange late-night customers in Carrion City.', category: 'Guide', summary: 'What the Quick Fix hot dog scene is, why players shared it, and what remains unconfirmed.', Component: HotDog },
  'the-skin-stapler-release-date': { keyword: 'the skin stapler release date', title: 'The Skin Stapler Release Date and Launch Details', description: 'The Skin Stapler release date was August 6, 2026. Check its confirmed Steam and GOG launch, earlier demo date, platforms, and official availability.', category: 'Release', summary: 'The confirmed full-game date, demo timeline, PC storefronts, and outdated listings to ignore.', Component: ReleaseDate },
  'the-skin-stapler-demo': { keyword: 'the skin stapler demo', title: 'The Skin Stapler Demo: Chapters, Length, Download', description: 'The Skin Stapler demo is a free 30–45 minute Steam download with three playable sections starring Dick Slater, Hexy, and Blair in Carrion City.', category: 'Release', summary: 'The three demo sections, official playtime, download route, and save-transfer status.', Component: Demo },
  'the-skin-stapler-steam': { keyword: 'the skin stapler steam', title: 'The Skin Stapler Steam Guide: Price, Demo, Specs', description: 'The Skin Stapler Steam version launched August 6, 2026. Find its verified features, English language support, PC requirements, demo, and store details.', category: 'Platforms', summary: 'Verified Steam release details, features, language support, demo, and system requirements.', Component: Steam },
  'the-skin-stapler-pc-download': { keyword: 'the skin stapler pc download', title: 'The Skin Stapler PC Download: Safe Official Options', description: 'The Skin Stapler PC download is officially available through Steam, GOG, and the developer’s itch.io page, with a separate free Steam demo for Windows.', category: 'Platforms', summary: 'Official Windows download choices, the free demo, GOG offline installers, and PC specs.', Component: PcDownload },
  'the-skin-stapler-reddit': { keyword: 'the skin stapler reddit', title: 'The Skin Stapler Reddit: What Players Are Saying', description: 'The Skin Stapler Reddit discussion is centered on streamer reactions, dark comedy, short playtime, and mixed opinions about its deliberately crude humor.', category: 'Community', summary: 'A careful summary of Reddit and player discussion without treating community opinion as fact.', Component: Reddit },
  'the-skin-stapler-voice-actors': { keyword: 'the skin stapler voice actors', title: 'The Skin Stapler Voice Actors: Confirmed Cast', description: 'The Skin Stapler voice actors include RJ Green, Daniel Suraci, Layna Lazar, FeFe, Blairvira, Scaroline, HexyIRL, Runebee, Luna Arcana, and KingWoolz.', category: 'Cast', summary: 'The official cast-poster credits, confirmed roles, English audio, and earlier-list discrepancy.', Component: VoiceActors },
  'the-skin-stapler-layna': { keyword: 'the skin stapler layna', title: 'The Skin Stapler Layna: Nurse Layna Explained', description: 'The Skin Stapler Layna character is Nurse Layna, a confirmed playable role based on voice actor and cozy-horror VTuber Layna Lazar, who runs a blood bank.', category: 'Cast', summary: 'What is confirmed about Nurse Layna, Layna Lazar, and Lazar’s Blood Bank.', Component: Layna },
  'the-skin-stapler-fefe': { keyword: 'the skin stapler fefe', title: 'The Skin Stapler Fefe: Character and Voice Actor', description: 'The Skin Stapler Fefe is a playable opening character voiced by FeFe, also known as @CovfefeChan, who officially joined the cast in June 2026.', category: 'Cast', summary: 'Fefe’s opening role, voice performer, cast announcement, and spoiler-safe unknowns.', Component: Fefe },
  'the-skin-stapler-scaroline': { keyword: 'the skin stapler scaroline', title: 'The Skin Stapler Scaroline: Character and Voice Actor', description: 'The Skin Stapler Scaroline is the owner of Underworld VHS, based on and voiced by creator @Scarolinetv_; her exact playable role remains pending.', category: 'Cast', summary: 'Scaroline’s confirmed store and performer, plus the unresolved question about playable status.', Component: Scaroline }
} as const;

export type KeywordArticleSlug = keyof typeof keywordArticles;
export const keywordArticleSlugs = Object.keys(keywordArticles) as KeywordArticleSlug[];

export function getKeywordArticle(slug: string) {
  return keywordArticles[slug as KeywordArticleSlug];
}

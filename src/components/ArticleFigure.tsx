import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { articleMedia, officialSteamGallery, sourceLabels } from '@/lib/article-media';
import type { ArticleImageKey } from '@/lib/article-media';

export default function ArticleFigure({ image, locale = 'en' }: { image: ArticleImageKey; locale?: Locale }) {
  const media = articleMedia[image];

  return (
    <figure className="article-figure">
      <Image
        src={media.src}
        alt={media.description[locale]}
        width={media.width}
        height={media.height}
        sizes="(max-width: 928px) calc(100vw - 32px), 864px"
      />
      <figcaption>
        <span>{media.description[locale]}</span>
        <a href={officialSteamGallery} target="_blank" rel="noreferrer">{sourceLabels[locale]}</a>
      </figcaption>
    </figure>
  );
}

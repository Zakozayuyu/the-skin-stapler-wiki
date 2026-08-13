'use client';

import Link from 'next/link';
import { createPortal } from 'react-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent } from 'react';
import type { Locale } from '@/lib/i18n';
import { searchIndex } from '@/lib/search-index';

const labels = {
  en: { button: 'Search this wiki', title: 'Search The Skin Stapler Wiki', placeholder: 'Search walkthroughs, characters, scenes...', popular: 'Popular searches', results: 'Search results', empty: 'No matching guides found.', hint: 'Navigate', open: 'Open', close: 'Close search' },
  de: { button: 'Wiki durchsuchen', title: 'The Skin Stapler Wiki durchsuchen', placeholder: 'Guides, Figuren und Szenen durchsuchen ...', popular: 'Beliebte Suchen', results: 'Suchergebnisse', empty: 'Keine passenden Guides gefunden.', hint: 'Navigieren', open: 'Öffnen', close: 'Suche schließen' },
  'pt-br': { button: 'Pesquisar na wiki', title: 'Pesquisar na The Skin Stapler Wiki', placeholder: 'Pesquisar detonados, personagens e cenas...', popular: 'Pesquisas populares', results: 'Resultados da pesquisa', empty: 'Nenhum guia correspondente foi encontrado.', hint: 'Navegar', open: 'Abrir', close: 'Fechar pesquisa' },
  es: { button: 'Buscar en la wiki', title: 'Buscar en The Skin Stapler Wiki', placeholder: 'Buscar guías, personajes y escenas...', popular: 'Búsquedas populares', results: 'Resultados de búsqueda', empty: 'No se encontraron guías coincidentes.', hint: 'Navegar', open: 'Abrir', close: 'Cerrar búsqueda' }
} as const;

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
}

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
}

export default function SiteSearch({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = labels[locale];

  const results = useMemo(() => {
    const items = searchIndex[locale];
    const cleanQuery = normalize(query.trim());
    if (!cleanQuery) {
      const popularPaths = ['/walkthrough', '/ending', 'the-skin-stapler-fefe', 'the-skin-stapler-voice-actors'];
      return popularPaths.map((path) => items.find((item) => item.href.endsWith(path))).filter((item): item is (typeof items)[number] => Boolean(item));
    }

    const tokens = cleanQuery.split(/\s+/).filter(Boolean);
    return items
      .map((item) => {
        const title = normalize(item.title);
        const searchable = normalize(`${item.title} ${item.description} ${item.keywords.join(' ')}`);
        if (!tokens.every((token) => searchable.includes(token))) return { item, score: -1 };
        const score = tokens.reduce((total, token) => total + (title.startsWith(token) ? 8 : title.includes(token) ? 5 : 1), 0);
        return { item, score };
      })
      .filter(({ score }) => score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ item }) => item);
  }, [locale, query]);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.matches('input, textarea, select, [contenteditable="true"]');
      if ((event.key === '/' && !isTyping) || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k')) {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  function closeSearch() {
    setOpen(false);
    setQuery('');
  }

  function handleBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) closeSearch();
  }

  function handleInputKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelected((current) => (current + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelected((current) => (current - 1 + results.length) % results.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      window.location.assign(results[selected]?.href ?? results[0].href);
    }
  }

  return (
    <>
      <button type="button" className="site-search-trigger" aria-label={t.button} title={`${t.button} (/)`} onClick={() => setOpen(true)}>
        <SearchIcon />
      </button>
      {open && createPortal(<div className="site-search-overlay" onMouseDown={handleBackdrop}>
        <section className="site-search-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
          <h2 id="site-search-title" className="sr-only">{t.title}</h2>
          <div className="site-search-input-row">
            <SearchIcon />
            <input ref={inputRef} type="search" value={query} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} onKeyDown={handleInputKeyDown} placeholder={t.placeholder} aria-label={t.title} aria-controls="site-search-results" aria-activedescendant={results[selected] ? `site-search-result-${selected}` : undefined} />
            <button type="button" className="site-search-close" aria-label={t.close} onClick={closeSearch}>Esc</button>
          </div>
          <div className="site-search-body">
            <span className="site-search-label">{query.trim() ? t.results : t.popular}</span>
            <div className="site-search-results" id="site-search-results" role="listbox">
              {results.map((item, index) => <Link id={`site-search-result-${index}`} role="option" aria-selected={selected === index} className={`site-search-result${selected === index ? ' is-selected' : ''}`} href={item.href} key={item.href} onMouseEnter={() => setSelected(index)} onClick={closeSearch}>
                <b aria-hidden="true">{item.title.charAt(0)}</b><span><strong>{item.title}</strong><small>{item.description}</small></span>
              </Link>)}
              {!results.length && <p className="site-search-empty">{t.empty}</p>}
            </div>
          </div>
          <footer className="site-search-footer"><span><kbd>↑</kbd><kbd>↓</kbd> {t.hint} · <kbd>Enter</kbd> {t.open}</span><span>The Skin Stapler Wiki</span></footer>
        </section>
      </div>, document.body)}
    </>
  );
}

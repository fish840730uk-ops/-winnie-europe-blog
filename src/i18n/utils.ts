import { ui, defaultLang, languages } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang) {
    return targetLang === defaultLang ? path : `/${targetLang}${path}`;
  };
}

export function otherLang(lang: Lang): Lang {
  return (Object.keys(languages) as Lang[]).find((l) => l !== lang) ?? defaultLang;
}

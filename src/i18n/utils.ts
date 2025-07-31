import { defaultLang, languages, showDefaultLang, ui } from "./ui";

export function getLangFromPostUrl(url: URL) {
  const [, , lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getLangFromUrlbak(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getLangFromUrl(url: URL) {
  const segments = url.pathname.split("/");

  // Vérifier les positions 2 et 3
  for (const position of [1, 2]) {
    const lang = segments[position];
    if (lang && lang in ui) return lang as keyof typeof ui;
  }

  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
export function getLanguageLabel(langCode: string) {
  return languages[langCode as keyof typeof languages] || langCode;
}

import { defaultLang, languages, showDefaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const pathSegments = url.pathname.split("/").filter((segment) =>
    segment !== ""
  );
  console.log("Path segments:", pathSegments); // Debug
  const positionsToCheck = [1, 2]; // Position 2 = index 1, Position 3 = index 2
  for (const position of positionsToCheck) {
    const segment = pathSegments[position];
    if (segment && segment in ui) {
      return segment as keyof typeof ui;
    }
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


import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, languages, showDefaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const segments = url.pathname.split("/");
  // Vérifier les positions 2 et 3
  for (const position of [1, 2]) {
    const lang = segments[position];
    if (lang && lang in ui) return lang as keyof typeof ui;
  }
  return defaultLang;
}

/**
 * @deprecated Utilisez getRelativeLocaleUrl d'Astro à la place
 * Fonction maintenue pour la compatibilité descendante
 */
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return getRelativeLocaleUrl(l, path.startsWith("/") ? path.slice(1) : path);
  };
}

/**
 * Version moderne utilisant getRelativeLocaleUrl d'Astro
 * Remplace useTranslatedPath pour les nouveaux développements
 */
export function getLocalizedPath(
  lang: keyof typeof ui,
  path: string = "",
  options?: {
    prependWith?: string;
    normalizeLocale?: boolean;
  },
) {
  // Nettoyer le path en retirant le slash initial si présent
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return getRelativeLocaleUrl(lang, cleanPath, options);
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLanguageLabel(langCode: string) {
  return languages[langCode as keyof typeof languages] || langCode;
}

/**
 * Vérifie si un chemin correspond à la page actuelle
 * Utile pour la mise en évidence de la navigation
 */
export function isActivePath(currentPath: string, targetPath: string): boolean {
  return currentPath === targetPath || currentPath.startsWith(targetPath + "/");
}

/**
 * Extrait la langue d'un chemin URL
 * Utile pour analyser les URLs manuellement
 */
export function extractLangFromPath(pathname: string): keyof typeof ui {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && firstSegment in ui) {
    return firstSegment as keyof typeof ui;
  }

  return defaultLang;
}

/**
 * Génère les URLs alternatives pour toutes les langues disponibles
 * Utile pour les balises hreflang et les sitemaps
 */
export function getAllLocaleUrls(
  path: string = "",
): Record<keyof typeof ui, string> {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const urls = {} as Record<keyof typeof ui, string>;

  for (const lang of Object.keys(ui) as Array<keyof typeof ui>) {
    urls[lang] = getRelativeLocaleUrl(lang, cleanPath);
  }

  return urls;
}

import { Locale } from './types';

type LocaleChangeCallback = (locale: Locale) => void;

const isCorrectLocaleKey = (key: string): key is Locale => key in Locale;

class LocaleClient {
  #locale: Locale = 'en';

  #callbacks: LocaleChangeCallback[] = [];

  get locale() {
    return this.#locale;
  }

  constructor(private readonly storageKey: string) {
    const storedLocale = localStorage.getItem(storageKey);
    const browserLocale = navigator.language.slice(0, 2);

    const isSupportedStoredLocale = storedLocale && isCorrectLocaleKey(storedLocale);
    const isSupportedBrowserLocale = isCorrectLocaleKey(browserLocale);

    if (isSupportedStoredLocale) {
      this.#locale = storedLocale;
    } else if (isSupportedBrowserLocale) {
      this.#locale = browserLocale;
    }
  }

  setLocale = (locale: Locale) => {
    this.#locale = locale;
    this.emit();
    localStorage.setItem(this.storageKey, locale);
  };

  subscribe = (callback: LocaleChangeCallback) => {
    this.#callbacks.push(callback);

    return () => {
      this.#callbacks = this.#callbacks.filter((cb) => cb !== callback);
    };
  };

  unsubscribe = (callback: LocaleChangeCallback) => {
    this.#callbacks = this.#callbacks.filter((cb) => cb !== callback);
  };

  emit = () => {
    this.#callbacks.forEach((cb) => cb(this.#locale));
  };
}

export const localeClient = new LocaleClient('app_locale');

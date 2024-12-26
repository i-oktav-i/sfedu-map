import { Locale } from './types';

type LocaleChangeCallback = (locale: Locale) => void;

class LocaleClient {
  #locale: Locale = 'ru';

  #callbacks: LocaleChangeCallback[] = [];

  get locale() {
    return this.#locale;
  }

  setLocale = (locale: Locale) => {
    this.#locale = locale;
    this.emit();
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

export const localeClient = new LocaleClient();

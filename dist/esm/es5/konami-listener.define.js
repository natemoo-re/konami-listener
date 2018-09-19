// KonamiListener: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './konami-listener.core.js';
import {
  KonamiListener
} from './konami-listener.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    KonamiListener
  ], opts);
}
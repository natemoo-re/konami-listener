import { EventEmitter } from '@stencil/core';
export declare class KonamiListener {
    keys: string[];
    accepted: string[];
    input: string[];
    matched: EventEmitter;
    el: HTMLElement;
    handleKey(e: KeyboardEvent): void;
    onMatch(key: string): void;
    onFullMatch(): void;
    reset(): void;
    render(): JSX.Element;
}

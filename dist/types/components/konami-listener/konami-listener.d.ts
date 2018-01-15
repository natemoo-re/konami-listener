import { EventEmitter } from '@stencil/core';
export declare class KonamiListener {
    keys: string[];
    accepted: string[];
    inputs: string[];
    input: EventEmitter;
    match: EventEmitter;
    el: HTMLElement;
    handleKey(e: KeyboardEvent): void;
    handleInput(key: string): void;
    handleMatch(): void;
    reset(): void;
    render(): JSX.Element;
}

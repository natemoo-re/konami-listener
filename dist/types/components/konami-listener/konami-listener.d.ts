import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class KonamiListener {
    private keys;
    private accepted;
    el: HTMLElement;
    inputs: string[];
    input: EventEmitter;
    match: EventEmitter;
    handleKey(e: KeyboardEvent): void;
    handleInput(key: string): void;
    handleMatch(): void;
    reset(): void;
    render(): JSX.Element;
}

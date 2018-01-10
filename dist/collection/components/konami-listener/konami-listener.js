import { EventEmitter } from '@stencil/core';
export class KonamiListener {
    constructor() {
        this.keys = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
        this.accepted = [...new Set(this.keys)];
        this.input = [];
    }
    handleKey(e) {
        let { key } = e;
        if (!this.accepted.includes(key))
            return;
        (this.keys[this.input.length] === key)
            ? this.onMatch(key)
            : this.reset();
    }
    onMatch(key) {
        this.input.push(key);
        if (this.input.length === 10) {
            this.onFullMatch();
        }
    }
    onFullMatch() {
        this.matched.emit();
        this.el.classList.add('active');
        this.reset();
    }
    reset() {
        if (this.input.length) {
            this.input = [];
        }
    }
    render() {
        return (h("div", null,
            h("slot", null)));
    }
}

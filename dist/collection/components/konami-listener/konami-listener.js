import { EventEmitter } from '@stencil/core';
export class KonamiListener {
    constructor() {
        this.keys = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
        this.accepted = [...new Set(this.keys)];
        this.inputs = [];
    }
    handleKey(e) {
        let { key } = e;
        if (!this.accepted.includes(key))
            return;
        (this.keys[this.inputs.length] === key)
            ? this.handleInput(key)
            : this.reset();
    }
    handleInput(key) {
        this.inputs.push(key);
        this.input.emit({ key, index: this.inputs.length - 1 });
        if (this.inputs.length === 10) {
            this.handleMatch();
        }
    }
    handleMatch() {
        this.match.emit();
        this.el.classList.add('active');
        this.reset();
    }
    reset() {
        if (this.inputs.length) {
            this.inputs = [];
            this.input.emit({ reset: true });
        }
    }
    render() {
        return (h("div", null,
            h("slot", null)));
    }
}

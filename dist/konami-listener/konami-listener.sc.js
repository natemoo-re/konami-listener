/*! Built with http://stenciljs.com */
const { h } = window.KonamiListener;

class KonamiListener {
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
        return h("slot", null);
    }
    static get is() { return "konami-listener"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "inputs": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "input",
            "method": "input",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "match",
            "method": "match",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "document:keydown",
            "method": "handleKey"
        }]; }
    static get style() { return "\n.sc-konami-listener-h {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.active.sc-konami-listener-h {\n  display: block;\n}\n"; }
}

export { KonamiListener };

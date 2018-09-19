/*! Built with http://stenciljs.com */
import { h } from './konami-listener.core.js';
var KonamiListener = /** @class */ (function () {
    function KonamiListener() {
        this.keys = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
        this.accepted = new Set(this.keys).slice();
        this.inputs = [];
    }
    KonamiListener.prototype.handleKey = function (e) {
        var key = e.key;
        if (!this.accepted.includes(key))
            return;
        (this.keys[this.inputs.length] === key)
            ? this.handleInput(key)
            : this.reset();
    };
    KonamiListener.prototype.handleInput = function (key) {
        this.inputs.push(key);
        this.input.emit({ key: key, index: this.inputs.length - 1 });
        if (this.inputs.length === 10) {
            this.handleMatch();
        }
    };
    KonamiListener.prototype.handleMatch = function () {
        this.match.emit();
        this.el.classList.add('active');
        this.reset();
    };
    KonamiListener.prototype.reset = function () {
        if (this.inputs.length) {
            this.inputs = [];
            this.input.emit({ reset: true });
        }
    };
    KonamiListener.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(KonamiListener, "is", {
        get: function () { return "konami-listener"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonamiListener, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonamiListener, "properties", {
        get: function () {
            return {
                "el": {
                    "elementRef": true
                },
                "inputs": {
                    "state": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonamiListener, "events", {
        get: function () {
            return [{
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
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonamiListener, "listeners", {
        get: function () {
            return [{
                    "name": "document:keydown",
                    "method": "handleKey"
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonamiListener, "style", {
        get: function () { return "\n.sc-konami-listener-h {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.active.sc-konami-listener-h {\n  display: block;\n}\n"; },
        enumerable: true,
        configurable: true
    });
    return KonamiListener;
}());
export { KonamiListener };

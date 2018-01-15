/*! Built with http://stenciljs.com */

window['konami-listener'].loadStyles("konami-listener",":host {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n:host(.active) {\n  display: block;\n}\n:host(.hydrated){visibility:inherit !important}");
window['konami-listener'].loadComponents(

/**** module id (dev mode) ****/
"konami-listener",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

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
        this.input.emit({ key });
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

exports['konami-listener'] = KonamiListener;
},


/***************** konami-listener *****************/
[
/** konami-listener: tag **/
"konami-listener",

/** konami-listener: members **/
[
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "inputs", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** konami-listener: host **/
{},

/** konami-listener: events **/
[
  [
    /*****  konami-listener input ***** /
    /* event name ***/ "input"
  ],
  [
    /*****  konami-listener match ***** /
    /* event name ***/ "match"
  ]
]

]
);
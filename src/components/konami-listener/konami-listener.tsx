import { Component, State, Listen, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'konami-listener',
  styleUrl: 'konami-listener.scss',
  shadow: true
})
export class KonamiListener {

  keys = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  accepted = [...new Set(this.keys)];
  @State() input: string[] = [];
  @Event() matched: EventEmitter;
  @Element() el: HTMLElement;

  @Listen('document:keydown')
  handleKey(e: KeyboardEvent) {
    let { key } = e;
    if (!this.accepted.includes(key)) return;

    (this.keys[this.input.length] === key)
      ? this.onMatch(key)
      : this.reset();
  }

  onMatch(key: string) {
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
    return (
      <div>
        <slot/>
      </div>
    );
  }
}

import { Component, State, Listen, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'konami-listener',
  styleUrl: 'konami-listener.scss',
  shadow: true
})
export class KonamiListener {

  keys = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  accepted = [...new Set(this.keys)];
  @State() inputs: string[] = [];
  @Event() input: EventEmitter;
  @Event() match: EventEmitter;
  @Element() el: HTMLElement;

  @Listen('document:keydown')
  handleKey(e: KeyboardEvent) {
    let { key } = e;
    if (!this.accepted.includes(key)) return;

    (this.keys[this.inputs.length] === key)
      ? this.handleInput(key)
      : this.reset();
  }

  handleInput(key: string) {
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
    return (
      <div>
        <slot/>
      </div>
    );
  }
}

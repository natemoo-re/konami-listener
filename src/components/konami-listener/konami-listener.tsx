import { h, Component, State, Listen, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: "konami-listener",
  styleUrl: "konami-listener.css",
  shadow: true,
})
export class KonamiListener {
  private keys = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  private accepted = [...new Set(this.keys)];

  @Element() el: HTMLElement;

  @State() inputs: string[] = [];

  @Event() input: EventEmitter;
  @Event() match: EventEmitter;

  @Listen("keydown", {
    target: "document",
  })
  handleKey(e: KeyboardEvent) {
    const { key } = e;
    if (!this.accepted.includes(key)) return;

    this.keys[this.inputs.length] === key
      ? this.handleInput(key)
      : this.reset();
  }

  handleInput(key: string) {
    this.inputs.push(key);
    this.input.emit({ key, index: this.inputs.length - 1 });

    if (this.inputs.length === 10) {
      this.handleMatch();
    }
  }

  handleMatch() {
    this.match.emit();
    this.el.classList.add("active");
    this.reset();
  }

  reset() {
    if (this.inputs.length) {
      this.inputs = [];
      this.input.emit({ reset: true });
    }
  }

  render() {
    return <slot />;
  }
}

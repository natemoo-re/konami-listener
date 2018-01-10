import { flush, render } from '@stencil/core/testing';
import { KonamiListener } from './konami-listener';

describe('konami-listener', () => {
  it('should build', () => {
    expect(new KonamiListener()).toBeTruthy();
  });

  describe('keyboard', () => {
    let element: HTMLElement;

    let press = function(key) {
      let event = new KeyboardEvent('keydown', { key });
      document.dispatchEvent(event);
    }

    beforeEach(async () => {
      element = await render({
        components: [KonamiListener],
        html: '<konami-listener></konami-listener>'
      });
    });

    it('should recognize ArrowUp', () => {
      // press('ArrowUp');
      expect(element).toBeTruthy();
    });
  })

  // describe('rendering', () => {
  //   let element;
  //   beforeEach(async () => {
  //     element = await render({
  //       components: [KonamiListener],
  //       html: '<konami-listener></konami-listener>'
  //     });
  //   });

  //   it('should work without parameters', () => {
  //     expect(element..trim()).toEqual('Hello, World! I\'m');
  //   });

  //   it('should work with a first name', async () => {
  //     element.first = 'Peter';
  //     await flush(element);
  //     expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
  //   });

  //   it('should work with a last name', async () => {
  //     element.last = 'Parker';
  //     await flush(element);
  //     expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
  //   });

  //   it('should work with both a first and a last name', async () => {
  //     element.first = 'Peter'
  //     element.last = 'Parker';
  //     await flush(element);
  //     expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
  //   });
  // });
});
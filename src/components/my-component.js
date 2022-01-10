import { StacheElement } from 'can';

import view from './my-component.stache';

export class MyComponent extends StacheElement {
    static view = view;

    static props = {
        count: 0
    }

    increment() {
        this.count++
    }

    decrement() {
        this.count--;
    }
}

customElements.define('my-component', MyComponent);
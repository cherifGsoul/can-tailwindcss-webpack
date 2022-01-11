import { StacheElement } from 'can'

import view from './counter.stache'

export class Counter extends StacheElement {
    static view = view

    static props = {
        count: 0,
    }

    increment() {
        this.count++
    }

    decrement() {
        if (this.count > 0) {
            this.count--
        }
    }
}

customElements.define('my-counter', Counter)

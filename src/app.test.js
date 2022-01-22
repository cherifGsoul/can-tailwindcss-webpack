import { App } from './index';
import { domEvents } from 'can';

describe('App', () => {
    it('works', () => {
        const app = new App();
        app.connect();
        const counter = app.querySelector('my-counter');
        expect(counter.count).toEqual(0);
        const increment = counter.querySelector('#increment')
        domEvents.dispatch(increment, 'click')
        expect(counter.count).toEqual(1);
    });
});
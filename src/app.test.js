import { App } from './index';
import {screen} from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('App', () => {
    it('works', () => {
        const app = new App();
        app.render();
    });
});
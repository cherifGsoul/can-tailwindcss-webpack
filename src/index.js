import { StacheElement } from 'can'
import view from './app.stache'
import './styles.css'

export class App extends StacheElement {
    static view = view
}

customElements.define('can-app', App)

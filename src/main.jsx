import React from 'react';
import ReactDOM from 'react-dom/client';
import UserCard from './components/UserCard';

class RandomUserElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<UserCard />);
  }
}

if (!customElements.get('random-user-card')) {
  customElements.define('random-user-card', RandomUserElement);
}
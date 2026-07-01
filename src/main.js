import { mount } from 'svelte';
import App from './App.svelte';
import './app.css';

const appTarget = document.getElementById('app');

mount(App, {
  target: appTarget
}).then(() => {
  appTarget?.classList.add('ready');
});

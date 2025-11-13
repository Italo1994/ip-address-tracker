//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from "./store/store";
import { Provider } from 'react-redux';

import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

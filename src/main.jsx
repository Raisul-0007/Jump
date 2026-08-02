import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiData } from './components/ApiData.jsx';
import "swiper/css";
import { Provider } from 'react-redux';
import { store } from './store.js';

createRoot(document.getElementById('root')).render(
  <ApiData>
    <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
  </ApiData>,
)

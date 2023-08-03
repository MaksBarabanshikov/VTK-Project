import ReactDOM from 'react-dom/client';
import React from 'react';
import App from '@/app/App.tsx';
import '@fontsource/montserrat/600.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/shared/assets/style/index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={'233558498313-193s8b71jsn2n46einlonvg5eveq7iq3.apps.googleusercontent.com'}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </GoogleOAuthProvider>,
);

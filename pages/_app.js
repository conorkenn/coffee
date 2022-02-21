import '../styles/globals.css'
import React from 'react';
function MyApp({ Component, pageProps }) {
  return (
  <React.Fragment>
    <Component {...pageProps} />
    <footer>Conor 2021</footer>
  </React.Fragment>
  );
}

export default MyApp

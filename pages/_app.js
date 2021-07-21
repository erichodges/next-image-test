import * as React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../components/theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

// import React from 'react';
// import { ThemeProvider } from 'theme-ui';
// import theme from '../components/theme';

// const App = ({ Component, pageProps }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// };

// export default App;

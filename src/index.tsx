import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import Nav from './components/NavbarComponent';
import App from './initial/App';
import reportWebVitals from './reportWebVitals';
import RootDetector from './components/common/RootDetector';
import theme from './theme/theme';

const container = document.getElementById('root');
const root = createRoot(container!);

function disableContextMenuOnRelease() {
  if (window.location.hostname !== 'localhost') {
    return;
  }

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  }, { capture: true });
}

root.render(
  <ChakraProvider theme={theme}>
    <RootDetector />
    <RecoilRoot>
      <Nav />
      <App />
    </RecoilRoot>
  </ChakraProvider>,
);
disableContextMenuOnRelease();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

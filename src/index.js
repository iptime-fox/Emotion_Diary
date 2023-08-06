import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-family: 'Noto Sans KR', sans-serif;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'Noto Sans KR', sans-serif;
  /* color:#ffacac; */
  /* background-color: #FDFFF0; */
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  height: 100%;
}
a{
  text-decoration: none;
  color:inherit;
}
li{
  list-style: none;
  font-family: 'Noto Sans KR', sans-serif;
}
button, input, select{
  font-family: 'Noto Sans KR', sans-serif;

}
#root{
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  box-shadow: rgba(100, 100, 100, 0.2) 0px 7px 29px 0px;
}

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);

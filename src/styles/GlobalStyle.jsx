import { createGlobalStyle } from "styled-components";
import { GREY_1 } from './styleVariables';
import React from "react";

const ResetStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video,
  button {
    margin: 0;
    padding: 0;
    border: none;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background: transparent;
    outline: none;
    /* 기본 글꼴 설정, iOS와 IE에서 기기 회전시에 사용자가 확대하지 않아도 글씨 크기가 재조정되는 것을 예방 */
    font-family: 'Noto Sans KR', sans-serif;
    color: ${GREY_1};
    -ms-text-size-adjust: 100%; 
    -webkit-text-size-adjust: 100%; 
  }
  /** 
  * IE8/9에서 정의되지 않은 HTML5 요소를 'block'으로 지정. 
  * IE10/11, Firefox에서 정의되지 않은 detail 혹은 summary 를 block으로 지정. 
  * IE11에서 정의되지 않은 main을 block으로 지정 
  */ 
  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary { 
    display: block; 
  }
  body {
    line-height: 1;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  ol, ul {
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
  button, a {
    cursor: pointer;
  }
  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
  /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
  input::-ms-clear {
    display: none;
  }
  /* input type number 에서 화살표 제거 */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  /* Select box 스타일 초기화 */
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  /* IE 에서 Select box 화살표 제거 */
  select::-ms-expand {
    display: none;
  }
  /* 이미지 드레그, 클릭 불가 */
  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  /* react-modal */
  .ReactModal__Body--open {
    overflow: hidden;
  }
`;

export const GlobalStyle = () => (
  <>
    <ResetStyle />
  </>
);
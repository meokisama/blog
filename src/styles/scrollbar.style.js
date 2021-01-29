import { css } from 'styled-components';

const scrollBar = css`
  ::-webkit-scrollbar-track {
    background-color: white;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 7px;
    background-color: white;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #93A0E4;
    border-radius: 5px 0 0 5px;
  }

  ::-moz-scrollbartrack-vertical {
    background-color: white;
  }

  ::-moz-scrollbar {
    width: 10px;
    height: 7px;
    background-color: white;
    cursor: pointer;
  }

  ::-moz-scrollbarbutton-up {
    background-color: #93A0E4;
    border-radius: 5px 0 0 5px;
  }

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
`;

export default scrollBar;

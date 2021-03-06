import { css } from 'styled-components';

const scrollBar = css`
  ::-webkit-scrollbar-track {
    background-color: var(--color-background);
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: var(--color-background);
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #93A0E4;
    border-radius: 5px 5px 5px 5px;
  }

  ::-moz-scrollbartrack-vertical {
    background-color: var(--color-background);
  }

  ::-moz-scrollbar {
    width: 7px;
    height: 7px;
    background-color: var(--color-background);
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

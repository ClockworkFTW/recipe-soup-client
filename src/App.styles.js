import { createGlobalStyle } from "styled-components";

import background from "./assets/background.svg";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faAngleDown,
  faAngleUp,
  faBook,
  faCameraRetro,
  faCircleExclamation,
  faClock,
  faEarthAmericas,
  faEnvelope,
  faFloppyDisk,
  faGripVertical,
  faHatChef,
  faLeft,
  faLock,
  faMinus,
  faPlus,
  faPotFood,
  faPen,
  faQuoteLeft,
  faRightFromBracket,
  faRightToBracket,
  faSeedling,
  faSquareSmall,
  faStar,
  faTimer,
  faTrashCan,
} from "@fortawesome/pro-solid-svg-icons";

library.add(
  faAngleDown,
  faAngleUp,
  faBook,
  faCameraRetro,
  faCircleExclamation,
  faClock,
  faEarthAmericas,
  faEnvelope,
  faFloppyDisk,
  faGripVertical,
  faHatChef,
  faLeft,
  faLock,
  faMinus,
  faPlus,
  faPotFood,
  faPen,
  faQuoteLeft,
  faRightFromBracket,
  faRightToBracket,
  faSeedling,
  faSquareSmall,
  faStar,
  faTimer,
  faTrashCan
);

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    &::-webkit-scrollbar {
      width: 1em;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background: ${(props) => props.theme.colors.neutral200};
    }
  }

  html {
    font-size: 16px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.colors.neutral800};
    background-color: ${(props) => props.theme.colors.neutral50};
    background-image: url(${background});
    background-size: 150px 150px;
    font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  ol, ul {
    list-style-type: none;
    padding: 0;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
`;

export const theme = {
  colors: {
    // Gray
    neutral50: "#fafafa",
    neutral100: "#f4f4f5",
    neutral200: "#e4e4e7",
    neutral300: "#d4d4d8",
    neutral400: "#a1a1aa",
    neutral500: "#71717a",
    neutral600: "#52525b",
    neutral700: "#3f3f46",
    neutral800: "#27272a",
    neutral900: "#18181b",
    neutral950: "#09090b",
    // Blue
    primary50: "#f0f9ff",
    primary100: "#e0f2fe",
    primary200: "#bae6fd",
    primary300: "#7dd3fc",
    primary400: "#38bdf8",
    primary500: "#0ea5e9",
    primary600: "#0284c7",
    primary700: "#0369a1",
    primary800: "#075985",
    primary900: "#0c4a6e",
    primary950: "#082f49",
    // Red
    error50: "#fef2f2",
    error100: "#fee2e2",
    error200: "#fecaca",
    error300: "#fca5a5",
    error400: "#f87171",
    error500: "#ef4444",
    error600: "#dc2626",
    error700: "#b91c1c",
    error800: "#991b1b",
    error900: "#7f1d1d",
    error950: "#450a0a",
    // Yellow
    yellow: "#facc15",
  },
};

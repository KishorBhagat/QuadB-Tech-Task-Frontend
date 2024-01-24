import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
        --font-family-oswald: 'Oswald', sans-serif;
        --blue: #3dc6c1;
        --red: #da5757;
    }
    .dark-theme{
        --background-primary: #191d28;
        --background-secondary: #2e3241;
        --text-primary: #fff;
        --text-secondary: #818389;
    }
    .light-theme{
        --background-primary: #ffffff;
        --background-secondary: #f8f9fa;
        --text-primary: #000;
        --text-secondary: #818389;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: var(--text-primary);
        font-family: var(--font-family-oswald);
    }    
`;

export default GlobalStyle;

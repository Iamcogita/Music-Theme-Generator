import { createGlobalStyle } from "styled-components";
import { type Theme } from "./App";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: Arial, Helvetica, sans-serif;
        font-size: larger;
        background:#b4b4b4 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAgMAAADxkFD+AAAACVBMVEUAAAC0trS0srTXB3G5AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAMBJREFUGJVFUFsOwzAI45K2RP+Z1N2HSj1Ads5hyLpKUSgxfmCIFwAHw0joyxuWIDyAqC5wCAAYTj1jgVYX3AWziFw96DYXGosarxO3Ne2pf9NQPwwgdymeFMY2gUea7rL08u7+x2RBx6bzdJ8ySsNXpWD5zw9kst9Iz/hhL0lMO4chRtuW4oTjkgR9LClFdDa2s5K4qMTezTZZW9weFlKsKtkpJeFiOB6/kiuGUMyuBeBen/eCh5fvxlbiNWZx4wvZsZIbSdFJqQAAAABJRU5ErkJggg==);
        color: #ffffff;
    }
    body {
        //background: ${({ theme }: { theme: Theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%)
    }
`;

export default GlobalStyle;
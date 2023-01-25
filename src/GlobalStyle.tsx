import { createGlobalStyle } from "styled-components";
import { type Theme } from "./App";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: Arial, Helvetica, sans-serif;
        font-size: larger;
        background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAHlBMVEUAAACEhoR0dnR8fnxsamxsbmyEgoR0cnR8enxkZmRgcRNZAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAr1JREFUKJENz8uCsWAYAOD3GubAWKqvsEQHlhOdljpbjg5qKaVaTkksp0Lu9v+fO3ggqVic2W8GxzpQ+xZbDz8HLTQ8mSVMfqH58JG/74KgHh0hYcbEcsyRV4WU50hqA191oVePTsyIZChzFvI50yAxm4B2sBRjZByGZCm1gvX2LfIY1N0ldrapyVWUfBhOhsxSjgA3jEjGy2eDaC1/HCer6TGCmfWoMhJDc6mcuwL2I94IH9zZmmrTeHprfT0vvXDVZQ74XSAH7xtsY6x8Qzhownm/hJ1mYYXnffGZhktamYXHbgCamgfeI7+lG8z3UBEMklMMivpaRHL9E9bFyb7LJK5zV7DVQVeW14IQnsn3okk5o5Wg2u4ak4jzOX10CCH8mbTxB2wi+W+nBkvR1+2BNVw8WW0N+CfSr9FMEkPNOHteWcaoAf8iyLoV4to5FVQixmjUZqDGl/vNmU19GfsNxeCMLjyCMS3Z+txaqyYuzlTZ77XOHd4P/TGpUVNP5O3AyMxBdSsA5yiutlld0ucyQ1WOXCALztWF5d4awjO7fr9OrbXN13ARu6/fzloibpVSjqUdEJ5BJ5CVwJjB6e6fFHrPKFHRg4ITM/d53Rtu4+2fp1ypxRJ09NewW8f7IoNXlttyV4w8OAnb+djNydm+cq2ja13xwRLa8X7BujUbj/RusnIECTdruCdNxRoZMztTeBoT3c7+VIFV+Cx9ENHqnU5cOkz+p3lwtQPtP0cRFq91Z9E+lSKPoIzsmEBZzDHYbbKlRJotbfhtunMTXPST6KK1p2zCmVXBJaL2Ld9wcpSNWem3l54tCSTuuyscAUO9uG+//L/e7pXAFGu2jbGLmMk4ic1aRiv6DTjsquru4xW9jugn2T76o9oCfLRy86td3HlTTpZS8bFy92CuecQHRG4pjuDz4uFvTOz+AXUpFxE5k+9OAAAAAElFTkSuQmCC);
    }
    nav{
        background: ${({ theme }: { theme: Theme }) => theme.colors.nav};
    }
    body {
        margin: 0%;
        height: 100vh;
        background: ${({ theme }: { theme: Theme }) => theme.colors.body};
        color:  ${({ theme }: { theme: Theme }) => theme.colors.footer};
    }
    footer{
        background: ${({ theme }: { theme: Theme }) => theme.colors.footer};
    }
`;

export default GlobalStyle;
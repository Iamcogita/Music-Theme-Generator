import { createGlobalStyle } from "styled-components";
import { type Theme } from "./App";

const GlobalStyle = createGlobalStyle`
    html {
        background:#5f5f5f url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAABkYmRcXlxk81okAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAR1JREFUKJE9UlGKKDEI85IK9t+Bvvuk0AN0YW+5iZ15Ax20NSapNazY7j65YAMdpXuFefn3wfSv6OSxdYPFareAD/cIVRODA8Jj7YthzFM/5hnZG0+VdYhEeRTLnizPk93gY1TCnZxRFeFl9XCLZMrsjGDreklVPEOHbk/DmahMwsSZftIgWVdTXQzXPzVAI5gm0nTOilwPy2Kjy3ZK6Jiv7X2sukM1kEJpOhSvz0LqKtnguqGBYtnZRITueFpEAoiWQQz261wXgntz/Jn/tJ/uY30BOi2UfSxMeHJ9kz9kQSztMCyjRXZ7Cp3SXJd0tO8KzsFwLnvG5dmpBikMp/PLMaK18RH0uzjo+QjdtJKD98Wc/2MktM0hB6ddA3/KWtp751/fhQAAAABJRU5ErkJggg==);
        font-family: Arial, Helvetica, sans-serif;
        font-size: larger;
    }
    nav{
        background: ${({ theme }: { theme: Theme }) => theme.colors.nav};
    }
    body {
        margin: 0%;
        background: ${({ theme }: { theme: Theme }) => theme.colors.body};
    }
    footer{
        background: ${({ theme }: { theme: Theme }) => theme.colors.footer};
    }
`;

export default GlobalStyle;

import { css } from "styled-components";

export const responsive = (props) => {
    return css`
        @media only screen and (max-width: 390px) {
            ${props}
        }
    `;
};


import styled from "styled-components";
import { firstColor, secondColor, thirdColor, fourthColor, fifthColor } from "../UI/variables";
import ScreenSizes from "../UI/variables";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${fourthColor};
    color: ${secondColor};
    font-size: 1rem;
    padding: 1rem 0;
    line-height: 1.5rem;
    @media only screen and (min-width : ${ScreenSizes.tablet}){
        font-size: 1.75rem;
        line-height: 2.5rem;     
    }
    @media only screen and (min-width : ${ScreenSizes.desktop}){
        font-size: 2.5 rem;
    }
`
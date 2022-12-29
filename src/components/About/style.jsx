import styled from "styled-components";
import { firstColor, secondColor, thirdColor, fourthColor, fifthColor } from "../UI/variables";
import ScreenSizes from "../UI/variables";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${fifthColor};
    color: ${secondColor};
    font-size: 2rem;
    padding: 0 0;
    font-size: .75rem;
    img {
       width: 100vw;
       padding: 0;
    }
    @media only screen and (min-width : ${ScreenSizes.mobile}){
        font-size: 1rem;
    }
    @media only screen and (min-width : ${ScreenSizes.tablet}){
        font-size: 1.75rem;        
    }
    @media only screen and (min-width : ${ScreenSizes.desktop}){
        padding: 5rem 1rem;
        font-size: 2rem;
        flex-direction: row;
        img {
            max-width: 40%;
            object-fit: contain;
        }        
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    line-height: 1.25rem;
    h1{
        color: ${firstColor};
        font-weight: bold;
        font-size: 2rem;        
        margin-bottom: 1rem;
    }
    @media only screen and (min-width : ${ScreenSizes.mobile}){
        
    }
    @media only screen and (min-width : ${ScreenSizes.tablet}){
        line-height: 2.5rem;
    }
    @media only screen and (min-width : ${ScreenSizes.desktop}){
        width: 40%;      
        padding: 0rem 6rem;
        h1 { font-size: 4rem;}
    }
`
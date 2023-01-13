import styled from "styled-components" 
import ScreenSizes from "../UI/variables";

export const ProductsListContainer = styled.div`
    @media only screen and (min-width : ${ScreenSizes.tablet}){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    }
`
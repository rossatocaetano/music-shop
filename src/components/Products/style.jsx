import styled from "styled-components";
import { firstColor, secondColor, thirdColor, fourthColor, fifthColor } from "../UI/variables";
import ScreenSizes from "../UI/variables";

export const ProductsContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${secondColor};
  color: ${fifthColor};
  img {
    object-fit: contain;
    width: 40vw;
    margin-right: 1rem;
  }
  ul {
      display: flex;
      flex-direction: column;
      li {
        padding: .125rem;
        &:first-child {
          font-weight: bold;
          font-size: 1.25rem;
        }
      }     
  }
  @media only screen and (min-width : ${ScreenSizes.mobile}){
        
      }
  @media only screen and (min-width : ${ScreenSizes.tablet}){
    width: 50%;
    box-sizing: border-box;
    line-height: 1.5rem;
    flex-direction: column;
    border: 1px solid ${thirdColor};
    img {
      margin-right: 0;
    }
    ul {
      text-align: center;
    }
    }
  @media only screen and (min-width : ${ScreenSizes.desktop}){
    img {
      width: 25vw;
    }

      }  
`

import styled from "styled-components";
import { firstColor, secondColor, thirdColor, fourthColor, fifthColor } from "../UI/variables";
import ScreenSizes from "../UI/variables";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  background-color: ${fifthColor};
  color: ${secondColor};
  padding: 1.5rem .5rem;
  font-size: .75rem;
  @media only screen and (min-width : ${ScreenSizes.mobile}){
    padding: 1.5rem;
    font-size: 1rem;
    }
  @media only screen and (min-width : ${ScreenSizes.tablet}){
    padding: 3rem 1.5rem;
    font-size: 1.75rem;
  }
  @media only screen and (min-width : ${ScreenSizes.desktop}){
    padding: 3rem 1.5rem;
    font-size: 2.25rem;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
`

export const ItemContainer = styled.li`
  padding: 0 .25rem;
  a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
  }
  a:visited {
    color: inherit;
  }
  a:hover {
    color: ${thirdColor};
    font-weight: bold;
  }
  @media only screen and (min-width: ${ScreenSizes.mobile}){
    padding: 0 .5rem;    
    }
    @media only screen and (min-width: ${ScreenSizes.tablet}){
    padding: 0 1rem;    
    }
  
`
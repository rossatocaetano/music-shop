import { DescriptionContainer, ProductsContainer } from "./style"
import img_1 from "../../img/img_1.jpg"

export const Products = (props) => {
  return (
      <ProductsContainer>
        
        <img src={props.image}></img>
  
        <ul>
          {props.items.map((item, index) => {
              return (
                <li key={index}>
                      {item}
                </li>
              )
          })}
        </ul>
      </ProductsContainer>
  )
}
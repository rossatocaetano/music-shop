import { ProductsListContainer} from "./style";


export const ProductsList = (props) => {
    return ( 
        <ProductsListContainer>
            { props.children } 
        </ProductsListContainer> )
};
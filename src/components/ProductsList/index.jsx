import { ProductsListContainer} from "./style";


export const ProductsList = (props) => {
    return ( 
        <ProductsListContainer>
            <hidden id={props.id}></hidden>
            { props.children } 
        </ProductsListContainer> )
};
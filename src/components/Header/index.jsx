import { HeaderContainer, ListContainer, ItemContainer } from "./style";




export const Header = (props) => {
  return(
    <HeaderContainer>
      <h1>{ props.logo }</h1>
      <ListContainer>
      {props.items.map((item, index)=> {
        return (
          <ItemContainer><a href={ props.links[index] }>{ item }</a></ItemContainer>
        )
      })}
      </ListContainer>
    </HeaderContainer>
    )
}
import { HeaderContainer, ListContainer, ItemContainer } from "./style";

export const Header = () => {
  return(
    <HeaderContainer>
      <h1>MUSIC SHOP</h1>
      <ListContainer>
        <ItemContainer><a href='#'>Sobre</a></ItemContainer>
        <ItemContainer><a href='#'>Produtos</a></ItemContainer>
        <ItemContainer><a href='#'>Contatos</a></ItemContainer>
      </ListContainer>
    </HeaderContainer>
    )
}
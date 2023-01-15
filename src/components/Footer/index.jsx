import { FooterContainer } from "./style";

export const FooterComponent  = (props) => {
    return (
    <FooterContainer>
        <h3 id={props.id}>Fulano da Silva</h3>
        <p>+55 11 9.9999-9999</p>
    </FooterContainer>
    )
}
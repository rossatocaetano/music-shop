import { AboutContainer, ContentContainer } from "./style";
import Banner from "../../img/banner.jpg"

export const About = (props) => {
    return(
    <AboutContainer>
        <img src={Banner} alt="Violão" id={ props.id }/>
        <ContentContainer>
            <h1>SOBRE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur nunc molestie mi convallis volutpat. Quisque sed nisl ornare, eleifend est vel, pharetra diam. Sed sed efficitur tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus imperdiet nec ligula sit amet aliquet. Pellentesque at gravida felis. Sed libero erat, molestie in mi quis, condimentum fermentum odio.</p>
        </ContentContainer>
    </AboutContainer>
    )
}
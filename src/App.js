import { Header } from "./components/Header";
import { GlobalStyle } from "./components/GlobalStyle";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { ProductsList } from "./components/ProductsList";
import { FooterComponent } from "./components/Footer";

/* IMAGES IMPORTS */
import img_1 from "./img/img_1.jpg"
import img_2 from "./img/img_2.jpg"
import img_3 from "./img/img_3.jpg"


const logo = 'MUSIC SHOP';
const links = ['#sobre', '#produtos', '#contatos'];
const items = ['Sobre', 'Produtos', 'Contatos']

const fakeData = ['Violão Rossato', 'Madeira especial', 'Corda Nobre', 'Braço dez', 'Tarracha zica'];

function App() {
  return (
    <>
      <GlobalStyle />
      <Header logo={logo} items={items} links={links} />
      <About id="sobre" />
      <ProductsList id="produtos">  
        <Products image={img_1} items={fakeData}></Products>
        <Products image={img_2} items={fakeData}></Products>
        <Products image={img_3} items={fakeData}></Products>
      </ProductsList>
      <FooterComponent id="contatos" ></FooterComponent>
    </>    
  );
}

export default App;

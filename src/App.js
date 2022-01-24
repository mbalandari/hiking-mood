import Header from './components/Header';
import { GlobalStyle, ImageContainer, Wrapper } from './styles';
import Footer from './components/Footer';
import ImgBox from './components/ImgBox';
;



const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          <ImgBox />
        </ImageContainer>
      </Wrapper>
    </>
  );
}

export default App;

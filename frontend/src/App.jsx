import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: hidden;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/img/annie-spratt-yI3weKNBRTc-unsplash.jpg');
      background-color: #d5d2d2;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.3;
      z-index: -1;

    }
  }
  button {
    padding: 1rem;
    background-color: var(--four);
    border: none;
    color: var(--two);
    border-radius: 5px;
    text-decoration: none;
}
button:hover {

    color: var(--one);
}
`;


function App() {
  return (
    <>
    <GlobalStyle />
    <NavBar/>
    <Footer/>

    </>
  )
}

export default App

import styled from 'styled-components'
import ImageGallery from '../components/ImageGallery';

const HomeContainer = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const HeroHeading = styled.section`

  color: #000000;
  width: 100%;
  padding: 8vh;
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  overflow-y: hidden;
  border-bottom: 1px solid #bbbab9;
  h1 {
    overflow: hidden;
    font-size: 3rem;
  }
  p {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px) {
        padding: 2vh;

        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1.2rem;
        }
    }
`;

const HeroImage = styled.img`
  border-radius: 10px;
  width: 500px;
  height: auto;
  @media only screen and (max-width: 768px) {
        width: 90vw;
    }
  `;

const MainContainer = styled.main`

`;

const FlexContainer = styled.section`
    margin-top: 10vh;
    margin-bottom: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 400px;
  width: 100%;
  overflow-y: hidden;
  @media only screen and (max-width: 768px) {
        flex-direction: column;
        height: max-content;

    }
`;

const FlexItem = styled.div`
  width: 600px;
  height: max-content;
  margin-bottom: 10vh;
  color: #000000;
  align-content: center;
  text-align: center;
  padding: 10vh;
  border-radius: 10px;
  overflow-y: hidden;
  h2 {
    font-size: clamp(34px, 2vw, 32px);
    overflow-y: hidden;
  }

  p {
    font-size: clamp(20px, 1.5vw, 20px);
  }
  button {
    margin: 1rem;
    border-radius: 5px;
  }
  @media only screen and (max-width: 768px) {
    width: 130vw;
}

`;



function Home() {
  return (
    <HomeContainer>
        <HeroHeading >
            <h1>Vad blir ditt dröm koppel till ringen?</h1>
            <h1>Känguruläder eller Satin?</h1>
        </HeroHeading>
        <MainContainer >
            <FlexContainer>
                <div id="item1">
                    <HeroImage src="img/springande-hund.jpg" alt="Springande hund" />
                </div>
                <FlexItem>
                    <h2>Starkare och tåligare koppel?</h2>
                    <p>
                        Extra starka och hållbara utställningskoppel är drömmen
                        till de allra flesta utställare och att man även kan få
                        dem riktigt snygga, enkla eller lyxiga är väl mer än vad
                        man kan önska sig? Specialgjorda just efter dina
                        önskemål!
                    </p>
                    <h3>Hör av dig om du vill veta mer!</h3>
                    <button>
                        Kontakta oss
                    </button>
                </FlexItem>
            </FlexContainer>
            <ImageGallery/>
            <HeroHeading>
                <h1>Matcha ditt koppel med ett snyggt halsband!</h1>
                <p>
                    Helstryp, halvstryp med kedja eller läder helt upp till
                    dig
                </p>

            </HeroHeading>
            <FlexContainer>
            {/* <FlexItem>
                    <h2>Hör av dig om du vill veta mer!</h2>
                    <button>
                        Kontakta oss
                    </button>
                </FlexItem> */}
                <div id="item4">
                    <HeroImage
                        src="/img/hund-liggandes.jpg"
                        alt="Hund liggandes med ett koppel på nosen"
                    />
                </div>

            </FlexContainer>
        </MainContainer>
    </HomeContainer>
  )
}

export default Home

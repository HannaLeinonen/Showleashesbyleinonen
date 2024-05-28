import styled from 'styled-components'

const AboutContainer = styled.div``
const HeadingImage = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/img/header-img-about-page.JPG');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(5px);
        z-index: -1;
    }
    h1 {
        font-size: 70px;
    }

    h1,
    h4 {
        position: relative;
        z-index: 1;
        overflow-y: hidden;
        text-align: center;
    }
`
const Main = styled.main`
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr;
    grid-row: auto;
    grid-gap: 2rem;
    width: 60vw;
    margin: 0 auto;
    align-items: center;
    font-size: 1.2rem;
    padding-top: 3rem;

    .text-1 {
        grid-column: 1/6;
    }
    .text-2 {
        grid-column: 1/2;
        grid-row: 2;
    }
    .text-3 {
        grid-column: 2/6;
        grid-row: 2;
        width: 98%;
    }
    .text-4 {
        grid-column: 1/4;
        grid-row: 3;
    }

    figure.card {
        display: grid;
        grid-template: minmax(0, 1fr) / (0, 1fr);
        grid-template-areas: 'stack';
        width: 270px;
    }
    figure.card > img {
        grid-area: stack;
        object-fit: cover;
        place-self: stretch;
    }
    figure.card > figcaption {
        grid-area: stack;
        align-self: end;
        justify-self: stretch;

        background-color: #27273980;
        color: var(--two);

        text-align: center;
        padding: 12px;
        backdrop-filter: blur(6px);
    }
`

function About() {
    return (
        <AboutContainer>
            <HeadingImage>
                <div>
                    <h1>-Om oss-</h1>
                    <h4>Koppel och halsband i känguruläder och silkessnöre</h4>
                </div>
            </HeadingImage>
            <Main>
                <section className="text-1">
                    <p>
                        Utställningskoppel och halsband i känguruläder och
                        satinsnöre. Känguruläder är det starkaste och mjukaste
                        lädret på marknaden och därför har jag valt att använda
                        mig av detta för att ge kunder det bästa kvalité på
                        koppel och halsband! Ett koppel i läder har en lång
                        livstid och sköter man om det håller det i flera år
                        därav extra prisvärt. Satinsnöre är det billigare
                        alternativet och lite mer traditionellt material i
                        utställningskoppel och halsband.
                    </p>
                </section>
                <aside className="text-2">
                    <figure className="card">
                        <img src="img\blått-koppel-400px.jpg" alt="" />
                        <figcaption>Blue & White</figcaption>
                    </figure>
                </aside>
                <section className="text-3">
                    <p>
                        Känguruläder flätas i 4 eller 6-flätning, inuti finns en
                        paracord lina som har en brottstyrka på 100kg och finns
                        även möjlighet för en lina på 200kg för de som har lite
                        starkare hundar.{' '}
                    </p>
                    <p className="text-3">
                        Lädret behandlas innan och efter flätning för bästa
                        vårdnad med balsam för läder som även ger extra skydd
                        för sol och vatten, de rullas även ut för att få en
                        mjukare avslutning.
                    </p>
                </section>
                <section className="text-4">
                    <p>
                        Känguruläder flätas i 4 eller 6-flätning, inuti finns en
                        paracord lina som har en brottstyrka på 100kg och finns
                        även möjlighet för en lina på 200kg för de som har lite
                        starkare hundar. Lädret behandlas innan och efter
                        flätning för bästa vårdnad med balsam för läder som även
                        ger extra skydd för sol och vatten, de rullas även ut
                        för att få en mjukare avslutning. Satinsnöre flätas i 4,
                        6 eller 8-flätning och halsband till de mindre hundarna
                        kan flätas i 2-flätning om så önskas. Hakar och O-ringar
                        finns i Silver, Guld, Rosé guld, Svart och Oljefärgad,
                        finns i flera olika storlekar efter ditt behov.
                        Halvstrypkedjor finns i Silver (XS, S & M), Guld (S & M)
                        och Svart (M). Finns även Snake halvstryp (S) Ditt paket
                        fraktas via postnord och är spårbart för att du ska
                        kunna följa din beställning hela vägen till din dörr!{' '}
                    </p>
                </section>
            </Main>
        </AboutContainer>
    )
}

export default About

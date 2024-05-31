import styled from 'styled-components'

const ImageGalleryContainer = styled.div`
    margin-top: 30vh;
    margin-bottom: 30vh;
    text-align: center;
    background-color: var(--four);
    color: var(--one);
    padding-top: 2rem;
    padding-bottom: 2rem;

    h1 {
        overflow-y: hidden;
    }
`
const ImageGalleryCards = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;

    figure.card {
        display: grid;
        grid-template: minmax(0, 1fr) / (0, 1fr);
        grid-template-areas: 'stack';
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

        text-align: end;
        padding: 12px;
        backdrop-filter: blur(6px);
    }
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`
function ImageGallery() {
    return (
        <div>
            <ImageGalleryContainer>
                <h1>Exempel på olika färg- och pärlkombinationer</h1>
                <ImageGalleryCards>
                    <figure className="card">
                        <img src="img\blått-koppel-400px.jpg" alt="" />
                        <figcaption>Blue & White</figcaption>
                    </figure>
                    <figure className="card">
                        <img src="img\blått-koppel-400px.jpg" alt="" />
                        <figcaption>Blue & White</figcaption>
                    </figure>
                    <figure className="card">
                        <img src="img\blått-koppel-400px.jpg" alt="" />
                        <figcaption>Blue & White</figcaption>
                    </figure>
                    <figure className="card">
                        <img src="img\blått-koppel-400px.jpg" alt="" />
                        <figcaption>Blue & White</figcaption>
                    </figure>
                </ImageGalleryCards>
            </ImageGalleryContainer>
        </div>
    )
}

export default ImageGallery

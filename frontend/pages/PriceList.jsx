import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ColorGallery from '../components/ColorGallery'

const PricelistContainer = styled.div`
    width: 100%;
`

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
        background-image: url('img/header-img-price-page.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(5px);
        z-index: -1;
    }
    h1 {
        font-size: 70px;
    }
    h4 {
        font-family: 'Dancing Script', cursive;
    }

    h1,
    h4 {
        position: relative;
        z-index: 1;
        overflow-y: hidden;
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        height: 35vh;
    }
`

const InfoContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 10vh;
    margin-bottom: 10vh;

    h1 {
        font-size: 45px;
        overflow-y : hidden;
    }
`

const ColorList = styled.section`
    width: 70%;
    margin: 0 auto;

    h2 {
        text-align: center;
        overflow-y: hidden;
    }
    ul {
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        width: 95vw;

        ul {
            padding: 0;
        }
    }
`

const ColorSection = styled.section`
    width: 100%;
    padding: 1rem;

    h2 {
        margin-bottom: 0.5rem;
        font-weight: bold;
    }
    li {
        font-size: 24px;
        height: 10vh;
        border-bottom: 1px solid #bbbab9;
        margin-bottom: 2rem;
    }
    .length {
        position: absolute;
        left: 0;
    }
    .price {
        position: absolute;
        right: 0;
    }
`;

const PriceList = () => {
    const [data, setData] = useState([])

    const [colors, setColors] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch pricelist
                const priceResponse = await axios.get('/pricelist')
                const prices = priceResponse.data

                // Fetch lengths
                const lengthsResponse = await axios.get('/lengths')
                const lengths = lengthsResponse.data

                // Fetch colors
                const colorsResponse = await axios.get('/colors')
                const colors = colorsResponse.data

                setColors(colors)

                // Create a combined pricelist with lengths and color names
                const combinedPriceList = prices
                    .map((price) => {
                        const length = lengths.find(
                            (length) => length.id === price.length_id
                        )
                        const color = colors.find(
                            (color) => color.id === price.color_id
                        )

                        if (length && color) {
                            return {
                                ...price,
                                range: length.range,
                                base_price: price.base_price,
                                color_name: color.name
                            }
                        }
                        return null
                    })
                    .filter((item) => item !== null) 

                setData(combinedPriceList)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <PricelistContainer>
            <HeadingImage>
                <div>
                    <h1>-Priser-</h1>
                    <h4>
                        Välj den perfekta kombinationen för dig och din hund!
                    </h4>
                </div>
            </HeadingImage>
            <InfoContainer>
                <h1>Känguruläder</h1>
                <h4>
                    Exempel priser på 4-flätat koppel beroende på färgtyp och
                    längd. <br /> Färgerna som finns är solida, shimmer/metallic och mixat med solida och shimmer/metallic.
                </h4>
                <h4>
                    {' '}
                    Alla priser är exklusive frakt. Frakt kostnad är 58 kr för
                    spårbart paket.
                </h4>
            </InfoContainer>
            <ColorList>
                {colors.map((color) => (
                    <ColorSection key={color.id}>
                        <h2>{color.name}</h2>
                        <ul>
                            {data
                                .filter((item) => item.color_id === color.id)
                                .map((item, index) => (
                                    <li
                                        key={index}
                                        style={{ position: 'relative' }}
                                    >
                                        <span
                                            className="length"

                                        >
                                            {item.range}
                                        </span>
                                        <span
                                            className="price"

                                        >
                                            Pris från: {item.base_price} kr
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </ColorSection>
                ))}
            </ColorList>
            <ColorGallery />

            <InfoContainer>
                <h1>Satin</h1>
                <h4>
                    Exempel priser på 4-flätat koppel beroende längd.
                </h4>
            </InfoContainer>
        </PricelistContainer>
    )
}

export default PriceList

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'bootstrap-icons/font/bootstrap-icons.css'

const FooterContainer = styled.footer`
    background-color: var(--four);
    color: var(--two);
    display: flex;
    flex-direction: column;
    padding-top: 1rem;

    margin-top: 10vh;
    align-items: center;

    div > h1 {

        overflow-y: hidden;
        color: var(--one);
        font-family: "Dancing Script", cursive;
    }
    button {
        margin: 2rem;
        padding: 1rem;

        border: 1px solid var(--one);
        color: var(--two);
        border-radius: 5px;
        text-decoration: none;

        &:hover {
            color: var(--one);
            border: 1px solid var(--three);
            transition: ease 0.4s;
        }
    }
`
const CopyWriteSymbol = styled.div`
    margin-top: 10vh;
`

const SocialMediaLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 1rem;
    }

    .link {
        color: var(--two);
        font-size: 2rem;
        text-decoration: none;

        &:hover {
            transition: ease 0.4s;
            color: var(--three);
        }
    }
`

function Footer() {
    return (
        <FooterContainer>
            <div>
                <h1>Beställ ditt nya koppel & halsband!</h1>
            </div>
            <Link to="/contact">
                            <button>Kontakta oss</button>
                        </Link>

            <SocialMediaLinks>
                <ul className="flex-container">
                    <li>
                        <a href="https://www.facebook.com/showleashesbyleinonen#" className="link" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/showleashesbyleinonen/" className="link" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link">
                            <i className="bi bi-tiktok"></i>
                        </a>
                    </li>
                </ul>
            </SocialMediaLinks>
            <CopyWriteSymbol>
                <p>
                    &copy;2023. Showleashes by Leinonen{' '}
                    <span>/ Handmade with love</span>
                </p>
            </CopyWriteSymbol>
        </FooterContainer>
    )
}

export default Footer

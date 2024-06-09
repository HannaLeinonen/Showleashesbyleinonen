import ContactForm from '../components/ContactForm'
import ImageGallery from '../components/ImageGallery'
import styled from 'styled-components'
import 'bootstrap-icons/font/bootstrap-icons.css'

const HeadingImage = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
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
        background-image: url('img/header-img-contact-page.jpg');
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

    @media only screen and (max-width: 768px) {
        height: 35vh;
    }
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
        margin: 1.5rem;
        color: var(--three);
        font-size: 3rem;
        text-decoration: none;

        &:hover {
            transition: ease 0.4s;
            color: var(--two);
        }
    }
`

const InfoContent = styled.div`
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 10vh;

    h3 {
        margin-bottom: 3rem;
    }
`

function Contact() {
    return (
        <div>
            <HeadingImage>
                <h1>-Kontakta oss-</h1>
            </HeadingImage>
            <ContactForm />
            <ImageGallery />
            <InfoContent>
                <h3>Vi finns även på Instagram, Facebook & TikTok</h3>
                <SocialMediaLinks>
                    <ul className="flex-container">
                        <li>
                            <a
                                href="https://www.facebook.com/showleashesbyleinonen"
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/showleashesbyleinonen/"
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
            </InfoContent>
        </div>
    )
}

export default Contact

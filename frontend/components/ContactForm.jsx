import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import axios from 'axios'
import Modal from './Modal.jsx'

// Validation with Yup
const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(50, 'Max 50 tecken')
        .required('Förnamn är obligatoriskt'),
    lastName: Yup.string()
        .max(50, 'Max 50 tecken')
        .required('Efternamn är obligatoriskt'),
    email: Yup.string()
        .email('Ogiltig e-postadress')
        .required('E-post är obligatoriskt'),
    message: Yup.string()
        .max(500, 'Max 500 tecken')
        .required('Meddelande är obligatoriskt')
})

// Styled components
const Container = styled.div`
    h1 {
        margin-bottom: 2rem;
        text-align: center;
        overflow-y: hidden;
    }
`

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 35vw;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f950;

    @media only screen and (max-width: 768px) {
        width: 95vw;
    }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledField = styled(Field)`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

const StyledTextArea = styled(Field)`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-height: 100px;
    resize: vertical;
`

const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 0.8em;
`

const StyledButton = styled.button`
    padding: 10px 15px;
    margin-top: 20px;
    background-color: var(--four);
    color: var(--two);
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        color: var(--one);
        border: 1px solid var(--one);
        transition: ease 0.4s;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`

const ContactForm = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    return (
        <Container>
            <h1>
                Kontakta oss gärna här nedanför vid frågor eller funderingar!
            </h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log(values)

                    try {
                        const response = await axios.post(
                            'http://localhost:10000/contact',
                            values
                        )
                        console.log('Message sent: ', response)
                        setModalMessage('Ditt meddelande har mottagits!')
                        setModalOpen(true)
                        resetForm()
                    } catch (error) {
                        console.error('Error sending data', error)
                        setModalMessage('Ett fel uppstod, försök igen.')
                        setModalOpen(true)
                    } finally {
                        setSubmitting(false)
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <StyledForm>
                        <StyledDiv>
                            <label htmlFor="firstName">Förnamn</label>
                            <StyledField type="text" name="firstName" />
                            <StyledErrorMessage
                                name="firstName"
                                component="div"
                            />
                        </StyledDiv>
                        <StyledDiv>
                            <label htmlFor="lastName">Efternamn</label>
                            <StyledField type="text" name="lastName" />
                            <StyledErrorMessage
                                name="lastName"
                                component="div"
                            />
                        </StyledDiv>
                        <StyledDiv>
                            <label htmlFor="email">E-post</label>
                            <StyledField type="email" name="email" />
                            <StyledErrorMessage name="email" component="div" />
                        </StyledDiv>
                        <StyledDiv>
                            <label htmlFor="message">Meddelande</label>
                            <StyledTextArea type="textarea" name="message" />
                            <StyledErrorMessage
                                name="message"
                                component="div"
                            />
                        </StyledDiv>
                        <StyledButton type="submit" disabled={isSubmitting}>
                            Skicka
                        </StyledButton>
                    </StyledForm>
                )}
            </Formik>

            {isModalOpen && (
                <Modal
                    message={modalMessage}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </Container>
    )
}

export default ContactForm

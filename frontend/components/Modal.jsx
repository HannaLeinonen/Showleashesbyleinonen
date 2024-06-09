import PropTypes from 'prop-types'
import styled from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); // Transparent bakgrund
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div`
    background-color: var(--four);
    color: var(--two);
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    text-align: center;

    h2 {
        overflow-y: hidden;
        margin: 2rem;
    }
`

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border: 1px solid var(--two);
    color: var(--two);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        color: var(--one);
        border: 1px solid var(--three);
        transition: ease 0.4s;
    }
`

const Modal = ({ message, onClose }) => {
    return (
        <Overlay>
            <ModalContainer>
                <h2>{message}</h2>
                <Button onClick={onClose}>Stäng</Button>
            </ModalContainer>
        </Overlay>
    )
}

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal

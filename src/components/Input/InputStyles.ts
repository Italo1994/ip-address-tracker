import styled from 'styled-components'
import arrowIcon from '../../../public/images/icon-arrow.svg';

export const InputContainer = styled.div`
    width: 400px;
    height: 3rem;
    position: relative;

    @media (max-width: 500px) {
        width: 350px;
    }
`

export const InputField = styled.input`
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    border-radius: 1rem;
    color: black;
    padding-left: 1rem;
    border: 1px solid black;

    &::placeholder {
        color: gray;
    }
`

export const InputIcon = styled.button`
    position: absolute;
    right: -1.2rem;
    top: 0.1rem;
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    width: 4rem;
    height: 100%;
    border-radius: 1rem;
`
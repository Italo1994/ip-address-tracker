import styled from 'styled-components'

export const PanelContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 75%;
    height: 10rem;
    background-color: white;
    border-radius: 1rem;
    position: absolute;
    top: 14rem;
    z-index: 3;
    border: 1px solid black;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        width: 90%;
        height: auto;
        top: 9rem;
        padding: 1rem;
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        width: 90%;
        height: auto;
        top: 9rem;
        padding: 1rem;
    }
`
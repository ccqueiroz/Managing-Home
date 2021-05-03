import styled from 'styled-components';

interface IContainerSectionMsgBox {
    justOne?: boolean;
}

export const Container = styled.section<IContainerSectionMsgBox>`
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    justify-content:center;
    padding: 0 20px;

    @media(max-width: 500px){
        flex-direction: column-reverse;
        justify-content:center;
        align-items: center;
        padding: 0 7%;
    }

    @media(max-width: 400px){
        padding: 0 9%;

    }

`;
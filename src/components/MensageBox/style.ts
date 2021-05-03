import styled from 'styled-components';


interface IContainerMsgBox {
    theLast?: boolean;
}

export const Container = styled.section<IContainerMsgBox>`
    width:100%;
    background-color: ${props => props.theme.colors.secondary};
    min-height: 200px;
    /* height: 230px; */
    margin: 0 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    box-shadow: 1px 3px 15px 1px rgb(0 0 0 / 30%);

    @media(max-width: 800px){
        margin: 0 10px;
        height: 230px;
    }

    @media(max-width: 500px){
        margin-bottom: ${props => props.theLast ? '30px' : '0px'};
    }
`;


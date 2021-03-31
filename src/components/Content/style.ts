import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CONTENT;

    background-color: ${ props => props.theme.colors.primary };

    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
        height: 20px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary}
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary}
    }

`;
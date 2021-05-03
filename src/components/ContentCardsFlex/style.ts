import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 5px 30px;
    margin-bottom: 40px;

    @media(max-width: 700px){
        flex-direction: column;
        height: auto;
        margin-bottom: 10px;
    }

`;
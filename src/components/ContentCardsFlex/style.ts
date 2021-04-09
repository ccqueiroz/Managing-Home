import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 5px 30px;
    margin-bottom: 40px;


    @media(max-width: 1200px){
        width: 100%;
        height: 480px;

        flex-direction: column;
        
    }

`;
import styled from 'styled-components';

export const GridLayout = styled.div`
    width:100%;
    /* height: 110vh; */
    display:grid;

    grid-template-columns: 130px auto;
    grid-template-rows: 70px auto;
    
    grid-template-areas: 
    'ASIDE MAINHEADER'
    'ASIDE CONTENT';

    @media(max-width: 800px){
        grid-template-columns: auto;
        grid-template-areas: 
        'MAINHEADER MAINHEADER'
        'CONTENT CONTENT';
    }

`;


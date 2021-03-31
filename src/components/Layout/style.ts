import styled from 'styled-components';

export const GridLayout = styled.div`
    width:100%;
    height: 100vh;
    display:grid;

    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    
    grid-template-areas: 
    'ASIDE MAINHEADER'
    'ASIDE CONTENT';
    


`;


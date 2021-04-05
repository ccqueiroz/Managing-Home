import  styled from 'styled-components';

export const Container = styled.section`
    width:100%;
    max-width: 960px;
    background-color: ${props => props.theme.colors.secondary};
    min-height: 200px;
    margin: 0 30px;
    border-radius: 10px;
`;


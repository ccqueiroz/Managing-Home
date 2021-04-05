import  styled  from 'styled-components';

export const Container = styled.section`
    width:100%;
    height: 100%;
    padding: 10px 30px 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center
`;
export const MsgMain = styled.section`
    height: 70%;
    color: ${props => props.theme.colors.white}
`;
export const MsgFooter = styled.section`
    height: 30%;
    color: ${props => props.theme.colors.white}

`;

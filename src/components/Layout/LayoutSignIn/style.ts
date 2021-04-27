import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;


`;
export const ContentForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 3px 0px 10px 0px rgba(116,119,222,0.7);
    background: linear-gradient(to right top, #5355d0, #695fd9, #7d68e3, #9173ec, #a37df6);

`;
export const LoginImage = styled.div`
    width: 100%;
    height: 100%;

    > img{
        width: 100%;
        height: 100%;
    }

    @media(max-width: 910px){
        display: none;
    }
`;

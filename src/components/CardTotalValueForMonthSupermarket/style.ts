import styled from 'styled-components';

interface IBgColor{
    bgColor: string
}
export const Container = styled.article<IBgColor>`
    width: 45%;
    height: 80px;
    border-radius: 10px;
    box-shadow: 1px 3px 15px 1px rgb(0 0 0 / 30%);
    background-color: ${props => props.bgColor};
    display: flex;
    justify-content: center;
    align-items:center;
    margin-right:18px;
    margin-left:18px;

    @media(max-width: 650px){
        width: 100%;
        margin-bottom:10px;
    }
`;
export const Title = styled.h2`
    width: 90%;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    display: flex;
    flex-direction:column;
    justify-content: center;

    align-items:center;

    @media(max-width: 1280px){
        font-size: 14px;
    }
    @media(max-width: 650px){
        width: 100%;
    }

`;
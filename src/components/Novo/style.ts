import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    right: 30px;
    bottom: 15px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover .teste{
        display: flex;
    }

    >button{
        outline: none;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.tertiary};
        opacity: .7;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .8s;
        box-shadow: 2px 4px 15px 3px rgb(0 0 0 / 30%);

        font-size: 25px;
        font-weight: normal.100;
        color: ${props => props.theme.colors.white};
    }

    &:hover{
        opacity: .4;
    }
    &:active{
        transform: translateY(5px);   
        box-shadow: 2px -4px 15px 3px rgb(0 0 0 / 70%);
    }

`;
export const Alt = styled.div`
    position: absolute;
    top: -33px;
    font-size: 16px;
    background: ${props => props.theme.colors.textBallon};
    border-radius: 10px;
    width: 180px;
    height: 30px;
    right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;

    display: none;

    transition: all 2s;

    ::before{
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid ${props => props.theme.colors.textBallon};
        transition: all 2s;
        bottom: -20px;
        left: calc(100% - 47px);
    }
`;
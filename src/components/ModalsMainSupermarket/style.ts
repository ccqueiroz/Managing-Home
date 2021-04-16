import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    position: relative;
    display: flex;
    justify-content: center;
    @keyframes fadeIn {
        0%{
            opacity: 0
        }
        100%{
            opacity: 1;
        }
    }
    animation: fadeIn .5s;


    > button {
        position: absolute;
        font-size: 24px;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        right: 11px;
        top: 8px;
        transition: all .3s;
    }
    >button:hover{
        opacity: .7;
    }
    >button:active{
        transform: translateY(2px);
    }
`;

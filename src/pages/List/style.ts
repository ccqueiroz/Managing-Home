import styled from 'styled-components';

export const Filters = styled.div`
    width: 100%;
    height: 60px;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    > button {
        width: 80px;
        height: 40px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        background-color: 'red';
        transition: all .3s;

    }

    > button > h4 {
        font-weight: normal;
        color: ${props => props.theme.colors.secondary}
    }
    > button > span{
        width: 40px;
        height: 5px;
        margin-top: 5px;
    }

    > button > span.tag-recorrentes{
        background-color: ${props => props.theme.colors.success};
    }
    > button > span.tag-eventuais{
        background-color: ${props => props.theme.colors.warning};
    }

    > .button:hover{
        transform: translateY(-2px);
        opacity: .7;
    }

`;

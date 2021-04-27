import styled from 'styled-components';

export const Label = styled.label`
    width: 90%;
    max-width: 300px;
    height: 60px;
    margin-bottom: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    > .spanLabel{
        position: absolute;
        top: 35px;
        left: 20px;
        transition: all .15s;

        z-index: 99;
        color: #e1e1e6;
    }

    .spanFocus{
        top: 15px;
        font-size: 12px;
        opacity: .6;
    }

    @media(max-width: 800px){
        .spanLabel{
            left: 17px;
        }
    }

`;
export const Input = styled.input`
    width: 90%;
    height: 30px;
    background-color: transparent;
    border-bottom: 2px solid #e1e1e6;
    outline: none;
    padding: 0 5px;

    color: #e1e1e6;

    .error{
        border-bottom: 2px solid #e30909d9;
    }

    position: relative;
    z-index: 999;

    @media(max-width: 1040px){
        
    }

`;
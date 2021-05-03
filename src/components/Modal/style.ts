import styled from 'styled-components';

interface IImgInputNumber {
    img: any;
}
export const Container = styled.div<IImgInputNumber>`
    width: 100%;
    height: auto;
    position: fixed;
    background-color: rgba(0, 0, 0, 50%);
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);

    z-index: 999;

    > form{
        position: relative;
        width: 400px;
        height: 450px;
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 15px;
    }

    > form > h2 {
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        color: ${props => props.theme.colors.white};
        margin-top: 10px;
    }
    
    > form  > .btnModal{
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        transition: all .3s;
        

    }
    >form > .btnModal:hover{
        opacity: .7;
    }
    > form > .btnModal:active{
        transform: translateY(2px);
    }
    > form > .formulario{
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        margin: 15% auto;
        align-items: center;
        padding: 20px 5px;

    }

    form > .formulario > .labelForm{
        width: 90%;
        height: 40px;
        display: flex;
        margin: 8px auto;
        flex-direction: column;
        justify-content: center;
    } 
    > form > .formulario > .labelForm > span.requiredEl{
        opacity: 1!important;
    }
    form > .formulario > .labelForm > span.formField_error {
        color: ${props => props.theme.colors.warning};
        font-size: 14px;
        text-align: center;
        margin-top: 5px;
        opacity: 0;
        transition: all .3s;
    }
    form > .formulario > .labelForm > .contentInput > span{
        width: 90px;
        color: ${props => props.theme.colors.white};
    }
    form > .formulario > .labelForm > .contentInput {
        width:100%;
        height: 20px;
        display: flex;
        /* margin: 10px auto; */
        align-items: center;
    }
    form > .formulario > .labelForm > .contentInput > input[type=text], input[type=number], input[type=date], select{
        flex: 1;
        height: 28px;
        border-radius:5px;
        padding-left: 10px;
    }
    form > .formulario > .labelForm > .contentInput > input[type=text]:focus, input[type=number]:focus, input[type=date]:focus, select:focus, input[type=checkbox]:focus{
        border: 2px solid ${props => props.theme.colors.info}
    }
    form > .formulario > .labelForm.checkbox{
        align-self: center;
        height: 10px;
        margin-bottom: 15px;
        
    }
    form > .formulario > .labelForm > .contentInput > select > option{
        display: flex;
        justify-content: center;
    }
    form > .formulario > button{
        width: 150px;
        height: 50px;
        background-color: ${props => props.theme.colors.success};
        margin: 30px auto;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        color: ${props => props.theme.colors.white};
        transition: all .3s;
    }

    form > .formulario > button:hover{
        opacity: .7;
    }
    form > .formulario > button:active{
        transform: translateY(3px);
    }

`;
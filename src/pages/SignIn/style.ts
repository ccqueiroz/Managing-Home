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
export const FormSignIn = styled.form`
    width:95%;
    max-width: 380px;
    height: 370px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .contentLogo{
        width: 81%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    > .contentLogo > h1{
        color: #ffffff;
    }
    > h2{
        color: #e1e1e6;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
        margin-top: 10px;
    }
    >.credentials{
        width: 62%;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        margin-bottom: 15px;
    }
    .Link{
        color: #e1e1e6;
        text-decoration: none;
        transition: all .3s;
    }
    .Link:hover{
        color: #5254cf;
    }
    .crendentialsLinks{
        font-size: 12px;
    }
    > button{
        margin-top: 20px;
        width: 200px;
        height: 40px;
        outline: none;

        background-color: #fe8b8b;
        border-radius: 25px;
        box-shadow: 0px 2px 9px -1px rgba(0,0,0,0.7);

        color: #e1e1e6;
        font-size: 18px;
        font-weight: bold;

        transition: all .3s;
    }

    > button:hover{
        opacity: .7;
    }

    @media(max-width: 800px){
        .credentials{
            width: 53%;
        }
    }
    @media(max-width: 450px){
        .credentials{
           flex-direction: column;
           align-items: center;
        }
    }
    @media(max-width: 380px){
        h2{
            margin-bottom: 15px;
        }
        button{
            height: 45px;
        }
    }

`;

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
        transition: all .3s;

        color: #e1e1e6;
    }

    .spanFocus{
        top: 10px;
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

    @media(max-width: 1040px){
        
    }

`;
import styled from 'styled-components';

export const FormSignIn = styled.form`
    width:95%;
    max-width: 380px;
    height: 410px;
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
        width: 75%;
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

        position: relative;

        transition: all .3s;
    }

    > button:hover{
        opacity: .7;
    }

    @media(max-width: 450px){
        height: 500px;
        .credentials{
           flex-direction: column;
           align-items: center;
        }
        .contentLogo{
            flex-direction: column;
        }
        .contentLogo > h1{
            margin-top: 15px;
        }
    }
    @media(max-width: 380px){
        h1{
            font-size: 30px;
        }
        h2{
            margin-bottom: 15px;
        }
        button{
            height: 45px;
        }
    }
    @media(max-width: 340px){
        h1{
            font-size: 25px;
        }
    }

`;
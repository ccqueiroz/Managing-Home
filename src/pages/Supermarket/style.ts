import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    height: auto;
    margin:0 auto;

    @media(max-width: 500px){
        width: 100%;
    }

`;
export const ContentHeaderCardBox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px auto 15px auto;
    color: ${props => props.theme.colors.white};
    font-size: 24px;
    height: auto;

    > p {
        text-align: center;
        font-size: 16px!important;
        margin: 5px;
        color: ${props => props.theme.colors.white};
        opacity: .8;
    }

    @media(max-width: 800px){
        
    }
    @media(max-width: 500px){
        margin: 0px auto 5px auto;
        font-size: 20px;
        text-align: center;
        margin: 20px auto 15px auto;
        > p{
            font-size: 15px!important;
            margin: 10px auto;
        }

    }
    @media(max-width: 400px){

    }
`;
export const ButtonsCardSupermarket = styled.div`
    width: 80%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 40px;

    > button{
        width: 120px;
        height: 50px;
        border-radius: 10px;
        box-shadow: 1px 3px 15px 1px rgb(0 0 0 / 30%);
        transition: all .3s;
        color: ${props => props.theme.colors.white};
        font-weight: bold;
        font-size: 14px;
        outline: none;

   }

    > button:hover{
        opacity: .7;
    }
    > button:active{
        transform: translateY(2px);
        box-shadow: 1px -3px 15px 1px rgb(0 0 0 / 30%);
    }

    @media(max-width: 500px){
        height: auto;
        flex-direction:column;

        > button{
        width: 100%;
        height: 50px;
        font-size: 14px;
        margin-bottom:15px;
    }
    }
    @media(max-width: 400px){

    }
`;

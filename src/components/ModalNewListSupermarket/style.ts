import styled from 'styled-components';

export const Container = styled.div`
    width: 96%;
    height: 100%;
`;
export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    margin: 20px auto 8px auto;

    > label.titleList{
        display: flex;
        width: 65%;
        height: 60px;
        justify-content: center;
        align-items: center;
    }
    > label.titleList > h3{
        margin-right: 10px;
    }
    > label.titleList > input[type=text]{
        width: 190px;
        height: 30px;
        border-top: none;
        border-right: 1px solid #c2c2c2;
        border-left: 1px solid #c2c2c2;
        border-bottom: 1px solid #c2c2c2;
        outline:none;
        border-radius: 10px;
        padding-left: 13px;
        font-size: 16px;
        margin-right: 15px;
        color: ${props => props.theme.colors.primary};
        transition: all .3s;
        box-shadow: 2px 1px 10px 5px rgba(0,0,0,.1);
    }
    > label.titleList > button{
        width: 120px;
        height: 30px;
        border-radius: 10px;
        background: rgba(83,85,208, .9);
        color: white;
        box-shadow:3px 0px 10px 0px rgb(0 0 0 / 20%);
    
    }
    > label.titleList > input[type=text]:focus{
        border: 1px solid ${props => props.theme.colors.secondary}
    }
    > form {
        width: 80%;
    }
    > form > .headerTable{
        width: 100%;
        height: 60px;
        display: grid;
        grid-template-columns: 2.5fr repeat(2, 80px) 100px;
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 30px;
    }  
    > form > .headerTable > span[data-span='1']  {
        grid-column: 1 / 2;
    }
    > form > .headerTable > span[data-span='2']  {
        grid-column: 2 / 3;
    }
    > form > .headerTable > span[data-span='3']  {
        grid-column: 3 / 4;
    }
    > form > .headerTable > span{
        grid-row: 1 /2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > form > .headerTable > .inputs[data-input="1"] {
        grid-column: 1/2;
    
    }
    > form > .headerTable > select{
        grid-column: 2/3;
    }
    > form > .headerTable > .inputs[data-input="2"] {
        grid-column: 3/4;
        width: 20%;
        min-width:65px;
        padding: 0 3px 0 15px!important;
    }
    > form > .headerTable > .inputs{
        grid-row: 2/3;
        width: 100%;
        min-width: 80px;
        margin: 0 auto;
        border-radius: 10px;
        padding: 0 15px;
        color: ${props => props.theme.colors.primary};
    }
    > form > .headerTable > .select{
        width: 60px;   
        grid-row: 2/3;
        margin: 0 auto;
        border-radius: 10px;
        text-align: center;
        color: ${props => props.theme.colors.primary};
        padding-left:8px;
    }
    > form > .headerTable > button{
        grid-column: 4 / 5;
        grid-row: 2 / 3;
        width: 90px;
        margin: 0 auto;
        border-radius: 10px;
        background: rgba(83,85,208, .9);
        color: white;
        box-shadow:3px 0px 10px 0px rgb(0 0 0 / 20%);
    }
    > form > .headerTable > .inputs:focus{
        border: 1px solid ${props => props.theme.colors.secondary};
    }

    @media(max-width: 1100px){
        > label.titleList{
            width: 80%;

        }
        > form {
            width: 90%;
        }
   }
    @media(max-width: 500px){
        >h2{
            text-align: center;
            font-size: 1.7rem;
            margin-top: 15px;
        }
        > label.titleList{
        width: 100%;
        height: 110px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 10px auto;
        }
        > label.titleList > h3{
            margin-right: 0px;
        }
        > label.titleList > input[type=text]{
            width: 100%;
            height: 30px;
            font-size: 15px;
            margin-right: 0px;
        }
   
        > form {
            width: 100%;
        }
        > form > .headerTable{
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(7,30px);
            grid-template-areas:
            'SPAN1'
            'INPUT1'
            'SPAN2'
            'SELECT'
            'SPAN3'
            'INPUT2'
            'BOTAO';
            grid-column-gap: 30px;
        }  
    > form > .headerTable > span[data-span='1']  {
        grid-area: SPAN1;
        height:30px;
        margin-bottom:5px;
    }
    > form > .headerTable > span[data-span='2']  {
        grid-area:SPAN2;
        height:30px;
        margin-bottom:5px;
    }
    > form > .headerTable > span[data-span='3']  {
        grid-area:SPAN3;
        height:30px;
        margin-bottom:5px;
    }
    > form > .headerTable > .inputs[data-input="1"] {
        grid-area:INPUT1;
        height: 30px;
        margin-bottom: 0px;
    
    }
    > form > .headerTable > select{
        grid-area:SELECT;
        height: 30px;

    }
    > form > .headerTable > .inputs[data-input="2"] {
        grid-area: INPUT2;
        width: 40%;
        min-width:65px;
        padding: 0 3px 0 15px!important;
    }
    > form > .headerTable > .select{
        width: 100%;  
        max-width: 207px;
        height:30px; 
        margin: 58px auto;
        color: ${props => props.theme.colors.primary};
    }

    > form > .headerTable > button{
        grid-area:BOTAO;
        width: 100%;
        max-width:125px;
        height: 30px;
        margin: 20px auto;
        border-radius: 10px;
    }
   }
`;

export const ContentTable = styled.div`    
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px auto;
    padding: 20px 5px;


    > p {
        color: ${props => props.theme.colors.white};
        font-size: 16px;
        opacity: .6;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    > .contentTable {
        width: 70%;
    }

    @media(max-width: 500px){
        width: 100%;
        > .contentTable{
            width: 100%;
            overflow-x: scroll;
        }
    }
`;


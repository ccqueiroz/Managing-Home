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
        color: ${props => props.theme.colors.info};
        transition: all .3s;
        box-shadow: 2px 1px 10px 5px rgba(0,0,0,.1);
    }
    > label.titleList > button{
        width: 120px;
        height: 30px;
        border-radius: 10px;

    }
    > label.titleList > input[type=text]:focus{
        border: 1px solid ${props => props.theme.colors.warning}
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
        /* margin-left: 20px!important; */

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
        color: ${props => props.theme.colors.info};
    }
    > form > .headerTable > .select{
        width: 60px;   
        grid-row: 2/3;
        margin: 0 auto;
        border-radius: 10px;
        text-align: center;
        color: ${props => props.theme.colors.info};
        padding-left:8px;
    }
    > form > .headerTable > .select > option{
    }
    > form > .headerTable > button{
        grid-column: 4 / 5;
        grid-row: 2 / 3;
        width: 90px;
        margin: 0 auto;
        border-radius: 10px;
    }
    > form > .headerTable > .inputs:focus{
        border: 1px solid ${props => props.theme.colors.warning};
    }
`;
export const ContentTable = styled.div`    
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    padding: 20px 5px;

    > .contentTable {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > p {
            color: ${props => props.theme.colors.white};
            font-size: 16px;
            opacity: .6;
            margin-bottom: 10px;
        }
    }
`;


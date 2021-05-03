import styled from 'styled-components';

interface IColorBGEntradaSaida {
    type: string,
    isSupermarket?: boolean,
}
export const Container = styled.section`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;



    @media(max-width: 450px){
        width: 90%;
        height: 80%;
        overflow-x:auto;
        ::-webkit-scrollbar{
            width: 15px;
            height: 5px;
        }
        ::-webkit-scrollbar-thumb{
            background-color: ${props => props.theme.colors.secondary}
        }
        ::-webkit-scrollbar-track{
            background-color: ${props => props.theme.colors.tertiary}
        }
    }
    
`;
export const MainBox = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .contentEntradaSaida{
        display: flex;
        margin-right: 30px;
    }
    > h3{
        color: ${props => props.theme.colors.white};
        margin-left: 30px;
    }

    @media(max-width:450px){
        flex-direction: column;
        .contentEntradaSaida{
            margin-right:0px;
        }
        >h3{
            font-size: 16px;
            margin-left: 0px;
            text-align: center;
        }
    }
`;
export const FlagBox = styled.div<IColorBGEntradaSaida>`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    border-radius: 5px;


     > .flag{
        width: 30px;
        height: 30px;
        display: flex;
        background-color: ${props => (props.type === 'entrada') ? '#F7931B' : props.type === 'saida' ? '#E44C4E' : '#3ad41c'};
        border-radius: 5px;
    }
    > .text{
        margin-left: 5px;
        color: ${props => props.theme.colors.white};

    }

    @media(max-width:450px){
        .flag{
            width: 25px;
            height: 25px;
        }
        .text{
            font-size: 14px;
        }
    }
`;
export const Charts = styled.div`
    width: 80%;
    max-width: 1200px;
    height: 70%;
    margin: 0 auto;
    padding: 0 20px;

    > .contentCharts{
        width: 90%;
        margin: 0 auto;
        height: 100%;
    }

    @media(max-width:450px){
        width:100%;
        overflow-x:auto;
        margin: 10px auto;
        .contentCharts{
            width: 100%;
            min-width: 600px;
            padding-top:5px;
        }
    }
`;
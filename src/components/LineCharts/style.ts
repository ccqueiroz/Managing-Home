import styled from 'styled-components';

interface IColorBGEntradaSaida {
    type: string
}
export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
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

`;
export const FlagBox = styled.div<IColorBGEntradaSaida>`
    width: 110px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    border-radius: 5px;
     > .flag{
        width: 40px;
        height: 40px;
        display: flex;
        background-color: ${props => (props.type === 'entrada') ? '#F7931B' : '#E44C4E'};
        border-radius: 5px;
    }
    > .text{
        margin-left: 5px;
        color: ${props => props.theme.colors.white};

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
`;
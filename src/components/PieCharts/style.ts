import styled from 'styled-components';

interface IBgVisor {
    typeData: string;
}

interface ILegendColor {
    color: string;
}
export const Container = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    justify-content: center;
`;
export const LegendContainer = styled.div`
    height: 100%;
    max-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10px;
    overflow-y: scroll; 

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.secondary};
    }

    @media(max-width: 500px){
        ::-webkit-scrollbar{
            width: 5px;
            height: 5px;
        }
    }
    
`;
export const SideLeft = styled.div`
    width: 40%;
    height: 180px;
    padding: 15px;

    > h2{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 20%;
        color: ${props => props.theme.colors.white};
    }

    @media(max-width:500px){
        height: 180px;
        padding: 8px;
        margin-left: 30px;
    }

    @media(max-width: 380px){
        margin-left: 20px;
    }
`;
export const SideRight = styled.div`
    width: 60%;
    height: 180px;
`;
export const Legends = styled.div<IBgVisor>`
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 5px;
    align-items: baseline;

    > span{
        color: ${props => props.theme.colors.white};
        margin-left: 5px;
        font-size: 16px;

    }

    > .visor {
        width: 50px;
        height: 50px;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: ${props => (props.typeData === 'entrada') ? '#F7931B' : '#E44C4E'};
        font-weight: bold;
        font-size: 17px;
        color: ${props => props.theme.colors.white}
    }

    @media(max-width:500px){
        .visor{
           font-size: 14px;   
           padding:5px;
        }
    }
`;
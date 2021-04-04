import styled from 'styled-components';


interface IBgColor{
    color: string
}

export const Container = styled.div<IBgColor>`
    background-color: ${props => props.color};
    width: 100%;
    min-width: 280px;
    height: 180px;
    padding: 10px;
    margin: 10px 20px; 
    border-radius: 10px;

    position: relative;

    box-shadow: 1px 3px 15px 1px rgb(0 0 0 / 30%);

    transition: all .3s;
  

    > img{
        position: absolute;
        top: 0;
        bottom: 0;
        opacity: .3;
        right: -30px;
        height: inherit;

    }

    
    :hover{
        transform: translateY(5px);
        box-shadow: 1px -3px 15px 1px rgb(0 0 0 / 70%);
        opacity: .8;
    }
    @media(max-width: 1200px){
        width: 80%;
        height: 220px;

    }
    
`;

export const ContentCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 10;

    
`;
export const HeaderCard = styled.div`
    color: ${props => props.theme.colors.white};
    height: 70%;
    width: 100%;
    padding: 5px 18px ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > span {
        margin-bottom: 5px;
        font-family: 'Inter', sans-serif;
        font-weight: 300;

    }
    > h2 {
        font-size: 30px;
        font-family: 'Inter', sans-serif;
        font-weight: 800;

    }
`;

export const FooterCard = styled.footer`
    color: ${props => props.theme.colors.white};
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: normal!important;
    font-size: 12px;
    padding: 0 14px 20px 10px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: 200
`;

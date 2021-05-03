import styled from 'styled-components';


interface ITagColorProps {
    color: string;
}


export const Container = styled.article`
    width: 90%;
    margin: 0 auto 20px auto;
    height: 60px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;

    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        transform: translateX(3px);
        opacity: .7;

    }
`;
export const TagColor = styled.div<ITagColorProps>`
    width: 5px;
    height: 40px;

    background-color: ${props => props.color};

`;
export const ContentMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    padding: 0 25px;

    
    @media(max-width: 500px){
        width: 50%;
        font-size: 15px;
        align-items: flex-start;
        padding: 3px 10px;
    }
    @media(max-width: 375px){
        padding: 3px 10px;
        font-size: 13px;
        overflow: auto;
    }

`;

export const Title = styled.span`
    width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
`;
export const Date = styled.small`
    font-style: italic;
`;

export const Amount = styled.h3`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15px;
    color: ${props => props.theme.colors.white};

    @media(max-width: 500px){
        width: 50%;
        padding: 0 5px;
        font-size: 15px;
    }
    @media(max-width: 375px){
        padding: 3px 10px;
        font-size: 13px;
    }

`;

export const Actions = styled.div`
    width: 120px;
    height: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;


    > button{
        background-color: transparent;
        font-size: 24px;
        transition: all .3s;
    }
    > button#edit{
        color: ${props => props.theme.colors.info};
    }
    > button#del{
        color: ${props => props.theme.colors.warning};
    }
    > button:hover{
        opacity: .6;
    }

    @media(max-width: 500px){
        width: 80px;
        padding: 0 10px;

        > button{
            font-size: 20px;
        }
    }

`;

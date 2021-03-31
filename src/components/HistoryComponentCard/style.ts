import styled  from 'styled-components';


interface ITagColorProps{
    color: string;
}

export const Container = styled.article`
    width: 90%;
    margin: 0 auto 20px auto;
    height: 60px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.tertiary};
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
    color: ${props => props.theme.colors.white}
`;

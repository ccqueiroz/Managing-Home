import styled from 'styled-components';

export const Container = styled.div`
    grid-area: ASIDE;


    background-color: ${props => props.theme.colors.secondary};

    border-right: 1px solid ${props => props.theme.colors.gray};

    display: flex;
    flex-direction: column;

    box-shadow: 1px 3px 15px 1px rgb(0 0 0 / 30%);



`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 2px 0;
    padding: 2% 20px;

    color: ${props => props.theme.colors.white};

`;

export const Title = styled.h1`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.white}

`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const MenuContainer = styled.nav`
    flex: 1;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;

`;

export const MenuItemLink = styled.a`
        text-decoration: none;
        cursor: pointer;
        margin: 10px;
        color: ${props => props.theme.colors.info};

        display: flex;
        align-items: end;

        

        transition: opacity .3s;

        &:hover{
            opacity: 0.7;
        }

        > svg {
            font-size: 20px;
        }

       
`;

export const TitleMenuLink = styled.span`
    margin-left: 10px;
`;
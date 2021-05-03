import styled from 'styled-components';

interface IMenuItemLink {
    pathIsEqual?: boolean
}

export const Container = styled.div`
    grid-area: ASIDE;


    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.white};
    box-shadow:0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

    z-index: 99;

`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2px 0;
`;

export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const MenuContainer = styled.nav`
    width: 100%;
    height: 100%;
    flex: 1;
    padding-top: 10px;
    padding-bottom: 108px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
`;

export const MenuItemLink = styled.a<IMenuItemLink>`
        width: 100%;
        min-width: 130px;
        height: 4rem;
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.pathIsEqual ? props.theme.colors.white : props.theme.colors.secondary};
        background-color: ${props => props.pathIsEqual ? props.theme.colors.primary : 'transparent'};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;

        transition: all .3s;

        &:hover{
            opacity: 0.7;
        }

        > svg {
            font-size: 20px;
        }

       
`;
export const ContainerSubMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
    left: 23%;
    transition: all .3s;

    >button{
        background-color: transparent;
        margin: 5px;
        font-size: .9rem;
        display: flex;
        align-items: center;
        transition: all .3s;
    }
    >button:hover{
        opacity: .7;
    }
`;
export const Img = styled.div`
    font-size: 1.1rem;
`;

export const TitleMenuLink = styled.span`
    /* margin-left: 10px; */
`;
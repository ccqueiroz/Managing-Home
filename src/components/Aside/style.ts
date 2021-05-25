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
    display: flex;
    flex-direction: column;
    transition: all .3s;
    justify-content:center;
    align-items:center;

    padding: 0px 5px 0px 12px;
    background: #6364d5;
    box-shadow: 3px 3px 10px -4px rgb(99 100 213 / 45%);
    position: absolute;
    width: 170px;
    height: 115px;
    left: 135px;
    top: 155px;
    border-radius: 25px;

    >button{
        width:90%;
        background-color: transparent;
        margin: 5px;
        font-size: .9rem;
        display: flex;
        align-items: center;
        transition: all .3s;
        color:white;
        justify-content: space-between;
    }
    >button:hover{
        opacity: .7;
    }
`;
export const Img = styled.div`
    font-size: 1.1rem;
`;

export const TitleMenuLink = styled.span`

`;
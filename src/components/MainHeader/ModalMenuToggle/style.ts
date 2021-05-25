import styled from 'styled-components';

interface IStatusMenu {
    isActive?: boolean;
}
export const Container = styled.div<IStatusMenu>`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#f4edff;

    transition: all .3s;

    z-index: 9999;

    animation: openAnimation .3s ease 0s 1 normal;
    
    @keyframes openAnimation {
        0%{
            left:200vw;
        }100%{
            left:0vw;
        }
    }

    @keyframes closeAnimation {
        0%{
            left:0vw;
        }100%{
            left:200vw;
        }
    }

    > .buttonToggle{
        position: absolute;
        top: 15%;
        left: 15%;

        outline: none;
        background-color: transparent;
        color: ${props => props.theme.colors.secondary};

        z-index: 9999999;
    }
`;
export const ContentMenu = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    top: 56%;
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const ContentLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > img{
        width: 180px;
        height:60px;
    }
    >h3{
        color: ${props => props.theme.colors.secondary};
        font-size: 25px;
    }
`;

export const ContentItemsMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 15px;
    padding-bottom: 50px;
`;
export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    font-size: 20px;
    text-decoration:none;
`;
export const TitleMenuLink = styled.span`
    margin-left: 5px;
    border: none !important;    
`;
export const ContainerSubMenu = styled.div`
    width: 100%;
    height: 75%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    margin-bottom: 15px;
`;
export const Img = styled.div``;

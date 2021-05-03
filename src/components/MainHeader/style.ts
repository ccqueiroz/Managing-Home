import styled from 'styled-components';

export const Container = styled.header`
    grid-area: MAINHEADER;
    
    display: flex;
    align-items: center;
    justify-content:flex-end;
    position: relative;
    z-index: 100;

    background-color: ${props => props.theme.colors.white};
    box-shadow:0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

    @media(max-width:800px){
        justify-content:space-between;

    }

`;

export const Profile = styled.div`
    padding: 0 4%;
    color: ${props => props.theme.colors.secondary};
`;

export const LogoImgSmallScreen = styled.div`
    width: 120px;
    display: none;
    justify-content: flex-start;
    align-items: center;

    > img {
        width: 120px;
    }

    @media(max-width:800px){
        display:flex;

    }

    @media(max-width:450px){
      
        > img {
            margin-left: -20%;
        }

    }

`;

export const MenuToggle = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: flex-end;
    align-items:center;
    padding-right: 5%;
    > .imgMenuToggle{
        outline: none;
        background-color: transparent;
    }
    > .imgMenuToggle:active{
        background-color: transparent;
    }
    > .imgMenuToggle > .MenuClose{
        font-size: 20px;
        color: ${props => props.theme.colors.secondary}
    }
`;
export const Welcome = styled.h3`

`;
export const UserName = styled.span``;
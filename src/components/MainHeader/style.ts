import styled from 'styled-components';

export const Container = styled.header`
    grid-area: MAINHEADER;
    
    background-color: ${ props => props.theme.colors.secondary };

    border-bottom: 1px solid ${ props => props.theme.colors.gray };

    display: flex;
    align-items: center;
    justify-content: space-between


`;

export const ToggleContainer = styled.div`
   width: 250px;
   text-align: center;
   color: ${props => props.theme.colors.white};

`;

export const Profile = styled.div`
    padding: 0 4%;
    color: ${props => props.theme.colors.white}

`;
export const Welcome = styled.h3`

`;
export const UserName = styled.span``;
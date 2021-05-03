import styled from 'styled-components';

export const Container = styled.div`

    width: 100px;
    margin: 0 5px;

    > select{
        width:100%;
        padding: 7px 10px;
        border-radius:10px;
        outline: none;

        cursor: pointer;
        background: rgba(83,85,208, .9);
        color: white;
        border: 1px solid ${props => props.theme.colors.primary};
        box-shadow: ${props => props.theme.colors.boxShadow};
    };
`;

export const Option = styled.option`

`;


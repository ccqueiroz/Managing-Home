import styled from 'styled-components';

export const Container = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 30px 0px -20px;
    

    @keyframes spin{
    0%{
        border-left-color: #22a6b3;

        transform: rotate(90deg);
    }
    25%{
        border-left-color: #b11c17;

        transform: rotate(180deg);
    }
    50%{
        border-left-color: #eecd10;

        transform: rotate(270deg);
    }
    100%{
        border-left-color: #720941;

        transform: rotate(360deg);
    }
}

    > .spiner {
        position: relative;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-left-color: #22a6b3;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        animation: spin .8s linear infinite;
    }
`;

/**
 * 
 * 
    @keyframes spin{
    0%{
        border-left-color: #22a6b3;

        transform: rotate(90deg);
    }
    25%{
        border-left-color: #b11c17;

        transform: rotate(180deg);
    }
    50%{
        border-left-color: #eecd10;

        transform: rotate(270deg);
    }
    100%{
        border-left-color: #720941;

        transform: rotate(360deg);
    }
}
.spinner{
    position: relative;
    top: 80px;
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #22a6b3;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    animation: spin .8s linear infinite;
}
 */
import React, { useMemo } from 'react';

import { Container, Profile, Welcome, UserName, ToggleContainer } from './style';

import Toggle from '../Toggle/index';

import emojis from '../../utils/emojis';


const MainHeader: React.FC = () => {
    const saldo = 10000;
    const emoji = useMemo(() =>{
        if(saldo <= 0){
            return emojis[2];
        }else if(saldo > 0 && saldo <= 50){
            return emojis[1];
        }else if(saldo > 50 && saldo <= 100){
            return emojis[4];
        }else if(saldo > 100 && saldo <= 500){
            return emojis[5];
        }else if(saldo > 500 && saldo <= 1000){
            return emojis[0];
        }else if(saldo > 1000){
            return emojis[3];
        }
    }, [])

    return (
        <Container>
            <ToggleContainer>
                <Toggle></Toggle>
            </ToggleContainer>
            <Profile>
                <Welcome><strong>Olá</strong>, {emoji}</Welcome>
                <UserName>Caio Cezar de Queiroz</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;
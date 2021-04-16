import React, { useContext, useEffect, useMemo, useState } from 'react';

import { Container, Profile, Welcome, UserName, ToggleContainer } from './style';

import Toggle from '../Toggle/index';

import emojis from '../../utils/emojis';

import { DataContext } from '../../providers/DataContext';


const MainHeader : React.FC = () => {
    const themes = useContext(DataContext);

    const [saldoEmoji, setSaldoEmoji] = useState<Number>(0);
    const [ Emoji, setEmoji] = useState<any>([]);

    useEffect(()=>{
        setSaldoEmoji(themes.saldoCurrent)
        if(saldoEmoji <= 0){
            return setEmoji(emojis[2]);
        }else if(saldoEmoji > 0 && saldoEmoji <= 50){
            return setEmoji(emojis[1]);
        }else if(saldoEmoji > 50 && saldoEmoji <= 100){
            return setEmoji(emojis[4]);
        }else if(saldoEmoji > 100 && saldoEmoji <= 500){
            return setEmoji(emojis[5]);
        }else if(saldoEmoji > 500 && saldoEmoji <= 1000){
            return setEmoji(emojis[0]);
        }else if(saldoEmoji > 1000){
            return setEmoji(emojis[3]);
        }
    }, [themes, saldoEmoji]);
        return (
        <Container>
            <ToggleContainer>
                <Toggle></Toggle>
            </ToggleContainer>
            <Profile>
                <Welcome><strong>Olá</strong>, {Emoji}</Welcome>
                <UserName>Caio Cezar de Queiroz</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;
import React, { useMemo } from 'react';
import { Container, MsgMain, MsgFooter } from './style';

import emojiHappy from '../../assets/happy.svg';
import emojiSad from '../../assets/sad.svg';
import emojiShocked from '../../assets/shocked.svg';

interface IMsgSaldoProps{
    amount: number | string
}

const MsgSaldo : React.FC<IMsgSaldoProps> = ({ amount }) =>{

    const msgMain = useMemo(() => {
        const saldo = Number(amount);
        if(saldo === 0){
            return {
                title:'Ops!',
                emoji:emojiShocked,
                mainMsg:'Seu saldo está 0!',
                msgFooter:'Repense seus gastos para não ficar com saldo negativo!'

            };
        }else if(saldo > 0){
            return {
                title:'Muito Bem!',
                emoji: emojiHappy,
                mainMsg:'Sua carteira está positiva!',
                msgFooter:'Continue assim. Considere investir o seu saldo.'
            };
        }else{
            return {
                title:'Vixi!',
                emoji: emojiSad,
                mainMsg:'Sua carteira encontra-se com saldo negativo!',
                msgFooter:'Priorize seus gastos. Gaste apenas com despesas estritamente cruciais.'

            };
        }

        
    }, [amount] )

    return(
        <Container>
            <MsgMain>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h2>{msgMain.title}</h2><img src={msgMain.emoji} style={{width: '40px', marginLeft: '6px', color:'white'}}></img>
                </div>
                <h2>{msgMain.mainMsg}</h2>
            </MsgMain>
            <MsgFooter>
                <p>{msgMain.msgFooter}</p>
            </MsgFooter>
        </Container>
    );
}

export default MsgSaldo;
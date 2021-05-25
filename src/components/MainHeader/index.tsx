import React, { useContext, useEffect, useState } from 'react';

import { Container, Profile, Welcome, UserName, LogoImgSmallScreen, MenuToggle } from './style';

import emojis from '../../utils/emojis';
import { selecEmoji } from '../../utils/functionsAuxiliares';

import logoImg from '../../assets/logo.svg';

import { AiOutlineMenu } from 'react-icons/ai';

import { DataContext } from '../../providers/DataContext';
import ModalMenuToggle from './ModalMenuToggle';


const MainHeader: React.FC = () => {
    const themes = useContext(DataContext);

    const [saldoEmoji, setSaldoEmoji] = useState<Number>(0);
    const [Emoji, setEmoji] = useState<any>([]);
    const [screnWidith, setScreenWidth] = useState(window.screen.width);

    const [callModal, setCallModal] = useState<boolean>(false);

    useEffect(() => {
        const resizeWindow = () => {
            window.addEventListener('resize', function () {
                setScreenWidth(window.innerWidth);
            })
        }
        resizeWindow();
    }, [])

    useEffect(() => {
        selecEmoji(emojis, setSaldoEmoji, saldoEmoji, themes.saldoCurrent, setEmoji);
    }, [themes, saldoEmoji]);

    const callModalFun = () => {
        setCallModal(!callModal);
    }


    return (
        <Container>
            <LogoImgSmallScreen >
                <img src={logoImg} alt="Logo Managaing Home" />
            </LogoImgSmallScreen>

            {
                screnWidith < 800 ? (
                    <MenuToggle>
                        <button className="imgMenuToggle" onClick={callModalFun}>
                            <AiOutlineMenu className="MenuClose" />
                        </button>
                    </MenuToggle>
                ) : (
                    <Profile>
                        <Welcome><strong>Olá</strong>, {Emoji}</Welcome>
                        <UserName>Caio Cezar de Queiroz</UserName>
                    </Profile>
                )
            }
            {
                screnWidith < 800 ? 
                    callModal ? <ModalMenuToggle isActived={callModal} setIsActived={callModalFun} /> : null
                : null
            }

        </Container>
    );
}

export default MainHeader;
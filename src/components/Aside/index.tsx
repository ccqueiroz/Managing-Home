import React, { useContext, useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, TitleMenuLink, ContainerSubMenu, Img } from './style';

import logoImg from '../../assets/logo.svg';

import { MdArrowDownward, MdArrowUpward, MdExitToApp, MdShoppingCart, MdInsertDriveFile, MdAddShoppingCart, MdShoppingBasket } from 'react-icons/md';
import { AiOutlineLineChart } from 'react-icons/ai';

import dataAside from '../../utils/dataAside';
import { DataContext } from '../../providers/DataContext';


const Aside: React.FC = () => {

    const themes = useContext(DataContext);

    const arrayImgMenuLink = [
        <AiOutlineLineChart />, <MdShoppingCart />, <MdArrowUpward />, <MdArrowDownward />, <MdExitToApp />
    ]
    const arrayImgSubMenuLink = [
        <MdInsertDriveFile />, <MdAddShoppingCart />, <MdShoppingBasket />
    ]

    console.log(themes)
    useEffect(() => {
        console.log(window.location.pathname)
    }, []);

    const arrayStateButtons = useMemo(() => {
        return [
            themes.asideShowButtons.newList,
            themes.asideShowButtons.purchase,
            themes.asideShowButtons.buySingle
        ];
    }, [themes.asideShowButtons]);

    const analyzingPath = (href: string) => {
        if (window.location.pathname === href) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo do App Managing Home" />
            </Header>

            <MenuContainer>
                {
                    dataAside.map((element, index) => {
                        return (
                            <div className="div" key={element.id}>
                                <Link to={element.href} style={{ textDecoration: 'none' }} >
                                    <MenuItemLink href={element.href} pathIsEqual={analyzingPath(element.href)}>
                                        {arrayImgMenuLink[index]}
                                        <TitleMenuLink>{element.title}</TitleMenuLink>
                                    </MenuItemLink>
                                </Link>
                                <ContainerSubMenu>
                                    {
                                        themes.asideShowButtons.showModal ?
                                            element.sub ?
                                                element.submenu.map(menuItem => {
                                                    return (
                                                        <button key={menuItem.id} style={{
                                                            display: arrayStateButtons.filter((_, index) => {
                                                                return index === (menuItem.id - 1)
                                                            })[0] ? 'flex' : 'none', zIndex:arrayStateButtons.filter((_, index) => {
                                                                return index === (menuItem.id - 1)
                                                            })[0] ? 99999 : 0
                                                        }}
                                                            onClick={e => themes.setShowButton(e, (menuItem.id - 1))}
                                                        >
                                                            <Img>{arrayImgSubMenuLink[menuItem.id - 1]}</Img>
                                                            <span style={{flex:1}}>{menuItem.title}</span>
                                                        </button>
                                                    );
                                                })
                                                : null
                                            : null
                                    }
                                </ContainerSubMenu>
                            </div>
                        );
                    })
                }
            </MenuContainer>
        </Container>
    );
}

export default Aside;
import React, { useContext, useMemo, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title, TitleMenuLink, ContainerSubMenu, Img } from './style';

import logoImg from '../../assets/logo.svg';

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdShoppingCart, MdInsertDriveFile, MdAddShoppingCart, MdShoppingBasket } from 'react-icons/md';


import dataAside from '../../utils/dataAside';
import { DataContext } from '../../providers/DataContext';


const Aside: React.FC = () => {

    const themes = useContext(DataContext);

    console.log('aside ->')
    console.log(themes)

    const arrayImgMenuLink = [
        <MdDashboard />, <MdShoppingCart />, <MdArrowUpward />, <MdArrowDownward />, <MdExitToApp />
    ]
    const arrayImgSubMenuLink = [
        <MdInsertDriveFile />, <MdAddShoppingCart />, <MdShoppingBasket />
    ]

    const arrayStateButtons = useMemo(() => {
        return [
            themes.asideShowButtons.newList,
            themes.asideShowButtons.purchase,
            themes.asideShowButtons.buySingle
        ];
    }, [themes.asideShowButtons]);


    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo do App Managing Home" />
                <Title>Managing Home</Title>
            </Header>

            <MenuContainer>
                {
                    dataAside.map((element, index) => {
                        return (
                            <div className="div">
                                <Link to={element.href} style={{ textDecoration: 'none' }}>
                                    <MenuItemLink key={element.id} href={element.href}>
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
                                                            color: menuItem.bgColor, display: arrayStateButtons.filter((_, index) => {
                                                                return index === (menuItem.id - 1)
                                                            })[0] ? 'flex' : 'none'
                                                            }} id='teste' onClick={e => themes.setShowButton(e, (menuItem.id -1))}>
                                                            <Img>{arrayImgSubMenuLink[menuItem.id - 1]}</Img>
                                                            <TitleMenuLink>{menuItem.title}</TitleMenuLink>
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
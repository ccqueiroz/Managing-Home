import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title, TitleMenuLink} from './style';

import logoImg from '../../assets/logo.svg';

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdShoppingCart } from 'react-icons/md';


import dataAside from '../../utils/dataAside';


const Aside : React.FC = () => {

    const arrayImgMenuLink = [
        <MdDashboard />, <MdShoppingCart />,<MdArrowUpward />, <MdArrowDownward/>, <MdExitToApp />
    ]
    

    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo do App Managing Home"/>
                <Title>Managing Home</Title>
            </Header>

            <MenuContainer>
                {
                    dataAside.map((element, index) => {
                        return (
                            <Link to={element.href} style={{textDecoration: 'none'}}>
                                <MenuItemLink key={element.id} href={element.href}>
                                    {arrayImgMenuLink[index]}
                                    <TitleMenuLink>{element.title}</TitleMenuLink>
                                </MenuItemLink>
                            </Link>
                        );
                    })
                }
            </MenuContainer>
        </Container>
    );
}

export default Aside;
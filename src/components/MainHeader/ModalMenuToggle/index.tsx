import React, { useContext, useMemo } from 'react';
import { Container, ContentMenu, ContentLogo, ContentItemsMenu, MenuItemLink, TitleMenuLink, ContainerSubMenu, Img } from './style';
import { Link } from 'react-router-dom';

import { AiOutlineClose, AiOutlineLineChart } from 'react-icons/ai';
import { MdArrowDownward, MdArrowUpward, MdExitToApp, MdShoppingCart, MdInsertDriveFile, MdAddShoppingCart, MdShoppingBasket } from 'react-icons/md';

import Logo from '../../../assets/logo.svg';

import dataAside from '../../../utils/dataAside';
import { DataContext } from '../../../providers/DataContext';

interface IModalMenuToggle {
    isActived: boolean;
    setIsActived: () => void;
}


const arrayImgMenuLink = [
    <AiOutlineLineChart />, <MdShoppingCart />, <MdArrowUpward />, <MdArrowDownward />, <MdExitToApp />
]
const arrayImgSubMenuLink = [
    <MdInsertDriveFile />, <MdAddShoppingCart />, <MdShoppingBasket />
]

const ModalMenuToggle: React.FC<IModalMenuToggle> = ({ isActived, setIsActived }) => {

    const themes = useContext(DataContext);

    const arrayStateButtons = useMemo(() => {
        return [
            themes.asideShowButtons.newList,
            themes.asideShowButtons.purchase,
            themes.asideShowButtons.buySingle
        ];
    }, [themes.asideShowButtons]);

    return (
        <Container isActive={isActived}>
            <button onClick={setIsActived} className="buttonToggle">
                <AiOutlineClose fontSize={25} />
            </button>
            <ContentMenu>
                <ContentLogo>
                    <img src={Logo} alt="Logo" />
                    <h3>Mananging Home</h3>
                </ContentLogo>
                <ContentItemsMenu>
                    {
                        dataAside.map((element, index) => {
                            console.log(element.href)
                            return (
                                <div className="div" key={element.id}>
                                    <Link to={element.href} style={{ textDecoration: 'none' }} onClick={setIsActived}>
                                        <MenuItemLink href={element.href}>
                                            {arrayImgMenuLink[index]}
                                            <TitleMenuLink>{element.title}</TitleMenuLink>
                                        </MenuItemLink>
                                    </Link>
                                    {/* <ContainerSubMenu>
                                        {
                                            themes.asideShowButtons.showModal ?
                                                element.sub ?
                                                    element.submenu.map(menuItem => {
                                                        return (
                                                            <button key={menuItem.id} style={{
                                                                color: menuItem.bgColor, display: arrayStateButtons.filter((_, index) => {
                                                                    return index === (menuItem.id - 1)
                                                                })[0] ? 'flex' : 'none'
                                                            }}
                                                                onClick={e => {
                                                                    themes.setShowButton(e, (menuItem.id - 1));
                                                                    setIsActived();
                                                                }}
                                                            >
                                                                <Img>{arrayImgSubMenuLink[menuItem.id - 1]}</Img>
                                                                <TitleMenuLink>{menuItem.title}</TitleMenuLink>
                                                            </button>
                                                        );
                                                    })
                                                    : null
                                                : null
                                        }
                                    </ContainerSubMenu> */}
                                </div>
                            );
                        })
                    }
                </ContentItemsMenu>
            </ContentMenu>
        </Container>
    );
}

export default ModalMenuToggle;
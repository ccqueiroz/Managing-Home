import React, { useState, useEffect } from 'react';
import './style.ts';
import { GridLayout } from './style';
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = ({ children }) => {
    const [screnWidith, setScreenWidth] = useState(window.screen.width);

    useEffect(()=>{
        const resizeWindow = () => {
            window.addEventListener('resize', function () {
                setScreenWidth(window.innerWidth);
            })
        }
        resizeWindow();
    }, [])


    return (
        <GridLayout>
            <MainHeader></MainHeader>
            {
                screnWidith > 800 ? <Aside></Aside> : null
            }
            <Content>
                {children}
            </Content>
        </GridLayout>

    );
}

export default Layout;
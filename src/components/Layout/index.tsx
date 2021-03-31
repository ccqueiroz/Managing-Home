import React from 'react';
import './style.ts';
import { GridLayout } from './style';
import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';



const Layout : React.FC = ({ children }) => {
    return (
        <GridLayout>
           <MainHeader></MainHeader>
           <Aside></Aside>
           <Content>
                { children }
           </Content>
        </GridLayout>

    );
}

export default Layout;
import React, { useContext, useMemo } from 'react';
import { Container } from './style';

import ModalBuySingleSupermarket from '../ModalBuySingleSupermarket';
import ModalNewListSupermarket from '../ModalNewListSupermarket';
import ModalPurchaseSupermarket from '../ModalPurchaseSupermarket';

import { MdClose } from 'react-icons/md';

import { DataContext } from '../../providers/DataContext';

interface IModalsMainSupermarket {

}

const ModalsMainSupermarket: React.FC<IModalsMainSupermarket> = ({  }) => {
    const themes = useContext(DataContext);

    const modalCurrent = useMemo(() => {
        if (themes.asideShowButtons.showModal
            && !themes.asideShowButtons.newList && themes.asideShowButtons.purchase
            && themes.asideShowButtons.buySingle) {
            return (
                <ModalNewListSupermarket/>
            );
        } else if (themes.asideShowButtons.showModal
            && themes.asideShowButtons.newList && !themes.asideShowButtons.purchase
            && themes.asideShowButtons.buySingle) {
            return (
                <ModalPurchaseSupermarket/>
            );
        } else if (themes.asideShowButtons.showModal
            && themes.asideShowButtons.newList && themes.asideShowButtons.purchase
            && !themes.asideShowButtons.buySingle) {
            return(
                <ModalBuySingleSupermarket/>
            );
        } else {
            return -1
        }
    }, [themes.asideShowButtons]);

    return (
        <Container>
            <button onClick={e => themes.setShowButton(e, 'close')}><MdClose/></button>
            {modalCurrent}
        </Container>
    );
}

export default ModalsMainSupermarket
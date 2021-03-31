import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../providers/DataContext';
import { Container, ToggleLabel, ToggleSelector } from './style';



const Toggle : React.FC = () => {

    const theme = useContext(DataContext)

    const [ statusToggle, setStatusToggle ] = useState(false);

    const changeStatusToggle = () => {
        setStatusToggle(!statusToggle);
        theme.setThemes();
    }


    useEffect(()=>{
        setStatusToggle(false);
    }, []);

    return(
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector 
                checked={!statusToggle}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={changeStatusToggle}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );


}

export default Toggle;
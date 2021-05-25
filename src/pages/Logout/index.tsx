import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

const Logout = (): JSX.Element => {
    const { signOut } = useAuth();
    useEffect(() => {
        signOut();
    }, []);

    return <Redirect exact to='/' />;

}

export default Logout;
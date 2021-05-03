import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { axiosApi } from '../../Services/axiosInstances';

const Logout = (): JSX.Element => {

    useEffect(()=>{
        const logout = async () =>{
            try{
                await axiosApi.post('auth/logout');
            }catch(error){
                console.log(error)
            }finally{
                axiosApi.defaults.headers.common['authorization'] = '';
                localStorage.clear();
                sessionStorage.clear();
                window.location.reload();
            }
        };
        logout();
    }, []);
    
    return <Redirect exact to='/' />;

}

export default Logout;
import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Shared/Loading';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/auth/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;
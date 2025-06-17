import axios from 'axios';
import React from 'react';
import useAuth from './UseAuth';



const AxiosInstance=axios.create({
    baseURL:"https://assignment11-server-one-gules.vercel.app"
})
const useAxiosInstance = () => {

    const {user,loading}=useAuth();
    AxiosInstance.interceptors.request.use(config=>{
        if(user &&!loading)
        {
            config.headers.authorization=`Bearer ${user.accessToken}`;
        }
        return config;
    })
    return AxiosInstance;
};

export default useAxiosInstance;
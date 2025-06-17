import React from 'react';
import useAxiosInstance from '../Hooks/useAxiosInstance';

const useApi = () => {
    const axiosSecure=useAxiosInstance();

const postAddedArtifacts = (email,data) => {
    return axiosSecure.post(`/addedArtifacts?email=${email}`,data).then((res) => res.data);
  };

  const getArtifactDetails=(email,id)=>{
    return axiosSecure.get(`/artifactDetails/${id}?email=${email}`).then(res => res.data);
  }

  const patchArtifactsLike=(email,id)=>{
    return axiosSecure.patch(`/like/${id}?email=${email}`).then(res => res.data);
  }

  const getLikedArfifacts=(email)=>{
         return axiosSecure.get(`/likes?email=${email}`).then(res=>res.data)
  }

  const getMyCreatedArtifacts=(email)=>{
        return axiosSecure.get(`/artifacts?email=${email}`).then(res => res.data);
  }

  const deleteMyCreatedArtifacts=(email,id)=>{
        return axiosSecure.delete(`/artifacts/${id}?email=${email}`).then(res => res.data);
  }

    const updateArtifacts=(email,id,data)=>{
        return axiosSecure.put(`/artifacts/${id}?email=${email}`,data).then(res => res.data);
  }

const getSearchedArtifacts = (email, url) => {
  const connector = url.includes('?') ? '&' : '?';
  return axiosSecure.get(`${url}${connector}email=${email}&ok='false'`).then(res => res.data);
}
  


    return {postAddedArtifacts,getArtifactDetails,patchArtifactsLike,getLikedArfifacts,getMyCreatedArtifacts,deleteMyCreatedArtifacts,updateArtifacts,getSearchedArtifacts};
};

export default useApi;
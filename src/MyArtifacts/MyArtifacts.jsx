import React, { Suspense, use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import ArtifactsList from './ArtifactsList/ArtifactsList';
import Loading from '../Pages/Shared/Loading';
import useApi from '../api/useApi';

const MyArtifacts = () => {

    const { user } = use(AuthContext);
    const {getMyCreatedArtifacts}=useApi();

    return (
        <div className='min-h-screen'>
            <title>MY Artifacts | ArtifactAtlas</title>
            <Suspense fallback={<Loading></Loading>}>
                <ArtifactsList 
                myCreatedArtifacts={getMyCreatedArtifacts(user.email)}
                ></ArtifactsList>
            </Suspense>
        </div>
    );
};

export default MyArtifacts;
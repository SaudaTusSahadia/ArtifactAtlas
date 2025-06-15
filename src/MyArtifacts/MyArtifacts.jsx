import React, { Suspense, use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import ArtifactsList from './ArtifactsList/ArtifactsList';
import Loading from '../Pages/Shared/Loading';
import { ArtifactsCreatedByPromise } from '../api/artifactsApi';

const MyArtifacts = () => {

    const { user } = use(AuthContext);

    return (
        <div className='min-h-screen'>
            <title>MY Artifacts | ArtifactAtlas</title>
            <Suspense fallback={<Loading></Loading>}>
                <ArtifactsList 
                ArtifactsCreatedByPromise={ArtifactsCreatedByPromise(user.email)}
                ></ArtifactsList>
            </Suspense>
        </div>
    );
};

export default MyArtifacts;
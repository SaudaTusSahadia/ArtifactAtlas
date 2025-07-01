import React, { Suspense, use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import ArtifactsList from './ArtifactsList/ArtifactsList';
import Loading from '../Pages/Shared/Loading';
import useApi from '../api/useApi';
import { ArchiveIcon } from 'lucide-react';

const MyArtifacts = () => {

    const { user } = use(AuthContext);
    const {getMyCreatedArtifacts}=useApi();

    return (
        <div className='min-h-screen'>
            <title>MY Artifacts | ArtifactAtlas</title>
            <h1 className='mt-10 md:mt-15 text-center text-4xl font-bold text-secondary px-4'>
                Artifacts Posted by 
                <h1 className='flex justify-center items-center gap-3'>You
                <ArchiveIcon size={40}></ArchiveIcon>
                </h1>
                 </h1>
            <Suspense fallback={<Loading></Loading>}>
                <ArtifactsList 
                myCreatedArtifacts={getMyCreatedArtifacts(user.email)}
                ></ArtifactsList>
            </Suspense>
        </div>
    );
};

export default MyArtifacts;
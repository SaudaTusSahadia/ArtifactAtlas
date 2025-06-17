import React, { Suspense, use } from 'react';
import LikedArtifactList from './LikedArtifactList';
import Loading from '../Shared/Loading'
import { AuthContext } from '../../Context/AuthContext';
import useApi from '../../api/useApi';

const LikedArtifacts = () => {

    const {user} = use(AuthContext)
    const {getLikedArfifacts}=useApi();

    return (
        <div>
            <title>Liked Artifact | ArtifactAtlas</title>
            <Suspense fallback={<Loading />}>
                <LikedArtifactList
                likedArtifactPromise={getLikedArfifacts(user.email)}
                ></LikedArtifactList>
            </Suspense>
        </div>
    );
};

export default LikedArtifacts;
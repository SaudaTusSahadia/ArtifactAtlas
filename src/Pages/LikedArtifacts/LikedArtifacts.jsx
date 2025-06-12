import React, { Suspense, use } from 'react';
import LikedArtifactList from './LikedArtifactList';
import Loading from '../Shared/Loading'
import { AuthContext } from '../../Context/AuthContext';
import { likedArtifactPromise } from '../../api/likesApi';

const LikedArtifacts = () => {

    const {user} = use(AuthContext)

    return (
        <div>
            <title>Liked Artifact | ArtifactAtlas</title>
            <Suspense fallback={<Loading />}>
                <LikedArtifactList
                likedArtifactPromise={likedArtifactPromise(user.email)}
                ></LikedArtifactList>
            </Suspense>
        </div>
    );
};

export default LikedArtifacts;
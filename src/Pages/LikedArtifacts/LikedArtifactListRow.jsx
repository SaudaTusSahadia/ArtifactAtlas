import React from 'react';
import { Link } from 'react-router';

const LikedArtifactListRow = ({ like, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={like.artifactImage} alt={like.artifactName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{like.artifactName}</div>
                        <div className="text-sm opacity-50">{like.artifactType}</div>
                    </div>
                </div>
            </td>
            <td>{like.shortDescription}</td>
            <td>{like.presentLocation}</td>
            <td>{like.createdAt}</td>
            <td>{like.discoveredAt}</td>
            <td>{like.discoveredBy}</td>
            <td>
                <Link to={`/artifactDetails/${like.artifactId}`}>
                    <button className="btn btn-outline btn-xs">Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default LikedArtifactListRow;
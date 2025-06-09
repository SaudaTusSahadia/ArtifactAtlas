import React, { use } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Inbox } from 'lucide-react'; // Optional: for an icon
import { Link } from 'react-router';

const ArtifactsList = ({ ArtifactsCreatedByPromise }) => {
  const artifacts = use(ArtifactsCreatedByPromise);

  return (
    <div className="max-w-5xl mx-auto py-8 px-2">
      <h1 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 text-center">
        Artifacts Posted By You:{' '}
        <span className="text-secondary">{artifacts.length}</span>
      </h1>

      {artifacts.length === 0 ? (
        <div className="text-center py-20 text-gray-500 space-y-4">
          <Inbox className="mx-auto h-16 w-16 text-primary" />
          <p className="text-xl font-semibold">No artifacts posted yet.</p>
          <p className="text-sm">Start contributing by adding your first historical artifact.</p>
          <Link to='/addArtifacts'><button className='btn btn-outline text-primary'>Add Artifact</button></Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl shadow-lg bg-base-100 border border-base-300">
          <table className="table table-zebra">
            <thead className="bg-primary text-base">
              <tr>
                <th>#</th>
                <th>Artifact</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {artifacts.map((art, index) => (
                <tr key={art._id} className="hover:bg-primary/10 transition">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 border-2 border-primary">
                          <img src={art.artifactImage} alt={art.artifactName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">{art.artifactName}</div>
                        <div className="text-xs text-secondary">{art.artifactType}</div>
                      </div>
                    </div>
                  </td>
                  <td className="max-w-xs text-sm text-gray-500">{art.shortDescription}</td>
                  <td>
                    <button className="btn btn-sm btn-outline btn-primary flex items-center gap-2">
                      <FaEdit /> Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-error flex items-center gap-2">
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ArtifactsList;

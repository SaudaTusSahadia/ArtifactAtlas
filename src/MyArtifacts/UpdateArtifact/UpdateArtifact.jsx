import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FaEdit } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateArtifact = () => {

    const { user } = use(AuthContext);
    const { _id, artifactName, artifactImage, artifactType, historicalContext, shortDescription, createdAt, discoveredAt, discoveredBy, presentLocation } = useLoaderData();

    const handleUpdateArtifact = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedArtifact = Object.fromEntries(formData.entries());
        console.log(updatedArtifact);

        //send updated artifact to the db
        fetch(`https://assignment11-server-one-gules.vercel.app/artifacts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedArtifact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Artifact updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center py-10 px-4">
            <title>Update Artifact | ArtifactAtlas</title>
            <div className="bg-base-100 shadow-2xl rounded-3xl border border-primary/10 w-full max-w-2xl p-8">
                <h1 className="text-3xl font-extrabold text-primary mb-6 text-center flex items-center justify-center gap-2">
                    <FaEdit /> Update Your Artifact Information
                </h1>
                <form onSubmit={handleUpdateArtifact} className="space-y-6">
                    {/* Basic Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend font-semibold text-secondary">Basic Info</legend>
                        <label className="label font-medium text-secondary">Artifact Name</label>
                        <input name='artifactName' type="text" className="input input-bordered w-full mb-2" placeholder="Enter Artifact Name" defaultValue={artifactName} required />

                        <label className="label font-medium text-secondary">Artifact Image URL</label>
                        <input name='artifactImage' type="text" className="input input-bordered w-full mb-2" placeholder="Enter Artifact Photo URL" defaultValue={artifactImage} required />

                        <label className="label font-medium text-secondary">Artifact Type</label>
                        <div className="filter" >
                            <input className="btn filter-reset" type="radio" name="artifactType" aria-label="All" defaultChecked={artifactType === ""} />
                            <input className="btn" type="radio" name="artifactType" value='Writings' aria-label="Writings" defaultChecked={artifactType === "Writing"} />
                            <input className="btn" type="radio" name="artifactType" value="Weapons" aria-label="Weapons" defaultChecked={artifactType === "Weapons"} />
                            <input className="btn" type="radio" name="artifactType" value="Documents" aria-label="Documents" defaultChecked={artifactType === 'Documents'} />
                            <input className="btn" type="radio" name="artifactType" value="Tools" aria-label="Tools" defaultChecked={artifactType === "Tools"} />
                        </div>
                    </fieldset>

                    {/* Historical Context */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend font-semibold text-secondary">Historical Context</legend>
                        <label className="label font-medium text-secondary">Historical Context</label>
                        <textarea name='historicalContext' className="textarea textarea-bordered w-full" placeholder="Enter Historical Context" defaultValue={historicalContext} required></textarea>
                    </fieldset>

                    {/* Description */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend font-semibold text-secondary">Description</legend>
                        <label className="label font-medium text-secondary">Short Description</label>
                        <textarea name='shortDescription' className="textarea textarea-bordered w-full" placeholder="Enter Short Description" defaultValue={shortDescription} required></textarea>
                    </fieldset>

                    {/* Created At */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend font-semibold text-secondary">Created At</legend>
                        <label className="label font-medium text-secondary">Created At (e.g., 196 BC)</label>
                        <input name='createdAt' type="text" placeholder="e.g. 196 BC" className="input input-bordered w-full" defaultValue={createdAt} required />
                    </fieldset>

                    {/* Discovered Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend font-semibold text-secondary">Discovered Info</legend>
                        <label className="label font-medium text-secondary">Discovered At (Exact Date)</label>
                        <input name='discoveredAt' type="date" className="input input-bordered w-full mb-2" defaultValue={discoveredAt} required />

                        <label className="label font-medium text-secondary">Discovered By</label>
                        <input name='discoveredBy' type="text" className="input input-bordered w-full" placeholder="Enter Discoverer's Name" defaultValue={discoveredBy} required />
                    </fieldset>

                    {/* Current Location */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend font-semibold text-secondary">Current Location</legend>
                        <label className="label font-medium text-secondary">Current Location</label>
                        <input name='presentLocation' type="text" className="input input-bordered w-full" placeholder="Enter Current Location" defaultValue={presentLocation} required />
                    </fieldset>

                    {/* Artifact Adder Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend font-semibold text-secondary">Artifact Adder Info</legend>
                        <label className="label font-medium text-secondary">Artifact Adder Name</label>
                        <input name='name' type="text" className="input input-bordered w-full mb-2" defaultValue={user.displayName} readOnly />
                        <label className="label font-medium text-secondary">Artifact Adder Email</label>
                        <input name='email' type="email" className="input input-bordered w-full" defaultValue={user.email} readOnly />
                    </fieldset>

                    <div className="flex justify-center">
                        <input className="btn btn-primary px-8 py-2 font-bold text-lg rounded-lg shadow hover:scale-105 transition" type="submit" value="Update Artifact" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateArtifact;
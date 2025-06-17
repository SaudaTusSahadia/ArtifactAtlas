import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { createTheme, Datepicker, ThemeProvider } from "flowbite-react";
import useApi from "../../api/useApi";
import useAuth from "../../Hooks/UseAuth";
import { SuccessAlert } from "../../Utilities/AlertMaker";

const UpdateArtifact = () => {
  const { user } = useAuth();
  const {id}=useParams();
  const {getArtifactDetails,updateArtifacts}=useApi();
  const [fetchLoader, setFetchLoader] = useState(false);
  const [data,setData]=useState([]);
    const datePickerTheme = createTheme({
    root: {
      base: "flex w-full max-w-xs items-center rounded-lg  p-10",
      closed: "opacity-0 ease-out",
    },
    toggle: {
      base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
      icon: "h-10 w-10 shrink-0",
    },
  });

  useEffect(() => {
    if (user && id) {
      setFetchLoader(true);
      getArtifactDetails(user.email, id)
        .then((res) => {
          setData(res);
        })
        .finally(() => {
          setFetchLoader(false);
        });
    }
  }, [user, id]);



  const [discoveredDate, setDiscoveredDate] = useState(
    data?.discoveredAt ? new Date(data.discoveredAt) : null
  );


  const handleUpdateArtifact = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedArtifactData = Object.fromEntries(formData.entries());
    const { name, email, ...newArtifact } = updatedArtifactData;
    newArtifact.artifactAdder = { name, email };
    console.log(updatedArtifactData);

   updateArtifacts(user.email,id,newArtifact)
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          SuccessAlert("Artifact updated successfully!");
        }
      });
  };

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
            <legend className="fieldset-legend font-semibold text-secondary">
              Basic Info
            </legend>
            <label className="label font-medium text-secondary">
              Artifact Name
            </label>
            <input
              name="artifactName"
              type="text"
              className="input input-bordered w-full mb-2"
              placeholder="Enter Artifact Name"
              defaultValue={data.artifactName}
              required
            />

            <label className="label font-medium text-secondary">
              Artifact Image URL
            </label>
            <input
              name="artifactImage"
              type="text"
              className="input input-bordered w-full mb-2"
              placeholder="Enter Artifact Photo URL"
              defaultValue={data.artifactImage}
              required
            />

            <label className="label font-medium text-secondary">
              Artifact Type
            </label>
            <select
              name="artifactType"
              className="select select-bordered w-full mb-2"
              required
              defaultValue={data.artifactType}
            >
              <option value="" disabled>
                Select Artifact Type
              </option>
              <option value="Writings">Writings</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Tools">Tools</option>
            </select>
          </fieldset>

          {/* Historical Context */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend font-semibold text-secondary">
              Historical Context
            </legend>
            <label className="label font-medium text-secondary">
              Historical Context
            </label>
            <textarea
              name="historicalContext"
              className="textarea textarea-bordered w-full"
              placeholder="Enter Historical Context"
              defaultValue={data.historicalContext}
              required
            ></textarea>
          </fieldset>

          {/* Description */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend font-semibold text-secondary">
              Description
            </legend>
            <label className="label font-medium text-secondary">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              className="textarea textarea-bordered w-full"
              placeholder="Enter Short Description"
              defaultValue={data.shortDescription}
              required
            ></textarea>
          </fieldset>

          {/* Created At */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend font-semibold text-secondary">
              Created At
            </legend>
            <label className="label font-medium text-secondary">
              Created At (e.g., 196 BC)
            </label>
            <input
              name="createdAt"
              type="text"
              placeholder="e.g. 196 BC"
              className="input input-bordered w-full"
              defaultValue={data.createdAt}
              required
            />
          </fieldset>

          {/* Discovered Info */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend font-semibold text-secondary">
              Discovered Info
            </legend>
            <label className="label font-medium text-secondary">
              Discovered At (Exact Date)
            </label>
            <ThemeProvider theme={datePickerTheme}>
              <Datepicker
                name="discoveredAt"
                className="input input-bordered w-full mb-2"
                required={true}
                defaultValue={discoveredDate}
                onSelectedDateChanged={setDiscoveredDate}
              />
            </ThemeProvider>

            <label className="label font-medium text-secondary">
              Discovered By
            </label>
            <input
              name="discoveredBy"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter Discoverer's Name"
              defaultValue={data.discoveredBy}
              required
            />
          </fieldset>

          {/* Current Location */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend font-semibold text-secondary">
              Current Location
            </legend>
            <label className="label font-medium text-secondary">
              Current Location
            </label>
            <input
              name="presentLocation"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter Current Location"
              defaultValue={data.presentLocation}
              required
            />
          </fieldset>

          {/* Artifact Adder Info */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend font-semibold text-secondary">
              Artifact Adder Info
            </legend>
            <label className="label font-medium text-secondary">
              Artifact Adder Name
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full mb-2"
              defaultValue={user.displayName}
              readOnly
            />
            <label className="label font-medium text-secondary">
              Artifact Adder Email
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              defaultValue={user.email}
              readOnly
            />
          </fieldset>

          <div className="flex justify-center">
            <input
              className="btn btn-primary px-8 py-2 font-bold text-lg rounded-lg shadow hover:scale-105 transition"
              type="submit"
              value="Update Artifact"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifact;

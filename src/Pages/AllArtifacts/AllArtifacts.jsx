import React, { useEffect, useState } from "react";
import ArtifactsCard from "../Shared/ArtifactsCard";
import Lottie from "lottie-react";
import Loading from "../Shared/Loading";
import { FaSearch } from "react-icons/fa";
import useApi from "../../api/useApi";
import useAuth from "../../Hooks/UseAuth";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { getSearchedArtifacts } = useApi();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      let url = "/artifacts";
      if (search.trim()) {
        url += `?search=${encodeURIComponent(search.trim())}`;
      }
      getSearchedArtifacts(user.email, url)
        .then((data) => setArtifacts(data))
        .finally(() => setLoading(false));
    }
  }, [search, user?.email]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <title>All Artifacts | ArtifactAtlas</title>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-tight">
            All Artifacts
          </h1>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Explore the complete collection of artifacts curated for you.
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block w-24 h-1 rounded bg-secondary"></span>
          </div>

          {/* search field  */}
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-xl items-center bg-base-100 shadow-md rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search by Artifact Name..."
                className="input w-full border-none focus:outline-none focus:ring-0"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                onClick={() => setSearch(searchInput)}
                className="btn btn-primary rounded-none rounded-r-lg"
              >
                <FaSearch /> Search
              </button>
            </div>
          </div>

        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artifacts.length > 0 ? (
              artifacts.map((artifact) => (
                <ArtifactsCard key={artifact._id} artifact={artifact} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No artifacts found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;

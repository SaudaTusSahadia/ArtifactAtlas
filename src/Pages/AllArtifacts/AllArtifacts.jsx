import React, { useEffect, useState } from "react";
import ArtifactsCard from "../Shared/ArtifactsCard";
import Lottie from "lottie-react";
import Loading from "../Shared/Loading";
import { FaSearch } from "react-icons/fa";
import useApi from "../../api/useApi";
import useAuth from "../../Hooks/UseAuth";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { getSearchedArtifacts } = useApi();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    let url = "/allArtifacts";
    if (search.trim()) {
      url += `?search=${encodeURIComponent(search.trim())}`;
    }
    getSearchedArtifacts(url)
      .then((data) => setArtifacts(data))
      .finally(() => setLoading(false));

  }, [search, user?.email]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 md:pb-20 px-4">
      <title>All Artifacts | ArtifactAtlas</title>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <div className="mb-2 flex flex-col md:flex-row justify-center items-center gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight flex justify-center items-center gap-2">
            🏺 All Artifacts
          </h1>
            {/* Sort Indicator */}
            <div className="flex items-center gap-2 font-semibold text-gray-500">
              (<FaSortAmountDown className="text-sm" />
              <span>Sorted by Likes</span>)
            </div>

          </div>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Explore the complete collection of artifacts curated for you.
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block w-24 h-1 rounded bg-secondary"></span>
          </div>

          {/* Sort and Search Section */}
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">

            
            {/* Search Field */}
            <div className="flex w-full max-w-xl items-center bg-base-100 shadow-xl rounded-lg overflow-hidden border border-primary">
              <input
                type="text"
                placeholder="🔍 Search by Artifact Name..."
                className="input w-full border-none focus:outline-none focus:ring-0 "
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

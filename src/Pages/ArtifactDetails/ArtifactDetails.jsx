import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { motion } from "framer-motion";
import { Heart, MapPin, CalendarClock, UserSearch } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hooks/UseAuth";
import useApi from "../../api/useApi";
import Loading from "../Shared/Loading";
import { ErrorToast } from "../../Utilities/ToastMaker";
import { SuccessAlert } from "../../Utilities/AlertMaker";

const ArtifactDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  console.log(id);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [data, setData] = useState({});
  const { getArtifactDetails, patchArtifactsLike } = useApi();
  const [fetchLoader, setFetchLoader] = useState(false);

  useEffect(() => {
    if (user && id) {
      setFetchLoader(true);
      getArtifactDetails(user.email, id)
        .then((res) => {
          setData(res);
          setLiked(res.likedBy.includes(user?.email));
          setLikeCount(res.likedBy.length);
        })
        .finally(() => {
          setFetchLoader(false);
        });
    }
  }, [user, id]);

  //like or dislike handler
  const handleLike = () => {
    if (user?.email === data.artifactAdder.email)
      return ErrorToast("You can not like on your own post");

    patchArtifactsLike(user.email, data._id).then((data) => {
      if (data.acknowledged) {
        if (data.liked) {
            setLiked(true);
          setLikeCount(likeCount + 1);
          SuccessAlert(
            "❤️ You liked this artifact! Thanks for showing your appreciation!"
          );
        } else {
             setLiked(false);
          setLikeCount(likeCount - 1);
          SuccessAlert(
            "💔 You unliked this artifact. We hope you find others you love!"
          );
        }
      }
    });
  };

  if (fetchLoader) {
    return <Loading></Loading>;
  }

  return (
    <motion.div
      className="min-h-screen bg-base-200 p-6 flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <title>Artifact Details | ArtifactAtlas</title>
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={data.artifactImage}
            alt={data.artifactName}
            className="max-w-md w-full rounded-2xl shadow-2xl border-2 border-base-300"
          />
        </motion.div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary">
            {data.artifactName}
          </h1>
          <h2 className="text-xl font-semibold text-secondary">
            Type: {data.artifactType}
          </h2>
          <p className="text-gray-500">{data.historicalContext}</p>
          <motion.p
            animate={{
              color: [
                "#ff5733",
                "#fffc33",
                "#6eff33",
                "#33ffdd",
                "#3358ff",
                "#ff33ff",
                "#ff333f",
                "#ff8c33",
                "#33ff8c",
                "#8c33ff",
              ],
              transition: { duration: 6, repeat: Infinity },
            }}
            className="text-gray-600 italic"
          >
            {data.shortDescription}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-blue-600" />
              <span>Created At: {data.createdAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-green-600" />
              <span>Discovered At: {data.discoveredAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserSearch className="w-5 h-5 text-orange-600" />
              <span>Discovered By: {data.discoveredBy}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span>Location: {data.presentLocation}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button onClick={handleLike}>
              {liked ? (
                <button className="btn btn-outline flex items-center gap-2">
                  <Heart className="w-4 h-4" /> Liked
                </button>
              ) : (
                <motion.button
                  className="btn btn-outline text-red-600 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart color="red" className="w-4 h-4" /> Like
                </motion.button>
              )}
            </button>

            <button className="btn btn-secondary">
              {likeCount} People Liked this Artifact
            </button>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          // transition={Bounce}
        />
      </div>
    </motion.div>
  );
};

export default ArtifactDetails;

import React, { use } from 'react';
import { Link } from 'react-router';
import animation from '../../assets/unknownUser.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import {
  BiSolidDetail, BiDetail,
} from "react-icons/bi";
import {
  SiArtifacthub,
} from "react-icons/si";
import {
  MdOutlineDescription, MdCreateNewFolder,
} from "react-icons/md";
import {
  IoLocationOutline,
} from "react-icons/io5";
import {
  RiCompassDiscoverLine,
} from "react-icons/ri";
import {
  FaPersonDigging,
} from "react-icons/fa6";

const LikedArtifactList = ({ likedArtifactPromise }) => {
  const likes = use(likedArtifactPromise);

  return (
    <div className="max-w-7xl mx-auto p-4 min-h-screen">
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold md:my-10 text-secondary">
          You liked
          <motion.span
            animate={{
              color: ['#ff5733', '#33b5ff', '#28d977', '#ffc107'],
              transition: { duration: 4, repeat: Infinity },
            }}
            className="mx-2 font-bold"
          >
            {likes.length}
          </motion.span>
          Artifact{likes.length !== 1 && 's'}
        </h1>
      </motion.div>

      {likes.length === 0 ? (
        <div className="max-w-sm mx-auto text-center">
          <p className="text-gray-500 mb-5">You haven't liked any artifact post yet.</p>
          <Lottie animationData={animation} />
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block mb-10"
          >
            <div className="overflow-x-auto rounded-xl shadow-lg border border-base-300">
              <table className="table w-full">
                <thead className="bg-primary text-base-content">
                  <tr className="text-sm text-left">
                    <th>#</th>
                    <th><SiArtifacthub /> Artifact</th>
                    <th><MdOutlineDescription /> Description</th>
                    <th><IoLocationOutline /> Location</th>
                    <th><MdCreateNewFolder /> Created</th>
                    <th><RiCompassDiscoverLine /> Discovered</th>
                    <th><FaPersonDigging /> Discovered By</th>
                    <th><BiDetail /> Details</th>
                  </tr>
                </thead>
                <tbody>
                  {likes.map((like, index) => (
                    <tr key={like._id} className="hover:bg-base-100 text-sm">
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                              <img src={like.artifactImage} alt={like.artifactName} />
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold">{like.artifactName}</div>
                            <div className="text-xs text-gray-500">{like.artifactType}</div>
                          </div>
                        </div>
                      </td>
                      <td>{like.shortDescription}</td>
                      <td>{like.presentLocation}</td>
                      <td>{like.createdAt}</td>
                      <td>{like.discoveredAt}</td>
                      <td>{like.discoveredBy}</td>
                      <td>
                        <Link to={`/artifactDetails/${like._id}`}>
                          <button className="btn btn-sm btn-outline btn-primary flex items-center gap-1">
                            <BiSolidDetail /> Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <div className="grid gap-6 md:hidden">
            {likes.map((like) => (
              <motion.div
                key={like._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-base-100 border border-base-300 rounded-xl p-4 shadow-sm"
              >
                <div className="flex gap-4 items-center mb-3">
                  <img
                    src={like.artifactImage}
                    alt={like.artifactName}
                    className="w-16 h-16 rounded-lg border object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{like.artifactName}</h2>
                    <p className="text-sm text-gray-500">{like.artifactType}</p>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <p><MdOutlineDescription className="inline mr-1" /> {like.shortDescription}</p>
                  <p><IoLocationOutline className="inline mr-1" /> {like.presentLocation}</p>
                  <p><MdCreateNewFolder className="inline mr-1" /> {like.createdAt}</p>
                  <p><RiCompassDiscoverLine className="inline mr-1" /> {like.discoveredAt}</p>
                  <p><FaPersonDigging className="inline mr-1" /> {like.discoveredBy}</p>
                </div>
                <Link to={`/artifactDetails/${like._id}`}>
                  <button className="btn btn-sm btn-primary w-full mt-3 flex items-center justify-center gap-1">
                    <BiSolidDetail /> View Details
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LikedArtifactList;

import React, { use, useState } from 'react';
import { Link } from 'react-router';
import animation from '../../assets/unknownUser.json'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion'
import LikedArtifactListRow from './LikedArtifactListRow';
import { Suspense } from 'react';
import Loading from '../Shared/Loading';
import { BiSolidDetail } from "react-icons/bi";
import { SiArtifacthub } from "react-icons/si";
import { MdOutlineDescription } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaPersonDigging } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";

const LikedArtifactList = ({ likedArtifactPromise }) => {
    const likes = use(likedArtifactPromise);
    console.log(likes)
    
    return (
        <div className="p-4 mx-auto min-h-screen bg-gradient-to-l from-base-200 via-base-100 to-base-300">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, duration: 1 }}
                transition={{ duration: 2 }}
                className='flex justify-center items-center md:mt-15 md:mb-5 '>
                <h1 className="text-xl md:text-2xl font-semibold mb-4">
                    You liked <motion.span
                        animate={
                            {
                                color: ['#ff5733', '#fffc33', '#6eff33', '#33ffdd', '#3358ff', '#ff33ff', '#ff333f', '#ff8c33', '#33ff8c', '#8c33ff'],
                                transition: { duration: 6, repeat: Infinity }
                            }
                        }
                        className="text-primary font-bold">{likes.length}
                    </motion.span> Artifact{likes.length !== 1 ? 's' : ''}
                </h1>
            </motion.div>

            {likes.length === 0 ? (
                <div className='w-[300px] mx-auto md:mb-15'>
                    <p className="text-secondary mb-5">You haven't liked any artifact post yet.</p>
                    <Lottie className='' animationData={animation}></Lottie>
                </div>
            ) : (
                <>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, duration: 1 }}
                        transition={{ duration: 2 }}
                        className="overflow-x-auto hidden md:block md:mb-15 border-2 border-primary rounded-2xl bg-base-200">
                        <table className="table table-zebra w-full">
                            <thead className="bg-base-200">
                                <tr>
                                    <th>#</th>
                                    <th><SiArtifacthub />Artifacts</th>
                                    <th><MdOutlineDescription />Description</th>
                                    <th><IoLocationOutline />Present Location</th>
                                    <th><MdCreateNewFolder />Created At</th>
                                    <th><RiCompassDiscoverLine />Discovered At</th>
                                    <th><FaPersonDigging />Discovered By</th>
                                    <th><BiDetail />Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {likes.map((like, index) => (
                                    <tr key={like._id} className='hover:bg-base-100'>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-20 w-20">
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
                                            <Link to={`/artifactDetails/${like._id}`}>
                                                <button className="btn btn-outline text-primary"><BiSolidDetail/> Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    </motion.div>

                    <div className="grid gap-4 md:hidden">
                        {likes.map((like) => (
                            <div key={like.artifactId} className="card bg-base-100 shadow-md rounded-lg p-4">
                                <div className="flex gap-4 items-center mb-2">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden border">
                                        <img src={like.artifactImage} alt={like.artifactName} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-lg">{like.artifactName}</h2>
                                        <p className="text-sm text-gray-500">{like.artifactType}</p>
                                    </div>
                                </div>
                                <p className="mb-1"><span className="font-semibold">Description:</span> {like.shortDescription}</p>
                                <p className="mb-1"><span className="font-semibold">Location:</span> {like.presentLocation}</p>
                                <p className="mb-1"><span className="font-semibold">Created:</span> {like.createdAt}</p>
                                <p className="mb-1"><span className="font-semibold">Discovered:</span> {like.discoveredAt}</p>
                                <p className="mb-2"><span className="font-semibold">By:</span> {like.discoveredBy}</p>
                                <Link to={`/artifactDetails/${like._id}`}>
                                    <button className="btn btn-primary btn-sm w-full">View Details</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LikedArtifactList;

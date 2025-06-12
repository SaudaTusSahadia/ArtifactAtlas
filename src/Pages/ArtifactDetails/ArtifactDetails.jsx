import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { motion } from 'framer-motion';
import { Heart, MapPin, CalendarClock, UserSearch } from 'lucide-react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const ArtifactDetails = () => {
    const {
        _id,
        artifactName,
        artifactImage,
        artifactType,
        historicalContext,
        shortDescription,
        createdAt,
        discoveredAt,
        discoveredBy,
        presentLocation,
        artifactAdder,
        likedBy
    } = useLoaderData();

    const { user } = use(AuthContext)
    const [liked, setLiked] = useState(likedBy.includes(false))
    const [likeCount, setLikeCount] = useState(likedBy.length)
    console.log('is liked? ', liked);


    useEffect(() => {
        setLiked(likedBy.includes(user?.email))

    }, [likedBy, user])

    //like or dislike handler
    const handleLike = () => {
        if (user?.email === artifactAdder.email)
            return toast.error('You can not like on your own post', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: Bounce,
            });

        axios.patch(`https://assignment11-server-one-gules.vercel.app/like/${_id}`, {
            email: user?.email,
        })
            .then(data => {
                console.log(data?.data)
                const isLiked = (data?.data?.liked)
                //update like state
                setLiked(isLiked)

                //update likecount
                setLikeCount(prev => (isLiked ?
                    (prev + 1) : (prev - 1)))
            })
            .catch(error => {
                console.log(error)
            })

        const like = {
            artifactId: _id,
            liker: user.email
        }
        console.log(like);


        if (!liked) {
            axios.post('https://assignment11-server-one-gules.vercel.app/likes', like)

                // axios.post('http://localhost:3000/likes',like)

                .then(res => {
                    console.log(res.data.insertedId)
                    if (res.data.insertedId) {
                        // setLiked(true)
                        toast.info('You liked this artifact', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            // transition: Bounce,
                        });
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        }
        else {
            fetch(`https://assignment11-server-one-gules.vercel.app/like?artifactId=${_id}&email=${user?.email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.warn('You unliked this artifact', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            // transition: Bounce,
                        });

                        //remove artifact
                        const remainingArtifact = liked.filter(art => art.id !== _id)
                        setLiked(remainingArtifact);
                    }
                })
        }


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
                        src={artifactImage}
                        alt={artifactName}
                        className="max-w-md w-full rounded-2xl shadow-2xl border-2 border-base-300"
                    />
                </motion.div>
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-primary">
                        {artifactName}
                    </h1>
                    <h2 className="text-xl font-semibold text-secondary">
                        Type: {artifactType}
                    </h2>
                    <p className="text-gray-500">{historicalContext}</p>
                    <motion.p
                        animate={
                            {
                                color: ['#ff5733', '#fffc33', '#6eff33', '#33ffdd', '#3358ff', '#ff33ff', '#ff333f', '#ff8c33', '#33ff8c', '#8c33ff'],
                                transition: { duration: 6, repeat: Infinity }
                            }
                        }
                        className="text-gray-600 italic">{shortDescription}</motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-2">
                            <CalendarClock className="w-5 h-5 text-blue-600" />
                            <span>Created At: {createdAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarClock className="w-5 h-5 text-green-600" />
                            <span>Discovered At: {discoveredAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <UserSearch className="w-5 h-5 text-orange-600" />
                            <span>Discovered By: {discoveredBy}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-purple-600" />
                            <span>Location: {presentLocation}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">

                        <button onClick={handleLike}>
                            {
                                liked ? (
                                    <button
                                        className="btn btn-outline flex items-center gap-2"
                                    >
                                        <Heart className="w-4 h-4" /> Liked
                                    </button>
                                ) : (
                                    <motion.button

                                        className="btn btn-outline text-red-600 flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Heart color='red' className="w-4 h-4" /> Like
                                    </motion.button>
                                )
                            }
                        </button>

                        <button className="btn btn-secondary">{likeCount} People Liked this Artifact</button>
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

export const likedArtifactPromise = email => {
    return fetch(`https://assignment11-server-one-gules.vercel.app/likes?email=${email}`).then(res=>res.json())
}
export const likedArtifactPromise = email => {
    // return fetch(`http://localhost:3000/likes?email=${email}`).then(res=>res.json())
    return fetch(`https://assignment11-server-one-gules.vercel.app/likes?email=${email}`).then(res=>res.json())
}
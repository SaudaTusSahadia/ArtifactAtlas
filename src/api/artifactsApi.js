export const ArtifactsCreatedByPromise = email => {
    return fetch(`https://assignment11-server-one-gules.vercel.app/artifacts?email=${email}`)
    // return fetch(`http://localhost:3000/artifacts?email=${email}`)
    .then(res => res.json())
}
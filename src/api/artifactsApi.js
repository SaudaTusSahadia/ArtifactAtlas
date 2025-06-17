export const ArtifactsCreatedByPromise = email => {
    return fetch(`https://assignment11-server-one-gules.vercel.app/artifacts?email=${email}`)
    .then(res => res.json())
}
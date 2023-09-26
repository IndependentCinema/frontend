
async function getActor(actorId) {
    return {};
}

export default async function loader({ params }) {
    console.log("params: ", params)
    const actor = await getActor(params.actorId);
    console.log("actor: ", actor)
    return { actor };
}
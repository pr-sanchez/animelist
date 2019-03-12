export const animeService = {
  getAnimes,
  getEpisodes
};

async function getAnimes(id) {
  const requestOptions = {
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json"
    }
  };
  const response = await fetch(
    `https://kitsu.io/api/edge/anime/${id}`,
    requestOptions
  );
  return await response.json();
}
async function getEpisodes(id) {
  const response = await fetch(
    `https://kitsu.io/api/edge/anime/${id}/episodes`
  );
  return await response.json();
}

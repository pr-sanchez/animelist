export const animeService = {
  getAnimes
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

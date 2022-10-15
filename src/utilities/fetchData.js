import request from "./api";

async function getPopularVidoes(pageToken) {
  const data = await request("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "IN",
      maxResults: 20,
      pageToken: pageToken ? pageToken : "",
    },
  });

  return data;
}

async function getVideosByCategory(keyword, pageToken) {
  const data = await request("/search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: keyword,
      pageToken,
      type: "video",
    },
  });

  return data;
}

export { getPopularVidoes, getVideosByCategory };

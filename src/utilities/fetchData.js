import request from "./api";

async function getPopularVidoes(pageToken) {
  try {
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
  } catch (error) {
    throw error.message;
  }
}

async function getVideosByCategory(keyword, pageToken) {
  try {
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
  } catch (error) {
    throw error.message;
  }
}

async function getVideoById(id) {
  try {
    const data = await request("/videos", {
      params: {
        part: "snippet,statistics",
        id,
      },
    });

    return data;
  } catch (error) {
    throw error.message;
  }
}

async function getChannelDetails(id) {
  try {
    const data = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id,
      },
    });

    return data;
  } catch (error) {
    throw error.message;
  }
}

export {
  getPopularVidoes,
  getVideosByCategory,
  getVideoById,
  getChannelDetails,
};

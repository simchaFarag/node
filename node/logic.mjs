import fetch from "node-fetch";

const API_PATH = "https://pixabay.com/api";
const API_KEY = "25540812-faf2b76d586c1787d2dd02736";

export async function getImages({ page = 1, per_page = 9, category = "" }) {
  const params = {
    key: API_KEY,
    q: category,
    page,
    per_page,
  };

  //get all data
  const res = await fetch(`${API_PATH}?` + new URLSearchParams(params));

  if (!res.ok) throw ServerError(" ");
  var { total, hits } = await res.json();

  return {
    has_previous: page > 1,
    has_next: page * per_page < total,
    data: hits.map(mapImage),
  };
}

function mapImage(imageData) {
  console.log(imageData);
  return {
    url: imageData.previewURL,
    details: {
      view: imageData.view,
      downloads: imageData.downloads,
      likes: imageData.likes,
      comments: imageData.comments,
      collection: imageData.collection,
    },
  };
}

//module.exports = { getImages };

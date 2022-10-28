export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=oGKy2b14G7WXX66D2zoY5t9Y0FaPlJLC&q=${categoria}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((imagen) => ({
    id: imagen.id,
    title: imagen.title,
    url: imagen.images.downsized_medium.url,
  }));
  return gifs;
};

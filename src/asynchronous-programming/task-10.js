export default class Musician {
  #albumsUrl;

  constructor(albumsUrl) {
    this.#albumsUrl = albumsUrl;
  }

  getAlbums = async () => {
    const response = await fetch(this.#albumsUrl);
    const albums = await response.json();

    return albums;
  };
}

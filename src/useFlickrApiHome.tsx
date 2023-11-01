import { useState, useEffect } from "react";

type useFlickrApiHomeProps = {
  albumId: string;
};

const useFlickrApiHome = ({ albumId }: useFlickrApiHomeProps) => {
  interface Photo {
    id: string;
    server: string;
    secret: string;
    title: {
      _content: string;
    };
    originalsecret: string;
    primary: string;
  }

  type FlickrApiResponse = {
    photoset: Photo;
  };

  const [album, setAlbum] = useState<Photo | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const AlbumUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=${apiKey}&photoset_id=${albumId}&user_id=194219353%40N05&format=json&nojsoncallback=1`;

    fetch(AlbumUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data: FlickrApiResponse) => {
        setAlbum(data.photoset);
      })
      .catch((error) => {
        console.error("Couldn't load album photos: ", error);
      });
  }, [albumId]);

  return album;
};

export default useFlickrApiHome;

import { useState, useEffect } from "react";

type useFlickrApi = { albumId: string };

const useFlickrApiGallery = ({ albumId }: useFlickrApi) => {
  interface Photo {
    id: string;
    server: string;
    secret: string;
    title: string;
    originalsecret: string;
    primary: string;
    url_h: string;
  }

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const GalleryUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${albumId}&user_id=194219353%40N05&extras=url_h&format=json&nojsoncallback=1`;

    fetch(GalleryUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setPhotos(data.photoset.photo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Couldn't load album photos: ", error);
      });
  }, [albumId]);

  return { photos, isLoading };
  // return { photos };
};

export default useFlickrApiGallery;

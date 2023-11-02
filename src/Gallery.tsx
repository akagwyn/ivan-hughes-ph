import useFlickrApiGallery from "./useFlickrApiGallery";
import useFlickrApiHome from "./useFlickrApiHome";

import { PhotoProvider, PhotoView } from "react-photo-view";

type FlickrGallery = { albumId: string };

export default function Gallery({ albumId }: FlickrGallery) {
  const { photos } = useFlickrApiGallery({ albumId });
  const { album } = useFlickrApiHome({ albumId });
  const quantityOfPhotos = album?.count_photos;
  let skeleton: Skeleton[] = [];

  if (quantityOfPhotos) {
    skeleton = Array.from(
      { length: parseInt(quantityOfPhotos) },
      (_, index) => ({
        id: index + 1,
      })
    );
  }
  interface Skeleton {
    id: number;
  }

  if (!photos) {
    return (
      <main className="grid grid-cols-1 gap-1 md:gap-1 lg:grid-cols-6 md:grid-cols-4">
        {skeleton.map((i) => (
          <div
            className="w-screen h-[500px] md:h-[350px] md:w-full bg-zinc-300 animate-pulse"
            key={i.id}
          />
        ))}
      </main>
    );
  }

  return (
    <main className="grid grid-cols-1 gap-1 md:gap-1 lg:grid-cols-6 md:grid-cols-4">
      <PhotoProvider>
        {photos.map((photo, index) => (
          <div className="h-[500px] md:h-[350px]  " key={index}>
            <PhotoView src={`${photo.url_h}`}>
              <img
                className="h-full w-full object-cover cursor-pointer"
                loading="lazy"
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`}
                alt={photo.title}
              />
            </PhotoView>
          </div>
        ))}
      </PhotoProvider>
    </main>
  );
}

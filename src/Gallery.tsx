import useFlickrApiGallery from "./useFlickrApiGallery";

import { PhotoProvider, PhotoView } from "react-photo-view";

type FlickrGallery = { albumId: string };

export default function FlickrGallery({ albumId }: FlickrGallery) {
  const { photos, isLoading } = useFlickrApiGallery({ albumId });

  interface Skeleton {
    id: number;
  }

  const skeleton: Skeleton[] = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
  }));

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-1 md:gap-1 lg:grid-cols-6 md:grid-cols-4">
        {skeleton.map((i) => (
          <div
            className="w-screen h-[500px] md:h-[350px] md:w-full bg-zinc-300 animate-pulse"
            key={i.id}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-1 md:gap-1 lg:grid-cols-6 md:grid-cols-4">
          <PhotoProvider>
            {photos.map((photo, index) => (
              <div className="h-[500px] md:h-[350px]">
                <PhotoView
                  key={index}
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                >
                  <img
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                    alt={photo.title}
                  />
                </PhotoView>
              </div>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </>
  );
}

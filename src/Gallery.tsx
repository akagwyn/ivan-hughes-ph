import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useFlickrApiGallery from "./useFlickrApiGallery";
import Masonry from "react-masonry-css";

type FlickrGallery = { albumId: string };

export default function FlickrGallery({ albumId }: FlickrGallery) {
  const photos = useFlickrApiGallery({ albumId });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lighboxIndex, setLightboxIndex] = useState<number>(0);

  const handleClickImage = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseImage = () => {
    setIsLightboxOpen(false);
  };

  const handleLeft = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  const handleRight = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === photos.length - 1
        ? photos.length - photos.length
        : prevIndex + 1
    );
  };

  const breakpointColumnsObj = {
    default: 6,
    1100: 5,
    700: 3,
    500: 1,
  };

  return (
    <>
      <div className="m-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photos.map((photo, index) => (
            <div>
              <img
                className="m-auto h-full lg:mb-0 cursor-pointer object-cover"
                loading="lazy"
                key={photo.id}
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
                alt={photo.title}
                onClick={() => handleClickImage(index)}
              />
            </div>
          ))}
        </Masonry>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-zinc-950 transition-100 h-full">
          <IconContext.Provider value={{ color: "white" }}>
            <div className="fixed inset-0 flex items-center z-50 justify-between">
              <div onClick={() => handleLeft()} className="cursor-pointer m-3">
                <FaChevronLeft size={20} />
              </div>
              <div onClick={() => handleRight()} className="cursor-pointer m-3">
                <FaChevronRight size={20} />
              </div>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white" }}>
            <div
              className="absolute top-0 right-0 p-5 cursor-pointer z-50"
              onClick={() => handleCloseImage()}
            >
              <IoCloseSharp size={30} />
            </div>
          </IconContext.Provider>

          <img
            src={`https://live.staticflickr.com/${photos[lighboxIndex].server}/${photos[lighboxIndex].id}_${photos[lighboxIndex].originalsecret}_h.jpg`}
            className="w-full  object-cover md:h-full md:object-contain "
          />
        </div>
      )}
    </>
  );
}

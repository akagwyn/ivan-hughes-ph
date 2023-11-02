// import { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { IconContext } from "react-icons";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useFlickrApiGallery from "./useFlickrApiGallery";
// import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";

type FlickrGallery = { albumId: string };

export default function FlickrGallery({ albumId }: FlickrGallery) {
  const photos = useFlickrApiGallery({ albumId });
  // const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // const [lighboxIndex, setLightboxIndex] = useState<number>(0);

  // const handleClickImage = (index: number) => {
  //   setLightboxIndex(index);
  //   setIsLightboxOpen(true);
  // };

  // const handleCloseImage = () => {
  //   setIsLightboxOpen(false);
  // };

  // const handleLeft = () => {
  //   setLightboxIndex((prevIndex) =>
  //     prevIndex === 0 ? photos.length - 1 : prevIndex - 1
  //   );
  // };
  // const handleRight = () => {
  //   setLightboxIndex((prevIndex) =>
  //     prevIndex === photos.length - 1
  //       ? photos.length - photos.length
  //       : prevIndex + 1
  //   );
  // };
  //aaaaa
  // const breakpointColumnsObj = {
  //   default: 6,
  //   1100: 6,
  //   700: 4,
  //   500: 1,
  // };

  return (
    <>
      <div className="m-auto">
        {/* <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        > */}
        <div className="grid grid-cols-1 gap-1 md:gap-1 lg:grid-cols-6 md:grid-cols-4">
          <PhotoProvider>
            {photos.map((photo, index) => (
              <div className="h-[350px]">
                <PhotoView
                  key={index}
                  src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                >
                  <img
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                    alt={photo.title}
                    // onClick={() => handleClickImage(index)}
                  />
                </PhotoView>
              </div>
            ))}
          </PhotoProvider>
        </div>

        {/* </Masonry> */}
      </div>

      {/* {isLightboxOpen && (
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
      )} */}
    </>
  );
}

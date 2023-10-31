import { Link } from "react-router-dom";
import useFlickrApiHome from "./useFlickrApiHome";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-10 m-auto max-w-[1200px]">
      <Album albumId="72177720312315160" direction="/arquitectura" />
      <Album albumId="72157720059805218" direction="/biblioteca-nacional" />
      <Album albumId="72177720312221931" direction="/malena-gracia" />
      <Album albumId="72177720312336748" direction="/bici-nena" />
      <Album albumId="72177720312322062" direction="/sakatumba" />
      <Album albumId="72177720312322277" direction="/vitter" />
    </div>
  );
}
type Album = { albumId: string; direction: string };

function Album({ albumId, direction }: Album) {
  const photo = useFlickrApiHome({ albumId });

  return (
    <div className="relative flex m-auto ">
      {photo && (
        <Link to={direction} className="pb-2 m-auto ">
          <div className="group relative m-auto md:mx-2  md:bg-black md:w-[350px] md:h-[438px] ">
            <img
              src={`https://live.staticflickr.com/${photo.server}/${photo.primary}_${photo.secret}_c.jpg`}
              className="h-full w-full mb-2 object-cover cursor-pointer md:absolute md:top-0 md:left-0 md:opacity-100 md:group-hover:opacity-60"
            />
            <div className="md:opacity-0 md:group-hover:opacity-100 md:flex md:absolute md:inset-0 md:items-center md:justify-center md:z-10">
              <p className="mb-5  text-lg text-center md:mb-0 md:text-white md:uppercase">
                {photo.title._content}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

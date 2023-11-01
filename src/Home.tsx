import { Link } from "react-router-dom";
import useFlickrApiHome from "./useFlickrApiHome";
import Skeleton from "./Skeleton";

export default function Home() {
  return (
    <main className="grid md:gap-10 lg:grid-cols-4 md:grid-cols-2 m-auto min-h-screen">
      <Album albumId="72177720312315160" direction="/arquitectura" />
      <Album albumId="72157720059805218" direction="/biblioteca-nacional" />
      <Album albumId="72177720312342341" direction="/naturaleza" />
      <Album albumId="72177720312221931" direction="/malena-gracia" />
      <Album albumId="72177720312365544" direction="/sofia-kohon" />
      <Album albumId="72177720312336748" direction="/bici-nena" />
      <Album albumId="72177720312322062" direction="/sakatumba" />
      <Album albumId="72177720312322277" direction="/vitter" />
    </main>
  );
}
type AlbumProps = { albumId: string; direction: string };

function Album({ albumId, direction }: AlbumProps) {
  const { album, isLoading } = useFlickrApiHome({ albumId });

  if (isLoading) {
    return <Skeleton />;
  }

  if (!album) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error loading album data
      </div>
    );
  }

  return (
    <div className="group relative flex m-auto ">
      <Link to={direction} className="sm:pb-2 m-auto">
        <div
          className="relative m-auto md:mx-2 w-screen h-[600px] md:w-[320px] md:h-[400px] bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_t.jpg)`,
          }}
        >
          <img
            src={`https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}.jpg`}
            className="h-full w-full mb-2 object-cover cursor-pointer md:absolute md:top-0 md:left-0 md:group-hover:blur-sm duration-200  "
            alt={`${album.title._content}`}
          />
        </div>
        <div className="md:opacity-0 md:group-hover:opacity-100 md:flex md:absolute md:inset-0 md:items-center md:justify-center md:z-10">
          <p className="mb-5  text-lg text-center md:mb-0 md:text-white md:uppercase">
            {album.title._content}
          </p>
        </div>
      </Link>
    </div>
  );
}

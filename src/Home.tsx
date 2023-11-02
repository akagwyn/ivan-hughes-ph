import { Link } from "react-router-dom";
import useFlickrApiHome from "./useFlickrApiHome";

export default function Home() {
  const albums = [
    { albumId: "72177720312315160", direction: "/arquitectura" },
    { albumId: "72157720059805218", direction: "/biblioteca-nacional" },
    { albumId: "72177720312342341", direction: "/naturaleza" },
    { albumId: "72177720312221931", direction: "/malena-gracia" },
    { albumId: "72177720312365544", direction: "/sofia-kohon" },
    { albumId: "72177720312336748", direction: "/bici-nena" },
    { albumId: "72177720312322062", direction: "/sakatumba" },
    { albumId: "72177720312322277", direction: "/vitter" },
  ];

  return (
    <main className="grid grid-cols-1 gap-1 md:gap-10 lg:grid-cols-4 md:grid-cols-2 m-auto min-h-screen">
      {albums.map((album) => (
        <Album albumId={album.albumId} direction={album.direction} />
      ))}
    </main>
  );
}
type AlbumProps = { albumId: string; direction: string };

function Album({ albumId, direction }: AlbumProps) {
  const { album, isLoading } = useFlickrApiHome({ albumId });

  if (isLoading) {
    return (
      <div className="h-[550px] sm:h-[400px]">
        <div className="w-screen h-[500px] md:w-[320px] md:h-[400px] mb-2 md:mx-2 bg-zinc-300 animate-pulse " />
        <div className="h-[25px] w-screen bg-zinc-300 animate-pulse sm:hidden" />
      </div>
    );
  }

  if (!album) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error loading album data
      </div>
    );
  }

  return (
    <div className="group relative flex m-auto h-[550px] sm:h-full">
      <Link to={direction} className="sm:pb-2 m-auto">
        <div
          className="relative m-auto md:mx-2 w-screen h-[500px] md:w-[320px] md:h-[400px] bg-cover bg-center overflow-hidden"
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
          <p className="text-lg text-center md:mb-0 md:text-white md:uppercase">
            {album.title._content}
          </p>
        </div>
      </Link>
    </div>
  );
}

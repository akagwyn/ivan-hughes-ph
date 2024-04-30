import { Link } from "react-router-dom";
import useFlickrApiHome from "./useFlickrApiHome";

export default function Home() {
  const albums = [
    { albumId: "72177720316605271", direction: "/sasha-eter" },
    { albumId: "72177720316600292", direction: "/dum-chica" },
    { albumId: "72177720316619534", direction: "/ayermaniana" },
    { albumId: "72177720316600725", direction: "/club-audiovisual" },
    { albumId: "72177720316613308", direction: "/juan-cruz-caos" },
    { albumId: "72177720312336748", direction: "/bici-nena" },
    { albumId: "72177720312322062", direction: "/sakatumba" },
    { albumId: "72177720316606641", direction: "/winona-riders" },
  ];

  return (
    <main className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-4 lg:gap-10 md:grid-cols-2 m-auto min-h-screen">
      {albums.map((album) => (
        <Album
          albumId={album.albumId}
          direction={album.direction}
          key={album.albumId}
        />
      ))}
    </main>
  );
}
type AlbumProps = { albumId: string; direction: string };

function Album({ albumId, direction }: AlbumProps) {
  const { album, isLoading } = useFlickrApiHome({ albumId });

  if (isLoading) {
    return (
      <div className="h-[550px] sm:h-[410px]">
        <div className="w-screen h-[500px] md:w-[300px] md:h-[410px] mb-2 md:pb-0 bg-zinc-300 animate-pulse " />
        <div className="h-[25px] w-screen bg-zinc-300 animate-pulse sm:hidden" />
      </div>
    );
  }

  if (!album) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error al cargar fotos
      </div>
    );
  }

  return (
    <div className="m-auto group relative flex h-[550px] md:h-[410px]">
      <Link to={direction} className="sm:pb-2 md:pb-0 ">
        <div
          className="relative w-screen h-[500px] md:w-[300px] md:h-[410px] bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_t.jpg)`,
          }}
        >
          <img
            src={`https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_b.jpg`}
            className="h-full w-full object-cover cursor-pointer md:absolute md:top-0 md:left-0 md:group-hover:blur-sm duration-200  "
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

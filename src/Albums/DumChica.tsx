import Gallery from "../Gallery";

export default function DumChica() {
  return (
    <div className="flex flex-col">
      <a
        href="https://www.instagram.com/dumchica/"
        target="_blank"
        className="text-center m-auto pb-5 text-lg"
      >
        Dum Chica
      </a>
      <Gallery albumId="72177720316600292" />
    </div>
  );
}

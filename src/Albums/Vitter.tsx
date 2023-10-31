import Gallery from "../Gallery";

export default function Biblioteca() {
  return (
    <div className="flex flex-col">
      <a
        href="https://www.instagram.com/vitter.band/"
        target="_blank"
        className="text-center m-auto pb-5 text-lg"
      >
        Vitter
      </a>
      <Gallery albumId="72177720312322277" />
    </div>
  );
}

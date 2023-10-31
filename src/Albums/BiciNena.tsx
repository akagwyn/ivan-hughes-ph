import Gallery from "../Gallery";

export default function BiciNena() {
  return (
    <div className="flex flex-col">
      <a
        href="https://www.instagram.com/bici.nena/"
        target="_blank"
        className="text-center m-auto pb-5 text-lg text-zinc-600"
      >
        Bici Nena
      </a>
      <Gallery albumId="72177720312336748" />
    </div>
  );
}

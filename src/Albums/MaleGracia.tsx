import Gallery from "../Gallery";

export default function MaleGracia() {
  return (
    <div className="flex flex-col">
      <a
        href="https://www.instagram.com/malegracia/"
        target="_blank"
        className="text-center m-auto pb-5 text-lg"
      >
        Malena Gracia
      </a>
      <Gallery albumId="72177720312221931" />
    </div>
  );
}

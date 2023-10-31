import Gallery from "../Gallery";

export default function Biblioteca() {
  return (
    <div className="flex flex-col">
      <p className="text-center m-auto pb-5 text-lg">
        Biblioteca Nacional Mariano Moreno
      </p>
      <Gallery albumId="72157720059805218" />
    </div>
  );
}

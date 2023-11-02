import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import "react-photo-view/dist/react-photo-view.css";

const Home = lazy(() => import("./Home"));
const Arquitectura = lazy(() => import("./Albums/Arquitectura"));
const Biblioteca = lazy(() => import("./Albums/Biblioteca"));
const Naturaleza = lazy(() => import("./Albums/Naturaleza"));
const MaleGracia = lazy(() => import("./Albums/MaleGracia"));
const SofiaKohon = lazy(() => import("./Albums/SofiaKohon"));
const BiciNena = lazy(() => import("./Albums/BiciNena"));
const Sakatumba = lazy(() => import("./Albums/Sakatumba"));
const Vitter = lazy(() => import("./Albums/Vitter"));
const Contacto = lazy(() => import("./Contacto"));

export default function App() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] bg-zinc-50 text-zinc-800 font-lorimer-no-2 min-h-screen md:px-4">
      <Nav />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            Cargando...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/arquitectura" element={<Arquitectura />} />
          <Route path="/biblioteca-nacional" element={<Biblioteca />} />
          <Route path="/naturaleza" element={<Naturaleza />} />
          <Route path="/malena-gracia" element={<MaleGracia />} />
          <Route path="/sofia-kohon" element={<SofiaKohon />} />
          <Route path="/bici-nena" element={<BiciNena />} />
          <Route path="/sakatumba" element={<Sakatumba />} />
          <Route path="/vitter" element={<Vitter />} />
        </Routes>
      </Suspense>

      <footer className="text-center py-5 text-xs font-light text-zinc-500">
        © Ivan Gwyn Hughes Copyright 2023
      </footer>
    </div>
  );
}

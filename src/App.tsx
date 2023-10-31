import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";

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
    <div className="flex flex-col  bg-zinc-50 text-zinc-800 font-lorimer-no-2 min-h-screen md:px-4">
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/" element={<Home />} />
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

      <p className="text-center py-5 text-xs font-light text-zinc-500">
        © Ivan Gwyn Hughes Copyright 2023
      </p>
    </div>
  );
}

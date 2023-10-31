import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Arquitectura from "./Albums/Arquitectura";
import MaleGracia from "./Albums/MaleGracia";
import BiciNena from "./Albums/BiciNena";
import Biblioteca from "./Albums/Biblioteca";
import Contacto from "./Contacto";
import Sakatumba from "./Albums/Sakatumba";
import Vitter from "./Albums/Vitter";

export default function App() {
  return (
    <div className="flex  flex-col bg-zinc-50 text-zinc-800 font-lorimer-no-2 min-h-screen">
      <Nav />

      <Routes>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/arquitectura" element={<Arquitectura />} />
        <Route path="/malena-gracia" element={<MaleGracia />} />
        <Route path="/biblioteca-nacional" element={<Biblioteca />} />
        <Route path="/bici-nena" element={<BiciNena />} />
        <Route path="/sakatumba" element={<Sakatumba />} />
        <Route path="/vitter" element={<Vitter />} />
      </Routes>

      <p className="text-center py-5 text-xs font-light text-zinc-500">
        © Ivan Gwyn Hughes Copyright 2023
      </p>
    </div>
  );
}

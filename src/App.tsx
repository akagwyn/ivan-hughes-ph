import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import "react-photo-view/dist/react-photo-view.css";

const Home = lazy(() => import("./Home"));
const SashaEter = lazy(() => import("./Albums/SashaEter"));
const DumChica = lazy(() => import("./Albums/DumChica"));
const Ayermaniana = lazy(() => import("./Albums/Ayermaniana"));
const ClubAudiovisual = lazy(() => import("./Albums/ClubAudiovisual"));
const JuanCruzCaos = lazy(() => import("./Albums/JuanCruzCaos"));
const BiciNena = lazy(() => import("./Albums/BiciNena"));
const Sakatumba = lazy(() => import("./Albums/Sakatumba"));
const WinonaRiders = lazy(() => import("./Albums/WinonaRiders"));
const Contacto = lazy(() => import("./Contacto"));
const SobreMi = lazy(() => import("./SobreMi"));

export default function App() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] bg-zinc-50 text-zinc-800 font-lorimer-no-2 min-h-screen md:px-4 scroll-smooth">
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
          <Route path="/sobre-mi" element={<SobreMi />}></Route>
          <Route path="/sasha-eter" element={<SashaEter />} />
          <Route path="/dum-chica" element={<DumChica />} />
          <Route path="/ayermaniana" element={<Ayermaniana />} />
          <Route path="/club-audiovisual" element={<ClubAudiovisual />} />
          <Route path="/juan-cruz-caos" element={<JuanCruzCaos />} />
          <Route path="/bici-nena" element={<BiciNena />} />
          <Route path="/sakatumba" element={<Sakatumba />} />
          <Route path="/winona-riders" element={<WinonaRiders />} />
        </Routes>
      </Suspense>

      <footer className="text-center py-5 text-xs font-light text-zinc-500">
        © Ivan Gwyn Hughes Copyright 2023
      </footer>
    </div>
  );
}

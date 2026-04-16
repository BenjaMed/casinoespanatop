/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Legal from "./pages/Legal";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="casino/:slug" element={<Review />} />
          <Route path="mejores-casinos-online" element={<Home />} />
          <Route path="bonos-casino" element={<Home />} />
          <Route path="aviso-legal" element={<Legal title="Aviso Legal" />} />
          <Route path="politica-privacidad" element={<Legal title="Política de Privacidad" />} />
          <Route path="politica-cookies" element={<Legal title="Política de Cookies" />} />
          <Route path="juego-responsable" element={<Legal title="Juego Responsable" />} />
        </Route>
      </Routes>
    </Router>
  );
}

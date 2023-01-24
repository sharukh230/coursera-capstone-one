import { Nav } from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";
import { ConfirmedPage } from "./pages/ConfirmedPage";
// import useExternalScripts from "./hooks/useExternalScripts";
// import { Helmet } from "react-helmet";
import Safe from "react-safe";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
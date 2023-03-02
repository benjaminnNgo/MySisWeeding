import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, RSVP } from "./Pages";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

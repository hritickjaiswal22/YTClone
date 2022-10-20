import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Home/Home";
import SignUp from "Pages/SignUp/SignUp";
import Watch from "Pages/WatchPage/WatchPage";

function App() {
  return (
    <section className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/watch/:id" element={<Watch />} />
          </Routes>
        </BrowserRouter>
      </>
    </section>
  );
}

export default App;

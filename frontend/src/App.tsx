import "./App.css";
import { Routes, Route } from "react-router";
import Page1 from "./pages/harry01";
import Page2 from "./pages/harry02";
import Page3 from "./pages/harry03";
import Page4 from "./pages/harry04";
import Page5 from "./pages/harry05";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
      </Routes>
      <Routes>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      <Routes>
        <Route path="/page3" element={<Page3 />} />
      </Routes>
      <Routes>
        <Route path="/page4" element={<Page4 />} />
      </Routes>
      <Routes>
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </div>
  );
}

export default App;

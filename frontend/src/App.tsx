import "./App.css";
import { Routes, Route } from "react-router";
import Page1 from "./pages/harry01";
import Page2 from "./pages/harry02";
import Page3 from "./pages/harry03";
import Page4 from "./pages/harry04";
import Page5 from "./pages/harry05";
import Page6 from "./pages/harry06";
import Page7 from "./pages/harry07";
import Page8 from "./pages/harry08";
import Page9 from "./pages/harry09";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;

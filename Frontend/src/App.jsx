import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQList from "./pages/FAQList";
import AddFAQ from "./pages/AddFAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FAQList />} />
        <Route path="/add" element={<AddFAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

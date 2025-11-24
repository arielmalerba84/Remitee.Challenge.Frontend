import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import AddBookPage from "./pages/AddBookPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/add-book" element={<AddBookPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

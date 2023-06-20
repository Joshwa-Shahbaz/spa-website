import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import Check from "./Check";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/search" element={<Search />}>
            <Route index element={<Check />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

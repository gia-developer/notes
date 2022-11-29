import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./notes/CreateNote";
import EditNote from "./notes/EditNote";
import ShowNotes from "./notes/ShowNotes";

function App() {
  return (
    <>
      <h1>Cartitas de amó</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowNotes />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

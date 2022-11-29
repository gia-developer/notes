import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./notes/CreateNote";
import EditNote from "./notes/EditNote";
import ShowNote from "./notes/ShowNote";
import ShowNotes from "./notes/ShowNotes";

function App() {
  return (
    <>
      <h1>Cartitas de amó</h1>
      <BrowserRouter basename="/notes">
        <Routes>
          <Route path="/" element={<ShowNotes />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/note/:id" element={<ShowNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

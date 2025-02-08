import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUsers from "./CreateUsers";
import UpdateUsers from "./UpdateUsers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUsers />}></Route>
          <Route path="/update/:id" element={<UpdateUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

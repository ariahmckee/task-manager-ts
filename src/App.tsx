import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Dashboard />}
        />

        <Route 
          path="/create"
          element={<CreateTask />}
        />

        <Route 
          path="/edit/:id"
          element={<EditTask />}
        />

        <Route 
          path="/task/:id"
          element={<TaskDetails />}
        />

        <Route 
          path="/login"
          element={<Login />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

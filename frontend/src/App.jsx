import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GroupsRoutes from "./apps/groups";
import { GroupFormPage } from "./apps/groups/pages/GroupFormPage";
import { Navigation } from "./apps/groups/components/Navigation";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
          <Navigation hideOnRoutes={["/group-create", "/groups/"]} />
          <Routes>
            <Route path="/" element={<Navigate to="groups" />} />
            <Route path="/groups/*" element={<GroupsRoutes />} />
            <Route path="/group-create" element={<GroupFormPage />} />
            <Route path="/groups/:id" element={<GroupFormPage />}  />
          </Routes>
          <Toaster />
        </div>
      </div>
    </Router>
  );
}

export default App;

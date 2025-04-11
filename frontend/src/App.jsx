import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GroupsLayout } from "./apps/groups/layouts/GroupsLayout";
import { ClientsLayout } from "./apps/clients/layouts/ClientsLayout";
import { GroupFormPage } from "./apps/groups/pages/GroupFormPage";
import { ClientFormPage } from "./apps/clients/pages/ClientFormPage";
import GroupList from "./apps/groups/components/GroupList";  
import ClientList from "./apps/clients/components/ClientList";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Navigate to="groups" />} />

          {/* Grupos */}
          <Route path="/groups" element={<GroupsLayout />}>
            <Route index element={<GroupList />} />
            <Route path="create" element={<GroupFormPage />} />
            <Route path="edit/:id" element={<GroupFormPage />} />
          </Route>

          {/* Clientes */}
          <Route path="/clients" element={<ClientsLayout />}>
            <Route index element={<ClientList />} />
            <Route path="create" element={<ClientFormPage />} />
            <Route path="edit/:id" element={<ClientFormPage />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

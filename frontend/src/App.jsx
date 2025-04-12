import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GroupsLayout } from "./apps/groups/layouts/GroupsLayout";
import { GroupFormPage } from "./apps/groups/pages/GroupFormPage";
import GroupList from "./apps/groups/components/GroupList";  
import { ClientsLayout } from "./apps/clients/layouts/ClientsLayout";
import { ClientFormPage } from "./apps/clients/pages/ClientFormPage";
import ClientList from "./apps/clients/components/ClientList";
import { TableTypesLayout } from "./apps/tabletypes/layouts/TableTypesLayout";
import { TableTypeFormPage } from "./apps/tabletypes/pages/TableTypeFormPage";
import TableTypeList from "./apps/tabletypes/components/TableTypeList";  
import { EnvironmentsLayout } from "./apps/environments/layouts/EnvironmentsLayout";
import { EnvironmentFormPage } from "./apps/environments/pages/EnvironmentFormPage";
import EnvironmentList from "./apps/environments/components/EnvironmentList";  
import { PrintersLayout } from "./apps/printers/layouts/PrintersLayout";
import { PrinterFormPage } from "./apps/printers/pages/PrinterFormPage";
import PrinterList from "./apps/printers/components/PrinterList";  
import { TablesLayout } from "./apps/tables/layouts/TablesLayout";
import { TableFormPage } from "./apps/tables/pages/TableFormPage";
import TableList from "./apps/tables/components/TableList";  
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Routes>
          {/* <Route path="/" element={<Navigate to="groups" />} /> */}

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

          {/* Tipos de mesa */}
          <Route path="/tabletypes" element={<TableTypesLayout />}>
            <Route index element={<TableTypeList />} />
            <Route path="create" element={<TableTypeFormPage />} />
            <Route path="edit/:id" element={<TableTypeFormPage />} />
          </Route>

          {/* Environments */}
          <Route path="/environments" element={<EnvironmentsLayout />}>
            <Route index element={<EnvironmentList />} />
            <Route path="create" element={<EnvironmentFormPage />} />
            <Route path="edit/:id" element={<EnvironmentFormPage />} />
          </Route>

          {/* Printers */}
          <Route path="/printers" element={<PrintersLayout />}>
            <Route index element={<PrinterList />} />
            <Route path="create" element={<PrinterFormPage />} />
            <Route path="edit/:id" element={<PrinterFormPage />} />
          </Route>

          {/* Tables */}
          <Route path="/tables" element={<TablesLayout />}>
            <Route index element={<TableList />} />
            <Route path="create" element={<TableFormPage />} />
            <Route path="edit/:id" element={<TableFormPage />} />
          </Route>

        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

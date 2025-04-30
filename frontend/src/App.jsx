import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
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

import { ProductsLayout } from "./apps/products/layouts/ProductsLayout";
import { ProductFormPage } from "./apps/products/pages/ProductFormPage";
import ProductList from "./apps/products/components/ProductList";

import { VatRatesLayout } from "./apps/vatrates/layouts/VatRatesLayout";
import { VatRateFormPage } from "./apps/vatrates/pages/VatRateFormPage";
import VatRateList from "./apps/vatrates/components/VatRateList";

import { ConfigurationFormPage } from "./apps/configuration/pages/ConfigurationFormPage";

import { BoxesLayout } from "./apps/boxes/layouts/BoxesLayout";
import { BoxFormPage } from "./apps/boxes/pages/BoxFormPage";
import BoxList from "./apps/boxes/components/BoxList";

import { UserGroupsLayout } from "./apps/usergroups/layouts/UserGroupsLayout";
import { UserGroupFormPage } from "./apps/usergroups/pages/UserGroupFormPage";
import UserGroupList from "./apps/usergroups/components/UserGroupList";

import { SystemUsersLayout } from "./apps/systemusers/layouts/SystemUsersLayout";
import { SystemUserFormPage } from "./apps/systemusers/pages/SystemUserFormPage";
import SystemUserList from "./apps/systemusers/components/SystemUserList";

import { WaitersLayout } from "./apps/waiters/layouts/WaitersLayout";
import { WaiterFormPage } from "./apps/waiters/pages/WaiterFormPage";
import WaiterList from "./apps/waiters/components/WaiterList";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

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

          {/* Products */}
          <Route path="/products" element={<ProductsLayout />}>
            <Route index element={<ProductList />} />
            <Route path="create" element={<ProductFormPage />} />
            <Route path="edit/:id" element={<ProductFormPage />} />
          </Route>

          {/* Vat Rates */}
          <Route path="/vatrates" element={<VatRatesLayout />}>
            <Route index element={<VatRateList />} />
            <Route path="create" element={<VatRateFormPage />} />
            <Route path="edit/:id" element={<VatRateFormPage />} />
          </Route>

          {/* Configuration */}
          <Route path="/configuration" element={<ConfigurationFormPage />} />

          {/* Boxes */}
          <Route path="/boxes" element={<BoxesLayout />}>
            <Route index element={<BoxList />} />
            <Route path="create" element={<BoxFormPage />} />
            <Route path="edit/:id" element={<BoxFormPage />} />
          </Route>

          {/* User Groups */}
          <Route path="/usergroups" element={<UserGroupsLayout />}>
            <Route index element={<UserGroupList />} />
            <Route path="create" element={<UserGroupFormPage />} />
            <Route path="edit/:id" element={<UserGroupFormPage />} />
          </Route>

          {/* System Users */}
          <Route path="/systemusers" element={<SystemUsersLayout />}>
            <Route index element={<SystemUserList />} />
            <Route path="create" element={<SystemUserFormPage />} />
            <Route path="edit/:id" element={<SystemUserFormPage />} />
          </Route>

          {/* Waiters */}
          <Route path="/waiters" element={<WaitersLayout />}>
            <Route index element={<WaiterList />} />
            <Route path="create" element={<WaiterFormPage />} />
            <Route path="edit/:id" element={<WaiterFormPage />} />
          </Route>


        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

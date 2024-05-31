import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Scenes/Dashboard";
import ManageTeam from "./Components/Scenes/People/ManageTeam";
import Team from "./Components/Scenes/People/Teams";
import Contacts from "./Components/Scenes/Contacts/Contacts";
import Invoices from "./Components/Scenes/Invoices/Invoices";
import Reports from "./Components/Scenes/Reports/Reports";
import Profiles from "./Components/Scenes/Profile/Profile";
import ErrorPage from "./Components/Scenes/Root/Error";
import Auth, {
  action as authAction,
} from "./Components/Scenes/Authentication/Auth";
import RootLayout from "./Components/Scenes/Root/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "Auth", element: <Auth />, action: authAction },
        { path: "Dashboard", element: <Dashboard /> },
        { path: "ManageTeam", element: <ManageTeam /> },
        { path: "Invoices", element: <Invoices /> },
        { path: "Team", element: <Team /> },
        { path: "Reports", element: <Reports /> },
        { path: "Profiles", element: <Profiles /> },
        { path: "Contacts", element: <Contacts /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import RoutesComponent from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./services/auth";

const App = () => (
  <AuthProvider>
    <RoutesComponent />
  </AuthProvider>
);
export default App;

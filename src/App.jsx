import NonResidenceUserLogin from "./Authentications/UserPanel/NonResidenceUserLogin";
import NonResidenceUserSignup from "./Authentications/UserPanel/NonResidenceUserSignup";
import ResidenceUserLogin from "./Authentications/UserPanel/ResidenceUserLogin";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <ResidenceUserLogin /> */}
      {/* <NonResidenceUserLogin /> */}
      <NonResidenceUserSignup />
    </div>
  );
}

export default App;

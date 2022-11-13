import { Footer } from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Newnavbar from "./Components/Newnavbar/Newnavbar";

import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div>

      {/* <Navbar /> */}
      <Newnavbar/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
